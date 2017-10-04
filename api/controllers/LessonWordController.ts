
import { Model } from 'Sails';

declare var sails: any;

module.exports={
create: function(req,res){
    let _teacherID=req.param('teacherID'),
        _wordID=req.param('wordID');

    return sails.models.lessonword.create({
      lessonID: _teacherID,
      wordID: _wordID

    })
    .exec(function (err, user){
      if (err) { return res.serverError(err); }
      console.log("did it");
      return res.ok();
    });
},
}
