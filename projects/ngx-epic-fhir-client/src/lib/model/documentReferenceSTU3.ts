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
import { DocumentReferenceSTU3Content } from './documentReferenceSTU3Content';
import { DocumentReferenceSTU3Context } from './documentReferenceSTU3Context';
import { DocumentReferenceSTU3Meta } from './documentReferenceSTU3Meta';
import { Identifier } from './identifier';
import { Reference } from './reference';

/**
 * An instance of the STU3 DocumentReference resource.
 */
export interface DocumentReferenceSTU3 { 
    authenticator: Reference;
    author: Reference;
    _class?: CodeableConcept;
    content?: DocumentReferenceSTU3Content;
    context: DocumentReferenceSTU3Context;
    /**
     * The instant when the exam was finalized.
     */
    created: string;
    /**
     * The name of the procedure.
     */
    description: string;
    /**
     * If the study is addended, returns \"amended\". Otherwise, returns \"final\".
     */
    docStatus: string;
    /**
     * The DocumentReference FHIR ID.
     */
    id?: string;
    identifier: Identifier;
    /**
     * The instant when the study was finalized. If the study was addended, returns the instant when the last addendum was finalized.
     */
    indexed?: string;
    masterIdentifier?: Identifier;
    meta: DocumentReferenceSTU3Meta;
    /**
     * The status of the result. Always \"current\".
     */
    status?: string;
    subject: Reference;
    type?: CodeableConcept;
}