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
import { CarePlanR4Activity } from './carePlanR4Activity';
import { CodeableConcept } from './codeableConcept';
import { Reference } from './reference';

/**
 * An instance of the R4 CarePlan resource.
 */
export interface CarePlanR4 {
  /**
   * Actions to occur as part of the care plan.
   */
  activity: Array<CarePlanR4Activity>;
  category: Array<CodeableConcept>;
  /**
   * Always \"order.\"
   */
  intent?: string;
  /**
   * Always \"active.\"
   */
  status?: string;
  subject?: Reference;
}
