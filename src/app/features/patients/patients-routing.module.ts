import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';

const routes: Routes = [
  {
    path: 'patient',
    children: [
      {
        path: '',
        component: PatientListComponent
      },
      {
        path: 'registration',
        component: PatientRegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
