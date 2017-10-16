/**
 * GroupController
 *
 * @description :: Server-side logic for managing groups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 import { Model } from 'Sails';

 declare var sails: any;
 var GroupModel: Sails.Model = sails.models.group;

module.exports = {
  create: function(req,res){
      let _name=req.param('name');

      return sails.models.group.create({
        name:_name

      })
      .exec(function (err, group){
        if (err) { return res.serverError(err); }

        return res.ok();
      });
  },

  getGroups: function(req,res){
    return sails.models.group.find()
            .exec(function (err, groups){
                  if (err) { return res.serverError(err); }
                      res.json(200,groups);
			             });
  }
};
