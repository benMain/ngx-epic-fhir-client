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
import { MedicationRequestR4DoseAndRate } from './medicationRequestR4DoseAndRate';
import { MedicationRequestR4Timing } from './medicationRequestR4Timing';

export interface MedicationRequestR4DosageInstruction {
  /**
   * Whether the frequency is PRN.
   */
  asNeededBoolean?: boolean;
  /**
   * A Response Type
   */
  doseAndRate?: Array<MedicationRequestR4DoseAndRate>;
  method?: CodeableConcept;
  /**
   * <p>The patient instructions for the prescription.</p> <p>For a multi-line sig, this is the same.</p>
   */
  patientInstruction?: string;
  route?: CodeableConcept;
  /**
   * This element is populated only for multi-line sigs.
   */
  sequence?: any;
  /**
   * <p>The patient instructions for the prescription.</p> <p>For a multi-line sig, this is the same.</p>
   */
  text?: string;
  timing?: MedicationRequestR4Timing;
}
