import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
doctor: Doctor = {
  id: 101,
  name: 'Dr. House',
  phone: 1111212111,
  specialty: 'Cadiogy'
};
  constructor() { }

  ngOnInit() {
  }
}
