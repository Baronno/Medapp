import { Injectable, Input } from '@angular/core';
import { Doctor } from './doctor';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  loggedDoctor:Doctor;
  message:string;
  message2:string;

  constructor(
    private http: HttpClient,
  ) {}

  /*
  getDoctor(email: string): Observable<Doctor> {
    return of(DOCTORS.find(doctor => doctor.email === email));
  }
  */

  getDoctor2(email: string): Doctor {
    this.http
    .get<{message: string, doctorResult: Doctor}>('http://localhost:3000/api/doctors/' + email)
    .subscribe((doctorData) => {
      this.loggedDoctor = doctorData.doctorResult;
      this.message = doctorData.message;
      console.log(this.message);
    });
    return this.loggedDoctor;
  }
/*
  registerDoctor(doctor: Doctor) {
    DOCTORS.push(doctor);
  }
*/
}

