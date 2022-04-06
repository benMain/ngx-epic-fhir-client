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

/**
 * <p>Device carrier identification details.</p> <p>Under FDA regulations, all medical devices are required to include a Unique Device Identifier (UDI) on device labels and packages, in both human-readable and barcode format. The FDA also maintains a public database of medical devices and UDI information called the <a href=\"https://accessgudid.nlm.nih.gov/\">Global Unique Device Identification Database (GUDID)</a>.</p> <p>A Unique Device Identifier (UDI) is a unique numeric or alphanumeric code that is comprised of two components:</p> <ul>   <li>Device Identifier (DI) (\"Static UDI\") – a mandatory, fixed portion of a UDI that identifiers the labeler and specific version or model of a device.</li>   <li>Production Identifiers (PI) (\"Dynamic UDI\") – a conditional, variable portion of a UDI that identifies one or more of the following:</li>   <ul>   <li>Lot or batch number within which a device was manufactured</li>   <li>Serial number of a specific device</li>   <li>Expiration date of a specific device</li>   <li>Production date of a specific device</li>   <li>Distinct identification code for a human cell, tissue, or cellular- and tissue-based product</li> </ul> </ul> <p>When documenting a UDI for an implant in OpTime, you will need to use an identifier that is in a valid format for the selected issuer. Here are some example UDIs you can use for testing:</p> <table class=\"table table-hover\"> <tr>   <th>UDI Type / Issuer</th>   <th>Example Device ID</th> </tr> <tr>   <td>ICCBBA</td>   <td>W4184228005T0473</td> </tr> <tr>   <td>HIBC</td>   <td>MDLXMAG120200</td> </tr> <tr>   <td>GS1</td>   <td>00822409025305</td> </tr> </table>
 */
export interface DeviceR4UdiCarrier { 
    /**
     * <p>Device carrier's UDI human-readable barcode string.</p>
     */
    carrierHRF: string;
    /**
     * <p>Device identifier - fixed portion of UDI.</p>
     */
    deviceIdentifier: string;
    /**
     * <p>Always set to \"unknown\".</p>
     */
    entryType: string;
}