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
import { PatientR4Name } from './patientR4Name';
import { Period } from './period';

export interface PatientR4Contact {
  address?: Address;
  name?: PatientR4Name;
  period?: Period;
  relationship?: Array<CodeableConcept>;
  /**
   * A Response Type
   */
  telecom?: Array<any>;
}
