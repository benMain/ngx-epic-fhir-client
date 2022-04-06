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

import { BundleFlagR4 } from '../model/bundleFlagR4';
import { BundleFlagSTU3 } from '../model/bundleFlagSTU3';
import { FlagR4 } from '../model/flagR4';
import { FlagSTU3 } from '../model/flagSTU3';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FlagService {

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
     * @param ID The Flag FHIR ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public flagReadPatientFYIR4(ID: string, observe?: 'body', reportProgress?: boolean): Observable<FlagR4>;
    public flagReadPatientFYIR4(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlagR4>>;
    public flagReadPatientFYIR4(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlagR4>>;
    public flagReadPatientFYIR4(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling flagReadPatientFYIR4.');
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

        return this.httpClient.request<FlagR4>('get',`${this.basePath}/R4/Flag/${encodeURIComponent(String(ID))}`,
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
     * @param ID The Flag FHIR ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public flagReadPatientFYISTU3(ID: string, observe?: 'body', reportProgress?: boolean): Observable<FlagSTU3>;
    public flagReadPatientFYISTU3(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlagSTU3>>;
    public flagReadPatientFYISTU3(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlagSTU3>>;
    public flagReadPatientFYISTU3(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling flagReadPatientFYISTU3.');
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

        return this.httpClient.request<FlagSTU3>('get',`${this.basePath}/STU3/Flag/${encodeURIComponent(String(ID))}`,
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
     * @param category Always \&quot;infection\&quot; for this web service.
     * @param patient Reference to a Patient resource the Flag is for.
     * @param status The status of the infection: active or inactive.
     * @param subject Reference to a Patient resource the Flag is for.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public flagSearchInfectionSTU3(category?: string, patient?: string, status?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleFlagSTU3>;
    public flagSearchInfectionSTU3(category?: string, patient?: string, status?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleFlagSTU3>>;
    public flagSearchInfectionSTU3(category?: string, patient?: string, status?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleFlagSTU3>>;
    public flagSearchInfectionSTU3(category?: string, patient?: string, status?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
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

        return this.httpClient.request<BundleFlagSTU3>('get',`${this.basePath}/STU3/Flag`,
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
     * @param category Always \&quot;isolation\&quot; for this sub-resource.
     * @param encounter Reference to an Encounter resource associated with an isolation. If no encounter is specified, all isolations are returned.
     * @param patient Reference to a patient resource the isolation is for.
     * @param status Status of the isolation. If no status is specified, all isolations are returned.
     * @param subject Reference to a patient resource the isolation is for.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public flagSearchIsolationR4(category?: string, encounter?: string, patient?: string, status?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleFlagR4>;
    public flagSearchIsolationR4(category?: string, encounter?: string, patient?: string, status?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleFlagR4>>;
    public flagSearchIsolationR4(category?: string, encounter?: string, patient?: string, status?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleFlagR4>>;
    public flagSearchIsolationR4(category?: string, encounter?: string, patient?: string, status?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (encounter !== undefined && encounter !== null) {
            queryParameters = queryParameters.set('encounter', <any>encounter);
        }
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

        return this.httpClient.request<BundleFlagR4>('get',`${this.basePath}/R4/Flag`,
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
