/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
// lo commento perchè voglio vedere index.html presente in /assets
/*
  '/': {
    view: 'index'
  },*/
  //user

  'POST /user': 'UserController.create',
  'POST /user/login': 'UserController.login',
  'GET /users/:email': 'UserController.findOne',
  'GET /user/findByID': 'UserController.findByID',
  'POST /user/getAll': 'UserController.getAll',

  'POST /lesson':'LessonController.create',
  'GET /lesson/:teacherID': 'LessonController.getTeacherID',
  'POST /lesson/id': 'LessonController.getLessonID',

  'POST /word': 'WordController.add',

  'POST /lessonword/getLessonsWords': 'LessonWordController.getLessonsWords',
  'POST /lessonWord': 'LessonWordController.create',
  'POST /lessonWord/delete': 'LessonWordController.removeWordFromLesson',

  'POST /groupuser/getGroupsUsers': 'GroupUserController.getGroupsUsers',
  'POST /groupuser/addUserToGroup': 'GroupUserController.addUserToGroup',
  'POST /groupuser/delete': 'GroupUserController.removeUserFromGroup',

  'POST /groupLesson/getLessonsGroups': 'GroupLessonController.getLessonsGroups',
  'POST /groupLesson/getGroupsLessons': 'GroupLessonController.getGroupsLessons',
  'POST /groupLesson/addGroupToLesson': 'GroupLessonController.addGroupToLesson',
  'POST /groupLesson/delete': 'GroupLessonController.removeGroupFromLesson',

  'GET /allGroups': 'GroupController.getGroups',
  'POST /groupUser/getAll': 'GroupUserController.getMyGroups',

  'POST /studentword/addOrUpdateStudentWord': 'StudentWordController.addOrUpdateStudentWord',
  'POST /studentword/getAllGuessed': 'StudentWordController.getAllGuessed',
  'POST /studentword/countAll': 'StudentWordController.countAll',
  'POST /studentword/countAllGuessed': 'StudentWordController.countAllGuessed'
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
