import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeserviceService } from '../service/employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  emp:Employee= new Employee();
  employees;
  message;
  constructor(private route:ActivatedRoute, private router:Router, private _employeeService: EmployeeserviceService) { }

  ngOnInit() {
   
  }
  Submitted(){
    
   this._employeeService.createEmployee(this.emp).subscribe(
    data=>this.message= data,
    error=>error
  ); 
  this.router.navigate(["/employee"]);
  }

}
