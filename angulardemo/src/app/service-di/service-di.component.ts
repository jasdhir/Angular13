import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service'

@Component({
  selector: 'app-service-di',
  templateUrl: './service-di.component.html',
  styleUrls: ['./service-di.component.css']
})
export class ServiceDiComponent implements OnInit {

  public employees:any =[];
  constructor(private _employeeService : EmployeeService){
    
    this.employees = _employeeService.getEmployees();
}

  ngOnInit(): void {
  }

}
