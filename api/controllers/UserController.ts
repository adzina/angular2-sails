/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import { Model } from 'Sails';

declare var sails: any;

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

			return sails.models.user.create({
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

			if(!userEmail)
				return res.badRequest({err:'missing email'});

	    sails.models.user.findOne({email:userEmail})
	    .then(_user =>{
				if(!_user)
						return res.notFound({err: 'No such user'});

				return res.ok(_user);
			})
	}
};
