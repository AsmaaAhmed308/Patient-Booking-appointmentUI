import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorSlotsComponent } from './doctor-slots/doctor-slots.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SecretaryReserveAppointmentComponent } from './secretary-reserve-appointment/secretary-reserve-appointment.component';
import { PatientAppointmentsListComponent } from './patient-appointments-list/patient-appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DoctorSlotsComponent,
    SecretaryReserveAppointmentComponent,
    PatientAppointmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
