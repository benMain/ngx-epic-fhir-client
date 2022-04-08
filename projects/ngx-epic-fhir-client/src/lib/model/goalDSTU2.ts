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
import { Reference } from './reference';

/**
 * A single Goal resource.
 */
export interface GoalDSTU2 {
  addresses: Array<Reference>;
  author: Reference;
  category: Array<CodeableConcept>;
  /**
   * What the goal entails. SNOMED code or other text describing the goal.
   */
  description?: string;
  /**
   * The Goal FHIR ID.
   */
  id?: string;
  /**
   * When pursuit of the goal begins.
   */
  startDate: string;
  /**
   * <p>The current status of the goal. The following values are supported:</p> <ul> <li>in-progress,</li> <li>achieved</li> <li>cancelled</li> </ul>
   */
  status?: string;
  subject: Reference;
}
