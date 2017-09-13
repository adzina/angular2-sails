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
				_login=req.param('login'),
				_password=req.param('password'),
				_role=req.param('role');
		if(!_first_name) return res.badRequest({err: 'Invalid first name'});
		if(!_last_name) return res.badRequest({err: 'Invalid last name'});
		if(!_role) return res.badRequest({err: 'Invalid role'});
		if(!_login) return res.badRequest({err: 'Invalid login'});
		if(!_password) return res.badRequest({err:'Invalid password'});
    console.log(_login);
    console.log(_password);
		return UserModel.create({
			first_name: _first_name,
			last_name: _last_name,
			role: _role,
			login:_login,
			password:_password
		})
    .exec(function (err, user){
        if (err) { return res.serverError(err); }

        return res.ok();
});
	},

	findOne: function(req,res){
		let userLogin=req.param('login');
    console.log(userLogin);

		if(!userLogin)
			return res.badRequest({err:'missing login'});

    UserModel.findOne({login:userLogin})
    .then(_user =>{
			if(!_user)
				return res.notFound({err: 'No such user'});
				
			return res.ok(_user);
		})
	}
};
