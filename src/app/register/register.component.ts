import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showAlertName:boolean = false;
  showAlertEmail:boolean = false;
  showAlertPassword:boolean = false;
  showAlertConfirm:boolean = false;
  showAlertPhone:boolean = false;
  showAlertSpecialty:boolean = false;
  newDoctor:Doctor;

  constructor(
    private router:Router,
    private appComponent:AppComponent,
    private doctorService:DoctorService
  ) { }

  ngOnInit() {    
  }

  registerDoctor(e){

    e.preventDefault();
    console.log(e);

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

    if (!(this.showAlertConfirm || this.showAlertEmail || this.showAlertName || this.showAlertPassword || this.showAlertPhone || this.showAlertSpecialty)){
      
      var newId = this.doctorService.doctorNextId();
      this.newDoctor = Object.assign({id: newId, name: newName, email: newEmail, password: newPassword, phone: newPhone, specialty: newSpecialty});
      this.doctorService.registerDoctor(this.newDoctor); 
      window.confirm("Your details have been saved, "+this.newDoctor.name); 
      this.appComponent.setRegistering(false);
      this.router.navigate(['login']);

    }
 }

  changeToLogin(){
    this.appComponent.setRegistering(false);
  }

}
