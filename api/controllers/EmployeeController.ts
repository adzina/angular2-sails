//<reference path="../../my_module/sails/sails.d.ts"/>
/**
 * EmployeeController in TypeScript
 *
 * @description :: Server-side logic for managing Employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 *
 * This controller manage the api
 *
 */

 //See this tutorial
 // http://alexclavelle.blogspot.it/2015/03/using-sailsjs-with-typescript.html


import express = require('express');
import { Model } from 'Sails';

declare var sails: any;
var EmployeeModel: Sails.Model = sails.models.employee;

module.exports = {



    add: function (req: express.Request, res: express.Response, next: Function) {

        var pippo = req.query.foo;
        sails.log.debug('Success', pippo);

        var employee = { fullname: 'abc', emailid: 'xyz@abc.com', phonenumber: '0000010000' };

        EmployeeModel.create(employee).exec(function (err, result) {

            if (err) {
                sails.log.debug('Some error occured ' + err);
                return res.status(500).send({ error: 'Some error occured' });
            }

            sails.log.debug('Success', JSON.stringify(result));
            return res.status(200).send({ success: 'Success' });

        });

    }

};
