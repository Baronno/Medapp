/*
This component only shows an image when the user logs in
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private appComponent:AppComponent,
    private router:Router,
  ) { }

  //When initialised, if the doctor's details are correct, it sets the loggedUser variable in
  // app component to true, otherwise it returns to login page
  ngOnInit() {
    if (this.appComponent.doctor.name) {
      this.appComponent.setLoggedUser(true);
    }
    if (this.appComponent.doctor.name == null) {
      this.appComponent.setLoggedUser(false);
      this.router.navigate(['login']);
    }       
  }

}
