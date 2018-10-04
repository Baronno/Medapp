import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import {PatientService} from '../patient.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  
  constructor(
    private patientService: PatientService,
    private appComponent: AppComponent,
    private router: Router
  ) {  }

  doctorId = this.appComponent.doctor.id;
  searchString:string = '';

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
   this.patientService.getPatients(this.doctorId, this.searchString)
     .subscribe(patients => this.patients = patients);
    }

  addPatient() {
    this.router.navigate(['addpatient']);
  }

}

