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
import { FamilyMemberHistoryR4Condition } from './familyMemberHistoryR4Condition';
import { Identifier } from './identifier';
import { Period } from './period';

/**
 * A Response Type
 */
export interface FamilyMemberHistoryR4 {
  /**
   * Family member’s birth date
   */
  bornDate: string;
  bornPeriod: Period;
  /**
   * Condition that the related person had
   */
  condition: Array<FamilyMemberHistoryR4Condition>;
  dataAbsentReason: CodeableConcept;
  /**
   * When history was recorded or last updated
   */
  date: string;
  /**
   * Whether or not the family member is deceased
   */
  deceasedBoolean: boolean;
  /**
   * FHIR ID for this FamilyMemberHistory instance
   */
  id?: string;
  identifier: Array<Identifier>;
  /**
   * The family member described
   */
  name: string;
  note: Array<Annotation>;
  relationship?: CodeableConcept;
  sex?: CodeableConcept;
  /**
   * Completion status for family member's history. Either \"health-unknown\" or \"completed\".
   */
  status?: string;
}
