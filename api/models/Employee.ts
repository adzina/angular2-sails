/**
 * Employee.ts
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//You can see the model for Angular into /src/app/models/employee.ts
//import { Sails } from 'Sails';

//See this tutorial
// http://alexclavelle.blogspot.it/2015/03/using-sailsjs-with-typescript.html

//export class Employee extends Sails.QueryResult {
export class Employee  {
  public id: number = 0;
	public fullname: string = '';
	public emailid:string = '';
	public phonenumber:string = '';
}
