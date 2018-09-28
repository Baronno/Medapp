import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MedApp';
  doctor = 'Dr. House';
  
  private _loggedUser: boolean = false;

  public getLoggedUser(): boolean {
    return this._loggedUser;
  }
  public setLoggedUser(data:boolean) {
    this._loggedUser = data;
  }
  
}

