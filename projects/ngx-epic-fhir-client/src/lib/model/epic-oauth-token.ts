export interface EpicOAuthToken {
  /**
   * This parameter contains the access token issued by Epic to your application and is used in future requests.
   * Starting in the May 2020 Epic version, Epic community members can enable a feature that makes all OAuth 2.0 tokens and codes, including access tokens, JSON Web Tokens (JWTs) instead of opaque tokens.
   * This change allows apps to inspect the tokens directly without needing to call the Introspection endpoint, but it also increases the length of these tokens significantly.
   * This feature is enabled in the fhir.epic.com sandbox. Developers should ensure that app URL handling does not truncate OAuth 2.0 tokens and codes.
   */
  access_token: string;
  /**
   * In Epic's OAuth 2.0 implementation, this parameter always includes the value bearer.
   */
  token_type: 'bearer';
  /**
   * This parameter contains the number of seconds for which the access token is valid.
   */
  expires_in: number;
  /**
   * The timestamp when the token expires.
   */
  expires_at: number;
  /**
   * This parameter describes the access your application is authorized for.
   */
  scope: string;
  /**
   * Returned only for applications that have requested an openid scope. See below for more info on OpenID Connect id_tokens.
   * This parameter follows the guidelines of the OpenID Connect (OIDC) Core 1.0 specification. It is signed but not encrypted.
   */
  id_token?: string;
  /**
   * This parameter identifies provides the FHIR ID for the patient, if a patient is in context at time of launch.
   */
  patient?: string;
  /**
   * This parameter identifies the DSTU2 FHIR ID for the patient, if a patient is in context at time of launch.
   */
  '__epic.dstu2.patient': string;
  /**
   * This parameter identifies the FHIR ID for the patient’s encounter, if in context at time of launch. The encounter token corresponds to the FHIR Encounter resource.
   */
  encounter: string;
  /**
   * This parameter identifies the FHIR ID for the encounter department, if in context at time of launch. The location token corresponds to the FHIR Location resource.
   */
  location: string;
  /**
   * This parameter identifies the FHIR ID for the patient’s appointment, if appointment context is available at time of launch. The appointment token corresponds to the FHIR Appointment resource.
   */
  appointment: string;
  /**
   * This parameter identifies the FHIR ID of the user's login department for launches from Hyperspace. The loginDepartment token corresponds to the FHIR Location resource.
   */
  loginDepartment: string;
  /**
   * This parameter will have the same value as the earlier state parameter. For more information, refer to Step 3.
   */
  state: string;
}
