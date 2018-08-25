import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }
  getPatients(): void {
    this.patients = PatientService. getPatients();
    }
}
