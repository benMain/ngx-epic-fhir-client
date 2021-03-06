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
export interface DeviceUseStatementR4 {
  bodySite: CodeableConcept;
  device?: Reference;
  extension: Array<Extension>;
  /**
   * The DeviceUseStatement FHIR ID.
   */
  id?: string;
  note: Array<Annotation>;
  /**
   * <p>One of the following values:</p> <ul> <li>active</li> <li>completed</li> <li>intended</li> <li>stopped</li> </ul>
   */
  status: string;
  subject?: Reference;
}
