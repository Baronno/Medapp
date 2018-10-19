/*
This component is used to show the details of the logged in doctor
*/
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
  ) { }

  doctor:Doctor = this.appComponent.doctor;
  
  ngOnInit() {
  }

}
