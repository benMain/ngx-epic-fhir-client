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

/**
 * <p>The contact’s preferred name. The system determines this from the contact’s linked patient record if available.</p> <p>For organizations in the Netherlands, this element represents an <a href=\"https://simplifier.net/NictizSTU3-Zib2017/nl-core-humanname\">nl-core-humanname</a> value.</p>
 */
export interface PatientSTU3Name {
  extension: Array<Extension>;
}