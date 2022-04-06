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
import { CDSHooksMedicationRequestR4DispenseRequest } from './cDSHooksMedicationRequestR4DispenseRequest';
import { CodeableConcept } from './codeableConcept';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * An instance of the R4 MedicationRequest FHIR resource.
 */
export interface CDSHooksMedicationRequestR4 { 
    category?: CodeableConcept;
    dispenseRequest?: CDSHooksMedicationRequestR4DispenseRequest;
    encounter?: Reference;
    identifier?: Identifier;
    /**
     * Returns “plan” for historical medications. Returns “order” for other medications.
     */
    intent?: string;
    medicationReference?: Reference;
    priorPrescription?: Reference;
    /**
     * Determines whether the order is historical.
     */
    reportedBoolean: boolean;
    requester?: Reference;
    /**
     * Always set to \"draft\".
     */
    status?: string;
    subject?: Reference;
}