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
import { Extension } from './extension';
import { Reference } from './reference';

/**
 * An instance of the R4 BodyStructure resource.
 */
export interface BodyStructureR4 {
  /**
   * True if the tooth is actively in a patient’s dentition. False if it has been removed.
   */
  active: boolean;
  extension: Array<Extension>;
  location: CodeableConcept;
  morphology: CodeableConcept;
  patient?: Reference;
}
