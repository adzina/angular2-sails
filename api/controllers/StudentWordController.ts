
import { Model } from 'Sails';
import * as async from "async";
import * as _ from "lodash";
declare var sails: any;
var Promise = require('bluebird');

module.exports = {
  addOrUpdateStudentWord: function(req, res) {
    var guessed = req.param("guessed"),
      studentID = req.param("studentID"),
      wordID = req.param("wordID");

    sails.models.studentword.findOne({ studentID: studentID, wordID: wordID })
      .exec(function(err, pair) {
        if (pair) {
          var at;
          if (at + 1 == 3 && guessed) {
            //slówko odgadnięte 3 razy z rzedu jest usuwane
            sails.models.studentword.delete({ studentID: studentID, wordID: wordID })
              .exec(function(deleted) {
                return res.json(deleted);
              })
          }
          //zeruje podejscia jesli student popelnil blad
          if(!guessed) at=0;
          else at=pair.attempt+1;

          sails.models.studentword.update({ studentID: studentID, wordID: wordID },{attempt:at})
          .exec(function(updated){
            return res.json(updated);
          })
        }
        //creating a pair only in case if student did not guess the word in first attempt
        if (!pair && !guessed) {
          sails.models.studentword.create({ studentID: studentID, wordID: wordID, attempt: 1, guessed: false })
          .exec(function(created){
            return res.json(created);
          })
        }
      })


  }
};
interface word {
  english: string,
  polish: string,
  id: string;
}
