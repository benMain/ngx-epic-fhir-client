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
import { MedicationRequestSTU3Timing } from './medicationRequestSTU3Timing';

export interface MedicationRequestSTU3DosageInstruction {
  additionalInstruction?: Array<CodeableConcept>;
  /**
   * Whether the frequency is PRN.
   */
  asNeededBoolean?: boolean;
  /**
   * Amount of medication per dose. The amount of therapeutic or other substance given at one administration event.
   */
  doseQuantity?: any;
  extension?: Array<Extension>;
  method?: CodeableConcept;
  /**
   * <p>The patient instructions for the prescription.</p> <p>For a multi-line sig, this is the same.</p>
   */
  patientInstruction?: string;
  /**
   * <p>Amount of medication per unit of time. Used when the rate is a discrete value.</p> <p>Available starting in February 2022 and in November 2021 by special update.</p>
   */
  rateQuantity?: any;
  /**
   * <p>Amount of medication per unit of time. Used when the rate is a range.</p> <p>Available starting in February 2022 and in November 2021 by special update.</p>
   */
  rateRange?: any;
  route?: CodeableConcept;
  /**
   * This element is populated only for multi-line sigs.
   */
  sequence?: any;
  /**
   * <p>The patient instructions for the prescription.</p> <p>For a multi-line sig, this is the same.</p>
   */
  text?: string;
  timing?: MedicationRequestSTU3Timing;
}
