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

import { BundleGoalDSTU2 } from '../model/bundleGoalDSTU2';
import { BundleGoalR4 } from '../model/bundleGoalR4';
import { BundleGoalSTU3 } from '../model/bundleGoalSTU3';
import { GoalDSTU2 } from '../model/goalDSTU2';
import { GoalR4 } from '../model/goalR4';
import { GoalSTU3 } from '../model/goalSTU3';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class GoalService {
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
   * @param body payload
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public goalCreatePatientSTU3(
    body: GoalSTU3,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<GoalSTU3>;
  public goalCreatePatientSTU3(
    body: GoalSTU3,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<GoalSTU3>>;
  public goalCreatePatientSTU3(
    body: GoalSTU3,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<GoalSTU3>>;
  public goalCreatePatientSTU3(
    body: GoalSTU3,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (body === null || body === undefined) {
      throw new Error(
        'Required parameter body was null or undefined when calling goalCreatePatientSTU3.'
      );
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
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<GoalSTU3>(
      'post',
      `${this.basePath}/STU3/Goal`,
      {
        body: body,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param ID The Goal FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public goalReadPatientDSTU2(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<GoalDSTU2>;
  public goalReadPatientDSTU2(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<GoalDSTU2>>;
  public goalReadPatientDSTU2(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<GoalDSTU2>>;
  public goalReadPatientDSTU2(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling goalReadPatientDSTU2.'
      );
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

    return this.httpClient.request<GoalDSTU2>(
      'get',
      `${this.basePath}/DSTU2/Goal/${encodeURIComponent(String(ID))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param ID The Goal FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public goalReadPatientR4(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<GoalR4>;
  public goalReadPatientR4(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<GoalR4>>;
  public goalReadPatientR4(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<GoalR4>>;
  public goalReadPatientR4(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling goalReadPatientR4.'
      );
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

    return this.httpClient.request<GoalR4>(
      'get',
      `${this.basePath}/R4/Goal/${encodeURIComponent(String(ID))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param ID The Goal FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public goalReadPatientSTU3(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<GoalSTU3>;
  public goalReadPatientSTU3(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<GoalSTU3>>;
  public goalReadPatientSTU3(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<GoalSTU3>>;
  public goalReadPatientSTU3(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling goalReadPatientSTU3.'
      );
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

    return this.httpClient.request<GoalSTU3>(
      'get',
      `${this.basePath}/STU3/Goal/${encodeURIComponent(String(ID))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param category Based on  the category number by default, with Title and then Synonym as backups. Can use SNOMED if OID is specified and a mapping table has been built by the Epic community member.
   * @param patient Associated Patient FHIR Resource ID.
   * @param status &lt;p&gt;The current status of the goal. The following values are supported:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;in-progress,&lt;/li&gt; &lt;li&gt;achieved&lt;/li&gt; &lt;li&gt;cancelled&lt;/li&gt; &lt;/ul&gt;
   * @param subject Associated Patient FHIR Resource ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public goalSearchPatientDSTU2(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleGoalDSTU2>;
  public goalSearchPatientDSTU2(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleGoalDSTU2>>;
  public goalSearchPatientDSTU2(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleGoalDSTU2>>;
  public goalSearchPatientDSTU2(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
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

    return this.httpClient.request<BundleGoalDSTU2>(
      'get',
      `${this.basePath}/DSTU2/Goal`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param category Based on  the category number by default, with Title and then Synonym as backups. Can use SNOMED if OID is specified and a mapping table has been built by the Epic community member. Ex: treatment, dietary, or behavioral.
   * @param lifecycleStatus &lt;p&gt;The current status of the goal.  Previously called \&quot;status\&quot; in STU3. The following values are supported:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;active&lt;/li&gt; &lt;li&gt;completed&lt;/li&gt; &lt;li&gt;cancelled&lt;/li&gt; &lt;/ul&gt;
   * @param patient Associated Patient FHIR Resource ID.
   * @param subject Associated Patient FHIR Resource ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public goalSearchPatientR4(
    category?: string,
    lifecycleStatus?: string,
    patient?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleGoalR4>;
  public goalSearchPatientR4(
    category?: string,
    lifecycleStatus?: string,
    patient?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleGoalR4>>;
  public goalSearchPatientR4(
    category?: string,
    lifecycleStatus?: string,
    patient?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleGoalR4>>;
  public goalSearchPatientR4(
    category?: string,
    lifecycleStatus?: string,
    patient?: string,
    subject?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (category !== undefined && category !== null) {
      queryParameters = queryParameters.set('category', <any>category);
    }
    if (lifecycleStatus !== undefined && lifecycleStatus !== null) {
      queryParameters = queryParameters.set(
        'lifecycle-status',
        <any>lifecycleStatus
      );
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

    return this.httpClient.request<BundleGoalR4>(
      'get',
      `${this.basePath}/R4/Goal`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param category Based on  the category number by default, with Title and then Synonym as backups. Can use SNOMED if OID is specified and a mapping table has been built by the Epic community member. Ex: treatment, dietary, or behavioral.
   * @param patient Associated Patient FHIR Resource ID.
   * @param status &lt;p&gt;The current status of the goal. The following values are supported:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;in-progress,&lt;/li&gt; &lt;li&gt;achieved&lt;/li&gt; &lt;li&gt;cancelled&lt;/li&gt; &lt;/ul&gt;
   * @param subject Associated Patient FHIR Resource ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public goalSearchPatientSTU3(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleGoalSTU3>;
  public goalSearchPatientSTU3(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleGoalSTU3>>;
  public goalSearchPatientSTU3(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleGoalSTU3>>;
  public goalSearchPatientSTU3(
    category?: string,
    patient?: string,
    status?: string,
    subject?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
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

    return this.httpClient.request<BundleGoalSTU3>(
      'get',
      `${this.basePath}/STU3/Goal`,
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
