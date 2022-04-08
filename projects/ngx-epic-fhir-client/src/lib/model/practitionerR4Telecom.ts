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

export interface PractitionerR4Telecom {
  /**
   * Always set to \"email\"
   */
  system?: string;
  /**
   * The email for the Epic user-based practitioner. Obtained from the user record.
   */
  value?: string;
}
