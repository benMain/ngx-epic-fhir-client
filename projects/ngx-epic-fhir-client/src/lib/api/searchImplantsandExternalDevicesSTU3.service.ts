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

import { BundleDeviceSTU3 } from '../model/bundleDeviceSTU3';
import { BundleDeviceUseStatementSTU3 } from '../model/bundleDeviceUseStatementSTU3';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class SearchImplantsandExternalDevicesSTU3Service {
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
   * @param patient &lt;p&gt;Patient identifier for the patient to whom the device is affixed.&lt;/p&gt;
   * @param deviceName &lt;p&gt;A string that may match the device UDI name.&lt;/p&gt;
   * @param manufacturer &lt;p&gt;Device manufacturer.&lt;/p&gt;
   * @param model &lt;p&gt;Device model.&lt;/p&gt;
   * @param udiCarrier &lt;p&gt;The UDI barcode string either in HRF format or AIDC format.&lt;/p&gt;
   * @param udiDi &lt;p&gt;UDI device identifier.&lt;/p&gt; &lt;p&gt;Under FDA regulations, all medical devices are required to include a Unique Device Identifier (UDI) on device labels and packages, in both human-readable and barcode format. The FDA also maintains a public database of medical devices and UDI information called the &lt;a href&#x3D;\&quot;https://accessgudid.nlm.nih.gov/\&quot;&gt;Global Unique Device Identification Database (GUDID)&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;A Unique Device Identifier (UDI) is a unique numeric or alphanumeric code that is comprised of two components:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;Device Identifier (DI) (\&quot;Static UDI\&quot;) ??? a mandatory, fixed portion of a UDI that identifiers the labeler and specific version or model of a device.&lt;/li&gt;   &lt;li&gt;Production Identifiers (PI) (\&quot;Dynamic UDI\&quot;) ??? a conditional, variable portion of a UDI that identifies one or more of the following:&lt;/li&gt;   &lt;ul&gt;   &lt;li&gt;Lot or batch number within which a device was manufactured&lt;/li&gt;   &lt;li&gt;Serial number of a specific device&lt;/li&gt;   &lt;li&gt;Expiration date of a specific device&lt;/li&gt;   &lt;li&gt;Production date of a specific device&lt;/li&gt;   &lt;li&gt;Distinct identification code for a human cell, tissue, or cellular- and tissue-based product&lt;/li&gt; &lt;/ul&gt; &lt;/ul&gt; &lt;p&gt;When documenting a UDI for an implant in OpTime, you will need to use an identifier that is in a valid format for the selected issuer. Here are some example UDIs you can use for testing:&lt;/p&gt; &lt;table class&#x3D;\&quot;table table-hover\&quot;&gt; &lt;tr&gt;   &lt;th&gt;UDI Type / Issuer&lt;/th&gt;   &lt;th&gt;Example Device ID&lt;/th&gt; &lt;/tr&gt; &lt;tr&gt;   &lt;td&gt;ICCBBA&lt;/td&gt;   &lt;td&gt;W4184228005T0473&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;   &lt;td&gt;HIBC&lt;/td&gt;   &lt;td&gt;MDLXMAG120200&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;   &lt;td&gt;GS1&lt;/td&gt;   &lt;td&gt;00822409025305&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deviceSearchImplantsandExternalDevicesSTU3(
    patient: string,
    deviceName?: string,
    manufacturer?: string,
    model?: string,
    udiCarrier?: string,
    udiDi?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleDeviceSTU3>;
  public deviceSearchImplantsandExternalDevicesSTU3(
    patient: string,
    deviceName?: string,
    manufacturer?: string,
    model?: string,
    udiCarrier?: string,
    udiDi?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleDeviceSTU3>>;
  public deviceSearchImplantsandExternalDevicesSTU3(
    patient: string,
    deviceName?: string,
    manufacturer?: string,
    model?: string,
    udiCarrier?: string,
    udiDi?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleDeviceSTU3>>;
  public deviceSearchImplantsandExternalDevicesSTU3(
    patient: string,
    deviceName?: string,
    manufacturer?: string,
    model?: string,
    udiCarrier?: string,
    udiDi?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (patient === null || patient === undefined) {
      throw new Error(
        'Required parameter patient was null or undefined when calling deviceSearchImplantsandExternalDevicesSTU3.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (deviceName !== undefined && deviceName !== null) {
      queryParameters = queryParameters.set('device-name', <any>deviceName);
    }
    if (manufacturer !== undefined && manufacturer !== null) {
      queryParameters = queryParameters.set('manufacturer', <any>manufacturer);
    }
    if (model !== undefined && model !== null) {
      queryParameters = queryParameters.set('model', <any>model);
    }
    if (patient !== undefined && patient !== null) {
      queryParameters = queryParameters.set('patient', <any>patient);
    }
    if (udiCarrier !== undefined && udiCarrier !== null) {
      queryParameters = queryParameters.set('udi-carrier', <any>udiCarrier);
    }
    if (udiDi !== undefined && udiDi !== null) {
      queryParameters = queryParameters.set('udi-di', <any>udiDi);
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

    return this.httpClient.request<BundleDeviceSTU3>(
      'get',
      `${this.basePath}/STU3/Device`,
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
   * @param patient Patient identifier for the patient using the device.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deviceUseStatementSearchImplantsandExternalDevicesSTU3(
    patient: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<BundleDeviceUseStatementSTU3>;
  public deviceUseStatementSearchImplantsandExternalDevicesSTU3(
    patient: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<BundleDeviceUseStatementSTU3>>;
  public deviceUseStatementSearchImplantsandExternalDevicesSTU3(
    patient: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<BundleDeviceUseStatementSTU3>>;
  public deviceUseStatementSearchImplantsandExternalDevicesSTU3(
    patient: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (patient === null || patient === undefined) {
      throw new Error(
        'Required parameter patient was null or undefined when calling deviceUseStatementSearchImplantsandExternalDevicesSTU3.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (patient !== undefined && patient !== null) {
      queryParameters = queryParameters.set('patient', <any>patient);
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

    return this.httpClient.request<BundleDeviceUseStatementSTU3>(
      'get',
      `${this.basePath}/STU3/DeviceUseStatement`,
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
