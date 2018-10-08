import { Component, Input, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Patient} from '../patient';
import { PatientService } from '../patient.service';
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
 showPatient: boolean = true;
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
    });

    /*const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id)
      .subscribe(patient => this.patient = patient);*/

// TO DO
  /*goBack(): void {
    if (this.patientService.belongs(this.appComponent.doctor.id, id)) {
      this.patientService.getPatient(id)
        .subscribe(patient => this.patient = patient);
      this.showPatient = true;
    } else {
      this.showPatient = false;
    }
  }

  removePatient(patient: Patient) {
    this.patientService.removePatient(patient);
    this.goBack();
  }*/

  /*sendReminder(){

                /*var nodemailer = require('nodemailer');
               /* let transporter = nodemailer.createTransport({
                  service:'gmail',
                  port: 25,
                  secure: false,
                  auth:{
                    user: 'medappservice@gmail.com',
                    pass: 'utsaip2018'
                  }
                })
                let mailOptions = {
                  from: '"Medappservice" <medappservice@gmail.com>',
                  to: 'huerta.fhm@gmail.com',
                  subject: 'Appointment reminding!',
                  text: 'This is Medapp. Our doctor is looking forward to meeting you tomorrow!'
                };
                transporter.sendMail(mailOptions,(error,info) => {
                  if(error){
                    return console.log(error);
                  }
                  console.log("The message was sent!");
                  console.log(info);
                });*/
  }
}
