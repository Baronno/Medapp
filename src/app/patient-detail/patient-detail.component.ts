import { Component, Input, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Patient} from '../patient';
import { EmailToSend } from '../emailToSend';
import { AppComponent } from '../app.component';

import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class PatientDetailComponent implements OnInit {
 @Input() patient: Patient;
 today = new Date().getDate();
 message:string = "";

 _showPatient:boolean = true;
 _showReminder:boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private appComponent:AppComponent,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http
    .get<{message: string, patients: Patient}>('http://localhost:3000/api/patient/' + id)
    .subscribe((patientData) => {
      this.patient = patientData.patients;
    })};

  goBack(): void {
    this.location.back();
  };

  removePatient(): void {
    var txt;
    var r = confirm("Are you sure you want to remove patient "+this.patient.name+"?");
    if (r) {
      if(this.http.delete<{message: string, patients: Patient}>('http://localhost:3000/api/patient/' + this.patient.id)
      .subscribe()) {
        this.goBack();
      }
    }
  };

  showReminder():void {
    this._showReminder = true;
  }

  sendReminder(e){
    e.preventDefault();
    var date = e.target.elements[0].value;
    var time = e.target.elements[1].value;
    var thisMail = "huerta.fhm@gmail.com";
    var mailBody = ("This is a reminder you have an appointment on "+date+" at "+time);
    var newMail = new EmailToSend;
    newMail.address = thisMail;
    newMail.mailBody = mailBody;

    this.http
      .get<{message: string}>('http://localhost:3000/api/sendMail/'+thisMail+'/'+mailBody)
      .subscribe((results) => {
        this.message = results.message;
      });

    this.http.post<{message: string}>('http://localhost:3000/api/sendMail/', newMail);
    console.log(mailBody);
    this._showReminder = false;    
  }
}