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
import { Identifier } from './identifier';

/**
 * An instance of the R4 Questionnaire FHIR resource.
 */
export interface QuestionnaireR4 { 
    /**
     * <p>The ID and ID type items of the questionnaire</p>
     */
    code: any;
    /**
     * <p>The questionnaire post-text</p>
     */
    copyright: string;
    /**
     * <p>The date for a given version of the questionnaire</p>
     */
    date: string;
    identifier: Identifier;
    /**
     * <p>The name of the questionnaire.</p>
     */
    name: string;
    /**
     * <p>Always \"active\"</p>
     */
    status?: string;
    /**
     * <p>The patient-facing name of the questionnaire.</p>
     */
    title: string;
    /**
     * <p>The version of the questionnaire.</p>
     */
    version: string;
}