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

exports.index = function(req, res){
      //render is used to render the file by server
      res.render('login.ejs'); 
};


exports.auth = app.use(function(req, res){
	var pass = db.parents.findOne(
		{ email: { $eq: req.body.email } },
		{ password: 1}
		);



	console.log(pass);

//	if(req.body.name = )
});