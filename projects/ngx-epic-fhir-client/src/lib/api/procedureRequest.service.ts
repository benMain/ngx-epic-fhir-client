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

import { BundleProcedureRequestSTU3 } from '../model/bundleProcedureRequestSTU3';
import { ProcedureRequestSTU3 } from '../model/procedureRequestSTU3';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ProcedureRequestService {
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
   * @param ID FHIR ProcedureRequest ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureRequestReadOrdersSTU3(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ProcedureRequestSTU3>;
  public procedureRequestReadOrdersSTU3(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ProcedureRequestSTU3>>;
  public procedureRequestReadOrdersSTU3(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ProcedureRequestSTU3>>;
  public procedureRequestReadOrdersSTU3(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling procedureRequestReadOrdersSTU3.'
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

    return this.httpClient.request<ProcedureRequestSTU3>(
      'get',
      `${this.basePath}/STU3/ProcedureRequest/${encodeURIComponent(
        String(ID)
      )}`,
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
   * @param requester Reference to a practitioner resource who is the authorizing provider for the procedure request. Default is all.
   * @param status The status code to filter the search. The full list of potential values can be found &lt;a href&#x3D;\&quot;http://hl7.org/fhir/stu3/valueset-request-status.html\&quot;&gt;here&lt;/a&gt;. The default is to return active ProcedureRequests.
   * @param encounter The patient&#x27;s encounter FHIR ID.
   * @param patient The patient FHIR ID.
   * @param subject A parameter
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureRequestSearchOrdersSTU3(
    requester: string,
    status: string,
    encounter?: string,
    patient?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleProcedureRequestSTU3>;
  public procedureRequestSearchOrdersSTU3(
    requester: string,
    status: string,
    encounter?: string,
    patient?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleProcedureRequestSTU3>>;
  public procedureRequestSearchOrdersSTU3(
    requester: string,
    status: string,
    encounter?: string,
    patient?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleProcedureRequestSTU3>>;
  public procedureRequestSearchOrdersSTU3(
    requester: string,
    status: string,
    encounter?: string,
    patient?: string,
    subject?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (requester === null || requester === undefined) {
      throw new Error(
        'Required parameter requester was null or undefined when calling procedureRequestSearchOrdersSTU3.'
      );
    }

    if (status === null || status === undefined) {
      throw new Error(
        'Required parameter status was null or undefined when calling procedureRequestSearchOrdersSTU3.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (encounter !== undefined && encounter !== null) {
      queryParameters = queryParameters.set('encounter', <any>encounter);
    }
    if (patient !== undefined && patient !== null) {
      queryParameters = queryParameters.set('patient', <any>patient);
    }
    if (requester !== undefined && requester !== null) {
      queryParameters = queryParameters.set('requester', <any>requester);
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

    return this.httpClient.request<BundleProcedureRequestSTU3>(
      'get',
      `${this.basePath}/STU3/ProcedureRequest`,
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
