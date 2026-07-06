import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { PatientsModule } from './features/patients/patients.module';
import { AppointmentsModule } from './features/appointments/appointments.module';
import { PatientAppointmentsListComponent } from './features/appointments/pages/appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientAppointmentsListComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    PatientsModule,
    AppointmentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
