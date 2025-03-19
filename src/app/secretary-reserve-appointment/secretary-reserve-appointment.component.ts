import { Component, ViewChild } from '@angular/core';
import { patient } from '../models/patient.model';
import { slots } from '../models/slots.model';
import { reservationData } from '../models/reservationData.model';
import { SecretaryReserveAppointmentService } from './secretary-reserve-appointment.service';
import { DoctorSlotsComponent } from '../doctor-slots/doctor-slots.component';
import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'app-secretary-reserve-appointment',
  standalone: false,
  templateUrl: './secretary-reserve-appointment.component.html',
  styleUrl: './secretary-reserve-appointment.component.css'
})
export class SecretaryReserveAppointmentComponent {
  constructor(private _SecretaryReserveAppointmentService: SecretaryReserveAppointmentService) {
  }

  patientDataObj = <patient>{}
  selectedSlotsObj = <slots>{}
  missingPatientData: boolean
  missingSelectedSlotsData: boolean
  ReserveAppointmentFlag: boolean = true
  MyAppointment: boolean
  savedDataSuccessfully: boolean = false
  errorSavingData: boolean = false
  @ViewChild(PatientComponent) patientComponent!: PatientComponent;
  @ViewChild(DoctorSlotsComponent) doctorSlotsComponent!: DoctorSlotsComponent;
  reservationData = <reservationData>{}
  saveErrorMessage : any
  
  ReserveAppointment() {
    this.ReserveAppointmentFlag = true
    this.MyAppointment = false
  }
  getMyAppointment() {
    this.MyAppointment = true
    this.ReserveAppointmentFlag = false
  }
  getPatientData(patientData: patient) {
    if (patientData) {
      this.patientDataObj = patientData
      console.log('  this.patientDataObj from appointmentpage', this.patientDataObj)
    }
  }

  getPatientSelectedSlot(slectedSlot: slots) {
    if (slectedSlot) {
      this.selectedSlotsObj = slectedSlot 
    }
  }

  // combineTimeWithCurrentDate(time: string): Date {
  //   const currentDate = new Date();
  //   var [hours, minutes, seconds] = time.split(':').map(Number);
  //   if (minutes == null || undefined) {
  //     minutes = 0
  //   }
  //   if (seconds == null || undefined) {
  //     seconds = 0
  //   }
  //   return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds);
  // }

  validateDataForSave(reservationData: reservationData) {
    let invalidFlag
    if (reservationData && (reservationData.patientData.name == null || reservationData.patientData.birthDate == null || reservationData.patientData.gender == null || reservationData.patientData.contactInfo == null)) {
      this.missingPatientData = true
      invalidFlag = 1
    }
    else {
      this.missingPatientData = false
    }

    if (reservationData.selectedSlots && (reservationData.selectedSlots.docId == null || reservationData.selectedSlots.reservationDate == null || reservationData.selectedSlots.slotTime == null)) {
      this.missingSelectedSlotsData = true
      invalidFlag = 1
    }
    else {
      this.missingSelectedSlotsData = false;
    }
    return invalidFlag;

  }


  savePatientAppointment() {
    this.reservationData.patientData = this.patientDataObj
    this.reservationData.selectedSlots = this.selectedSlotsObj


    if (this.validateDataForSave(this.reservationData) == 1) {
      return;
    }

    console.log('reservationData', this.reservationData)

    this._SecretaryReserveAppointmentService.createReservation(this.reservationData).subscribe({
      next: (response) => {
        console.log('Reservation created successfully:', response);
        this.savedDataSuccessfully = true;
        this.errorSavingData  = false;
        this.resetAfterSave()
      },
      error: (error) => {

        console.error('Error creating reservation:', error);
         this.saveErrorMessage = error.message
        this.errorSavingData  = true;
        this.savedDataSuccessfully =false
      },
    });

    console.log('patientDataObj', this.patientDataObj)
    console.log('selectedSlotsObj', this.selectedSlotsObj)
  }


  resetAfterSave() {
    this.reservationData = <reservationData>{}
    this.patientComponent.resetPatientDataForm();
    this.doctorSlotsComponent.resetSelectedSlotData();
  }

}
