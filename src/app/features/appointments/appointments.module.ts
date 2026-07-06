import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { PatientsModule } from '../patients/patients.module';
import { TimeSlotPickerModule } from './components/time-slot-picker/time-slot-picker.module';
import { CreateAppointmentComponent } from './pages/create-appointment/create-appointment.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    CreateAppointmentComponent,
    AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PatientsModule,
    TimeSlotPickerModule,
    AppointmentsRoutingModule
  ],
  exports: [
    CreateAppointmentComponent,
    AppointmentFormComponent
  ]
})
export class AppointmentsModule { }
