import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  @Input() doctor: Doctor;

  constructor(private router:Router,
              private appComponent:AppComponent,    
              private doctorService:DoctorService
    ) { }

  ngOnInit() {
  }

  changeToRegister(){
    this.appComponent.setRegistering(true);
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(this.doctorService.logIn(username, password)){ //.subscribe(doctor => this.doctor = doctor)) {
      this.router.navigate(['home']);
      this.appComponent.setLoggedUser(true);
    }  
    /*    
    if(username == 'user' && password == 'password'){ //.subscribe(doctor => this.doctor = doctor)) {
      this.router.navigate(['home']);
      this.appComponent.setLoggedUser(true);
    }*/
  }
}
