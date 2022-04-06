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

import { BundleDiagnosticReportR4 } from '../model/bundleDiagnosticReportR4';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SearchResultsR4Service {

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
     * @param category &lt;p&gt;The service category.&lt;/p&gt; &lt;ul&gt;&lt;li&gt;Starting in the November 2021 version of Epic (or the August 2021 version with special updates), this can be either an Epic order type or a value from the &lt;a href&#x3D;\&quot;http://hl7.org/fhir/us/core/2019Sep/ValueSet-us-core-diagnosticreport-category.html\&quot;&gt;US Core valueset for DiagnosticReport&lt;/a&gt;. &lt;li&gt;In earlier versions, this must be a value from the &lt;a href&#x3D;\&quot;http://hl7.org/fhir/us/core/2019Sep/ValueSet-us-core-diagnosticreport-category.html\&quot;&gt;US Core valueset for DiagnosticReport&lt;/a&gt;.&lt;/ul&gt;
     * @param code The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result.  &lt;ul&gt;&lt;li&gt;Starting in the November 2021 version of Epic, or the August 2021 version with special updates, this can be any code type associated with the procedures, including LOINC, CPT, SNOMED, or other code types mapped to a procedure in Epic.&lt;/li&gt; &lt;li&gt;In earlier versions, this can only be a LOINC code.&lt;/li&gt;&lt;/ul&gt; 
     * @param date The date or date range the order was resulted.
     * @param identifier An identifier for the report. This can be the Epic order ID or the accession number.
     * @param patient The reference to a patient resource.
     * @param subject The reference to a patient resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public diagnosticReportSearchResultsR4(category?: string, code?: string, date?: string, identifier?: string, patient?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleDiagnosticReportR4>;
    public diagnosticReportSearchResultsR4(category?: string, code?: string, date?: string, identifier?: string, patient?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleDiagnosticReportR4>>;
    public diagnosticReportSearchResultsR4(category?: string, code?: string, date?: string, identifier?: string, patient?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleDiagnosticReportR4>>;
    public diagnosticReportSearchResultsR4(category?: string, code?: string, date?: string, identifier?: string, patient?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('code', <any>code);
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

        return this.httpClient.request<BundleDiagnosticReportR4>('get',`${this.basePath}/R4/DiagnosticReport`,
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
