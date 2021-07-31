import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Employees} from './Employees'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
// Base url
baseurl = 'http://localhost:3000/employees/';

constructor(private http: HttpClient) { }
 // Http Headers
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


 // GET
 GetEmployees(): Observable<Employees> {
  return this.http.get<Employees>(this.baseurl)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}

// GET
GetEmployee(id:any): Observable<Employees> {
  return this.http.get<Employees>(this.baseurl + id)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}


// Error handling
errorHandl(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
