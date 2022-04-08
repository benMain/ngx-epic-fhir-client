<h1 align="center">Angular Epic Fhir Client</h1>
<div align="center">
  <img src="https://fhir.epic.com/Content/images/EpicOnFhir.png" width="320" alt="Epic On Fhir Logo" /> 
  <br />
  <img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" width="320" alt="Angular Logo Logo" />
</div>
<br />
<div align="center">
  <strong>An Angluar12+ strongly-typed client Library for connecting to <a href="https://fhir.epic.com/">EPIC On Fhir</a></strong> <br />
</div>

# Why Make this library
<p>
Epic currently controls well over 1/4 of all the EHR data in the world. The US government has manadated that EHRs make most of their internal data consumable by Third party applications. <br/>
The opportunities to utilize this information to build either Provider or Patient facing applications is boundless. <br />
This is obviously not the first Fhir client lib, but it is the <strong>ONLY</strong> the author knows of with type definitions. <br />
FHIR is an exhaustive specificiation, with hundreds of object types just take a look at the models folder and see for yourself. Working effectively in this space off raw javascript is a fool's errand.
</p>

# Features

- Manages OAuth2.0 connections when launched from either a Smart On Fhir embedded app context or standalone context.
- Provides service classes for all of the Fhir Resources provided by Epic across all available Fhir versions DSTU2, STU3, R4.
- Provides typescript models in the shape of the response objects to make it much faster to work with the Fhir models and the Epic Extensions/changes.


# How To Use

## Install

```bash
npm install --save ngx-epic-fhir-client
```

## Importing

`EpicOnFhirModule.forRoot()` needs to be imported in your AppModule. The forRoot method must supply a configuration object. We have provided an `forRootIntializer` function that only requires your Epic Application's OAuth CLient ID and whether it is running in Embedded mode or not. We utilize an ng `APP_INITIALIZER` provider to work the oauth flow from within the module.

```ts
// app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { forRootInitializer, EpicOnFhirModule } from 'ngx-epic-fhir-client';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    EpicOnFhirModule.forRoot(
      forRootInitializer('cf9940a1-aad3-4dc9-80cc-58ed6fcc33d2', true)
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Utilizing 

After importing the module inject whichever Fhir Api Client Service (in the example below the Provider Service) into a component and utilize it to fetch data from Epic. 


```ts
import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  patient: PatientSTU3 | undefined;

  constructor(
    private readonly patientService: PatientService,
    private readonly oauthService: OAuthService
  ) { }
  async ngOnInit() {
    const patientId = this.oauthService.oAuthToken.patient ?? '';
    this.patient = await firstValueFrom(
      this.patientService.patientReadSTU3(patientId)
    );
  }
}

```


# Stay In Touch

- Author - [Benjamin Main](https://twitter.com/Ben05920582) and [BeerMoneyDev](https://www.beermoney.dev)

## License

ngx-epic-fhir-client is MIT licensed.
