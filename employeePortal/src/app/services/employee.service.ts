import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  readonly baseURL = 'http://localhost:3000/employees';


  constructor(private http : HttpClient ) { }
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }
  getData(){
    var a ="HELL YEAH";
    return a;
  }
  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }
  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
