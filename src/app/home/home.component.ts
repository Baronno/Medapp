import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private appComponent:AppComponent
  ) { }

  ngOnInit() {
    if (this.appComponent.doctor.name) {
      this.appComponent.setLoggedUser(true);
      console.log("user was "+this.appComponent.doctor.name);
    }
    if (this.appComponent.doctor.name == null) {
      console.log("user was null");
    }       
  }

}
