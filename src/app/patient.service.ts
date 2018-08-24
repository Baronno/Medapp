import { Injectable } from '@angular/core';
import {Patient} from './patient';
import {Patients} from './simulate patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor() {}
    getPatients(): Patient[] {
    return Patients;
  }


}


