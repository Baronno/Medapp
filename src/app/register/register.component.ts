/*
This component is used to register a new doctor
*/
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //These boolean variables are used to show alerts to the user
  showAlertName:boolean = false;
  showAlertEmail:boolean = false;
  showAlertEmailExists:boolean = false;
  showAlertPassword:boolean = false;
  showAlertConfirm:boolean = false;
  showAlertPhone:boolean = false;
  showAlertSpecialty:boolean = false;
  newDoctor:Doctor;

  constructor(
    private http: HttpClient,
    private router:Router,
    private appComponent:AppComponent,
  ) { }

  ngOnInit() {
  }

  registerDoctor(e){

    e.preventDefault();
    console.log(e);

    //All the inputs are tested against regular expressions: if they are not met then 
    // an alert is displayed
    var newName = e.target.elements[0].value;
    var regexpName = new RegExp(/^[A-Za-z]{2,} [A-Za-z]{2,}/);
    if (!regexpName.test(newName))
      this.showAlertName=true;
    else
      this.showAlertName=false;

    var newEmail = e.target.elements[1].value;
    this.showAlertEmail = false;
    var regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regexpEmail.test(newEmail))
      this.showAlertEmail=true;
    else
      this.http
      .get<{message: string, number: number}>('http://localhost:3000/api/mail/' + newEmail)
      .subscribe((emailData) => {
        if (emailData.number > 0)
          this.showAlertEmail = true;
      });

    var newPassword = e.target.elements[2].value;
    var regexpPass = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    if (!regexpPass.test(newPassword))
      this.showAlertPassword=true;
    else
      this.showAlertPassword=false;

    var passwordConfirm = e.target.elements[3].value;
    if (!(passwordConfirm===newPassword))
      this.showAlertConfirm=true;
    else
      this.showAlertConfirm=false;

    var newPhone = e.target.elements[4].value;
    var regexpPhone = new RegExp(/\+?[0-9]{10,13}$/);
    if (!regexpPhone.test(newPhone))
      this.showAlertPhone=true;
    else
      this.showAlertPhone=false;

    var newSpecialty = e.target.elements[5].value;
    if (newSpecialty=='')
      this.showAlertSpecialty=true;
    else
      this.showAlertSpecialty=false;

    if (!(this.showAlertConfirm || this.showAlertEmail || this.showAlertEmailExists || this.showAlertName || this.showAlertPassword || this.showAlertPhone || this.showAlertSpecialty)){

      //This calls for the backend to store the doctor's details. The ID is automatically updated
      this.http.get<{message: string, doctor: Doctor}>("http://localhost:3000/api/maxidDoctor")
      .subscribe((doctorData) => {
        this.newDoctor = doctorData.doctor;
        var newId = this.newDoctor.id + 1;
        this.newDoctor = { id: newId, email: newEmail, password: newPassword, name: newName, phone: newPhone, specialty: newSpecialty};
        if (this.http.post<{message: string, doctor: Doctor}>("http://localhost:3000/api/doctor", this.newDoctor)
        .subscribe()) {
          window.confirm("Your details have been saved, "+this.newDoctor.name);
          this.appComponent.setRegistering(false);
          this.router.navigate(['login']);
        }    
      })
    }
  }

  changeToLogin(){
    this.appComponent.setRegistering(false);
  }
}
