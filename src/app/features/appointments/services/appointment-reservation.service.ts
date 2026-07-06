import { Injectable } from '@angular/core';
import { ReservationData } from '../../../shared/models/reservation-data.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentReservationService {

  private apiUrl = `${environment.apiUrl}/Clinic`;   

  constructor(private http: HttpClient) { }

  createReservation(data: ReservationData): Observable<any> {  
    return this.http.post(this.apiUrl, data);  
}
}
