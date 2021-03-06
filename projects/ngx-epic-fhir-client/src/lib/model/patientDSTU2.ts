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
import { Address } from './address';
import { CodeableConcept } from './codeableConcept';
import { Identifier } from './identifier';
import { PatientDSTU2Name } from './patientDSTU2Name';
import { PatientDSTU2Telecom } from './patientDSTU2Telecom';
import { PatientR4Communication } from './patientR4Communication';
import { Reference } from './reference';

/**
 * A single Patient FHIR resource.
 */
export interface PatientDSTU2 {
  /**
   * Whether the patient record is active.
   */
  active?: boolean;
  address?: Array<Address>;
  /**
   * The patient's date of birth in the format YYYY-MM-DD.
   */
  birthDate: string;
  careProvider: Array<Reference>;
  /**
   * A list of languages used to communicate with the patient, along with an indicator of which is preferred.
   */
  communication?: Array<PatientR4Communication>;
  /**
   * Whether the patient is deceased.
   */
  deceasedBoolean?: boolean;
  /**
   * The date and time at which the patient was deceased.
   */
  deceasedDateTime?: string;
  /**
   * The patient's legal sex.
   */
  gender?: string;
  /**
   * The Patient's FHIR ID.
   */
  id?: string;
  identifier?: Array<Identifier>;
  maritalStatus?: CodeableConcept;
  /**
   * <p>The patient's name. </p> <ul> <li>Starting in the May 2020 version of Epic, this element includes both the patient's \"official\" name, which is the patient's legal name, and the patient's \"usual\" name, which is the patient's preferred name. <ul><li> If the patient does not have a preferred name defined in your system, the \"usual\" name also holds the patient's legal name.</li> <li>In a patient-facing context, this web service always shows the patient's preferred name, unless a user has the security point 'Only Show Legal Name'.</li></ul></li> <li>In February 2020 and earlier, this element returns only the patient's legal name with a use code of \"usual\".</li> </ul>
   */
  name?: Array<PatientDSTU2Name>;
  /**
   * Telephone numbers and email addresses for the patient, along with their use (i.e. home, work, etc.)
   */
  telecom: Array<PatientDSTU2Telecom>;
}
