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
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * An instance of the STU3 DiagnosticReport resource.
 */
export interface DiagnosticReportSTU3 {
  category?: CodeableConcept;
  code?: CodeableConcept;
  context?: Reference;
  /**
   * Clinically relevant time/time period for report.
   */
  effectiveDateTime?: string;
  identifier?: Array<Identifier>;
  /**
   * DateTime this version was released.   Available starting in the February 2022 version of Epic and in the November 2021 version with special update.
   */
  issued?: string;
  /**
   * Participants in producing the report. This is always a reference to the Practitioner resource.
   */
  performer?: Array<any>;
  result?: Array<Reference>;
  /**
   * The status of the report. You can find the list of values here: <a href=\"http://hl7.org/fhir/diagnostic-report-status\">http://hl7.org/fhir/diagnostic-report-status</a>.
   */
  status?: string;
  subject?: Reference;
}
