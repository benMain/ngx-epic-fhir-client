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

import { BundlePractitionerDSTU2 } from '../model/bundlePractitionerDSTU2';
import { BundlePractitionerR4 } from '../model/bundlePractitionerR4';
import { BundlePractitionerSTU3 } from '../model/bundlePractitionerSTU3';
import { PractitionerDSTU2 } from '../model/practitionerDSTU2';
import { PractitionerR4 } from '../model/practitionerR4';
import { PractitionerSTU3 } from '../model/practitionerSTU3';

import { BASE_PATH }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PractitionerService {

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
     * @param ID The FHIR ID of a practitioner.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerReadDSTU2(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PractitionerDSTU2>;
    public practitionerReadDSTU2(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PractitionerDSTU2>>;
    public practitionerReadDSTU2(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PractitionerDSTU2>>;
    public practitionerReadDSTU2(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling practitionerReadDSTU2.');
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

        return this.httpClient.request<PractitionerDSTU2>('get',`${this.basePath}/DSTU2/Practitioner/${encodeURIComponent(String(ID))}`,
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
     * @param ID The ID of a practitioner.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerReadR4(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PractitionerR4>;
    public practitionerReadR4(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PractitionerR4>>;
    public practitionerReadR4(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PractitionerR4>>;
    public practitionerReadR4(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling practitionerReadR4.');
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

        return this.httpClient.request<PractitionerR4>('get',`${this.basePath}/R4/Practitioner/${encodeURIComponent(String(ID))}`,
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
     * @param ID The ID of a practitioner.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerReadSTU3(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PractitionerSTU3>;
    public practitionerReadSTU3(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PractitionerSTU3>>;
    public practitionerReadSTU3(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PractitionerSTU3>>;
    public practitionerReadSTU3(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling practitionerReadSTU3.');
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

        return this.httpClient.request<PractitionerSTU3>('get',`${this.basePath}/STU3/Practitioner/${encodeURIComponent(String(ID))}`,
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
     * @param address Search for Practitioner resources by any part of an address, such as street or city, where a practitioner can be found.
     * @param addressCity Search for Practitioner resources using the city portion of the address at which the practitioner can be found. This parameter must be used with the address_postalcode parameter.
     * @param addressPostalcode Search for Practitioner resources using the postal code portion of the address at which the practitioner can be found.
     * @param addressState Search for Practitioner resources using the state portion of the address at which the practitioner can be found.
     * @param family &lt;p&gt;Search for Practitioner resources by family (last) name. Family name searching supports both exact and \&quot;sounds like\&quot; matches.&lt;/p&gt;  &lt;p&gt;Either Family or Specialty is required for a search to succeed.&lt;/p&gt;
     * @param gender Search for Practitioner resources using the following gender codes: \&quot;female\&quot;, \&quot;male\&quot;, or \&quot;unknown\&quot;.
     * @param given Search for Practitioner resources by given (first) name. Given name searching supports both exact and \&quot;sounds like\&quot; matches.
     * @param specialty &lt;p&gt;Search for Practitioner resources by specialty in the format [code system]|[code].&lt;/p&gt;  &lt;p&gt;Either Family or Specialty is required for a search to succeed.&lt;/p&gt;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerSearchDSTU2(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, family?: string, gender?: string, given?: string, specialty?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePractitionerDSTU2>;
    public practitionerSearchDSTU2(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, family?: string, gender?: string, given?: string, specialty?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePractitionerDSTU2>>;
    public practitionerSearchDSTU2(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, family?: string, gender?: string, given?: string, specialty?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePractitionerDSTU2>>;
    public practitionerSearchDSTU2(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, family?: string, gender?: string, given?: string, specialty?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {









        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (address !== undefined && address !== null) {
            queryParameters = queryParameters.set('address', <any>address);
        }
        if (addressCity !== undefined && addressCity !== null) {
            queryParameters = queryParameters.set('address_city', <any>addressCity);
        }
        if (addressPostalcode !== undefined && addressPostalcode !== null) {
            queryParameters = queryParameters.set('address_postalcode', <any>addressPostalcode);
        }
        if (addressState !== undefined && addressState !== null) {
            queryParameters = queryParameters.set('address_state', <any>addressState);
        }
        if (family !== undefined && family !== null) {
            queryParameters = queryParameters.set('family', <any>family);
        }
        if (gender !== undefined && gender !== null) {
            queryParameters = queryParameters.set('gender', <any>gender);
        }
        if (given !== undefined && given !== null) {
            queryParameters = queryParameters.set('given', <any>given);
        }
        if (specialty !== undefined && specialty !== null) {
            queryParameters = queryParameters.set('specialty', <any>specialty);
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

        return this.httpClient.request<BundlePractitionerDSTU2>('get',`${this.basePath}/DSTU2/Practitioner`,
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
     * @param family A portion of the family name. If name or identifier is provided, this is not required.
     * @param identifier A practitioner&#x27;s identifier, such as NPI. If Family or Name is provided, this is not required. This web service supports using ID and ID type combinations, such as Practitioner?identifier&#x3D;External|802559.
     * @param name Free text that can match either Family or Given (or both). If Family or Identifier is provided, this is not required.
     * @param address The free-text address.
     * @param addressCity The city specified in the address. City cannot be specified without state or ZIP code.
     * @param addressPostalcode A ZIP code specified in the address.
     * @param addressState A state specified in the address.
     * @param given A portion of the given name. If Given is provided, Family must also be provided.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerSearchR4(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePractitionerR4>;
    public practitionerSearchR4(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePractitionerR4>>;
    public practitionerSearchR4(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePractitionerR4>>;
    public practitionerSearchR4(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (family === null || family === undefined) {
            throw new Error('Required parameter family was null or undefined when calling practitionerSearchR4.');
        }

        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling practitionerSearchR4.');
        }

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling practitionerSearchR4.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (address !== undefined && address !== null) {
            queryParameters = queryParameters.set('address', <any>address);
        }
        if (addressCity !== undefined && addressCity !== null) {
            queryParameters = queryParameters.set('address-city', <any>addressCity);
        }
        if (addressPostalcode !== undefined && addressPostalcode !== null) {
            queryParameters = queryParameters.set('address-postalcode', <any>addressPostalcode);
        }
        if (addressState !== undefined && addressState !== null) {
            queryParameters = queryParameters.set('address-state', <any>addressState);
        }
        if (family !== undefined && family !== null) {
            queryParameters = queryParameters.set('family', <any>family);
        }
        if (given !== undefined && given !== null) {
            queryParameters = queryParameters.set('given', <any>given);
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
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

        return this.httpClient.request<BundlePractitionerR4>('get',`${this.basePath}/R4/Practitioner`,
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
     * @param family A portion of the family name. If name or identifier is provided, this is not required.
     * @param identifier &lt;p&gt;A practitioner&#x27;s identifier, such as NPI. If Family or Name is provided, this is not required.&lt;/p&gt;  &lt;p&gt;Starting in November 2018, this web service supports using ID and ID type combinations, such as Practitioner?identifier&#x3D;External|802559.&lt;/p&gt;
     * @param name Free text that can match either Family or Given (or both). If Family or Identifier is provided, this is not required.
     * @param address The free-text address.
     * @param addressCity The city specified in the address. City cannot be specified without state or ZIP code.
     * @param addressPostalcode A ZIP code specified in the address.
     * @param addressState A state specified in the address.
     * @param given A portion of the given name. If Given is provided, Family must also be provided.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public practitionerSearchSTU3(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePractitionerSTU3>;
    public practitionerSearchSTU3(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePractitionerSTU3>>;
    public practitionerSearchSTU3(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePractitionerSTU3>>;
    public practitionerSearchSTU3(family: string, identifier: string, name: string, address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, given?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (family === null || family === undefined) {
            throw new Error('Required parameter family was null or undefined when calling practitionerSearchSTU3.');
        }

        if (identifier === null || identifier === undefined) {
            throw new Error('Required parameter identifier was null or undefined when calling practitionerSearchSTU3.');
        }

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling practitionerSearchSTU3.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (address !== undefined && address !== null) {
            queryParameters = queryParameters.set('address', <any>address);
        }
        if (addressCity !== undefined && addressCity !== null) {
            queryParameters = queryParameters.set('address-city', <any>addressCity);
        }
        if (addressPostalcode !== undefined && addressPostalcode !== null) {
            queryParameters = queryParameters.set('address-postalcode', <any>addressPostalcode);
        }
        if (addressState !== undefined && addressState !== null) {
            queryParameters = queryParameters.set('address-state', <any>addressState);
        }
        if (family !== undefined && family !== null) {
            queryParameters = queryParameters.set('family', <any>family);
        }
        if (given !== undefined && given !== null) {
            queryParameters = queryParameters.set('given', <any>given);
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
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

        return this.httpClient.request<BundlePractitionerSTU3>('get',`${this.basePath}/STU3/Practitioner`,
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
