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
import { Extension } from './extension';
import { ImmunizationRecommendationR4Recommendation } from './immunizationRecommendationR4Recommendation';
import { Reference } from './reference';

/**
 * A Response Type
 */
export interface ImmunizationRecommendationR4 {
  /**
   * The date when the immunization recommendation was created.
   */
  date?: string;
  extension: Array<Extension>;
  patient?: Reference;
  /**
   * The immunization recommendation.
   */
  recommendation?: Array<ImmunizationRecommendationR4Recommendation>;
}
