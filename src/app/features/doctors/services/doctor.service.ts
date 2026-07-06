import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs/internal/Observable';
import { Slot } from '../../../shared/models/slot.model';
import { environment } from '../../../../environments/environment';
import { Doctor } from '../../../shared/models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = `${environment.apiUrl}/Clinic`;   

  constructor(private http: HttpClient) { }  

  getDoctors(): Observable<Doctor[]> {  
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`);  
  }  

  getSchedule(docId: number, dayNo: number): Observable<Slot[]> {  
    return this.http.get<Slot[]>(`${this.apiUrl}/${docId}/${dayNo}`);  
  } 
}
