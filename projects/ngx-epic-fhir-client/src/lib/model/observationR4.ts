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
import { Annotation } from './annotation';
import { CodeableConcept } from './codeableConcept';
import { Extension } from './extension';
import { ObservationR4Component } from './observationR4Component';
import { Reference } from './reference';

/**
 * An instance of the R4 Observation resource.
 */
export interface ObservationR4 {
  bodySite?: CodeableConcept;
  category?: Array<CodeableConcept>;
  code?: CodeableConcept;
  /**
   * Component information.
   */
  component?: Array<ObservationR4Component>;
  dataAbsentReason: CodeableConcept;
  /**
   * <p>The date and time the observation was taken. <p>When multiple measurements are involved, such as for growth chart percentiles (supported starting in Epic version August 2021), the date and time of the most recent is returned.
   */
  effectiveDateTime?: string;
  encounter?: Reference;
  interpretation: Array<CodeableConcept>;
  /**
   * The date and time the observation was documented. This is always the current time.
   */
  issued?: string;
  method: CodeableConcept;
  note: Array<Annotation>;
  performer?: Array<Reference>;
  /**
   * The status of the observation. This is set to amended or final depending on whether the field has been corrected.
   */
  status?: string;
  subject?: Reference;
  extension: Array<Extension>;
  valueCodeableConcept?: CodeableConcept;
  /**
   * This element is populated if the data type is date. Only one of the value* elements is required.
   */
  valueDateTime?: string;
  /**
   * This element is populated if a value has units or the data type is numeric or a percentile. Only one of the value* elements is required.
   */
  valueQuantity?: any;
  /**
   * This element is populated if a value doesn't have units or the data type is string. Only one of the value[x] elements is required.
   */
  valueString?: string;
  /**
   * This element is populated if the data type is time. Only one of the value* elements is required.
   */
  valueTime?: string;
}