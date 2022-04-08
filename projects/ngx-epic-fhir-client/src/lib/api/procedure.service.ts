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

import { BundleProcedureDSTU2 } from '../model/bundleProcedureDSTU2';
import { BundleProcedureR4 } from '../model/bundleProcedureR4';
import { BundleProcedureSTU3 } from '../model/bundleProcedureSTU3';
import { ProcedureDSTU2 } from '../model/procedureDSTU2';
import { ProcedureR4 } from '../model/procedureR4';
import { ProcedureSTU3 } from '../model/procedureSTU3';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ProcedureService {
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
   * @param ID The Procedure FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureReadOrdersDSTU2(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ProcedureDSTU2>;
  public procedureReadOrdersDSTU2(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ProcedureDSTU2>>;
  public procedureReadOrdersDSTU2(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ProcedureDSTU2>>;
  public procedureReadOrdersDSTU2(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling procedureReadOrdersDSTU2.'
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

    return this.httpClient.request<ProcedureDSTU2>(
      'get',
      `${this.basePath}/DSTU2/Procedure/${encodeURIComponent(String(ID))}`,
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
   * @param ID The Procedure FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureReadOrdersSurgeriesSTU3(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ProcedureSTU3>;
  public procedureReadOrdersSurgeriesSTU3(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ProcedureSTU3>>;
  public procedureReadOrdersSurgeriesSTU3(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ProcedureSTU3>>;
  public procedureReadOrdersSurgeriesSTU3(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling procedureReadOrdersSurgeriesSTU3.'
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

    return this.httpClient.request<ProcedureSTU3>(
      'get',
      `${this.basePath}/STU3/Procedure/${encodeURIComponent(String(ID))}`,
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
   * @param ID The Procedure FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureReadSurgicalHistoryR4(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ProcedureR4>;
  public procedureReadSurgicalHistoryR4(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ProcedureR4>>;
  public procedureReadSurgicalHistoryR4(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ProcedureR4>>;
  public procedureReadSurgicalHistoryR4(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling procedureReadSurgicalHistoryR4.'
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

    return this.httpClient.request<ProcedureR4>(
      'get',
      `${this.basePath}/R4/Procedure/${encodeURIComponent(String(ID))}`,
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
   * @param date The date or date range the Procedure was performed.
   * @param patient The Patient FHIR resource ID.
   * @param subject Subject of the procedure.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureSearchOrdersDSTU2(
    date: string,
    patient?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleProcedureDSTU2>;
  public procedureSearchOrdersDSTU2(
    date: string,
    patient?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleProcedureDSTU2>>;
  public procedureSearchOrdersDSTU2(
    date: string,
    patient?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleProcedureDSTU2>>;
  public procedureSearchOrdersDSTU2(
    date: string,
    patient?: string,
    subject?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (date === null || date === undefined) {
      throw new Error(
        'Required parameter date was null or undefined when calling procedureSearchOrdersDSTU2.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
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

    return this.httpClient.request<BundleProcedureDSTU2>(
      'get',
      `${this.basePath}/DSTU2/Procedure`,
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
   * @param category A code that classifies the procedure. The following SNOMED codes are acceptable values: 387713003 (Surgical procedure), 103693007 (Diagnostic procedure)
   * @param date Date or period that the procedure was performed, using the FHIR date parameter format.
   * @param patient The Patient FHIR resource ID.
   * @param subject Subject of the procedure.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureSearchOrdersSurgeriesSTU3(
    category?: string,
    date?: string,
    patient?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleProcedureSTU3>;
  public procedureSearchOrdersSurgeriesSTU3(
    category?: string,
    date?: string,
    patient?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleProcedureSTU3>>;
  public procedureSearchOrdersSurgeriesSTU3(
    category?: string,
    date?: string,
    patient?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleProcedureSTU3>>;
  public procedureSearchOrdersSurgeriesSTU3(
    category?: string,
    date?: string,
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

    return this.httpClient.request<BundleProcedureSTU3>(
      'get',
      `${this.basePath}/STU3/Procedure`,
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
   * @param category A code that classifies the procedure. This will always be SNOMED code 387713003 (Surgical procedure) for the Procedure (Surgical history) API.
   * @param patient The Patient FHIR resource ID.
   * @param subject Subject of the Procedure.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public procedureSearchSurgicalHistoryR4(
    category?: string,
    patient?: string,
    subject?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleProcedureR4>;
  public procedureSearchSurgicalHistoryR4(
    category?: string,
    patient?: string,
    subject?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleProcedureR4>>;
  public procedureSearchSurgicalHistoryR4(
    category?: string,
    patient?: string,
    subject?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleProcedureR4>>;
  public procedureSearchSurgicalHistoryR4(
    category?: string,
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

    return this.httpClient.request<BundleProcedureR4>(
      'get',
      `${this.basePath}/R4/Procedure`,
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