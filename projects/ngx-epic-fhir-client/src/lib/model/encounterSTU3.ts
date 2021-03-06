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
import { EncounterR4Location } from './encounterR4Location';
import { EncounterSTU3Hospitalization } from './encounterSTU3Hospitalization';
import { EncounterSTU3Meta } from './encounterSTU3Meta';
import { EncounterSTU3Participant } from './encounterSTU3Participant';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A single Encounter resource.
 */
export interface EncounterSTU3 {
  appointment: Reference;
  /**
   * Classification of patient encounter. For organizations in the Netherlands, this element includes only the ACT encounter code, following the same logic used for Care Everywhere encounter CDA documents. This element is available starting in the November 2021 version of Epic.
   */
  _class?: any;
  /**
   * Reference to the Condition (Problem) resource. Returns the principal problem for the hospital encounter. Used only for hospital encounters. This element is available starting in the November 2021 version of Epic.
   */
  diagnosis: Array<any>;
  hospitalization: EncounterSTU3Hospitalization;
  /**
   * The Encounter FHIR ID.
   */
  id?: string;
  identifier?: Array<Identifier>;
  /**
   * List of locations where the patient has been.
   */
  location: Array<EncounterR4Location>;
  meta: EncounterSTU3Meta;
  /**
   * List of participants involved in the encounter.
   */
  participant: Array<EncounterSTU3Participant>;
  partOf: Reference;
  period: Period;
  priority: CodeableConcept;
  reason: Array<CodeableConcept>;
  /**
   * The encounter status. Full list of statuses can be found <a href=\"http://hl7.org/fhir/stu3/valueset-encounter-status.html\">here</a>.
   */
  status?: string;
  subject?: Reference;
  type: Array<CodeableConcept>;
}
