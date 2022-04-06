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
import { MedicationRequestR4DosageInstructionDoseAndRate } from './medicationRequestR4DosageInstructionDoseAndRate';
import { MedicationRequestR4DosageInstructionTiming } from './medicationRequestR4DosageInstructionTiming';

/**
 * Dosage instruction details.
 */
export interface MedicationRequestR4DosageInstruction { 
    /**
     * Whether the frequency is PRN.
     */
    asNeededBoolean: boolean;
    doseAndRate: MedicationRequestR4DosageInstructionDoseAndRate;
    method: CodeableConcept;
    /**
     * <p>The patient instructions for the prescription.</p> <p>For a multi-line sig, this is the same.</p>
     */
    patientInstruction: string;
    route: CodeableConcept;
    /**
     * This element is populated only for multi-line sigs.
     */
    sequence: any;
    /**
     * <p>The patient instructions for the prescription.</p> <p>For a multi-line sig, this is the same.</p>
     */
    text: string;
    timing: MedicationRequestR4DosageInstructionTiming;
}