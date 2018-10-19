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
  doctorOriginal:Doctor;
  
  ngOnInit() {
  }

  undoChanges() {    
    console.log('doctor name'+this.doctor.name);
    console.log('doctor saved name'+this.doctorOriginal.name);
    this.doctor = this.doctorOriginal;
  }

}
