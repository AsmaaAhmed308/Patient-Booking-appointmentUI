import { Component, OnInit } from '@angular/core';
import { PatientAppointmentsService } from './patient-appointments.service';
import { appointments } from '../models/appointments';

@Component({
  selector: 'app-patient-appointments-list',
  standalone: false,
  templateUrl: './patient-appointments-list.component.html',
  styleUrl: './patient-appointments-list.component.css'
})
export class PatientAppointmentsListComponent  implements OnInit{
  AppointmentArray   :appointments[] =  []
  constructor(private _PatientAppointmentsService :PatientAppointmentsService){

  }

  ngOnInit() {
    this.getAllAppointmentsData();
  }
  
    getAllAppointmentsData() {
      this._PatientAppointmentsService.getAppointments().subscribe(
        (data: appointments[]) => {
          this.AppointmentArray = data;
          console.log('this.AppointmentArray _ ', this.AppointmentArray)
        },
        (error) => {
          console.error('Error fetching doctors data', error);
        }
      );
    }

}
