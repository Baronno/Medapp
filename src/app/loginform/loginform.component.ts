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
              private appComponent:AppComponent,
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
   
    this.appComponent.logIn(username, password);

    console.log("this doctor check from loginform"+this.appComponent._loggedUser);
    
      
      this.router.navigate(['home']);
      this.appComponent.setLoggedUser(true);
      //this.appComponent.setDoctor(username);
        
      this.showAlert = true;
    
  }
}