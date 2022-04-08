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

export interface MedicationRequestR4DoseAndRate {
  /**
   * Amount of medication per dose. The amount of therapeutic or other substance given at one administration event.
   */
  doseQuantity?: any;
  /**
   * A Response Type
   */
  doseRange?: any;
  /**
   * Amount of medication per unit of time.
   */
  rateQuantity?: any;
  /**
   * A Response Type
   */
  rateRange?: any;
  /**
   * A Response Type
   */
  rateRatio?: any;
  type?: CodeableConcept;
}