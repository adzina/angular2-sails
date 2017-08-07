/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:"users",
  attributes: {
    login: {type: 'string', required: 'true'},
    password: {type: 'string', required:'true'}
  }
};
/*
export class User {
	public id: number = 0;
	public login: string = '';
	public password:string = '';
}
*/
