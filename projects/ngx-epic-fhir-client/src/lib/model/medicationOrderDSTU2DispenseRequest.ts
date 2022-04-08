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
import { Period } from './period';

/**
 * Indicates details about the requested medication.
 */
export interface MedicationOrderDSTU2DispenseRequest {
  /**
   * Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last. In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage) When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
   */
  expectedSupplyDuration?: any;
  /**
   * An integer indicating the number of repeats of the Dispense. UsageNotes: For example, the number of times the prescribed quantity is to be supplied including the initial standard fill.
   */
  numberOfRepeatsAllowed: any;
  /**
   * The amount that is to be dispensed for one fill.
   */
  quantity?: any;
  validityPeriod?: Period;
}
