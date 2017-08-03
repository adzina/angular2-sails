/* if you want learn http crud see this tutorial
http://www.concretepage.com/angular-2/angular-2-http-post-example
*/


import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  private url = 'http://localhost:1337/employee/';

  // Fetch all existing comments
  getEmployees(): Observable<Employee[]> {
    console.log('i am the function getEmployees into service EmployeeService');
    // ...using get request
    return this.http.get(this.url)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addEmployeeWithPromise(employee: Employee): Promise<Employee> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'create', employee, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  addEmployeeWithObservable(employee: Employee): Observable<Employee> {
    console.log('i am addEmployee function into service EmployeeService');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(this.url + 'create');
    return this.http.post(this.url + 'create', employee, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  updateEmployeeWithPromise(employee: Employee): Promise<Employee> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + 'update/' + employee.id, employee, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  deleteEmployeeWithPromise(id: number): Promise<Employee> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.url + id).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    //return body.data || {};
    return body || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
