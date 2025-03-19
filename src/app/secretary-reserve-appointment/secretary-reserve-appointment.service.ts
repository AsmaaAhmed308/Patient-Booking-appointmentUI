import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reservationData } from '../models/reservationData.model';

@Injectable({
  providedIn: 'root'
})
export class SecretaryReserveAppointmentService {
  private apiUrl = 'https://localhost:7150/api/Clinic';   

  constructor(private http: HttpClient) { }

  createReservation(data: reservationData): Observable<any> {  
    return this.http.post(this.apiUrl, data);  
}
}
