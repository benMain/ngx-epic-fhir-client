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
import { Coding } from './coding';
import { Extension } from './extension';

/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export interface CodeableConcept {
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: Array<Extension>;
  /**
   * A reference to a code defined by a terminology system.
   */
  coding?: Array<Coding>;
  text?: string;
}
