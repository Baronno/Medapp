import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import {Doctors} from '../simulate doctor';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorsComponent implements OnInit {
  selectedDoctor: Doctor;

  onSelect(doctor: Doctor): void {
    this.selectedDoctor = doctor;
  }
doctor: Doctor = {
  id: 1,
  name: 'Dr. House',
  phone: 455,
  specialty: 'Cardiology'
}
doctors = Doctor;
  constructor() { }

  ngOnInit() {
  }

}
