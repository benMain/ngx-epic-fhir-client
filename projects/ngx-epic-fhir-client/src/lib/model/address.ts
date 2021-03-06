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
import { Extension } from './extension';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export interface Address {
  id?: string;
  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: Array<Extension>;
  /**
   * The purpose of this address.
   */
  use?: Address.UseEnum;
  /**
   * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
   */
  type?: Address.TypeEnum;
  text?: string;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  line?: Array<string>;
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: string;
}
export namespace Address {
  export type UseEnum = 'home' | 'work' | 'temp' | 'old' | 'billing';
  export const UseEnum = {
    Home: 'home' as UseEnum,
    Work: 'work' as UseEnum,
    Temp: 'temp' as UseEnum,
    Old: 'old' as UseEnum,
    Billing: 'billing' as UseEnum,
  };
  export type TypeEnum = 'postal' | 'physical' | 'both';
  export const TypeEnum = {
    Postal: 'postal' as TypeEnum,
    Physical: 'physical' as TypeEnum,
    Both: 'both' as TypeEnum,
  };
}
