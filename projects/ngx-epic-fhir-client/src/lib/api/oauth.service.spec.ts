import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Configuration } from '../configuration';
import { LocalStorageService } from './localStorage.service';
import { OAuthService } from './oauth.service';


describe('OAuthService', () => {
    let service: OAuthService;
    let httpService: HttpClient;
    let storageService: LocalStorageService;
    let configuration: Configuration;
    const epicClientId = "440434-22023092";

    beforeEach(async () => {
        httpService = {
            get: () => null,
            post: () => null,
        } as unknown as HttpClient;

        storageService = {
            get: () => null,
            set: () => null,
            delete: () => null,
        }
        configuration = {
            epicClientId,
            redirectUri: "http://localhost:4200",
            embeddedApp: true,
            issUrl: "https://epicproxy.et1058.epichosted.com/FHIRProxy/api/FHIR/DSTU2",
            launchCode: "12345",
        } as any;

        await TestBed.configureTestingModule({
            providers: [
                OAuthService,
                {
                    provide: HttpClient,
                    useValue: httpService,
                },
                {
                    provide: LocalStorageService,
                    useValue: storageService,
                },
                {
                    provide: Configuration,
                    useValue: configuration,
                }
            ]
        });
        service = TestBed.inject<OAuthService>(OAuthService);
    });

    it('should create the OAUthService', () => {
        expect(service).toBeTruthy();
    });


});
