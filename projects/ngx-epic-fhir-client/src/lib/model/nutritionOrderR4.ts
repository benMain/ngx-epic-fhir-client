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
import { Annotation } from './annotation';
import { NutritionOrderR4OralDiet } from './nutritionOrderR4OralDiet';
import { Reference } from './reference';

/**
 * An instance of the R4 NutritionOrder resource.
 */
export interface NutritionOrderR4 {
  /**
   * The date and time of the order.
   */
  dateTime?: string;
  /**
   * Identifier.
   */
  id?: string;
  /**
   * <p>The current intention for an order. Supported values include:</p> <ul><li>order <li>plan <li>proposal </ul>
   */
  intent?: string;
  note?: Array<Annotation>;
  oralDiet: NutritionOrderR4OralDiet;
  patient?: Reference;
  /**
   * <p>The status of a nutrition order. Supported value include:</p> <ul><li>draft <li>active <li>completed <li>revoked <li>unknown <li>entered-in-error
   */
  status?: string;
}
