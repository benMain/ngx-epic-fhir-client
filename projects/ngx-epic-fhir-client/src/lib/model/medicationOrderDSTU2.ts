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
import { Identifier } from './identifier';
import { MedicationOrderDSTU2DispenseRequest } from './medicationOrderDSTU2DispenseRequest';
import { MedicationOrderDSTU2DosageInstruction } from './medicationOrderDSTU2DosageInstruction';
import { MedicationOrderDSTU2Substitution } from './medicationOrderDSTU2Substitution';
import { Reference } from './reference';

/**
 * An instance of the DSTU2 MedicationOrder resource.
 */
export interface MedicationOrderDSTU2 {
  /**
   * The date (and perhaps time) when the prescription was written.
   */
  dateWritten: string;
  dispenseRequest?: MedicationOrderDSTU2DispenseRequest;
  /**
   * Indicates how the medication is to be used by the patient.
   */
  dosageInstruction?: Array<MedicationOrderDSTU2DosageInstruction>;
  identifier?: Array<Identifier>;
  medicationReference?: Reference;
  /**
   * Extra information about the prescription that could not be conveyed by the other attributes.
   */
  note?: string;
  patient?: Reference;
  prescriber?: Reference;
  /**
   * A code specifying the state of the prescribing event. Describes the lifecycle of the prescription. For admitted patients all outpatient medications will return a status of 'on-hold'. During discharge these outpatient medications may revert back to 'active' or be discontinued based on clinical outcomes of the inpatient stay.
   */
  status?: string;
  substitution?: MedicationOrderDSTU2Substitution;
}