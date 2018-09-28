import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router:Router,
    private appComponent:AppComponent,
  ) { }

  ngOnInit() {
  }

  registerDoctor(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.appComponent.setRegistering(false);
    this.router.navigate(['login']);    
  }

}
