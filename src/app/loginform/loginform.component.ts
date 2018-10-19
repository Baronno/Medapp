/*
This component is used for logging in. It takes the values from the login form and
calls the function in app component to check in the database if the credentials are 
correct.
*/
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  // This variable is set to true if an alert needs to be shown in the interface
  showAlert:boolean = false;

  constructor(
    private router:Router,
    private appComponent:AppComponent,
    ) { }

  ngOnInit() {
  }

  changeToRegister(){
    this.appComponent.setRegistering(true);
  }

  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    try {      
      this.appComponent.logIn(username, password);
      this.router.navigate(['home']);
    } catch (err) {
      console.log("there was an error");
    }
    
  }
}