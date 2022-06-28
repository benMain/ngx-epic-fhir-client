import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { NonEmbeddedAuthModalComponent } from '../components/non-embedded-auth-modal/non-embedded-auth-modal.component';
import { Configuration } from '../configuration';
import {
  CapabilityStatement,
  EpicOAuthToken,
  BundleEndpointR4,
  EndpointR4,
} from '../model';
import { BASE_URL_STORAGE_KEY, TOKEN_STORAGE_KEY } from '../variables';
import { LocalStorageService } from './localStorage.service';
import { ModalService } from './modal.service';

@Injectable()
export class OAuthService {
  authorizerUrl: string | undefined;
  tokenUrl: string | undefined;
  baseUrl: string | null = null;
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
    let storedToken = this.storage.get<EpicOAuthToken>(TOKEN_STORAGE_KEY);
    // First is this an embedded Launch?
    if (!!this.configuration.launchCode) {
      this.storage.delete(TOKEN_STORAGE_KEY);
      await this.redirectToAuthEndpoint(true);
    }

    // is this a redirect from the auth endpoint
    else if (!!this.configuration.authCode) {
      this.tokenUrl = this.configuration.authCodeState;
      this.baseUrl = this.storage.get<string>(BASE_URL_STORAGE_KEY);
      if (!!storedToken) {
        console.log(`Found Existing Token!`);
        if (this.isTokenStillValid(storedToken)) {
          console.log(`Existing Token is Valid`);
          this.token = storedToken;
        } else {
          console.log(`Existing Token has expired`);
          this.storage.delete(TOKEN_STORAGE_KEY);
          this.token = undefined;
        }
      } else {
        console.log('No Stored Token Found!');
      }
      if (!this.token) {
        await this.callTokenEndpoint();
        storedToken = this.storage.get<EpicOAuthToken>(TOKEN_STORAGE_KEY);
      }
      this.updateConfiguration();
    }
    // Finally Enter the Auth flow when working with Standalone Launch
    else if (!storedToken || !this.isTokenStillValid(storedToken)) {
      this.storage.delete(TOKEN_STORAGE_KEY);
      const chosenEndpoint = await this.runFhirServerPrompt();
      this.configuration.issUrl = chosenEndpoint?.address?.endsWith('/')
        ? chosenEndpoint?.address?.slice(0, -1)
        : chosenEndpoint?.address;
      await this.redirectToAuthEndpoint(false);
    }
    // This is a standalone launch with a token that is still good.
    else {
      this.token = storedToken;
      this.baseUrl = this.storage.get<string>(BASE_URL_STORAGE_KEY);
      this.updateConfiguration();
    }
  }

  private async runFhirServerPrompt() {
    const serverName = prompt(
      'Which Epic Fhir Server do you wish to connect to?'
    );
    const r4EndpointsBundle = await firstValueFrom(
      this.httpClient.get<BundleEndpointR4>(
        'https://open.epic.com/Endpoints/R4'
      )
    );
    const r4Endpoints: EndpointR4[] = r4EndpointsBundle.entry
      ?.filter((x) => !!x.resource)
      .map((x) => x.resource) as any;
    r4Endpoints.push({
      address: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4',
      connectionType: 'direct-project',
      name: 'Epic Test Server (R4)',
      payloadMimeType: 'application/json',
      status: 'active',
    });
    const response = r4Endpoints.find((x) => x.name === serverName);
    if (!response) {
      console.log(`Unable to find Fhir server matching name ${serverName}`);
    }
    return response;
  }

  // private async runFhirServerModal() {
  //   const modalContext = this.modalService.present(
  //     NonEmbeddedAuthModalComponent,
  //     { isDismissed: false }
  //   );
  //   const modalComponent = modalContext.instance;
  //   const chosenEndpoint = await new Promise<EndpointR4>(async (res) => {
  //     while (!modalComponent.isDismissed) {
  //       await new Promise((ares) => setTimeout(() => ares(null), 200));
  //     }
  //     res(modalComponent.validR4Endpoint as EndpointR4);
  //   });
  //   this.modalService.dismiss(modalContext.domElem);
  //   return chosenEndpoint;
  // }

  private async redirectToAuthEndpoint(isEmbedded: boolean) {
    console.log(
      `Making initial request against EPIC ISS Endpoint ${
        this.configuration.issUrl ?? 'unknown'
      } with Epic Client ID: ${this.configuration.epicClientId}`
    );
    let baseUrlKey = this.configuration?.issUrl?.endsWith('/')
      ? this.configuration?.issUrl.slice(0, -1)
      : this.configuration?.issUrl;
    baseUrlKey = baseUrlKey?.replace('/DSTU2', '').replace('/R4', '');
    this.storage.set(BASE_URL_STORAGE_KEY, baseUrlKey);
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
    await this.callAuthEndpoint(isEmbedded);
  }

  callAuthEndpoint(isEmbeddedApp: boolean) {
    const params: { [key: string]: string } = {
      scope: isEmbeddedApp ? 'launch' : 'openid',
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
            Accept: 'application/json',
          }),
        }
      )
    );
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
    this.configuration.basePath = this.baseUrl ?? undefined;
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
    return instant < token?.expires_at ?? instant;
  }
}
