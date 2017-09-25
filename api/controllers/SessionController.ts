
 import { Model } from 'Sails';

 declare var sails: any;

module.exports = {
  'new': function(res,req){
    req.session.authenticated=true;
  }
};
