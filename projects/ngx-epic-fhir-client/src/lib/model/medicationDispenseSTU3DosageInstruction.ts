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
import { MedicationDispenseSTU3Timing } from './medicationDispenseSTU3Timing';

export interface MedicationDispenseSTU3DosageInstruction {
  additionalInstruction?: Array<CodeableConcept>;
  /**
   * Whether the frequency is PRN.
   */
  asNeededBoolean?: boolean;
  /**
   * Amount of medication per dose. The amount of therapeutic or other substance given at one administration event.
   */
  doseQuantity?: any;
  /**
   * Parses the lower and upper end of a dose.
   */
  doseRange?: any;
  /**
   * The high and low values or discrete value of a medication’s rate of infusion.
   */
  rateQuantity?: any;
  /**
   * The high and low values of a medication’s rate of infusion.
   */
  rateRange?: any;
  route?: CodeableConcept;
  /**
   * The medication instructions.
   */
  text?: string;
  timing?: MedicationDispenseSTU3Timing;
}