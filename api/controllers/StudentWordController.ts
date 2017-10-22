
 import { Model } from 'Sails';
 import * as async from "async";
 import * as _ from "lodash";
 declare var sails: any;
 var Promise = require('bluebird');

module.exports = {
  assignStudentToWord:function(req,res){

    let words:word[];
    words=req.param("words");
    let studentID=req.param("studentID");

    var promises = [];

    _.forEach(words,function(word){
      promises.push(  sails.models.studentword.create({
          studentID: studentID,
          wordID: word.id,
          attempt: 0,
          guessed: 0
        }));
      });
        Promise.all(promises)
          .then(function(words) {
            console.log(words);
              return res.json(words);
                })
          .catch(function(err) {
            console.log("error");
            return res.negotiate(err);
    })


}
};
interface word{
  english:string,
  polish: string,
  id: string;
}
