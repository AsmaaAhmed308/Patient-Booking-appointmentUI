import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSlotPickerComponent } from './time-slot-picker.component';

const routes: Routes = [
  {
    path: 'slots',
    component: TimeSlotPickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSlotPickerRoutingModule { }
