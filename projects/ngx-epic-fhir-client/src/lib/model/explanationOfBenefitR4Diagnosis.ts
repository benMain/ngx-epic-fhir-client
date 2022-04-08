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

export interface ExplanationOfBenefitR4Diagnosis {
  diagnosisCodeableConcept?: CodeableConcept;
  packageCode?: CodeableConcept;
  /**
   * The sequence ID.
   */
  sequence?: any;
  type?: Array<CodeableConcept>;
}
