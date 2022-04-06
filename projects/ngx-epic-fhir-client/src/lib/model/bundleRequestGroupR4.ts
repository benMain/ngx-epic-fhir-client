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
import { BundleEntryRequestGroupR4 } from './bundleEntryRequestGroupR4';

/**
 * Contains a collection of resources.
 */
export interface BundleRequestGroupR4 { 
    /**
     * Entry in the bundle.
     */
    entry?: Array<BundleEntryRequestGroupR4>;
}