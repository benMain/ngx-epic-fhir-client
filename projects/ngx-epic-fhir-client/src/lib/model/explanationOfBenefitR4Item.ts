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
 * Service lines.
 */
export interface ExplanationOfBenefitR4Item { 
    /**
     * Diagnosis numbers.
     */
    diagnosisSequence: any;
    locationCodeableConcept?: CodeableConcept;
    modifier?: CodeableConcept;
    productOrService?: CodeableConcept;
    /**
     * Quantity
     */
    quantity?: any;
    revenue?: CodeableConcept;
    /**
     * The sequence ID.
     */
    sequence: any;
    /**
     * The service date.
     */
    servicedDate?: string;
    servicedPeriod?: Period;
}