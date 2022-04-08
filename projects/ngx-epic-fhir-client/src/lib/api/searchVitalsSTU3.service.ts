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
 */ /* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { BundleObservationSTU3 } from '../model/bundleObservationSTU3';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class SearchVitalsSTU3Service {
  protected basePath = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
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
   * @param category Use \&quot;vital-signs\&quot; to search for vitals observations. Either this element or code must be provided, but not both.
   * @param code &lt;p&gt;LOINC code, CADSR code, or encoded flowsheet ID. Either this element or category must be provided, but not both.&lt;/p&gt; &lt;p&gt;The code element value varies depending upon what is passed (for example, a flowsheet ID vs. a LOINC code). If using a flowsheet ID, the system value is different between Epic organizations, and it is also different between production and non-production environments for the same organization.&lt;/p&gt;
   * @param patient Reference to a patient resource the observation is about. Either this element or subject must be provided. If both are provided, they must match.
   * @param subject Reference to a patient resource the observation is about. Either this element or patient must be provided. If both are provided, they must match.
   * @param date The date range for when the observation was taken.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public observationSearchVitalsSTU3(
    category: string,
    code: string,
    patient: string,
    subject: string,
    date?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleObservationSTU3>;
  public observationSearchVitalsSTU3(
    category: string,
    code: string,
    patient: string,
    subject: string,
    date?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleObservationSTU3>>;
  public observationSearchVitalsSTU3(
    category: string,
    code: string,
    patient: string,
    subject: string,
    date?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleObservationSTU3>>;
  public observationSearchVitalsSTU3(
    category: string,
    code: string,
    patient: string,
    subject: string,
    date?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (category === null || category === undefined) {
      throw new Error(
        'Required parameter category was null or undefined when calling observationSearchVitalsSTU3.'
      );
    }

    if (code === null || code === undefined) {
      throw new Error(
        'Required parameter code was null or undefined when calling observationSearchVitalsSTU3.'
      );
    }

    if (patient === null || patient === undefined) {
      throw new Error(
        'Required parameter patient was null or undefined when calling observationSearchVitalsSTU3.'
      );
    }

    if (subject === null || subject === undefined) {
      throw new Error(
        'Required parameter subject was null or undefined when calling observationSearchVitalsSTU3.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (category !== undefined && category !== null) {
      queryParameters = queryParameters.set('category', <any>category);
    }
    if (code !== undefined && code !== null) {
      queryParameters = queryParameters.set('code', <any>code);
    }
    if (date !== undefined && date !== null) {
      queryParameters = queryParameters.set('date', <any>date);
    }
    if (patient !== undefined && patient !== null) {
      queryParameters = queryParameters.set('patient', <any>patient);
    }
    if (subject !== undefined && subject !== null) {
      queryParameters = queryParameters.set('subject', <any>subject);
    }

    let headers = this.defaultHeaders;

    // authentication (bearer_auth) required
    if (
      this.configuration.apiKeys &&
      this.configuration.apiKeys['Authorization']
    ) {
      headers = headers.set(
        'Authorization',
        this.configuration.apiKeys['Authorization']
      );
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<BundleObservationSTU3>(
      'get',
      `${this.basePath}/STU3/Observation`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}