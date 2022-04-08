export interface CapabilityStatement {
  resourceType: 'CapabilityStatement';
  status: 'draft' | 'active' | 'retired' | 'unknown';
  experimental: boolean;
  date: string;
  copyright: string;
  kind: 'instance' | 'capability' | 'requirements';
  software: {
    name: string;
    version: string;
    releaseDate: string;
  };
  fhirVersion: string;
  acceptUnknown: string;
  format: ('xml' | 'json' | 'ttl' | 'mime type')[];
  rest: CapabilityStatementRestElement[];
}

export interface CapabilityStatementRestElement {
  mode: 'client' | 'server';
  security: {
    extension: CapabilityStatementRestSecurityExtensionElement[];
  };
}

export interface CapabilityStatementRestSecurityExtensionElement {
  url: string;
  extension: CapabilityStatementRestSecurityExtensionExtensionElement[];
}

export interface CapabilityStatementRestSecurityExtensionExtensionElement {
  valueUri: string;
  url: 'authorize' | 'token';
}
