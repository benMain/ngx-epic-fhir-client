import { Injectable } from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { Configuration } from '../configuration';
import { firstValueFrom } from 'rxjs';
import { CapabilityStatement } from '../model/capabilityStatement';
import { EpicOAuthToken } from '../model/epic-oauth-token';

@Injectable()
export class OAuthService {
    private authorizerUrl: string | undefined;
    private tokenUrl: string | undefined;
    private token: EpicOAuthToken = {} as any;
    constructor(protected readonly httpClient: HttpClient, readonly configuration: Configuration) {

    }

    async checkRunAuthWorkflow() {
        console.log(`Working through Embedded Auth Workflow`)
        if (!this.configuration.authCode) {
            console.log(`Making initial request against EPIC ISS Endpiont ${this.configuration.issUrl ?? 'unknown'} with Epic Client ID: ${this.configuration.epicClientId}`)
            const capabilityStatement = await this.getCapabilityStatement();
            const urlSegments = capabilityStatement.rest.find(x => !!x)?.security?.extension.find(x => !!x)?.extension;

            this.authorizerUrl = urlSegments?.find(x => x.url === "authorize")?.valueUri;
            this.tokenUrl = urlSegments?.find(x => x.url === "token")?.valueUri;
            console.log(`Found tokenUrl: ${this.tokenUrl ?? 'unknown'} and authorizerUrl ${this.authorizerUrl} from capabilityStatement: ${JSON.stringify(capabilityStatement)}`)
            await this.callAuthEndpoint(this.configuration.embeddedApp);
        }
        if (!this.tokenUrl) {
            this.tokenUrl = this.configuration.authCodeState;
        }
        await this.callTokenEndpointAndSetLocalTokenVar()
        return this.token;
    }

    get oAuthToken() {
        return this.token;
    }

    async callTokenEndpointAndSetLocalTokenVar() {
        const params = new URLSearchParams();
        params.append('grant_type', 'authorization_code');
        params.append('code', `${this.configuration.authCode}`);
        params.append('redirect_uri', `${this.configuration.redirectUri}`);
        params.append('client_id', `${this.configuration.epicClientId}`)
        this.token = await firstValueFrom(this.httpClient.post<EpicOAuthToken>(`${this.tokenUrl}`, params))
        if (!this.configuration.apiKeys) {
            this.configuration.apiKeys = {
                Authorization: this.token.access_token,
            }
        } else {
            this.configuration.apiKeys['Authorization'] = this.token.access_token;
        }
    }

    callAuthEndpoint(isEmbeddedApp: boolean) {
        const params: {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } = {
            scope: 'launch',
            response_type: 'code',
            redirect_uri: this.configuration.redirectUri,
            client_id: this.configuration.epicClientId,
            state: this.tokenUrl ?? '',
            aud: this.configuration.issUrl ?? '',
        }

        if (isEmbeddedApp) {
            params["launch"] = this.configuration.launchCode ?? '';
        }

        return firstValueFrom(this.httpClient.get(`${this.authorizerUrl}`, { params, }))

    }

    getCapabilityStatement() {
        return firstValueFrom(this.httpClient.get<CapabilityStatement>(`${this.configuration.issUrl}/metadata`, { headers: this.getHeaders({ 'Epic-Client-ID': this.configuration.epicClientId ?? '' }) }));
    }

    private getHeaders(additionalHeaders: { [key: string]: string }) {
        return {
            Accept: 'application/json',
            ...additionalHeaders,
        }
    }
}