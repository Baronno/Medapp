import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit { 

  showAlertName:boolean = false;
  showAlertEmail:boolean = false;
  showAlertAge:boolean = false;
  showAlertPhone:boolean = false;
  newPatient:Patient;

  constructor(
    private location:Location,
    private router:Router,
    private patientService:PatientService,
    private appComponent:AppComponent
  ) { }

  ngOnInit() {
  }

  registerPatient(e) {
    
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

    if (!(this.showAlertAge || this.showAlertEmail || this.showAlertName || this.showAlertPhone )) {

      var patientId = this.patientService.patientNextId();
      this.newPatient = Object.assign({id: patientId, doctorid: this.appComponent.doctor.id, name: newName, age: newAge, phone: newPhone});
      this.patientService.registerPatient(this.newPatient);    
      window.confirm("Patient "+this.newPatient.name+" has been saved.");     
      this.router.navigate(['patients']);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
