import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Address,
  AppointmentService,
  OAuthService,
  PatientService,
  PatientSTU3,
  AppointmentSTU3,
  PractitionerService,
} from 'ngx-epic-fhir-client';
import { firstValueFrom } from 'rxjs';
import { DirectContractingEntity } from './direct-contracting-entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  patient: PatientSTU3 | undefined;
  ready: boolean = false;
  entities: DirectContractingEntity[] = [
    {
      displayName: 'Esse',
      directContractingEntityId: 'DC0015',
    },
    {
      displayName: 'Rancho',
      directContractingEntityId: 'DC030',
    },
  ];

  voluntaryAlignmentForm = new FormGroup({
    dcEntity: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    mbi: new FormControl(),
    dob: new FormControl(),
    phoneNumber: new FormControl(),
    prospectAddress: new FormGroup({
      lineOne: new FormControl(),
      lineTwo: new FormControl(),
      lineThree: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
    }),
  });

  constructor(
    private readonly patientService: PatientService,
    private readonly oauthService: OAuthService,
    private readonly appointmentService: AppointmentService,
    private readonly practitionerService: PractitionerService
  ) {}
  async ngOnInit() {
    const patientId =
      this.oauthService.oAuthToken.patient ?? 'erXuFYUfucBZaryVksYEcMg3';
    console.log(JSON.stringify(this.oauthService.oAuthToken));
    if (!!patientId) {
      this.patient = await firstValueFrom(
        this.patientService.patientReadSTU3(patientId)
      );
    } else {
      // family=lufhir&given=kazuya&birthdate=1986-02-23
      this.patient = (
        await firstValueFrom(
          this.patientService.patientSearchR4(
            undefined,
            undefined,
            undefined,
            undefined,
            '1987-11-09',
            'lopez',
            undefined,
            'camilla'
          )
        )
      ).entry?.find((x) => !!x) as any;
    }

    const address = this.patient?.address?.find((x) => !!x);
    const appointmentsBundle = await firstValueFrom(
      this.appointmentService.appointmentSearchSTU3(`Patient/${patientId}`)
    );
    const appointments = appointmentsBundle.entry?.map(
      (x) => x.resource as AppointmentSTU3
    );
    console.log(JSON.stringify(appointments));
    const currentAppointment = appointments?.pop();
    const physicianRef = currentAppointment?.participant?.find(
      (x: { actor: { reference: string | string[] } }) =>
        x?.actor?.reference.includes('Practitioner')
    );
    const practitionerId = physicianRef?.actor?.reference.substring(
      physicianRef?.actor?.reference.lastIndexOf('/') + 1
    );
    console.log(practitionerId);
    // const practitioner = await firstValueFrom(this.practitionerService.practitionerReadSTU3(practitionerId));
    // console.log(JSON.stringify(practitioner));
    this.voluntaryAlignmentForm.patchValue({
      firstName: this.patient?.name
        ?.find((x) => x.use === 'official')
        ?.given?.find((x) => !!x),
    });
    this.voluntaryAlignmentForm.patchValue({
      lastName: this.patient?.name?.find((x) => x.use === 'official')?.family,
    });
    this.voluntaryAlignmentForm.patchValue({
      dob: this.patient?.birthDate,
    });
    this.voluntaryAlignmentForm.patchValue({
      phoneNumber: this.patient?.telecom.find((x) => !!x)?.value,
    });

    this.voluntaryAlignmentForm.patchValue({
      prospectAddress: {
        lineOne: this.getLine(0, address),
        lineTwo: this.getLine(1, address),
        lineThree: this.getLine(2, address),
        city: address?.city,
        state: address?.state,
        zip: address?.postalCode,
      },
    });
    this.ready = true;
  }

  private getLine(lineNumber: number, address: Address | undefined) {
    if (!address || !(address?.line?.length ?? 0 > lineNumber)) {
      return null;
    }
    return (address?.line as string[])[lineNumber];
  }
}
