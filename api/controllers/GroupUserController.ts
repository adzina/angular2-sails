/**
 * groupUserController
 *
 * @description :: Server-side logic for managing groupusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 import { Model } from 'Sails';
 import * as async from "async";
 declare var sails: any;

module.exports = {

	addUserToGroup: function(req,res){
		let _groupID=req.param('groupID'),
				_userID=req.param('userID');
				return sails.models.groupuser.create({
					groupID: _groupID,
					userID: _userID

				})
				.exec(function (error, pair){
					if (error) { return res.negotiate(error); }
					return res.json(pair);
				});

	},
	getGroupsUsers:function(req,res){
	  let _groupID=req.param('groupID');

	  this.getUsersID(_groupID,UsersID=>{
	      var output:user[];
	      output=[];
	      async.each(UsersID, function (userID, cb) {
	        sails.models.user.findOne({id: userID})
	          .then(function(user){
	            var elem:user;
	            elem={id:<string>user.id,first_name: <string>user.first_name, last_name: <string>user.elast_name, role: <string>user.role};
	            output.push(elem);
	            //inside the iterator function we call cb() once we are finished
	            cb();
	          })
	          .fail(function(error){
	            //you can pass an error...
	            cb(error);
	          })
	      }, function(error){
	        //... and handle it in the final callback
	        if(error) return res.negotiate(error);

	        //here we can return our finished use
	        return res.json(output);
	});
	  })


	},
	getUsersID:function(_groupID,callback){
	  sails.models.groupuser.find({groupID:_groupID})
	    .exec(function(err,Users){
	      if(err) console.log(err);
	      var output:string[];
	      output=[];
	      for(var i=0;i<Users.length;i++){
	        output[i]=Users[i].userID;
	      }
	      return callback(output);
	    })
	}
}

interface user{
	id: string,
	role: string,
	first_name: string,
	last_name:string,
}
