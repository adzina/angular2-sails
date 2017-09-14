/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import { Model } from 'Sails';

declare var sails: any;
var UserModel: Sails.Model = sails.models.user;

module.exports = {
	create: function(req,res){
		let _first_name=req.param('first_name'),
				_last_name=req.param('last_name'),
				_email=req.param('email'),
				_password=req.param('password'),
				_role=req.param('role');
		if(!_first_name) return res.badRequest({err: 'Invalid first name'});
		if(!_last_name) return res.badRequest({err: 'Invalid last name'});
		if(!_role) return res.badRequest({err: 'Invalid role'});
		if(!_email) return res.badRequest({err: 'Invalid email'});
		if(!_password) return res.badRequest({err:'Invalid password'});
    console.log(_email);
    console.log(_password);
		return UserModel.create({
			first_name: _first_name,
			last_name: _last_name,
			email:_email,
			password:_password,
			role: _role
		})
    .exec(function (err, user){
        if (err) { return res.serverError(err); }

        return res.ok();
});
	},

	findOne: function(req,res){
		let userEmail=req.param('email');
    console.log(userEmail);

		if(!userEmail)
			return res.badRequest({err:'missing email'});

    UserModel.findOne({email:userEmail})
    .then(_user =>{
			if(!_user)
				return res.notFound({err: 'No such user'});

			return res.ok(_user);
		})
	}
};
