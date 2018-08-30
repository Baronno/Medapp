import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

import { PatientSearchComponent } from './patient-search/patient-search.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientDetailComponent,
    PatientSearchComponent,
    NavigateComponent,
    LoginformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
