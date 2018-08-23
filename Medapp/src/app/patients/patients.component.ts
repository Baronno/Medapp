import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import {Patients} from '../simulate patients';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  selectedPatient: Patient;

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }
patient: Patient = {
  id: 1,
  name: 'Amumu'
}
patients = Patients;
  constructor() { }

  ngOnInit() {
  }

}
