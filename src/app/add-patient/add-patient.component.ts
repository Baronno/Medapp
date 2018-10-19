/*
This component consists of a form to add a new patient which will be added to the
database and automatically saved with the doctorId of the doctor who is logged in*/

import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../patient';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AddPatientComponent implements OnInit {
  @Input() patient: Patient;

  //These variables are to show alerts in the interface
  showAlertName:boolean = false;
  showAlertEmail:boolean = false;
  showAlertAge:boolean = false;
  showAlertPhone:boolean = false;
  newPatient:Patient;

  constructor(
    private location:Location,
    private appComponent:AppComponent,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  registerPatient(e) {

    //All the input fields are tested against regular expressions so they match 
    // the required format
    e.preventDefault();
    var newName = e.target.elements[0].value;
    var regexpName = new RegExp(/^[A-Za-z]{2,} [A-Za-z]{2,}/);
    if (!regexpName.test(newName))
      this.showAlertName=true;
    else
      this.showAlertName=false;

    var newEmail = e.target.elements[1].value;
    var regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regexpEmail.test(newEmail))
      this.showAlertEmail=true;
    else
      this.showAlertEmail=false;

    var newAge = e.target.elements[2].value;
    var regexpAge = new RegExp(/^(0?[1-9]|[1-9][0-9]|[1][0-2][0-9]|130)$/);
    if (!regexpAge.test(newAge))
      this.showAlertAge=true;
    else
      this.showAlertAge=false;

    var newPhone = e.target.elements[3].value;
    var regexpPhone = new RegExp(/\+?[0-9]{10,13}$/);
    if (!regexpPhone.test(newPhone))
      this.showAlertPhone=true;
    else
      this.showAlertPhone=false;

    // If there are no alerts, the system calls the backend to store the new patient
    if (!(this.showAlertAge || this.showAlertEmail || this.showAlertName || this.showAlertPhone )) {
      this.http.get<{message: string, patient: Patient}>("http://localhost:3000/api/maxid")
      .subscribe((patientData) => {
        this.patient = patientData.patient;
        var newId = this.patient.id + 1;
        this.patient = { id: newId, doctorid: this.appComponent.doctor.id, name: newName, age: newAge, phone: newPhone, description: '', email: newEmail};
      
        if (this.http.post<{message: string, patients: Patient}>("http://localhost:3000/api/patient", this.patient)
        .subscribe()) {
          window.confirm("Patient "+this.patient.name+" has been saved");
          this.goBack();
        }    
      })
    }
  }

  goBack(): void {
    this.location.back();
  }
}
