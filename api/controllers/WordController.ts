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
  add: function(req,res){
      var eng=req.param('english'),
          pol=req.param('polish'),
          lessonID=req.param('lessonID');
          var wordID=this.create(eng,pol,lessonID);
          console.log(wordID);
  },
  create: function(eng,pol,lessonID){
    sails.models.word.create({
      english:eng,
      polish:pol}).exec(function (err, word){
      //  res.json(200, { id: word.id });
        return word.id
			});

    }
};
