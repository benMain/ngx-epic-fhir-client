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

import { BundleMedicationOrderDSTU2 } from '../model/bundleMedicationOrderDSTU2';
import { MedicationOrderDSTU2 } from '../model/medicationOrderDSTU2';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class MedicationOrderService {
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
   * @param ID FHIR ID of the MedicationOrder resource.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public medicationOrderReadDSTU2(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<MedicationOrderDSTU2>;
  public medicationOrderReadDSTU2(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<MedicationOrderDSTU2>>;
  public medicationOrderReadDSTU2(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<MedicationOrderDSTU2>>;
  public medicationOrderReadDSTU2(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling medicationOrderReadDSTU2.'
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

    return this.httpClient.request<MedicationOrderDSTU2>(
      'get',
      `${this.basePath}/DSTU2/MedicationOrder/${encodeURIComponent(
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
   * @param patient FHIR ID for a patient to list dispenses for.
   * @param subject FHIR ID for a patient to list dispenses for.
   * @param id FHIR ID of the MedicationOrder resource(s). If _id is included in the search, all other parameters are ignored.
   * @param status By default, active medications are returned. Statuses of completed, on-hold, and stopped can also be specified.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public medicationOrderSearchDSTU2(
    patient: string,
    subject: string,
    id?: string,
    status?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleMedicationOrderDSTU2>;
  public medicationOrderSearchDSTU2(
    patient: string,
    subject: string,
    id?: string,
    status?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleMedicationOrderDSTU2>>;
  public medicationOrderSearchDSTU2(
    patient: string,
    subject: string,
    id?: string,
    status?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleMedicationOrderDSTU2>>;
  public medicationOrderSearchDSTU2(
    patient: string,
    subject: string,
    id?: string,
    status?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (patient === null || patient === undefined) {
      throw new Error(
        'Required parameter patient was null or undefined when calling medicationOrderSearchDSTU2.'
      );
    }

    if (subject === null || subject === undefined) {
      throw new Error(
        'Required parameter subject was null or undefined when calling medicationOrderSearchDSTU2.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (id !== undefined && id !== null) {
      queryParameters = queryParameters.set('_id', <any>id);
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

    return this.httpClient.request<BundleMedicationOrderDSTU2>(
      'get',
      `${this.basePath}/DSTU2/MedicationOrder`,
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