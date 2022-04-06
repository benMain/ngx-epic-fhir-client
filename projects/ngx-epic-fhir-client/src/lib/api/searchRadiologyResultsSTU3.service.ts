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

import { BundleDocumentReferenceSTU3 } from '../model/bundleDocumentReferenceSTU3';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SearchRadiologyResultsSTU3Service {

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
     * @param author FHIR ID for the providers who signed or addended the study.
     * @param _class Must be set to “imaging-result” if specified.
     * @param indexed The instant or range of instants when a study was addended or finalized.
     * @param patient FHIR Patient ID. If provided, the search returns all matching results for this patient. 
     * @param period The instant when the exam was performed.
     * @param subject FHIR Patient ID. If provided, the search returns all matching results for this patient. 
     * @param type LOINC code for the radiology result.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public documentReferenceSearchRadiologyResultsSTU3(author?: string, _class?: string, indexed?: string, patient?: string, period?: string, subject?: string, type?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleDocumentReferenceSTU3>;
    public documentReferenceSearchRadiologyResultsSTU3(author?: string, _class?: string, indexed?: string, patient?: string, period?: string, subject?: string, type?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleDocumentReferenceSTU3>>;
    public documentReferenceSearchRadiologyResultsSTU3(author?: string, _class?: string, indexed?: string, patient?: string, period?: string, subject?: string, type?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleDocumentReferenceSTU3>>;
    public documentReferenceSearchRadiologyResultsSTU3(author?: string, _class?: string, indexed?: string, patient?: string, period?: string, subject?: string, type?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (author !== undefined && author !== null) {
            queryParameters = queryParameters.set('author', <any>author);
        }
        if (_class !== undefined && _class !== null) {
            queryParameters = queryParameters.set('class', <any>_class);
        }
        if (indexed !== undefined && indexed !== null) {
            queryParameters = queryParameters.set('indexed', <any>indexed);
        }
        if (patient !== undefined && patient !== null) {
            queryParameters = queryParameters.set('patient', <any>patient);
        }
        if (period !== undefined && period !== null) {
            queryParameters = queryParameters.set('period', <any>period);
        }
        if (subject !== undefined && subject !== null) {
            queryParameters = queryParameters.set('subject', <any>subject);
        }
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
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

        return this.httpClient.request<BundleDocumentReferenceSTU3>('get',`${this.basePath}/STU3/DocumentReference`,
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
