
import { Model } from 'Sails';
import * as async from "async";
declare var sails: any;

module.exports = {
  addOrUpdateStudentWord: function(req, res) {
    var guessed = req.param("guessed"),
      studentID = req.param("studentID"),
      wordID = req.param("wordID");
    sails.models.studentword.findOne({ studentID: studentID, wordID: wordID })
      .exec(function(err, pair) {
        if (pair) {
          var at=pair.attempt;
          if (at + 1 == 3 && guessed) {
            //slówko odgadnięte 3 razy z rzedu jest usuwane
            console.log("deleting");
            sails.models.studentword.destroy({ studentID: studentID, wordID: wordID })
              .exec(function(error, deleted) {
                if (error)  return res.negotiate(error);
    						return res.json(deleted);
              })
          }
          else{//zeruje podejscia jesli student popelnil blad
          if(!guessed) at=0;
          else at=pair.attempt+1;
          console.log("trying update");
          var data={studentID: studentID, wordID: wordID,attempt:at,guessed:false};
          sails.models.studentword.update({ studentID: studentID, wordID: wordID },data,function(err,updated){
              console.log(updated);
              return res.json(updated);
          })}

        }
        //creating a pair only in case if student did not guess the word in first attempt
        if (!pair && !guessed) {
          var attempt:number;
          attempt=0;
          sails.models.studentword.create({ studentID: studentID, wordID: wordID, attempt: attempt, guessed: false })
          .exec(function(created){
            console.log(created);
            return res.json(created);
          })
        }
        if(!pair && guessed)
          return res.ok();
      })


  }
};
interface word {
  english: string,
  polish: string,
  id: string;
}
