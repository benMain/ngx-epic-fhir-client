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

import { BundleCarePlanDSTU2 } from '../model/bundleCarePlanDSTU2';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class SearchEncounterLevelLongitudinalDSTU2Service {
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
   * @param id A parameter
   * @param category &lt;p&gt;Further refine which CarePlan resources are returned by category. There are two supported categories:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;38717003 returns only the Longitudinal care plan.&lt;/li&gt; &lt;li&gt;734163000 returns encounter-level care plans.&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;If no category is specified, the web service returns only the Longitudinal care plan.&lt;/p&gt;
   * @param patient The reference to a patient resource.
   * @param subject The reference to a patient resource.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public carePlanSearchEncounterLevelLongitudinalDSTU2(
    id?: string,
    category?: string,
    patient?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleCarePlanDSTU2>;
  public carePlanSearchEncounterLevelLongitudinalDSTU2(
    id?: string,
    category?: string,
    patient?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleCarePlanDSTU2>>;
  public carePlanSearchEncounterLevelLongitudinalDSTU2(
    id?: string,
    category?: string,
    patient?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleCarePlanDSTU2>>;
  public carePlanSearchEncounterLevelLongitudinalDSTU2(
    id?: string,
    category?: string,
    patient?: string,
    subject?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (id !== undefined && id !== null) {
      queryParameters = queryParameters.set('_id', <any>id);
    }
    if (category !== undefined && category !== null) {
      queryParameters = queryParameters.set('category', <any>category);
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

    return this.httpClient.request<BundleCarePlanDSTU2>(
      'get',
      `${this.basePath}/DSTU2/CarePlan`,
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
