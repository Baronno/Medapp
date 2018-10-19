import { Component, Input } from '@angular/core';
import { Doctor } from './doctor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Input() doctor: Doctor;
  title = 'MedApp';
  _loggedUser: boolean = false;
  _registering: boolean = false;
 
  constructor (
    private http:HttpClient
  ){}

  public setRegistering(data:boolean)  {
    this._registering = data;
  }

  public setLoggedUser(data:boolean) {
    this._loggedUser = data;
  }

  public logOut(): void {
    this._loggedUser = false;
    this.doctor = null;
  }

  public logIn(email:string, password:string): void {
    this.http
      .get<{message: boolean, loggedDoctor: Doctor}>('http://localhost:3000/api/login/'+email+'/'+password)
      .subscribe((results) => {
        this.doctor = results.loggedDoctor;
        this._loggedUser = results.message;
      });
  }
  /*
  public setDoctor(data:string): void {
    this.http
    .get<{message: string, doctorResult: Doctor}>('http://localhost:3000/api/doctors/'+data)
    .subscribe((doctorData) => {
      this.doctor = doctorData.doctorResult;
      console.log(this.doctor);
    });
  }
  */
}
