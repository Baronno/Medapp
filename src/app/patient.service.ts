import { Injectable } from '@angular/core';
import {Patient} from './patient';
import {Patients} from './simulate patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor() {}
    static getPatients(): Patient[] {
    return Patients;
  }


  getPatients(id: number) {}
}


