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
};
