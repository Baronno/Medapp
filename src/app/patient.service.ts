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

  getPatients(): Observable<Patient[]> {
    return of(PATIENTS);
  }

 getPatient(id: number): Observable<Patient> {
   return of(PATIENTS.find(patient => patient.id === id));
  }


}


