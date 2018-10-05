import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

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

  constructor(
    private router:Router,
    private appComponent:AppComponent,
  ) { }

  ngOnInit() {
  }

  registerDoctor(e){

    e.preventDefault();
    console.log(e);

    var name = e.target.elements[0].value;
    if (name=='')
      this.showAlertName=true;
    else
      this.showAlertName=false;

    var email = e.target.elements[1].value;
    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regexp.test(email))
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
      this.appComponent.setRegistering(false);
      this.router.navigate(['login']);
    }
 }

  changeToLogin(){
    this.appComponent.setRegistering(false);
  }

}
