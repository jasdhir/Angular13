import { Component, OnInit } from '@angular/core';
import {EmployeesService } from './employees.service'
import {Employees} from './Employees'

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
//   template: `
// <div>
//   <h2> Employee List From Http Client</h2>
//   <ul *ngFor = "let emp of employees">
//     <li>{{ emp.id }} - {{ emp.name }} - {{emp.age}}</li> 
//   </ul>
// </div>
//   `,
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit {

  constructor(private employeeService : EmployeesService){}
  employees : Employees;
  ngOnInit(){
      this.employeeService.GetEmployees()
          .subscribe(data =>{
                this.employees = data;
          }
      );
  } 
}
