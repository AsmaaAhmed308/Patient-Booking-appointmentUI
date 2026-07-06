import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Slot } from '../../../../shared/models/slot.model';
import { Doctor } from '../../../../shared/models/doctor.model';
import { DoctorService } from '../../../doctors/services/doctor.service';

@Component({
  selector: 'app-time-slot-picker',
  standalone: false,
  templateUrl: './time-slot-picker.component.html',
  styleUrl: './time-slot-picker.component.css'
})
export class TimeSlotPickerComponent {

  constructor(private doctorsService: DoctorService) { }
  doctors: Doctor[] = [];
  selectedDoctor: number | null = null;
  selectedTime: string = '';
  availableSlots: string[] = [];
  timeSlots: Slot[] = [];
  selectedDoctorId: number = 0
  selectedDate: Date = new Date()
  startTime: any
  endTime: any
  showDocSlots: boolean
  @Output() onDoctorSelectSlot = new EventEmitter<Slot>();
  @Input() docId: number = 0;
  @Input() date: Date = new Date();
  @Input() Speciality: string = '';
  selectedSlot: boolean
  busySlot: boolean

  ngOnInit() { 
  }

  ngOnChanges(changes: SimpleChanges) {
   this.getDocSchedual(this.docId, new Date(this.date).getDay())
  }

 
  getDocSchedual(doctorId: number, dayNo: number) {
    this.doctorsService.getSchedule(doctorId, dayNo).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          this.timeSlots = [];
          console.log('res_ ', res)
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
  setPatientAppointmetTime(slot: Slot) {
    this.timeSlots.forEach(slotElement => {
      if (slotElement['selectedSlot']) {
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
    slot.docId = this.docId
    slot.reservationDate = new Date(this.selectedDate)
    slot.time = slot.slotTime
    slot.isAvailable = slot.slotStatus ? slot.slotStatus : 'reserved'
    this.onDoctorSelectSlot.emit(slot)
  }

  resetSelectedSlotData() {
    this.docId = 0;
    this.selectedDate = new Date();
    this.timeSlots = [];
    this.showDocSlots = false;
  }
}
