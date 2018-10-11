import { Injectable, Input } from '@angular/core';
import { Doctor } from './doctor';
import { DOCTORS } from './simulate doctor';
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

  getDoctor(email: string): Observable<Doctor> {
    return of(DOCTORS.find(doctor => doctor.email === email));
  }

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

  registerDoctor(doctor: Doctor) {
    DOCTORS.push(doctor);
  }

  logIn(email: string, password: string){
    if (DOCTORS.find(doctor => doctor.email === email && doctor.password === password))
        return true;
    else
        return false;
  }

  doctorNextId() {
    var maxId = -1;
    var maxIdIndex = -1;
    for (var i = 0; i < DOCTORS.length; i++) {
      if (DOCTORS[i].id > maxId) {
        maxId = DOCTORS[i].id;
        maxIdIndex = i;
      }
    }
    return maxId+1;    
  }  
}

