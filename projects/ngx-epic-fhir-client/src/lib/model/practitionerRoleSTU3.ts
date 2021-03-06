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
import { CodeableConcept } from './codeableConcept';
import { PractitionerRoleSTU3Meta } from './practitionerRoleSTU3Meta';
import { Reference } from './reference';

/**
 * An instance of the STU3 PractitionerRole resource.
 */
export interface PractitionerRoleSTU3 {
  /**
   * Whether the unique address is active.
   */
  active: boolean;
  code: Array<CodeableConcept>;
  location: Array<Reference>;
  meta: PractitionerRoleSTU3Meta;
  practitioner: Reference;
  specialty: Array<CodeableConcept>;
  /**
   * Contact information specific to the unique address.
   */
  telecom: Array<any>;
}
