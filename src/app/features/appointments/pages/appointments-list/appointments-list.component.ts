import { Component, OnInit } from '@angular/core';
import { AppointmentQueryService } from '../../services/appointment-query.service';

@Component({
  selector: 'app-patient-appointments-list',
  standalone: false,
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.css'
})
export class PatientAppointmentsListComponent  implements OnInit{
  AppointmentArray   :any[] =  []
  constructor(private _AppointmentsService :AppointmentQueryService){

  }

  ngOnInit() {
    this.getAllAppointmentsData();
  }
  
    getAllAppointmentsData() {
      this._AppointmentsService.getAppointments().subscribe(
        (data: any[]) => {
          this.AppointmentArray = data;
          console.log('this.AppointmentArray _ ', this.AppointmentArray)
        },
        (error) => {
          console.error('Error fetching appointments data', error);
        }
      );
    }

}
