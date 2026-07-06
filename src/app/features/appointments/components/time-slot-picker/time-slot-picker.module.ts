import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeSlotPickerComponent } from './time-slot-picker.component';
import { TimeSlotPickerRoutingModule } from './time-slot-picker-routing.module';

@NgModule({
  declarations: [TimeSlotPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    TimeSlotPickerRoutingModule
  ],
  exports: [
    TimeSlotPickerComponent
  ]
})
export class TimeSlotPickerModule { }
