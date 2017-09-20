/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"users",
  attributes: {
    first_name: {type:'string', required: true},
    last_name: {type:'string', required: true},
    email: {type: 'string', required: true, email: true, unique: true},
    password: {type: 'string', required:true},
    role: {type: 'string', required:true}
  }
};
/*
export class User {
	public id: number = 0;
	public login: string = '';
	public password:string = '';
}
*/
