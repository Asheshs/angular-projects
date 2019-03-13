import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeserviceService } from '../service/employeeservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees;
  constructor(private _employeeService: EmployeeserviceService) { }

  ngOnInit() {
   this._employeeService.getEmployee().subscribe(
    data=> this.employees=data,
    error=>console.log(error)
    );
   }

}
