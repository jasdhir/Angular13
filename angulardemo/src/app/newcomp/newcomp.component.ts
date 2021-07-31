import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../service-di/employee.service'

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {

  public employees:any =[];
  constructor(private _employeeService : EmployeeService){
    this.employees = _employeeService.getEmployees();
}

  ngOnInit(): void {
  }

}
