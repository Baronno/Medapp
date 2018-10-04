import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Patient } from '../patient';
import {PatientService} from '../patient.service';
<<<<<<< HEAD
=======
import {Observable, of} from 'rxjs';
>>>>>>> Database
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
<<<<<<< HEAD
  
  constructor(
    private patientService: PatientService,
    private appComponent: AppComponent
  ) {  }
=======
  constructor(
    private http: HttpClient,
    /*private patientService: PatientService,*/
    private appComponent: AppComponent
  ) { }
>>>>>>> Database

  doctorId = this.appComponent.doctor.id;
  searchString:string;

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
<<<<<<< HEAD
   this.patientService.getPatients(this.doctorId,this.searchString)
     .subscribe(patients => this.patients = patients);
    }
=======
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
>>>>>>> Database

}
