import { Component, EventEmitter, Output } from '@angular/core';
import { patient } from '../models/patient.model';

@Component({
  selector: 'app-patient',
  standalone: false,
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
 constructor(){

 }
 patientDataObj = <patient>{}
 @Output() onPatientDataChange = new EventEmitter<patient>();  

 setPatientData(){
  this.onPatientDataChange.emit(this.patientDataObj)
 }

 resetPatientDataForm(){
  this.patientDataObj =  <patient>{}
 }

}
