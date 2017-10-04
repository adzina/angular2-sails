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
    	.exec(function (err, lesson){
        if (err) { return res.serverError(err); }

        return res.ok();
			});
	},
  
  find: function(req,res){
    var id=req.param('teacherID');

    return sails.models.lesson.find({teacherID: id})
            .exec(function (err, lessons){
                  if (err) { return res.serverError(err); }
                  res.json(200, { lesson: lessons });
			             });
  },

  returnID: function(req,res) {
    var sub=req.param('subject');
    return sails.models.lesson.find({subject:sub})
          .exec(function(err, lessons) {
                if (err) { return res.serverError(err); }
                console.log(lessons.id);
                res.json(200, { id: lessons.id });
   });
 }
};
