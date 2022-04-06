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

import { BundleEncounterR4 } from '../model/bundleEncounterR4';
import { BundleEncounterSTU3 } from '../model/bundleEncounterSTU3';
import { EncounterR4 } from '../model/encounterR4';
import { EncounterSTU3 } from '../model/encounterSTU3';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EncounterService {

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
     * @param ID The Encounter FHIR ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public encounterReadR4(ID: string, observe?: 'body', reportProgress?: boolean): Observable<EncounterR4>;
    public encounterReadR4(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EncounterR4>>;
    public encounterReadR4(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EncounterR4>>;
    public encounterReadR4(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling encounterReadR4.');
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

        return this.httpClient.request<EncounterR4>('get',`${this.basePath}/R4/Encounter/${encodeURIComponent(String(ID))}`,
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
     * @param ID The Encounter FHIR ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public encounterReadSTU3(ID: string, observe?: 'body', reportProgress?: boolean): Observable<EncounterSTU3>;
    public encounterReadSTU3(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EncounterSTU3>>;
    public encounterReadSTU3(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EncounterSTU3>>;
    public encounterReadSTU3(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling encounterReadSTU3.');
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

        return this.httpClient.request<EncounterSTU3>('get',`${this.basePath}/STU3/Encounter/${encodeURIComponent(String(ID))}`,
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
     * @param _class Classification of patient encounter. For organizations in the Netherlands, this element includes only the ACT encounter code.  
     * @param date A date range that the encounter takes place.
     * @param identifier &lt;p&gt;Identifiers by which this encounter is known in the format &amp;lt;code system&amp;gt;|&amp;lt;code&amp;gt;.&lt;/p&gt; &lt;p&gt;This search parameter is available starting in the August 2021 version of Epic.&lt;/p&gt;
     * @param onlyscannable If \&quot;true\&quot;, only scannable encounters are returned in the response. This feature requires a user to have login department context as part of the API request, otherwise error code 59100 is returned.
     * @param patient Reference to a patient resource.
     * @param subject Reference to a patient resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public encounterSearchR4(_class: string, date: string, identifier: string, onlyscannable: string, patient?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleEncounterR4>;
    public encounterSearchR4(_class: string, date: string, identifier: string, onlyscannable: string, patient?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleEncounterR4>>;
    public encounterSearchR4(_class: string, date: string, identifier: string, onlyscannable: string, patient?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleEncounterR4>>;
    public encounterSearchR4(_class: string, date: string, identifier: string, onlyscannable: string, patient?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (_class === null || _class === undefined) {
            throw new Error('Required parameter _class was null or undefined when calling encounterSearchR4.');
        }

        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling encounterSearchR4.');
        }

        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling encounterSearchR4.');
        }

        if (onlyscannable === null || onlyscannable === undefined) {
            throw new Error('Required parameter onlyscannable was null or undefined when calling encounterSearchR4.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (_class !== undefined && _class !== null) {
            queryParameters = queryParameters.set('class', <any>_class);
        }
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (onlyscannable !== undefined && onlyscannable !== null) {
            queryParameters = queryParameters.set('onlyscannable', <any>onlyscannable);
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

        return this.httpClient.request<BundleEncounterR4>('get',`${this.basePath}/R4/Encounter`,
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
     * @param identifier &lt;p&gt;Identifiers by which this encounter is known in the format &amp;lt;code system&amp;gt;|&amp;lt;code&amp;gt;.&lt;/p&gt; &lt;p&gt;This search parameter is available starting in the August 2021 version of Epic.&lt;/p&gt;
     * @param _class Classification of patient encounter. For organizations in the Netherlands, this element includes only the ACT encounter code.
     * @param date A date range that the encounter takes place.
     * @param patient Reference to a patient resource.
     * @param subject Reference to a patient resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public encounterSearchSTU3(identifier: string, _class?: string, date?: string, patient?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleEncounterSTU3>;
    public encounterSearchSTU3(identifier: string, _class?: string, date?: string, patient?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleEncounterSTU3>>;
    public encounterSearchSTU3(identifier: string, _class?: string, date?: string, patient?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleEncounterSTU3>>;
    public encounterSearchSTU3(identifier: string, _class?: string, date?: string, patient?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling encounterSearchSTU3.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (_class !== undefined && _class !== null) {
            queryParameters = queryParameters.set('class', <any>_class);
        }
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
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

        return this.httpClient.request<BundleEncounterSTU3>('get',`${this.basePath}/STU3/Encounter`,
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
