import { Component, ViewChild } from '@angular/core';
import { Patient } from '../../../../shared/models/patient.model';
import { Slot } from '../../../../shared/models/slot.model';
import { PatientRegistrationComponent } from '../../../patients/components/patient-registration/patient-registration.component';
import { ReservationData } from '../../../../shared/models/reservation-data.model';
import { Doctor } from '../../../../shared/models/doctor.model';
import { DoctorService } from '../../../doctors/services/doctor.service';
import { AppointmentReservationService } from '../../services/appointment-reservation.service';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  patientDataObj = <Patient>{}
  selectedSlotsObj = <Slot>{}
  missingPatientData: boolean
  missingSelectedSlotsData: boolean
  ReserveAppointmentFlag: boolean = true
  MyAppointment: boolean
  savedDataSuccessfully: boolean = false
  errorSavingData: boolean = false
  @ViewChild(PatientRegistrationComponent) patientComponent!: PatientRegistrationComponent;
  // @ViewChild(DoctorSlotsComponent) doctorSlotsComponent!: DoctorSlotsComponent;
  reservationData = <ReservationData>{}
  saveErrorMessage: any
  doctors: Doctor[] = [];
  selectedDate: Date = new Date()
  constructor(private doctorsService: DoctorService,
              private appointmentsService: AppointmentReservationService) {
  }
  ngOnInit() {
    this.loadDoctorsData()
  }



  ReserveAppointment() {
    this.ReserveAppointmentFlag = true
    this.MyAppointment = false
  }
  getMyAppointment() {
    this.MyAppointment = true
    this.ReserveAppointmentFlag = false
  }
  getPatientData(patientData: Patient) {
    if (patientData) {
      this.patientDataObj = patientData
      console.log('  this.patientDataObj from appointmentpage', this.patientDataObj)
    }
  }

  getPatientSelectedSlot(slectedSlot: Slot) {
    if (slectedSlot) {
      this.selectedSlotsObj = slectedSlot
    }
  }



  loadDoctorsData() {
    this.doctorsService.getDoctors().subscribe(
      (data: Doctor[]) => {
        this.doctors = data;
        console.log('this.doctors _ ', this.doctors)

      },
      (error: any) => {
        console.error('Error fetching doctors data', error);
      }
    );
  }

  selectedDoctorId: number;
  onDoctorChange(doctorId: number) {
    this.selectedDoctorId = doctorId;
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

  savePatientAppointment() {
    // this.reservationData = this.appointmentReservationFacade.buildReservation(this.patientDataObj, this.selectedSlotsObj)

    // const validation = this.appointmentReservationFacade.validateReservation(this.reservationData);
    // this.missingPatientData = validation.missingPatientData;
    // this.missingSelectedSlotsData = validation.missingSelectedSlotsData;

    // if (!validation.isValid) {
    //   return;
    // }

    console.log('reservationData', this.reservationData)

    this.appointmentsService.createReservation(this.reservationData).subscribe({
      next: (response) => {
        console.log('Reservation created successfully:', response);
        this.savedDataSuccessfully = true;
        this.errorSavingData = false;
        this.resetAfterSave()
      },
      error: (error) => {

        console.error('Error creating reservation:', error);
        this.saveErrorMessage = error.message
        this.errorSavingData = true;
        this.savedDataSuccessfully = false
      },
    });

    console.log('patientDataObj', this.patientDataObj)
    console.log('selectedSlotsObj', this.selectedSlotsObj)
  }


  resetAfterSave() {
    this.reservationData = <ReservationData>{}
    this.patientComponent.resetPatientDataForm();
    // this.doctorSlotsComponent.resetSelectedSlotData();
  }

}
