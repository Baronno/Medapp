import { Injectable } from '@angular/core';
import {Patient} from './patient';
import {PATIENTS} from './simulate patients';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(
  ) {}

  getPatients(doctorId: number, searchString: string): Observable<Patient[]> {
    if(searchString=='') {
      return of(PATIENTS.filter(patient => patient.doctorid === doctorId));
    } else {
      return of(PATIENTS.filter(patient => patient.doctorid === doctorId && patient.name.toLowerCase().includes(searchString.toLocaleLowerCase())));
    }
  }

  getPatient(id: number): Observable<Patient> {
    return of(PATIENTS.find(patient => patient.id === id));
  }

  removePatient(patient: Patient) {
    var pos = -1;
    for (var i = 0; i < PATIENTS.length; i++) {
      if (PATIENTS[i].id===patient.id)
        pos = i;
        console.log("position of patient is "+i);
    }
    PATIENTS.slice(0,1);
  }

  registerPatient(newPatient: Patient) {
    PATIENTS.push(newPatient);
  }
     
  patientNextId() {
    var maxId = -1;
    var maxIdIndex = -1;
    for (var i = 0; i < PATIENTS.length; i++) {
      if (PATIENTS[i].id > maxId) {
        maxId = PATIENTS[i].id;
        maxIdIndex = i;
      }
    }
    return maxId+1;    
  }  

  belongs(doctorId: number, patientId: number) {
    if (PATIENTS.find(patient => patient.id === patientId && patient.doctorid === doctorId)) {
      return true;
    }
    else 
      return false;

  }

}


