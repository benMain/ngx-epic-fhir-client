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
export interface AllergyIntoleranceR4Reaction { 
    /**
     * The name of the reaction.
     */
    description?: string;
    manifestation?: CodeableConcept;
    /**
     * <p>The degree of the patient's reaction. Possible values are:</p> <li>mild</li> <li>moderate</li> <li>severe</li> </ul>
     */
    severity?: string;
}