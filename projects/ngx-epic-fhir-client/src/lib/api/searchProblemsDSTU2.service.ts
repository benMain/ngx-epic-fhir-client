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

import { BundleConditionDSTU2 } from '../model/bundleConditionDSTU2';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SearchProblemsDSTU2Service {

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
     * @param category Type of condition – must be “Diagnosis”.
     * @param clinicalStatus &lt;p&gt;Status of the condition&lt;/p&gt; &lt;table class&#x3D;\&quot;table table-hover\&quot;&gt; &lt;tr&gt; &lt;th&gt;FHIR Status&lt;/th&gt; &lt;th&gt;Epic Status&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;active&lt;/td&gt; &lt;td&gt;active conditions&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;resolved&lt;/td&gt; &lt;td&gt; resolved conditions&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;inactive&lt;/td&gt; &lt;td&gt;deleted conditions&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;p&gt;If no status is specified all active (confirmed) conditions will be returned. &lt;/p&gt; &lt;p&gt;*Note: Any FHIR Status not listed in the above table is not returned.&lt;/p&gt;
     * @param patient The Patient FHIR resource ID.
     * @param subject Subject of the condition.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public conditionSearchProblemsDSTU2(category?: string, clinicalStatus?: string, patient?: string, subject?: string, observe?: 'body', reportProgress?: boolean): Observable<BundleConditionDSTU2>;
    public conditionSearchProblemsDSTU2(category?: string, clinicalStatus?: string, patient?: string, subject?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BundleConditionDSTU2>>;
    public conditionSearchProblemsDSTU2(category?: string, clinicalStatus?: string, patient?: string, subject?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BundleConditionDSTU2>>;
    public conditionSearchProblemsDSTU2(category?: string, clinicalStatus?: string, patient?: string, subject?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (clinicalStatus !== undefined && clinicalStatus !== null) {
            queryParameters = queryParameters.set('clinicalStatus', <any>clinicalStatus);
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

        return this.httpClient.request<BundleConditionDSTU2>('get',`${this.basePath}/DSTU2/Condition`,
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
