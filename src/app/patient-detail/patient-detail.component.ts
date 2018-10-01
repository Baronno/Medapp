import { Component, Input, OnInit } from '@angular/core';
import { Patient} from '../patient';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
 @Input() patient: Patient;
  constructor(
              private route: ActivatedRoute,
              private patientService: PatientService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getPatient();
  }
  getPatient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id)
      .subscribe(patient => this.patient = patient);
  }
  goBack(): void {
    this.location.back();
  }
  sendReminder(){
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
