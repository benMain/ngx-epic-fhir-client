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
import { EpisodeOfCareR4Diagnosis } from './episodeOfCareR4Diagnosis';
import { Extension } from './extension';
import { Identifier } from './identifier';
import { Period } from './period';
import { Reference } from './reference';

/**
 * A Response Type
 */
export interface EpisodeOfCareR4 {
  extension: Array<Extension>;
  /**
   * Returns the list of diagnoses associated with the episode. Deleted episodes are not included.
   */
  diagnosis: Array<EpisodeOfCareR4Diagnosis>;
  /**
   * EpisodeOfCare FHIR ID
   */
  id?: string;
  identifier?: Array<Identifier>;
  patient?: Reference;
  period?: Period;
  /**
   * The episode status of active, finished, or cancelled. These correspond to the Epic episode statuses of active, resolved, and deleted, respectively.
   */
  status?: string;
  team?: Array<Reference>;
  type?: Array<CodeableConcept>;
}
