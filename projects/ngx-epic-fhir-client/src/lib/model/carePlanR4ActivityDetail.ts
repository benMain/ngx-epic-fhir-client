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
import { Period } from './period';

/**
 * Details for this activity.
 */
export interface CarePlanR4ActivityDetail { 
    code: CodeableConcept;
    /**
     * This contains all the questionnaires associated with the encounter.
     */
    instantiatesCanonical: string;
    scheduledPeriod: Period;
    /**
     * Set to In-progress, unless all questionnaires are answered. If all questionnaires are answered, set to Completed.
     */
    status?: string;
}