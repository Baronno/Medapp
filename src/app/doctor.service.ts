import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { DOCTORS } from './simulate doctor';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() {}

  getDoctors(): Observable<Doctor[]> {
    return of(DOCTORS);
  }

  getDoctor(email: string): Observable<Doctor> {
    return of(DOCTORS.find(doctor => doctor.email === email));
  }

  registerDoctor(doctor: Doctor) {
    DOCTORS.push(doctor);
  }

  logIn(email: string, password: string){
    if (DOCTORS.find(doctor => doctor.email === email && doctor.password === password))
        return true;
    else
        return false;
  }
}

