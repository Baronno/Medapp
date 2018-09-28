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

  constructor (
    private doctorService:DoctorService
  ){}

  @Input() doctor = this.doctorService.getDoctor('example@mail.com');  
  
  private _loggedUser: boolean = false;
  private _registering: boolean = false;

  public setRegistering(data:boolean)  {
    this._registering = data;
  }

  public setLoggedUser(data:boolean) {
    this._loggedUser = data;
  }
  
}

