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
import { ConditionSTU3Meta } from './conditionSTU3Meta';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A Response Type
 */
export interface ConditionSTU3 {
  abatementPeriod: Period;
  /**
   * The date the condition was noted.
   */
  assertedDate: string;
  category: Array<CodeableConcept>;
  /**
   * The status of the problem. Can be active, inactive, or resolved.
   */
  clinicalStatus?: string;
  code?: CodeableConcept;
  context: Reference;
  /**
   * The FHIR ID for this Condition.
   */
  id?: string;
  meta: ConditionSTU3Meta;
  note: Array<Annotation>;
  onsetPeriod: Period;
  severity: CodeableConcept;
  subject?: Reference;
  /**
   * If this is on the patient's local chart, the value is \"confirmed\". If it is outside data, it is \"unconfirmed\".
   */
  verificationStatus?: string;
}
