import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  patients: Patient[];
  constructor(
    private http: HttpClient,
    /*private patientService: PatientService,*/
    private appComponent: AppComponent
  ) { }

  doctorId = this.appComponent.doctor.id;
  searchString:string;

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
    this.http
    .get<{message: string, patients: Patient[]}>('http://localhost:3000/api/patient')
    .subscribe((patientData) => {
      this.patients = patientData.patients;
      console.log(this.patients);
    });
  }


  /*getPatients(): void {
   this.patientService.getPatients()
     //.subscribe(patients => this.patients = patients);
   }*/

}
