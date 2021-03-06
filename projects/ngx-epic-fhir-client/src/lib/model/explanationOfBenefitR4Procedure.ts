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

export interface ExplanationOfBenefitR4Procedure {
  /**
   * Date of the procedure.
   */
  date?: string;
  procedureCodeableConcept?: CodeableConcept;
  /**
   * The sequence ID.
   */
  sequence?: any;
}
