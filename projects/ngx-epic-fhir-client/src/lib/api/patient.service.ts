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

import { BundlePatientDSTU2 } from '../model/bundlePatientDSTU2';
import { BundlePatientR4 } from '../model/bundlePatientR4';
import { BundlePatientSTU3 } from '../model/bundlePatientSTU3';
import { PatientDSTU2 } from '../model/patientDSTU2';
import { PatientR4 } from '../model/patientR4';
import { PatientSTU3 } from '../model/patientSTU3';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PatientService {

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
     * @param body payload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientCreateR4(body: PatientR4, observe?: 'body', reportProgress?: boolean): Observable<PatientR4>;
    public patientCreateR4(body: PatientR4, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PatientR4>>;
    public patientCreateR4(body: PatientR4, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PatientR4>>;
    public patientCreateR4(body: PatientR4, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patientCreateR4.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<PatientR4>('post',`${this.basePath}/R4/Patient`,
            {
                body: body,
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
     * @param body payload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientCreateSTU3(body: PatientSTU3, observe?: 'body', reportProgress?: boolean): Observable<PatientSTU3>;
    public patientCreateSTU3(body: PatientSTU3, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PatientSTU3>>;
    public patientCreateSTU3(body: PatientSTU3, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PatientSTU3>>;
    public patientCreateSTU3(body: PatientSTU3, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patientCreateSTU3.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<PatientSTU3>('post',`${this.basePath}/STU3/Patient`,
            {
                body: body,
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
     * @param ID The Patient&#x27;s FHIR ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientReadDSTU2(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PatientDSTU2>;
    public patientReadDSTU2(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PatientDSTU2>>;
    public patientReadDSTU2(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PatientDSTU2>>;
    public patientReadDSTU2(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling patientReadDSTU2.');
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

        return this.httpClient.request<PatientDSTU2>('get',`${this.basePath}/DSTU2/Patient/${encodeURIComponent(String(ID))}`,
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
     * @param ID The patient FHIR ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientReadR4(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PatientR4>;
    public patientReadR4(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PatientR4>>;
    public patientReadR4(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PatientR4>>;
    public patientReadR4(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling patientReadR4.');
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

        return this.httpClient.request<PatientR4>('get',`${this.basePath}/R4/Patient/${encodeURIComponent(String(ID))}`,
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
     * @param ID The patient FHIR ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientReadSTU3(ID: string, observe?: 'body', reportProgress?: boolean): Observable<PatientSTU3>;
    public patientReadSTU3(ID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PatientSTU3>>;
    public patientReadSTU3(ID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PatientSTU3>>;
    public patientReadSTU3(ID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ID === null || ID === undefined) {
            throw new Error('Required parameter ID was null or undefined when calling patientReadSTU3.');
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

        return this.httpClient.request<PatientSTU3>('get',`${this.basePath}/STU3/Patient/${encodeURIComponent(String(ID))}`,
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
     * @param id The Patient&#x27;s FHIR ID.
     * @param address Addresses for the patient.
     * @param birthdate The patient&#x27;s date of birth in the format YYYY-MM-DD.
     * @param family The patient&#x27;s family (last) name. 
     * @param gender The patient&#x27;s legal sex.
     * @param given The patient&#x27;s given name. May include first and middle names.
     * @param identifier Identifiers and assigning authorities associated with a patient. These are of the format &amp;lt;OID&amp;gt;|&amp;lt;value&amp;gt;.
     * @param telecom Telephone numbers and email addresses for the patient, along with their use (i.e. home, work, etc.)  
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientSearchDSTU2(id?: string, address?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, telecom?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePatientDSTU2>;
    public patientSearchDSTU2(id?: string, address?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, telecom?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePatientDSTU2>>;
    public patientSearchDSTU2(id?: string, address?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, telecom?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePatientDSTU2>>;
    public patientSearchDSTU2(id?: string, address?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, telecom?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {









        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('_id', <any>id);
        }
        if (address !== undefined && address !== null) {
            queryParameters = queryParameters.set('address', <any>address);
        }
        if (birthdate !== undefined && birthdate !== null) {
            queryParameters = queryParameters.set('birthdate', <any>birthdate);
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
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
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

        return this.httpClient.request<BundlePatientDSTU2>('get',`${this.basePath}/DSTU2/Patient`,
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
     * @param address The patient&#x27;s street address.
     * @param addressCity The city for patient&#x27;s home address.
     * @param addressPostalcode The postal code for patient&#x27;s home address.
     * @param addressState The state for the patient&#x27;s home address.
     * @param birthdate The patient&#x27;s date of birth in the format YYYY-MM-DD.
     * @param family The patient&#x27;s family (last) name.
     * @param gender The patient&#x27;s legal sex. Starting in the August 2021 version of Epic, the legal-sex parameter is preferred.
     * @param given The patient&#x27;s given name. May include first and middle names.
     * @param identifier &lt;p&gt;The patient&#x27;s identifier.&lt;/p&gt;  &lt;p&gt;Starting in November 2018, this web service supports using ID and ID type combinations, such as Patient?identifier&#x3D;MRN|202497.&lt;/p&gt;
     * @param legalSex The patient’s legal sex. Takes precedence over the gender search parameter. Available starting in the August 2021 version of Epic.
     * @param name Any part of the patient&#x27;s name. When discrete name parameters are used, such as family or given, this parameter is ignored.
     * @param ownName The patient&#x27;s own last name. Usually used in non-US names.
     * @param ownPrefix The patient&#x27;s own prefix. Usually used in non-US names.
     * @param partnerName The patient&#x27;s spouse&#x27;s last name. Usually used in non-US names.
     * @param partnerPrefix The patient&#x27;s spouse&#x27;s prefix. Usually used in non-US names.
     * @param telecom The patient&#x27;s phone number or email.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientSearchR4(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, name?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePatientR4>;
    public patientSearchR4(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, name?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePatientR4>>;
    public patientSearchR4(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, name?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePatientR4>>;
    public patientSearchR4(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, name?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

















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
        if (birthdate !== undefined && birthdate !== null) {
            queryParameters = queryParameters.set('birthdate', <any>birthdate);
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
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (legalSex !== undefined && legalSex !== null) {
            queryParameters = queryParameters.set('legal-sex', <any>legalSex);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (ownName !== undefined && ownName !== null) {
            queryParameters = queryParameters.set('own-name', <any>ownName);
        }
        if (ownPrefix !== undefined && ownPrefix !== null) {
            queryParameters = queryParameters.set('own-prefix', <any>ownPrefix);
        }
        if (partnerName !== undefined && partnerName !== null) {
            queryParameters = queryParameters.set('partner-name', <any>partnerName);
        }
        if (partnerPrefix !== undefined && partnerPrefix !== null) {
            queryParameters = queryParameters.set('partner-prefix', <any>partnerPrefix);
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

        return this.httpClient.request<BundlePatientR4>('get',`${this.basePath}/R4/Patient`,
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
     * @param address The patient&#x27;s street address.
     * @param addressCity The city for patient&#x27;s home address.
     * @param addressPostalcode The postal code for patient&#x27;s home address.
     * @param addressState The state for the patient&#x27;s home address.
     * @param birthdate The patient&#x27;s date of birth in the format YYYY-MM-DD.
     * @param family The patient&#x27;s family (last) name.
     * @param gender The patient&#x27;s legal sex. Starting in the August 2021 version of Epic, the legal-sex parameter is preferred.
     * @param given The patient&#x27;s given name. May include first and middle names.
     * @param identifier &lt;p&gt;The patient&#x27;s identifier.&lt;/p&gt;  &lt;p&gt;This web service supports using ID and ID type combinations, such as Patient?identifier&#x3D;MRN|202497.&lt;/p&gt;
     * @param legalSex The patient’s legal sex. Takes precedence over the gender search parameter.   Available starting in the August 2021 version of Epic.
     * @param ownName The patient&#x27;s own last name. Usually used in non-US names.
     * @param ownPrefix The patient&#x27;s own prefix. Usually used in non-US names.
     * @param partnerName The patient&#x27;s spouse&#x27;s last name. Usually used in non-US names.
     * @param partnerPrefix The patient&#x27;s spouse&#x27;s prefix. Usually used in non-US names.
     * @param telecom The patient&#x27;s phone number or email.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patientSearchSTU3(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe?: 'body', reportProgress?: boolean): Observable<BundlePatientSTU3>;
    public patientSearchSTU3(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundlePatientSTU3>>;
    public patientSearchSTU3(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundlePatientSTU3>>;
    public patientSearchSTU3(address?: string, addressCity?: string, addressPostalcode?: string, addressState?: string, birthdate?: string, family?: string, gender?: string, given?: string, identifier?: string, legalSex?: string, ownName?: string, ownPrefix?: string, partnerName?: string, partnerPrefix?: string, telecom?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
















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
        if (birthdate !== undefined && birthdate !== null) {
            queryParameters = queryParameters.set('birthdate', <any>birthdate);
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
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (legalSex !== undefined && legalSex !== null) {
            queryParameters = queryParameters.set('legal-sex', <any>legalSex);
        }
        if (ownName !== undefined && ownName !== null) {
            queryParameters = queryParameters.set('own-name', <any>ownName);
        }
        if (ownPrefix !== undefined && ownPrefix !== null) {
            queryParameters = queryParameters.set('own-prefix', <any>ownPrefix);
        }
        if (partnerName !== undefined && partnerName !== null) {
            queryParameters = queryParameters.set('partner-name', <any>partnerName);
        }
        if (partnerPrefix !== undefined && partnerPrefix !== null) {
            queryParameters = queryParameters.set('partner-prefix', <any>partnerPrefix);
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

        return this.httpClient.request<BundlePatientSTU3>('get',`${this.basePath}/STU3/Patient`,
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
