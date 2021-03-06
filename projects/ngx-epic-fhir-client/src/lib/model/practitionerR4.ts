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
import { Identifier } from './identifier';
import { PractitionerR4Photo } from './practitionerR4Photo';
import { PractitionerR4Telecom } from './practitionerR4Telecom';

/**
 * A Response Type
 */
export interface PractitionerR4 {
  /**
   * Whether the practitioner's record is in active use.
   */
  active: boolean;
  communication: Array<CodeableConcept>;
  /**
   * The gender of the practitioner.
   */
  gender: string;
  identifier: Array<Identifier>;
  /**
   * The name of the practitioner, including all prefixes and suffixes available.
   */
  name: Array<any>;
  /**
   * Contains parameters related to the practitioner photo.
   */
  photo: Array<PractitionerR4Photo>;
  /**
   * The practitioner's qualifications.
   */
  qualification: Array<any>;
  /**
   * Returned only for Epic user-based practitioners. Not returned in a MyChart context.
   */
  telecom: Array<PractitionerR4Telecom>;
}
