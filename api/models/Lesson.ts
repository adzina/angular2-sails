/**
 * Lesson.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "lessons",
  attributes: {
      teacherID: {type:'string', required: true},
      studentID: {type:'string', required: true},
      date: {type: 'date', required: true},
      wordID: {type: 'string', required:true}
  }
};
