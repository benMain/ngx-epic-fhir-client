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
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { Reference } from './reference';

/**
 * A Response Type
 */
export interface ProcedureR4 {
  bodySite: Array<CodeableConcept>;
  category: CodeableConcept;
  code: CodeableConcept;
  note: Array<Annotation>;
  /**
   * When the procedure was performed.
   */
  performedDateTime: string;
  /**
   * <p>The status of the Procedure. </p> <table class=\"table table-hover\"> <tr> <th><a href=\"http://hl7.org/fhir/R4/valueset-event-status.html\">FHIR Event Status</a></th> <th>Returned when...</th> </tr> <tr> <td>completed</td> <td>positive procedure</td> </tr> <tr> <td>not-done</td> <td>pertinent negative</td> </tr> </table> <p>*Note: Omitted FHIR event status equivalent values are not returned by this search</p>
   */
  status?: string;
  subject?: Reference;
  extension: Array<Extension>;
}
