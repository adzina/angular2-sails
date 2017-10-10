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
          this.create(eng,pol,lessonID,(wordID)=>{
                this.addToLesson(wordID,lessonID,(callback)=>{
                    console.log(wordID);
                    console.log(lessonID);
                    console.log(callback);
                    res.json(200);
                })
          });
  },
  create: function(eng,pol,lessonID,callback){
    sails.models.word.create({
      english:eng,
      polish:pol}).exec(function (err, word){
        return callback(word.id);
			});

    },
  addToLesson: function(wordID, lessonID, callback){
    sails.models.lessonword.create({wordID:wordID, lessonID: lessonID})
    .exec(function (err, id){
      if(id)
      return callback(id);

      console.log(err);
    });
  }
};
