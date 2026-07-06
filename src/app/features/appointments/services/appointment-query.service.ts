import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentQueryService { 
  private apiUrl = `${environment.apiUrl}/Appointments`;   
    constructor(private http: HttpClient) { }
  getAppointments(): Observable<any[]> {  
    return this.http.get<any[]>(`${this.apiUrl}`);  
  }  
}
