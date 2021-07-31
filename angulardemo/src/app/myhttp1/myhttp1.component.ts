import { Component, Input, OnInit } from '@angular/core';
import {EmployeesService } from '../myhttp/employees.service';
import {Employees} from '../myhttp/Employees';

@Component({
  selector: 'app-myhttp1',
  templateUrl: './myhttp1.component.html',
  styleUrls: ['./myhttp1.component.css']
})
export class Myhttp1Component implements OnInit {

  constructor(private employeeService : EmployeesService){}
  employee : Employees;
  eid:number;

  ngOnInit(){
           
      // this.employeeService.GetEmployee(this.eid)
      //     .subscribe(data =>{
      //       this.employee=data;
      //         console.log("GET Request to get a employee with id - 12");
      //         console.log("name: " + data.name);
      //         console.log("age: " + data.age);
      //     }
      // );
  } 
  onEntered(item):void{
    this.eid=item.value;
    this.employeeService.GetEmployee(this.eid)
          .subscribe(data =>{
            this.employee=data;
              console.log("GET Request to get a employee with id - 12");
              console.log("name: " + data.name);
              console.log("age: " + data.age);
          }
      );
  }
}


