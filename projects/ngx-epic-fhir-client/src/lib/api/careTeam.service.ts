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

import { BundleCareTeamR4 } from '../model/bundleCareTeamR4';
import { CareTeamR4 } from '../model/careTeamR4';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CareTeamService {

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
     * @param ID FHIR ID for this CareTeam instance
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public careTeamReadEpisodeR4(ID: string, observe?: 'body', reportProgress?: boolean): Observable<CareTeamR4>;
    public careTeamReadEpisodeR4(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CareTeamR4>>;
    public careTeamReadEpisodeR4(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CareTeamR4>>;
    public careTeamReadEpisodeR4(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling careTeamReadEpisodeR4.');
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

        return this.httpClient.request<CareTeamR4>('get',`${this.basePath}/R4/CareTeam/${encodeURIComponent(String(ID))}`,
            {
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
     * @param patient Patient FHIR resource ID.
     * @param status CareTeam status. The only supported value is \&quot;active\&quot;.
     * @param subject Patient FHIR resource ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public careTeamSearchLongitudinalR4(patient?: string, status?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleCareTeamR4>;
    public careTeamSearchLongitudinalR4(patient?: string, status?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleCareTeamR4>>;
    public careTeamSearchLongitudinalR4(patient?: string, status?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleCareTeamR4>>;
    public careTeamSearchLongitudinalR4(patient?: string, status?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (patient !== undefined && patient !== null) {
            queryParameters = queryParameters.set('patient', <any>patient);
        }
        if (status !== undefined && status !== null) {
            queryParameters = queryParameters.set('status', <any>status);
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

        return this.httpClient.request<BundleCareTeamR4>('get',`${this.basePath}/R4/CareTeam`,
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
