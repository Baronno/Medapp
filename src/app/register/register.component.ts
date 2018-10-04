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

    var name = e.target.elements[0].value;
    var regexpName = new RegExp(/^[A-Za-z]{2,} [A-Za-z]{2,}/);
    if (!regexpName.test(name))
      this.showAlertName=true;
    else
      this.showAlertName=false;

    var email = e.target.elements[1].value;
    var regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regexpEmail.test(email))
      this.showAlertEmail=true;
    else
      this.showAlertEmail=false;

    var password = e.target.elements[2].value;
    var regexpPass = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    if (!regexpPass.test(password))
      this.showAlertPassword=true;
    else
      this.showAlertPassword=false;

    var passwordConfirm = e.target.elements[3].value;
    if (!(passwordConfirm===password))
      this.showAlertConfirm=true;
    else  
      this.showAlertConfirm=false;

    var phone = e.target.elements[4].value;
    var regexpPhone = new RegExp(/\+?[0-9]{10,13}$/);
    if (!regexpPhone.test(phone))
      this.showAlertPhone=true;
    else
      this.showAlertPhone=false;

    var specialty = e.target.elements[5].value;
    if (specialty=='')
      this.showAlertSpecialty=true;
    else
      this.showAlertSpecialty=false;

    if (!(this.showAlertConfirm || this.showAlertEmail || this.showAlertName || this.showAlertPassword || this.showAlertPhone || this.showAlertSpecialty)){
      
      console.log(name);
      this.newDoctor.name = name;
      console.log("name "+name);
      this.newDoctor.email = email;
      console.log("mail "+email);
      this.newDoctor.password = password;
      console.log("pass "+password);
      this.newDoctor.phone = phone;
      console.log("phone "+phone);
      this.newDoctor.specialty = specialty;
      console.log("spe "+specialty);
      /*this.doctorService.registerDoctor(this.newDoctor1);*/
      
      this.appComponent.setRegistering(false);
      this.router.navigate(['login']);
    }
 }

  changeToLogin(){
    this.appComponent.setRegistering(false);
  }

}
