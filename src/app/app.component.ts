import { Component, Input } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorService } from './doctor.service';
import { HttpClient } from '@angular/common/http';

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
    private doctorService:DoctorService,
    private http:HttpClient
  ){}

/* REMOVE!!!!!
  ngOnInit() {
    this.http
    .get<{message: string, doctorResult: Doctor}>('http://localhost:3000/api/doctors/a')
    .subscribe((doctorData) => {
      this.doctor = doctorData.doctorResult;
      console.log(this.doctor);
    });
  }
   /*REMOVE!!!!! */

  public setRegistering(data:boolean)  {
    this._registering = data;
  }

  public setLoggedUser(data:boolean) {
    this._loggedUser = data;
  }

  public logIn(email:string, password:string): boolean {
    if (
      this.http
      .get<{message: string, loggedDoctor: Doctor}>('http://localhost:3000/api/login/'+email+'/'+password)
      .subscribe((results) => {
        this.doctor = results.loggedDoctor;
        console.log(this.doctor);
      })
    ) {
      return true;
    } else return false;
  }

  public setDoctor(data:string): void {
    /*this.doctorService.getDoctor(data)
    .subscribe(doctor => this.doctor = doctor);*/

    this.http
    .get<{message: string, doctorResult: Doctor}>('http://localhost:3000/api/doctors/'+data)
    .subscribe((doctorData) => {
      this.doctor = doctorData.doctorResult;
      console.log(this.doctor);
    });
  }

}
