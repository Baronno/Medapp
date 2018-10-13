import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  showAlert:boolean = false;

  constructor(private router:Router,
              private appComponent:AppComponent
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

    console.log("before appcomponent login");
    this.appComponent.logIn(username, password);
    
    console.log("login doctor name retrieved: "+this.appComponent.doctor.name);

    if(this.appComponent.doctor.name == null) {
      console.log("name was supposedly null");
      this.showAlert = true; 
    }
    else {
      this.appComponent.setLoggedUser(true);
      console.log("sett logged user true");
      this.router.navigate(['home']);
      console.log("should be in home now");
    }
  }
}
