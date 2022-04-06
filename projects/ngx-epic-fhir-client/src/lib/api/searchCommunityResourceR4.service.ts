/**
 * Epic on Fhir
 * All of the components of the Change Healthcare Interoperability Apis
 *
 * OpenAPI spec version: 1.0.0
 * Contact: bmain@lumeris.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { BundleCommunicationR4 } from '../model/bundleCommunicationR4';
import { BundleTaskR4 } from '../model/bundleTaskR4';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SearchCommunityResourceR4Service {

    protected basePath = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param partOf Reference to the Task resource this Communication belongs to.
     * @param patient Search for Communication resources for a specified patient ID. You can use both \&quot;patient\&quot; and \&quot;subject\&quot; equivalently, but if you use both they must look to the same value.
     * @param subject Search for Communication resources for a specified subject. You can use both \&quot;patient\&quot; and \&quot;subject\&quot; equivalently, but if you use both they must look to the same value.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public communicationSearchCommunityResourceR4(partOf?: string, patient?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleCommunicationR4>;
    public communicationSearchCommunityResourceR4(partOf?: string, patient?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleCommunicationR4>>;
    public communicationSearchCommunityResourceR4(partOf?: string, patient?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleCommunicationR4>>;
    public communicationSearchCommunityResourceR4(partOf?: string, patient?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (partOf !== undefined && partOf !== null) {
            queryParameters = queryParameters.set('part-of', <any>partOf);
        }
        if (patient !== undefined && patient !== null) {
            queryParameters = queryParameters.set('patient', <any>patient);
        }
        if (subject !== undefined && subject !== null) {
            queryParameters = queryParameters.set('subject', <any>subject);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer_auth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<BundleCommunicationR4>('get',`${this.basePath}/R4/Communication`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param code Search for “community-resource” type of tasks only. This corresponds to Community Resource Tasks and is used to refine to only such Tasks. If not specified, all valid Task resources/subresources are returned. 
     * @param encounter Reference to the encounter that the Task  belongs to. 
     * @param patient Search for Task resources for a specified patient ID. You can use both \&quot;patient\&quot; and \&quot;subject\&quot;, but if you use both they must look to the same value.
     * @param subject Search for Task resources for a specified subject. You can use both \&quot;patient\&quot; and \&quot;subject\&quot;, but if you use both they must look to the same value.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public taskSearchCommunityResourceR4(code?: string, encounter?: string, patient?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleTaskR4>;
    public taskSearchCommunityResourceR4(code?: string, encounter?: string, patient?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleTaskR4>>;
    public taskSearchCommunityResourceR4(code?: string, encounter?: string, patient?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleTaskR4>>;
    public taskSearchCommunityResourceR4(code?: string, encounter?: string, patient?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('code', <any>code);
        }
        if (encounter !== undefined && encounter !== null) {
            queryParameters = queryParameters.set('encounter', <any>encounter);
        }
        if (patient !== undefined && patient !== null) {
            queryParameters = queryParameters.set('patient', <any>patient);
        }
        if (subject !== undefined && subject !== null) {
            queryParameters = queryParameters.set('subject', <any>subject);
        }

        let headers = this.defaultHeaders;

        // authentication (bearer_auth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<BundleTaskR4>('get',`${this.basePath}/R4/Task`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
