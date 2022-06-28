import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  BundleEndpointDSTU2,
  BundleEndpointR4,
  EndpointR4,
  EndpointSTU3,
} from '../../model';

@Component({
  selector: 'app-lib-non-embedded-auth-modal',
  templateUrl: './non-embedded-auth-modal.component.html',
  styleUrls: ['./non-embedded-auth-modal.component.css'],
})
export class NonEmbeddedAuthModalComponent implements OnInit {
  dstu2Endpoints: EndpointSTU3[] = [];
  r4Endpoints: EndpointR4[] = [];
  validR4Endpoint: EndpointR4 | null = null;
  isDismissed = false;
  constructor(private readonly httpClient: HttpClient) {}

  async ngOnInit() {
    const dstu2EndpointsBundle = await firstValueFrom(
      this.httpClient.get<BundleEndpointDSTU2>(
        'https://open.epic.com/Endpoints/DSTU2'
      )
    );
    const r4EndpointsBundle = await firstValueFrom(
      this.httpClient.get<BundleEndpointR4>(
        'https://open.epic.com/Endpoints/R4'
      )
    );
    this.dstu2Endpoints = dstu2EndpointsBundle.entry
      ?.filter((x) => !!x.resource)
      .map((x) => x.resource) as any;
    this.r4Endpoints = r4EndpointsBundle.entry
      ?.filter((x) => !!x.resource)
      .map((x) => x.resource) as any;
    this.r4Endpoints.push({
      address: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4',
      connectionType: 'direct-project',
      name: 'Epic Test Server (R4)',
      payloadMimeType: 'application/json',
      status: 'active',
    });

    this.dstu2Endpoints.push({
      address: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/DSTU2',
      connectionType: 'direct-project',
      name: 'Epic Test Server (DSTU2)',
      payloadMimeType: 'application/json',
      status: 'active',
    });
  }

  dismiss() {
    this.isDismissed = true;
  }
}
