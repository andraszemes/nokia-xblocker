
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongojs = require('mongojs');
const db = mongojs('usersDatabase', ['parents']);
const objectId = mongojs.ObjectId;
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const app = express();

//set the View engine - middleware
app.set('view engine','ejs');
//specify folder for views
app.set('views',path.join(__dirname, 'views'));

//Middleware for body parser from docs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return{
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));


exports.index = function(req, res){
  // find everything
  db.users.find(function (err, docs) {
      //render is used to render the file by server
      res.render('register.ejs',{
          
      });
  }) 
};

//catch the POST from register.ejs form

exports.add = app.use(function(req, res){

      var newUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          telNum: req.body.telNum,
          password: req.body.password
      }
      console.log(newUser);
      //add customers to the database
      db.parents.insert(newUser, function(err, result){
          if(err){
            console.log(err);
          }
          //redirect back to the site before request (refresh)
          res.redirect('/dashboard');
      });

      console.log('Success');
}); 

exports.dashboard = function(req, res){
  // find everything
  db.users.find(function (err, docs) {
      //render is used to render the file by server
      res.render('dashboard.ejs',{
          
      });
  }) 
};

//delete route
exports.delete = function(req, res){
    db.parents.remove({_id: objectId(req.params.id)}, function(err){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
};




