import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(
    private location:Location,
  ) { }

  ngOnInit() {
  }

  registerPatient(e) {
    e.preventDefault();
  }

  goBack(): void {
    this.location.back();
  }
}
