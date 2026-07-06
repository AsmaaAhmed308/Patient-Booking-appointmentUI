import { Component, EventEmitter, Output } from '@angular/core';
import { Patient } from '../../../../shared/models/patient.model';

@Component({
  selector: 'app-patient-registration',
  standalone: false,
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css'
})
export class PatientRegistrationComponent {
  constructor(){

  }
  patientDataObj = <Patient>{}
  @Output() onPatientDataChange = new EventEmitter<Patient>();  
 
  setPatientData(){
   this.onPatientDataChange.emit(this.patientDataObj)
  }
 
  resetPatientDataForm(){
   this.patientDataObj =  <Patient>{}
  }
}
