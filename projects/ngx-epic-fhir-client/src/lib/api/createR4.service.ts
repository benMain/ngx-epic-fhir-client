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

import { AllergyIntoleranceR4 } from '../model/allergyIntoleranceR4';
import { PatientR4 } from '../model/patientR4';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class CreateR4Service {
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
  public allergyIntoleranceCreateR4(
    body: AllergyIntoleranceR4,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<AllergyIntoleranceR4>;
  public allergyIntoleranceCreateR4(
    body: AllergyIntoleranceR4,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<AllergyIntoleranceR4>>;
  public allergyIntoleranceCreateR4(
    body: AllergyIntoleranceR4,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<AllergyIntoleranceR4>>;
  public allergyIntoleranceCreateR4(
    body: AllergyIntoleranceR4,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (body === null || body === undefined) {
      throw new Error(
        'Required parameter body was null or undefined when calling allergyIntoleranceCreateR4.'
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

    return this.httpClient.request<AllergyIntoleranceR4>(
      'post',
      `${this.basePath}/R4/AllergyIntolerance`,
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
   * @param body payload
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public patientCreateR4(
    body: PatientR4,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<PatientR4>;
  public patientCreateR4(
    body: PatientR4,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<PatientR4>>;
  public patientCreateR4(
    body: PatientR4,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<PatientR4>>;
  public patientCreateR4(
    body: PatientR4,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (body === null || body === undefined) {
      throw new Error(
        'Required parameter body was null or undefined when calling patientCreateR4.'
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

    return this.httpClient.request<PatientR4>(
      'post',
      `${this.basePath}/R4/Patient`,
      {
        body: body,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
