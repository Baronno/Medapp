import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Patient} from './patient';
import {PATIENTS} from './simulate patients';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[];
  //private patientsUpdated = new Subject<Patient[]>();

  constructor(private http: HttpClient) {}

  /*getPatients(): Observable<Patient[]> {
    return of(PATIENTS);
  }

  getPatient(id: number): Observable<Patient> {
    return of(PATIENTS.find(patient => patient.id === id));
  }*/

  getPatients(): Observable<Patient[]> {
    this.http
    .get<{message: string, patients: Patient[]}>('http://localhost:3000/api/patient')
    .subscribe((patientData) => {
      this.patients = patientData.patients;
      console.log(this.patients);
      //return of(this.patients);
      //this.patients =[{id: 5, name: 'a', age: 3, mobile: 6, description: 'xd'}];
      //this.patientsUpdated.next([...this.patients]);
    });
    console.log(this.patients);
    return of(this.patients);
  }

  getPatient(id: number): Observable<Patient> {
    this.http
    .get<{message: string, patients: Patient[]}>('http://localhost:3000/api/patient')
    return of(this.patients.find(patient => patient.id === id));
  }

  /*getPatientUpdateListener() {
    return this.patientUpdated;=.asObservable();
  }

  addPatient(id: number, name: string, age: number, mobile: number, description: string) {
      const patient: Patient = {id: id, name: name, age: age, mobile: mobile, description: description};
      this.http
      .post<{message: string}>('http://localhost:3000/api/patient', patient)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.patients.push(patient);
        this.patientsUpdated.next([...this.patients]);
      });
    }*/


}
