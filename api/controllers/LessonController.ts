/**
 * LessonController
 *
 * @description :: Server-side logic for managing Lessons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 import { Model } from 'Sails';

 declare var sails: any;
 var LessonModel: Sails.Model = sails.models.lesson;

module.exports = {
  create: function(req,res){
			let _teacherID=req.param('teacherID'),
					_subject=req.param('subject'),
					_date=req.param('date');

			return sails.models.lesson.create({
				teacherID: _teacherID,
				subject: _subject,
				date:_date,

			})
    	.exec(function (err, user){
        if (err) { return res.serverError(err); }

        return res.ok();
			});
	},
  find: function(req,res){
    var ID=req.param('teacherID');
          return sails.models.lesson.find({
        teacherID: ID
      }).exec(function (err, lessons){
        if (err) { return res.serverError(err); }

        res.json(200, { lesson: lessons });
			});
  },
  getLessons: function(ID,next) {
   return sails.models.lesson.find({teacherID:ID}).exec(function(err, lessons) {
     if(err) throw err;
     console.log(lessons);
     next(lessons);
   });
 }
};
