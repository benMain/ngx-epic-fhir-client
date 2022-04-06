import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AdverseEventService } from './api/adverseEvent.service';
import { AllergyIntoleranceService } from './api/allergyIntolerance.service';
import { AppointmentService } from './api/appointment.service';
import { BinaryService } from './api/binary.service';
import { BodyStructureService } from './api/bodyStructure.service';
import { BulkDataStatusRequestService } from './api/bulkDataStatusRequest.service';
import { CarePlanService } from './api/carePlan.service';
import { CareTeamService } from './api/careTeam.service';
import { CommunicationService } from './api/communication.service';
import { ConditionService } from './api/condition.service';
import { ConsentService } from './api/consent.service';
import { CoverageService } from './api/coverage.service';
import { CreateClinicalNotesSTU3Service } from './api/createClinicalNotesSTU3.service';
import { CreateCommunityResourceR4Service } from './api/createCommunityResourceR4.service';
import { CreatePatientEnteredQuestionnairesR4Service } from './api/createPatientEnteredQuestionnairesR4.service';
import { CreatePatientSTU3Service } from './api/createPatientSTU3.service';
import { CreateProblemsR4Service } from './api/createProblemsR4.service';
import { CreateProblemsSTU3Service } from './api/createProblemsSTU3.service';
import { CreateR4Service } from './api/createR4.service';
import { CreateSTU3Service } from './api/createSTU3.service';
import { CreateVitalsR4Service } from './api/createVitalsR4.service';
import { CreateVitalsSTU3Service } from './api/createVitalsSTU3.service';
import { DeviceService } from './api/device.service';
import { DeviceRequestService } from './api/deviceRequest.service';
import { DeviceUseStatementService } from './api/deviceUseStatement.service';
import { DiagnosticReportService } from './api/diagnosticReport.service';
import { DocumentReferenceService } from './api/documentReference.service';
import { EncounterService } from './api/encounter.service';
import { EndpointService } from './api/endpoint.service';
import { EpisodeOfCareService } from './api/episodeOfCare.service';
import { ExpandR4Service } from './api/expandR4.service';
import { ExplanationOfBenefitService } from './api/explanationOfBenefit.service';
import { FamilyMemberHistoryService } from './api/familyMemberHistory.service';
import { FlagService } from './api/flag.service';
import { GoalService } from './api/goal.service';
import { ImmunizationService } from './api/immunization.service';
import { ImmunizationRecommendationService } from './api/immunizationRecommendation.service';
import { LastnSocialHistorySTU3Service } from './api/lastnSocialHistorySTU3.service';
import { ListService } from './api/list.service';
import { LocationService } from './api/location.service';
import { MedicationService } from './api/medication.service';
import { MedicationDispenseService } from './api/medicationDispense.service';
import { MedicationOrderService } from './api/medicationOrder.service';
import { MedicationRequestService } from './api/medicationRequest.service';
import { MedicationStatementService } from './api/medicationStatement.service';
import { NutritionOrderService } from './api/nutritionOrder.service';
import { ObservationService } from './api/observation.service';
import { OrganizationService } from './api/organization.service';
import { PatientService } from './api/patient.service';
import { PractitionerService } from './api/practitioner.service';
import { PractitionerRoleService } from './api/practitionerRole.service';
import { ProcedureService } from './api/procedure.service';
import { ProcedureRequestService } from './api/procedureRequest.service';
import { ProvenanceService } from './api/provenance.service';
import { QuestionnaireService } from './api/questionnaire.service';
import { QuestionnaireResponseService } from './api/questionnaireResponse.service';
import { ReadCommunityResourceR4Service } from './api/readCommunityResourceR4.service';
import { ReadDSTU2Service } from './api/readDSTU2.service';
import { ReadDocumentR4Service } from './api/readDocumentR4.service';
import { ReadDocumentSTU3Service } from './api/readDocumentSTU3.service';
import { ReadEncounterDiagnosisProblemsSTU3Service } from './api/readEncounterDiagnosisProblemsSTU3.service';
import { ReadEncounterLevelLongitudinalDSTU2Service } from './api/readEncounterLevelLongitudinalDSTU2.service';
import { ReadEpisodeR4Service } from './api/readEpisodeR4.service';
import { ReadGeneratedCCDADSTU2Service } from './api/readGeneratedCCDADSTU2.service';
import { ReadImplantsR4Service } from './api/readImplantsR4.service';
import { ReadImplantsandExternalDevicesSTU3Service } from './api/readImplantsandExternalDevicesSTU3.service';
import { ReadOncologyPlanDayR4Service } from './api/readOncologyPlanDayR4.service';
import { ReadOrdersDSTU2Service } from './api/readOrdersDSTU2.service';
import { ReadOrdersR4Service } from './api/readOrdersR4.service';
import { ReadOrdersSTU3Service } from './api/readOrdersSTU3.service';
import { ReadOrdersSurgeriesSTU3Service } from './api/readOrdersSurgeriesSTU3.service';
import { ReadPatientDSTU2Service } from './api/readPatientDSTU2.service';
import { ReadPatientEnteredQuestionnairesR4Service } from './api/readPatientEnteredQuestionnairesR4.service';
import { ReadPatientFYIR4Service } from './api/readPatientFYIR4.service';
import { ReadPatientFYISTU3Service } from './api/readPatientFYISTU3.service';
import { ReadPatientR4Service } from './api/readPatientR4.service';
import { ReadPatientSTU3Service } from './api/readPatientSTU3.service';
import { ReadPatientsWithQuestionnairesDueSTU3Service } from './api/readPatientsWithQuestionnairesDueSTU3.service';
import { ReadProblemsDSTU2Service } from './api/readProblemsDSTU2.service';
import { ReadProblemsR4Service } from './api/readProblemsR4.service';
import { ReadQuestionnairesDueR4Service } from './api/readQuestionnairesDueR4.service';
import { ReadR4Service } from './api/readR4.service';
import { ReadRadiologyResultsR4Service } from './api/readRadiologyResultsR4.service';
import { ReadRadiologyResultsSTU3Service } from './api/readRadiologyResultsSTU3.service';
import { ReadReasonforVisitR4Service } from './api/readReasonforVisitR4.service';
import { ReadReferralR4Service } from './api/readReferralR4.service';
import { ReadResultsDSTU2Service } from './api/readResultsDSTU2.service';
import { ReadResultsR4Service } from './api/readResultsR4.service';
import { ReadResultsSTU3Service } from './api/readResultsSTU3.service';
import { ReadSTU3Service } from './api/readSTU3.service';
import { ReadSurgicalHistoryR4Service } from './api/readSurgicalHistoryR4.service';
import { ReadToothR4Service } from './api/readToothR4.service';
import { ReadVerifiedOrdersR4Service } from './api/readVerifiedOrdersR4.service';
import { ReadVerifiedOrdersSTU3Service } from './api/readVerifiedOrdersSTU3.service';
import { ReadVitalsDSTU2Service } from './api/readVitalsDSTU2.service';
import { ReadVitalsR4Service } from './api/readVitalsR4.service';
import { ReadVitalsSTU3Service } from './api/readVitalsSTU3.service';
import { RelatedPersonService } from './api/relatedPerson.service';
import { RequestGroupService } from './api/requestGroup.service';
import { ResearchStudyService } from './api/researchStudy.service';
import { ResearchSubjectService } from './api/researchSubject.service';
import { ScheduleService } from './api/schedule.service';
import { SearchCodeStatusR4Service } from './api/searchCodeStatusR4.service';
import { SearchCommunityResourceR4Service } from './api/searchCommunityResourceR4.service';
import { SearchDSTU2Service } from './api/searchDSTU2.service';
import { SearchDocumentSTU3Service } from './api/searchDocumentSTU3.service';
import { SearchEncounterDiagnosisProblemsSTU3Service } from './api/searchEncounterDiagnosisProblemsSTU3.service';
import { SearchEncounterLevelLongitudinalDSTU2Service } from './api/searchEncounterLevelLongitudinalDSTU2.service';
import { SearchGeneratedCCDADSTU2Service } from './api/searchGeneratedCCDADSTU2.service';
import { SearchImplantsR4Service } from './api/searchImplantsR4.service';
import { SearchImplantsandExternalDevicesSTU3Service } from './api/searchImplantsandExternalDevicesSTU3.service';
import { SearchInfectionSTU3Service } from './api/searchInfectionSTU3.service';
import { SearchIsolationR4Service } from './api/searchIsolationR4.service';
import { SearchLongitudinalR4Service } from './api/searchLongitudinalR4.service';
import { SearchMedicationsR4Service } from './api/searchMedicationsR4.service';
import { SearchOncologyPlanDayR4Service } from './api/searchOncologyPlanDayR4.service';
import { SearchOrdersDSTU2Service } from './api/searchOrdersDSTU2.service';
import { SearchOrdersR4Service } from './api/searchOrdersR4.service';
import { SearchOrdersSTU3Service } from './api/searchOrdersSTU3.service';
import { SearchOrdersSurgeriesSTU3Service } from './api/searchOrdersSurgeriesSTU3.service';
import { SearchPatientDSTU2Service } from './api/searchPatientDSTU2.service';
import { SearchPatientEnteredQuestionnairesR4Service } from './api/searchPatientEnteredQuestionnairesR4.service';
import { SearchPatientR4Service } from './api/searchPatientR4.service';
import { SearchPatientSTU3Service } from './api/searchPatientSTU3.service';
import { SearchPatientsWithQuestionnairesDueSTU3Service } from './api/searchPatientsWithQuestionnairesDueSTU3.service';
import { SearchProblemsDSTU2Service } from './api/searchProblemsDSTU2.service';
import { SearchQuestionnairesDueR4Service } from './api/searchQuestionnairesDueR4.service';
import { SearchR4Service } from './api/searchR4.service';
import { SearchRadiologyResultsR4Service } from './api/searchRadiologyResultsR4.service';
import { SearchRadiologyResultsSTU3Service } from './api/searchRadiologyResultsSTU3.service';
import { SearchReasonforVisitR4Service } from './api/searchReasonforVisitR4.service';
import { SearchResultsDSTU2Service } from './api/searchResultsDSTU2.service';
import { SearchResultsR4Service } from './api/searchResultsR4.service';
import { SearchResultsSTU3Service } from './api/searchResultsSTU3.service';
import { SearchSTU3Service } from './api/searchSTU3.service';
import { SearchSurgicalHistoryR4Service } from './api/searchSurgicalHistoryR4.service';
import { SearchToothR4Service } from './api/searchToothR4.service';
import { SearchVerifiedOrdersR4Service } from './api/searchVerifiedOrdersR4.service';
import { SearchVerifiedOrdersSTU3Service } from './api/searchVerifiedOrdersSTU3.service';
import { SearchVitalsDSTU2Service } from './api/searchVitalsDSTU2.service';
import { SearchVitalsR4Service } from './api/searchVitalsR4.service';
import { SearchVitalsSTU3Service } from './api/searchVitalsSTU3.service';
import { ServiceRequestService } from './api/serviceRequest.service';
import { SlotService } from './api/slot.service';
import { SpecimenService } from './api/specimen.service';
import { SubstanceService } from './api/substance.service';
import { TaskService } from './api/task.service';
import { UpdateCommunityResourceR4Service } from './api/updateCommunityResourceR4.service';
import { UpdateLDAWR4Service } from './api/updateLDAWR4.service';
import { UpdateLDAWSTU3Service } from './api/updateLDAWSTU3.service';
import { ValueSetService } from './api/valueSet.service';
import { OAuthService } from './api/oauth.service';
import { RUN_AUTH_FLOW } from './variables';
import { OAuthCompletionService } from './api/oauthCompletion.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        OAuthService,
        {
            provide: RUN_AUTH_FLOW,
            useFactory: async (service: OAuthService) => await service.checkRunAuthWorkflow(),
            deps: [OAuthService],
        },
        OAuthCompletionService,
        AdverseEventService,
        AllergyIntoleranceService,
        AppointmentService,
        BinaryService,
        BodyStructureService,
        BulkDataStatusRequestService,
        CarePlanService,
        CareTeamService,
        CommunicationService,
        ConditionService,
        ConsentService,
        CoverageService,
        CreateClinicalNotesSTU3Service,
        CreateCommunityResourceR4Service,
        CreatePatientEnteredQuestionnairesR4Service,
        CreatePatientSTU3Service,
        CreateProblemsR4Service,
        CreateProblemsSTU3Service,
        CreateR4Service,
        CreateSTU3Service,
        CreateVitalsR4Service,
        CreateVitalsSTU3Service,
        DeviceService,
        DeviceRequestService,
        DeviceUseStatementService,
        DiagnosticReportService,
        DocumentReferenceService,
        EncounterService,
        EndpointService,
        EpisodeOfCareService,
        ExpandR4Service,
        ExplanationOfBenefitService,
        FamilyMemberHistoryService,
        FlagService,
        GoalService,
        ImmunizationService,
        ImmunizationRecommendationService,
        LastnSocialHistorySTU3Service,
        ListService,
        LocationService,
        MedicationService,
        MedicationDispenseService,
        MedicationOrderService,
        MedicationRequestService,
        MedicationStatementService,
        NutritionOrderService,
        ObservationService,
        OrganizationService,
        PatientService,
        PractitionerService,
        PractitionerRoleService,
        ProcedureService,
        ProcedureRequestService,
        ProvenanceService,
        QuestionnaireService,
        QuestionnaireResponseService,
        ReadCommunityResourceR4Service,
        ReadDSTU2Service,
        ReadDocumentR4Service,
        ReadDocumentSTU3Service,
        ReadEncounterDiagnosisProblemsSTU3Service,
        ReadEncounterLevelLongitudinalDSTU2Service,
        ReadEpisodeR4Service,
        ReadGeneratedCCDADSTU2Service,
        ReadImplantsR4Service,
        ReadImplantsandExternalDevicesSTU3Service,
        ReadOncologyPlanDayR4Service,
        ReadOrdersDSTU2Service,
        ReadOrdersR4Service,
        ReadOrdersSTU3Service,
        ReadOrdersSurgeriesSTU3Service,
        ReadPatientDSTU2Service,
        ReadPatientEnteredQuestionnairesR4Service,
        ReadPatientFYIR4Service,
        ReadPatientFYISTU3Service,
        ReadPatientR4Service,
        ReadPatientSTU3Service,
        ReadPatientsWithQuestionnairesDueSTU3Service,
        ReadProblemsDSTU2Service,
        ReadProblemsR4Service,
        ReadQuestionnairesDueR4Service,
        ReadR4Service,
        ReadRadiologyResultsR4Service,
        ReadRadiologyResultsSTU3Service,
        ReadReasonforVisitR4Service,
        ReadReferralR4Service,
        ReadResultsDSTU2Service,
        ReadResultsR4Service,
        ReadResultsSTU3Service,
        ReadSTU3Service,
        ReadSurgicalHistoryR4Service,
        ReadToothR4Service,
        ReadVerifiedOrdersR4Service,
        ReadVerifiedOrdersSTU3Service,
        ReadVitalsDSTU2Service,
        ReadVitalsR4Service,
        ReadVitalsSTU3Service,
        RelatedPersonService,
        RequestGroupService,
        ResearchStudyService,
        ResearchSubjectService,
        ScheduleService,
        SearchCodeStatusR4Service,
        SearchCommunityResourceR4Service,
        SearchDSTU2Service,
        SearchDocumentSTU3Service,
        SearchEncounterDiagnosisProblemsSTU3Service,
        SearchEncounterLevelLongitudinalDSTU2Service,
        SearchGeneratedCCDADSTU2Service,
        SearchImplantsR4Service,
        SearchImplantsandExternalDevicesSTU3Service,
        SearchInfectionSTU3Service,
        SearchIsolationR4Service,
        SearchLongitudinalR4Service,
        SearchMedicationsR4Service,
        SearchOncologyPlanDayR4Service,
        SearchOrdersDSTU2Service,
        SearchOrdersR4Service,
        SearchOrdersSTU3Service,
        SearchOrdersSurgeriesSTU3Service,
        SearchPatientDSTU2Service,
        SearchPatientEnteredQuestionnairesR4Service,
        SearchPatientR4Service,
        SearchPatientSTU3Service,
        SearchPatientsWithQuestionnairesDueSTU3Service,
        SearchProblemsDSTU2Service,
        SearchQuestionnairesDueR4Service,
        SearchR4Service,
        SearchRadiologyResultsR4Service,
        SearchRadiologyResultsSTU3Service,
        SearchReasonforVisitR4Service,
        SearchResultsDSTU2Service,
        SearchResultsR4Service,
        SearchResultsSTU3Service,
        SearchSTU3Service,
        SearchSurgicalHistoryR4Service,
        SearchToothR4Service,
        SearchVerifiedOrdersR4Service,
        SearchVerifiedOrdersSTU3Service,
        SearchVitalsDSTU2Service,
        SearchVitalsR4Service,
        SearchVitalsSTU3Service,
        ServiceRequestService,
        SlotService,
        SpecimenService,
        SubstanceService,
        TaskService,
        UpdateCommunityResourceR4Service,
        UpdateLDAWR4Service,
        UpdateLDAWSTU3Service,
        ValueSetService]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: ApiModule,
        @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
