import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Configuration } from '../configuration';
import { CapabilityStatement, EpicOAuthToken } from '../model';
import { TOKEN_STORAGE_KEY } from '../variables';
import { LocalStorageService } from './localStorage.service';

@Injectable()
export class OAuthService {
  authorizerUrl: string | undefined;
  tokenUrl: string | undefined;
  token: EpicOAuthToken | undefined;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly configuration: Configuration,
    private readonly storage: LocalStorageService
  ) {}

  get oAuthToken() {
    return this.token as EpicOAuthToken;
  }

  async checkRunAuthWorkflow() {
    if (
      !!this.configuration.launchCode ||
      (!this.configuration.embeddedApp && !this.configuration.authCode)
    ) {
      this.storage.delete(TOKEN_STORAGE_KEY);
      console.log(
        `Making initial request against EPIC ISS Endpiont ${
          this.configuration.issUrl ?? 'unknown'
        } with Epic Client ID: ${this.configuration.epicClientId}`
      );
      const capabilityStatement = await this.getCapabilityStatement();
      const urlSegments = capabilityStatement.rest
        .find((x) => !!x)
        ?.security?.extension.find((x) => !!x)?.extension;
      this.authorizerUrl = urlSegments?.find(
        (x) => x.url === 'authorize'
      )?.valueUri;
      this.tokenUrl = urlSegments?.find((x) => x.url === 'token')?.valueUri;
      console.log(
        `Found tokenUrl: ${this.tokenUrl ?? 'unknown'} and authorizerUrl ${
          this.authorizerUrl
        } from capabilityStatement.`
      );
      await this.callAuthEndpoint(this.configuration.embeddedApp);
    } else {
      this.tokenUrl = this.configuration.authCodeState;
      const storedToken = this.storage.get<EpicOAuthToken>(TOKEN_STORAGE_KEY);
      if (!!storedToken) {
        console.log(`Found Existing Token!`);
        if (this.isTokenStillValid(storedToken)) {
          console.log(`Existing Token is Valid`);
          this.token = storedToken;
        } else {
          console.log(`Existing Token has expired`);
          this.storage.delete(TOKEN_STORAGE_KEY);
        }
      } else {
        console.log('No Stored Token Found!');
      }
      if (!this.token) {
        await this.callTokenEndpoint();
      }
      this.updateConfiguration();
    }
    return this.token as EpicOAuthToken;
  }

  async callTokenEndpoint() {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', `${this.configuration.authCode}`);
    params.append('redirect_uri', `${this.configuration.redirectUri}`);
    params.append('client_id', `${this.configuration.epicClientId}`);
    this.token = await firstValueFrom(
      this.httpClient.post<EpicOAuthToken>(`${this.tokenUrl}`, params, {
        headers: this.getHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      })
    );
    this.token.expires_at = this.getTokenExpiry(this.token);
    this.storage.set(TOKEN_STORAGE_KEY, this.token);
    console.log(`Received Token ${JSON.stringify(this.token)}`);
  }
  updateConfiguration() {
    if (!this.configuration.apiKeys) {
      this.configuration.apiKeys = {
        Authorization: `Bearer ${this.token?.access_token}`,
      };
    } else {
      this.configuration.apiKeys[
        'Authorization'
      ] = `Bearer ${this.token?.access_token}`;
    }
  }
  callAuthEndpoint(isEmbeddedApp: boolean) {
    const params: { [key: string]: string } = {
      scope: 'launch',
      response_type: 'code',
      redirect_uri: encodeURIComponent(this.configuration.redirectUri),
      client_id: this.configuration.epicClientId,
      state: this.tokenUrl ?? '',
      aud: this.configuration.issUrl ?? '',
    };
    if (isEmbeddedApp) {
      params['launch'] = this.configuration.launchCode ?? '';
    }
    let queryParams = '';
    let paramsArray = [];
    for (const key of Object.keys(params)) {
      const val = params[key];
      paramsArray.push(`${key}=${val}`);
    }
    queryParams = paramsArray.join('&');
    window.location.assign(`${this.authorizerUrl}?${queryParams}`);
  }
  getCapabilityStatement() {
    return firstValueFrom(
      this.httpClient.get<CapabilityStatement>(
        `${this.configuration.issUrl}/metadata`,
        {
          headers: this.getHeaders({
            'Epic-Client-ID': this.configuration.epicClientId ?? '',
          }),
        }
      )
    );
  }
  getHeaders(additionalHeaders: { [key: string]: string }) {
    return {
      Accept: 'application/json',
      ...additionalHeaders,
    };
  }
  getTokenExpiry(token: EpicOAuthToken) {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + token.expires_in);
    return expiryDate.getTime();
  }
  isTokenStillValid(token: EpicOAuthToken) {
    const instant = new Date().getTime();
    console.log(`Now: ${instant} | Token Expires: ${token.expires_at}`);
    return instant < token.expires_at ?? instant;
  }
}
