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

     
  

}


