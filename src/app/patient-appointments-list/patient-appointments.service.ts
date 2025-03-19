import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appointments } from '../models/appointments';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentsService {
  private apiUrl = 'https://localhost:7150/api/Clinic';   

  constructor(private http: HttpClient) { }


    getAppointments(): Observable<appointments[]> {  
      return this.http.get<appointments[]>(`${this.apiUrl}/appointments`);  
    }  
  
}
