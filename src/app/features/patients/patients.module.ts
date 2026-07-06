import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

@NgModule({
  declarations: [
    PatientRegistrationComponent,
    PatientListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PatientsRoutingModule
  ],
  exports: [
    PatientRegistrationComponent,
    PatientListComponent
  ]
})
export class PatientsModule { }
