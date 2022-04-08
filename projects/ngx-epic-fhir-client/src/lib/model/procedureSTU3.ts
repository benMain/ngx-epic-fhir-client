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
import { Identifier } from './identifier';
import { MedicationDispenseR4Performer } from './medicationDispenseR4Performer';
import { Period } from './period';
import { ProcedureSTU3Meta } from './procedureSTU3Meta';
import { Reference } from './reference';

/**
 * A Response Type
 */
export interface ProcedureSTU3 {
  basedOn: Array<Reference>;
  bodySite: Array<CodeableConcept>;
  category: CodeableConcept;
  code?: CodeableConcept;
  context: Reference;
  /**
   * Reference to a device marked as implanted, explanted, or adjusted during the procedure. Only supported for resources with a category of Surgical Procedure.
   */
  focalDevice: Array<any>;
  identifier?: Array<Identifier>;
  location: Reference;
  meta: ProcedureSTU3Meta;
  /**
   * If the procedure was not performed as scheduled. True if status is aborted, otherwise false.
   */
  notDone: boolean;
  /**
   * When the procedure was performed.
   */
  performedDateTime?: string;
  performedPeriod?: Period;
  /**
   * Who performed the Procedure.
   */
  performer: Array<MedicationDispenseR4Performer>;
  reasonCode?: Array<CodeableConcept>;
  reasonReference: Array<Reference>;
  /**
   * <p>The status of the Procedure. </p> <table class=\"table table-hover\"> <tr> <th>API Value</th> <th><a href=\"http://hl7.org/fhir/DSTU2/valueset-procedure-status.html\">FHIR Event Status</a></th> </tr> <tr> <td>active</td> <td>in-progress</td> </tr> <tr> <td>cancelled</td> <td>aborted</td> </tr> <tr> <td>completed</td> <td>completed</td> </tr> <tr> <td>aborted</td> <td>aborted</td> </tr> </table> <p>*Note: Omitted FHIR event status equivalent values are not returned by this search.</p>
   */
  status?: string;
  subject?: Reference;
  usedReference?: Array<Reference>;
}