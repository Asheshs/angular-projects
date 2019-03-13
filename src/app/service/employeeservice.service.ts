import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/forms/src/validators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private _employeeUrl:string="http://localhost:8080/getEmployeeList";
  private _employeeCreateUrl:string="http://localhost:8080/createEmployee";

  constructor(private http:HttpClient) { }
  


  getEmployee():Observable<Employee>{
    return this.http.get<Employee>(this._employeeUrl);
  }
  createEmployee(employee):Observable<any>{
    console.log(employee);
    return this.http.post(this._employeeCreateUrl,employee);   
    
  }
}
