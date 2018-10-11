import { Component, Input, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Patient } from '../patient';
import {PatientService} from '../patient.service';

import {Observable, of} from 'rxjs';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class PatientsComponent implements OnInit {
 @Input() patients: Patient[];

  constructor(
    private http: HttpClient,
    private appComponent: AppComponent,
    private router: Router
  ) {  }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
    this.http
    .get<{message: string, patients: Patient[]}>('http://localhost:3000/api/patients/' + this.appComponent.doctor.id)
    .subscribe((patientData) => {
      this.patients = patientData.patients;
    });
  }

  addPatient() {
    this.router.navigate(['addpatient']);
  }
}
