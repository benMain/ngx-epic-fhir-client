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
import { Extension } from './extension';
import { Reference } from './reference';

/**
 * Collection details.
 */
export interface SpecimenSTU3Collection {
  bodySite: CodeableConcept;
  extension: Array<Extension>;
  /**
   * Instant derived from the date and time of collection. When there is no date, this item returns null.
   */
  collectedDateTime: string;
  collector: Reference;
  method: CodeableConcept;
  /**
   * Total collection volume.
   */
  quantity: any;
}
