/**
 * Lesson.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "lesson",
  attributes: {
      teacherID: {type:'string', required: true},
      studentID: {type:'string'},
      date: {type: 'date', required: true},
      wordID: {type: 'string'},
      subject: {type: 'string', required: true, unique:true}
  }
};
