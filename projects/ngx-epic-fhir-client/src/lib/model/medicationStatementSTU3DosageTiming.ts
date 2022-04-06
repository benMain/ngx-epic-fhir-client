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
import { MedicationStatementSTU3DosageTimingRepeat } from './medicationStatementSTU3DosageTimingRepeat';

/**
 * <p>The frequency.</p> <p>Starting in February 2022 and in November 2021 by special update, patient-reported frequency information is returned.</p>
 */
export interface MedicationStatementSTU3DosageTiming { 
    repeat?: MedicationStatementSTU3DosageTimingRepeat;
}