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

import { BundleDocumentReferenceR4 } from '../model/bundleDocumentReferenceR4';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class SearchRadiologyResultsR4Service {
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
   * @param author FHIR ID for the providers who signed or addended the study.
   * @param category Must be set to “imaging-result” if specified.
   * @param date The instant or range of instants when a study was addended or finalized.
   * @param patient The subject of the report if a patient
   * @param period The instant when the exam was performed.
   * @param subject The patient that is the subject of the note.
   * @param type The LOINC or system code for the radiology result.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public documentReferenceSearchRadiologyResultsR4(
    author?: string,
    category?: string,
    date?: string,
    patient?: string,
    period?: string,
    subject?: string,
    type?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleDocumentReferenceR4>;
  public documentReferenceSearchRadiologyResultsR4(
    author?: string,
    category?: string,
    date?: string,
    patient?: string,
    period?: string,
    subject?: string,
    type?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleDocumentReferenceR4>>;
  public documentReferenceSearchRadiologyResultsR4(
    author?: string,
    category?: string,
    date?: string,
    patient?: string,
    period?: string,
    subject?: string,
    type?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleDocumentReferenceR4>>;
  public documentReferenceSearchRadiologyResultsR4(
    author?: string,
    category?: string,
    date?: string,
    patient?: string,
    period?: string,
    subject?: string,
    type?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (author !== undefined && author !== null) {
      queryParameters = queryParameters.set('author', <any>author);
    }
    if (category !== undefined && category !== null) {
      queryParameters = queryParameters.set('category', <any>category);
    }
    if (date !== undefined && date !== null) {
      queryParameters = queryParameters.set('date', <any>date);
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

    return this.httpClient.request<BundleDocumentReferenceR4>(
      'get',
      `${this.basePath}/R4/DocumentReference`,
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