import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees() : any {
    return [
      {"id" : 12 , "name" : "poko", "age" : 22 },
      {"id" : 13 , "name" : "Joseph", "age" : 25 },
      {"id" : 14 , "name" : "Alex", "age" : 35 }
    ];
  }
}
