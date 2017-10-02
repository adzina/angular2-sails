/**
 * WordController
 *
 * @description :: Server-side logic for managing words
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 import { Model } from 'Sails';

 declare var sails: any;
 var WordModel: Sails.Model = sails.models.word;

module.exports = {
  create: function(req,res){
    var eng=req.param('english');
    var pol=req.param('polish');

    return sails.models.word.create({
      english:eng,
      polish:pol}).exec(function (err, word){
        if (err) { return res.serverError(err); }
        res.json(200, { id: word.id });
			});

    }
};
