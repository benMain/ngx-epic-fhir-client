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
import { MedicationR4Ingredient } from './medicationR4Ingredient';

/**
 * An instance of the R4 Medication FHIR resource.
 */
export interface MedicationR4 { 
    code: CodeableConcept;
    extension: Extension;
    form: CodeableConcept;
    /**
     * The Medication FHIR ID.
     */
    id?: string;
    ingredient: MedicationR4Ingredient;
}