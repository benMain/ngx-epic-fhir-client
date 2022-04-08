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

import { ValueSetR4 } from '../model/valueSetR4';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ExpandR4Service {
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
   * @param context &lt;p&gt;The path to the element in the resource.&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Expected format: &amp;lt;ResourceName&amp;gt;.&amp;lt;ElementPath&amp;gt;&lt;/li&gt; &lt;li&gt;Example: DocumentReference.type&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Epic currently supports the following contexts:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;DocumentReference.type&lt;/li&gt; &lt;li&gt;DocumentReference.docStatus&lt;/li&gt; &lt;/ul&gt;
   * @param contextdirection &lt;p&gt;Specifies the direction of the interaction with regards to the ValueSet. Options include \&quot;outgoing\&quot; or \&quot;incoming\&quot;. &lt;/p&gt; &lt;ul&gt; &lt;li&gt;outgoing - for query parameters and response content&lt;/li&gt; &lt;li&gt;incoming - for incoming POST/PUT body&lt;/li&gt; &lt;/ul&gt;
   * @param filter &lt;p&gt;A filter string used to further refine the ValueSet context to a specific sub-resource based on the resource&#x27;s category element, and in some cases, additional details.&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Example: &lt;code&gt;filter&#x3D;category:document-information,workflow:registration, level:encounter,resource:ej5R7X.4RdaFNR5vWdsTpVTtccmkRkWJcKixc5XVY4cQ3&lt;/code&gt; &lt;/ul&gt; &lt;p&gt;Epic currently supports the following filters:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;code&gt;category:clinical-note&lt;/code&gt; &lt;li&gt;&lt;code&gt;category:document-information&lt;/code&gt; &lt;/ul&gt; &lt;p&gt;The following additional filters can be combined with &lt;code&gt;category:document-information&lt;/code&gt; to further refine results:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;code&gt;workflow:general&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;workflow:registration&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;level:patient&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;level:encounter&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;level:order&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;resource:&amp;lt;patient FHIR ID&amp;gt;&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;resource:&amp;lt;encounter FHIR ID&amp;gt;&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt;
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public valueSetexpandR4(
    context: string,
    contextdirection: string,
    filter?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ValueSetR4>;
  public valueSetexpandR4(
    context: string,
    contextdirection: string,
    filter?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ValueSetR4>>;
  public valueSetexpandR4(
    context: string,
    contextdirection: string,
    filter?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ValueSetR4>>;
  public valueSetexpandR4(
    context: string,
    contextdirection: string,
    filter?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (context === null || context === undefined) {
      throw new Error(
        'Required parameter context was null or undefined when calling valueSetexpandR4.'
      );
    }

    if (contextdirection === null || contextdirection === undefined) {
      throw new Error(
        'Required parameter contextdirection was null or undefined when calling valueSetexpandR4.'
      );
    }

    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec(),
    });
    if (context !== undefined && context !== null) {
      queryParameters = queryParameters.set('context', <any>context);
    }
    if (contextdirection !== undefined && contextdirection !== null) {
      queryParameters = queryParameters.set(
        'contextdirection',
        <any>contextdirection
      );
    }
    if (filter !== undefined && filter !== null) {
      queryParameters = queryParameters.set('filter', <any>filter);
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

    return this.httpClient.request<ValueSetR4>(
      'get',
      `${this.basePath}/R4/ValueSet/$expand`,
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