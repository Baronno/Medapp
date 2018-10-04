import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit { 

  showAlertName:boolean = false;
  showAlertEmail:boolean = false;
  showAlertAge:boolean = false;
  showAlertPhone:boolean = false;

  constructor(
    private location:Location,
  ) { }

  ngOnInit() {
  }

  registerPatient(e) {
    
    e.preventDefault();

    var name = e.target.elements[0].value;
    var email = e.target.elements[1].value;
    var age = e.target.elements[2].value;
    var phone = e.target.elements[3].value;
  }

  goBack(): void {
    this.location.back();
  }
}
