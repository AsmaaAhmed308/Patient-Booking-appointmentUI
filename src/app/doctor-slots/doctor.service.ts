import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs/internal/Observable';
import { schedule } from '../models/schedules';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'https://localhost:7150/api/Clinic';   

  constructor(private http: HttpClient) { }  

  getDoctors(): Observable<Doctor[]> {  
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`);  
  }  

  getSchedule(docId: number, dayNo: number): Observable<schedule[]> {  
    return this.http.get<schedule[]>(`${this.apiUrl}/${docId}/${dayNo}`);  
  } 
}
