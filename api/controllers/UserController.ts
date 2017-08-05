/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){
		let _login=req.param('login'),
				_password=req.param('password');
		if(!_login) return res.badRequest({err: 'Invalid login'});
		if(!_password) return res.badRequest({err:'Invalid password'});
    console.log(_login);
    console.log(_password);
		return User.create({
			login:_login,
			password:_password
		})
    .exec(function (err, user){
        if (err) { return res.serverError(err); }

        console.log('User\'s login is:', user.login);
        return res.ok();
});
	},

	findOne: function(req,res){
		let userLogin=req.param('login');
    console.log(userLogin);
		if(!userLogin) return res.badRequest({err:'missing login'});

    User.findOne({login:userLogin})
    .then(_user =>{
			if(!_user) return res.notFound({err: 'No such user'});
      console.log("found it!");
			return res.ok(_user);
		})
	}
};
