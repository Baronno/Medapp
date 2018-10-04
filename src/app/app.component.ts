import { Component, Input } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MedApp';
  private _loggedUser: boolean = false;
  private _registering: boolean = false;

  @Input() doctor: Doctor;
  
  constructor (
    private doctorService:DoctorService
  ){}
/* REMOVE!!!!! 
  ngOnInit() {
    this.doctorService.getDoctor('a')
  .subscribe(doctor => this.doctor = doctor);
  }
   /*REMOVE!!!!! */
  
  public setRegistering(data:boolean)  {
    this._registering = data;
  }

  public setLoggedUser(data:boolean) {
    this._loggedUser = data;
  }

  public setDoctor(data:string): void {
    this.doctorService.getDoctor(data)
    .subscribe(doctor => this.doctor = doctor);
  }
  
}

