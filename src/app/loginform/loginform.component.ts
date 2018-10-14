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