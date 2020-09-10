import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeService } from '../app/services/employee.service';

const appRoutes : Routes =[
  {path:'',component:EmployeeComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ReactiveFormsModule,
  HttpClientModule 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
