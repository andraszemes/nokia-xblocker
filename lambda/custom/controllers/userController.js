
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongojs = require('mongojs')
const db = mongojs('customerapp', ['users'])
const objectId = mongojs.ObjectId;

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
      valuse: value
    };
  }
}));



exports.index = function(req, res){
  // find everything
  db.users.find(function (err, docs) {
      //render is used to render the file by server
      res.render('index',{
        title: 'Customers',
        users: docs
      });
  })

  
};

//catch the POST from index.ejs form
exports.add = function(req, res){

      var newUser = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email
      }
      //add customers to the database
      db.users.insert(newUser, function(err, result){
          if(err){
            console.log(err);
          }
          //redirect back to the site before request (refresh)
          res.redirect('/');
      });

      console.log('Success');
}; 

//delete route
exports.delete = function(req, res){
    db.users.remove({_id: objectId(req.params.id)}, function(err){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
};



