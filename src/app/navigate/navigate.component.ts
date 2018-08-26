import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
patients: Patient[] = [];
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }
  getPatients(): void {
    this.patientService.getPatients();
  }

}
