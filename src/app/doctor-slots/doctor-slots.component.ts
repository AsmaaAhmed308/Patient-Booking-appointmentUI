import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from '../models/doctor';
import { schedule } from '../models/schedules';
import { slots } from '../models/slots.model';

@Component({
  selector: 'app-doctor-slots',
  standalone: false,
  templateUrl: './doctor-slots.component.html',
  styleUrl: './doctor-slots.component.css'
})
export class DoctorSlotsComponent implements OnInit {
  constructor(private doctorsService: DoctorService) { }
  doctors: Doctor[] = [];
  selectedDoctor: number | null = null;
  selectedTime: string = '';
  availableSlots: string[] = [];
  timeSlots: slots[] = [];
  selectedDoctorId: number = 0
  selectedDate: Date = new Date()
  startTime: any
  endTime: any
  showDocSlots: boolean
  @Output() onDoctorSelectSlot = new EventEmitter<slots>();
  selectedSlot: boolean
  busySlot: boolean

  ngOnInit() {
    this.loadDoctorsData()
  }

  loadDoctorsData() {
    this.doctorsService.getDoctors().subscribe(
      (data: Doctor[]) => {
        this.doctors = data;
        console.log('this.doctors _ ', this.doctors)

      },
      (error) => {
        console.error('Error fetching doctors data', error);
      }
    );
  }

  onDoctorChange(doctorId: number) {
    this.selectedDoctorId = doctorId;
  }

  updateAvailableSlots(doctorId: number | null, date: Date) {
    if (!doctorId || !date) {
      return;
    }

    const reservationDate = new Date(date);
    let dayNo = reservationDate.getDay()
    this.getDocSchedual(doctorId, dayNo)
  }

  getDocSchedual(doctorId: number, dayNo: number) {
    this.doctorsService.getSchedule(doctorId, dayNo).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          this.timeSlots = [];
          console.log('res_ ', res)
          // this.startTime = res[0].startTime
          // this.endTime = res[0].endTime
          // this.getMockTimeSlots()
          this.timeSlots = res
          this.showDocSlots = true

        }
        else {
          this.timeSlots = []
        }
      },
      (error) => {
        console.error('Error fetching doctors schedule', error);
      }
    );
  }
  setPatientAppointmetTime(slot: slots) {
    this.timeSlots.forEach(slotElement => {
      if(slotElement['selectedSlot'] ){
        slotElement['selectedSlot'] = !slotElement['selectedSlot']
      }

    });
    if (slot.slotStatus == 'Busy') {
      this.busySlot = true
      return;
    }
    else {
      this.busySlot = false;
    }

    slot['selectedSlot'] = !slot['selectedSlot']
    slot.docId = this.selectedDoctorId
    slot.reservationDate = new Date(this.selectedDate)
    slot.time = slot.slotTime
    slot.isAvailable = slot.slotStatus ? slot.slotStatus : 'reserved'
    this.onDoctorSelectSlot.emit(slot)
  }

  resetSelectedSlotData() {
    this.selectedDoctorId = 0;
    this.selectedDate = new Date();
    this.timeSlots = [];
    this.showDocSlots = false;
  }
}
