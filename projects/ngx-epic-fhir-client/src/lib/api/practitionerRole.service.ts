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

import { BundlePractitionerRoleR4 } from '../model/bundlePractitionerRoleR4';
import { BundlePractitionerRoleSTU3 } from '../model/bundlePractitionerRoleSTU3';
import { PractitionerRoleR4 } from '../model/practitionerRoleR4';
import { PractitionerRoleSTU3 } from '../model/practitionerRoleSTU3';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PractitionerRoleService {

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
     * @param ID The read interaction enables the look up of a PractitionerRole resource by a constant server ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerRoleReadR4(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PractitionerRoleR4>;
    public practitionerRoleReadR4(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PractitionerRoleR4>>;
    public practitionerRoleReadR4(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PractitionerRoleR4>>;
    public practitionerRoleReadR4(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling practitionerRoleReadR4.');
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

        return this.httpClient.request<PractitionerRoleR4>('get',`${this.basePath}/R4/PractitionerRole/${encodeURIComponent(String(ID))}`,
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
     * @param ID The read interaction enables the look up of a PractitionerRole resource by a constant server ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerRoleReadSTU3(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PractitionerRoleSTU3>;
    public practitionerRoleReadSTU3(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PractitionerRoleSTU3>>;
    public practitionerRoleReadSTU3(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PractitionerRoleSTU3>>;
    public practitionerRoleReadSTU3(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling practitionerRoleReadSTU3.');
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

        return this.httpClient.request<PractitionerRoleSTU3>('get',`${this.basePath}/STU3/PractitionerRole/${encodeURIComponent(String(ID))}`,
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
     * @param email Value in an email contact.
     * @param identifier A practitioner&#x27;s identifier.
     * @param location Reference to one of the locations at which this practitioner provides care.
     * @param organization Reference to the organization that the practitioner represents or acts on behalf of.
     * @param phone A value in a phone contact.
     * @param practitioner A practitioner that can provide the defined services for the organization.
     * @param role The role a practitioner can perform at an organization.
     * @param specialty The practitioner&#x27;s specialty at an organization.
     * @param telecom The value in any kind of contact.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerRoleSearchR4(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePractitionerRoleR4>;
    public practitionerRoleSearchR4(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePractitionerRoleR4>>;
    public practitionerRoleSearchR4(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePractitionerRoleR4>>;
    public practitionerRoleSearchR4(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {










        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', <any>email);
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (location !== undefined && location !== null) {
            queryParameters = queryParameters.set('location', <any>location);
        }
        if (organization !== undefined && organization !== null) {
            queryParameters = queryParameters.set('organization', <any>organization);
        }
        if (phone !== undefined && phone !== null) {
            queryParameters = queryParameters.set('phone', <any>phone);
        }
        if (practitioner !== undefined && practitioner !== null) {
            queryParameters = queryParameters.set('practitioner', <any>practitioner);
        }
        if (role !== undefined && role !== null) {
            queryParameters = queryParameters.set('role', <any>role);
        }
        if (specialty !== undefined && specialty !== null) {
            queryParameters = queryParameters.set('specialty', <any>specialty);
        }
        if (telecom !== undefined && telecom !== null) {
            queryParameters = queryParameters.set('telecom', <any>telecom);
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

        return this.httpClient.request<BundlePractitionerRoleR4>('get',`${this.basePath}/R4/PractitionerRole`,
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
     * @param email Value in an email contact.
     * @param identifier A practitioner&#x27;s identifier. A successful identifier search comprises of a token that is a URN:OID: + the code system, and a code in the format identifier&#x3D;code system|code.
     * @param location One of the locations at which this practitioner provides care.
     * @param organization The organization that the practitioner represents or acts on behalf of.
     * @param phone A value in a phone contact.
     * @param practitioner A practitioner that can provide the defined services for the organization.
     * @param role The role a practitioner can perform at an organization.
     * @param specialty The practitioner&#x27;s specialty at an organization.
     * @param telecom The value in any kind of contact.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerRoleSearchSTU3(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePractitionerRoleSTU3>;
    public practitionerRoleSearchSTU3(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePractitionerRoleSTU3>>;
    public practitionerRoleSearchSTU3(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePractitionerRoleSTU3>>;
    public practitionerRoleSearchSTU3(email?: string, identifier?: string, location?: string, organization?: string, phone?: string, practitioner?: string, role?: string, specialty?: string, telecom?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {










        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', <any>email);
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (location !== undefined && location !== null) {
            queryParameters = queryParameters.set('location', <any>location);
        }
        if (organization !== undefined && organization !== null) {
            queryParameters = queryParameters.set('organization', <any>organization);
        }
        if (phone !== undefined && phone !== null) {
            queryParameters = queryParameters.set('phone', <any>phone);
        }
        if (practitioner !== undefined && practitioner !== null) {
            queryParameters = queryParameters.set('practitioner', <any>practitioner);
        }
        if (role !== undefined && role !== null) {
            queryParameters = queryParameters.set('role', <any>role);
        }
        if (specialty !== undefined && specialty !== null) {
            queryParameters = queryParameters.set('specialty', <any>specialty);
        }
        if (telecom !== undefined && telecom !== null) {
            queryParameters = queryParameters.set('telecom', <any>telecom);
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

        return this.httpClient.request<BundlePractitionerRoleSTU3>('get',`${this.basePath}/STU3/PractitionerRole`,
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
