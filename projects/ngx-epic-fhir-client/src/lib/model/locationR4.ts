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
 */
import { Address } from './address';
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * An instance of the R4 Location FHIR resource.
 */
export interface LocationR4 {
  address?: Address;
  /**
   * A list of alternative names that the location is known as or was known as in the past.
   */
  alias?: string;
  /**
   * Additional details about the location that can be shown to further identify the location.
   */
  description?: string;
  endpoint?: Array<Reference>;
  extension?: Array<Extension>;
  /**
   * The Location FHIR ID.
   */
  id?: string;
  identifier?: Array<Identifier>;
  managingOrganization?: Reference;
  /**
   * Epic supports only an instance value in this element. Instance is a specific, findable location.
   */
  mode?: string;
  /**
   * The name of the location.
   */
  name?: string;
  partOf?: Reference;
  /**
   * The active status of a location (active, inactive, etc.).
   */
  status?: string;
  /**
   * The contact details of the location.
   */
  telecom?: Array<any>;
  type?: Array<CodeableConcept>;
}
