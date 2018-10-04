import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import {PatientService} from '../patient.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  
  constructor(
    private patientService: PatientService,
    private appComponent: AppComponent
  ) {  }

  doctorId = this.appComponent.doctor.id;
  searchString:string;

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
   this.patientService.getPatients(this.doctorId,this.searchString)
     .subscribe(patients => this.patients = patients);
    }

}

