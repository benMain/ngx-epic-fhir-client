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

import { BundleSpecimenR4 } from '../model/bundleSpecimenR4';
import { BundleSpecimenSTU3 } from '../model/bundleSpecimenSTU3';
import { SpecimenR4 } from '../model/specimenR4';
import { SpecimenSTU3 } from '../model/specimenSTU3';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class SpecimenService {
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
   * @param ID The Specimen FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public specimenReadR4(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SpecimenR4>;
  public specimenReadR4(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SpecimenR4>>;
  public specimenReadR4(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SpecimenR4>>;
  public specimenReadR4(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling specimenReadR4.'
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

    return this.httpClient.request<SpecimenR4>(
      'get',
      `${this.basePath}/R4/Specimen/${encodeURIComponent(String(ID))}`,
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
   * @param ID The specimen’s FHIR ID.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public specimenReadSTU3(
    ID: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<SpecimenSTU3>;
  public specimenReadSTU3(
    ID: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<SpecimenSTU3>>;
  public specimenReadSTU3(
    ID: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<SpecimenSTU3>>;
  public specimenReadSTU3(
    ID: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (ID === null || ID === undefined) {
      throw new Error(
        'Required parameter ID was null or undefined when calling specimenReadSTU3.'
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

    return this.httpClient.request<SpecimenSTU3>(
      'get',
      `${this.basePath}/STU3/Specimen/${encodeURIComponent(String(ID))}`,
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
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public specimenSearchR4(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleSpecimenR4>;
  public specimenSearchR4(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleSpecimenR4>>;
  public specimenSearchR4(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleSpecimenR4>>;
  public specimenSearchR4(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
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

    return this.httpClient.request<BundleSpecimenR4>(
      'get',
      `${this.basePath}/R4/Specimen`,
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
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public specimenSearchSTU3(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleSpecimenSTU3>;
  public specimenSearchSTU3(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleSpecimenSTU3>>;
  public specimenSearchSTU3(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleSpecimenSTU3>>;
  public specimenSearchSTU3(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
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

    return this.httpClient.request<BundleSpecimenSTU3>(
      'get',
      `${this.basePath}/STU3/Specimen`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
