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
import { CarePlanDSTU2Activity } from './carePlanDSTU2Activity';
import { Reference } from './reference';

/**
 * A single CarePlan resource.
 */
export interface CarePlanDSTU2 {
  /**
   * Action to occur as part of the plan.
   */
  activity?: Array<CarePlanDSTU2Activity>;
  addresses: Array<Reference>;
  goal: Array<Reference>;
  /**
   * The CarePlan FHIR ID.
   */
  id?: string;
  /**
   * Status of the CarePlan. Always returns \"Active\".
   */
  status?: string;
  subject?: Reference;
}
