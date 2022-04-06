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

/**
 * A Response Type
 */
export interface ObservationDSTU2ReferenceRange { 
    /**
     * Age range.
     */
    age?: any;
    /**
     * High range.
     */
    high?: any;
    /**
     * Low range.
     */
    low?: any;
    meaning?: CodeableConcept;
    /**
     * Text based reference range.
     */
    text?: string;
}