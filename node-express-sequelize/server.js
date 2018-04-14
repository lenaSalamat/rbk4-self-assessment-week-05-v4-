var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });
var db=require('/node-express-sequelize.index.js')
var users = express.Router('/users');
var User = sequelize.define('User', {
  username: Sequelize.STRING
});
app.get('/users',function(req,res){
db.User.find(users,then(function(err,data)){
	if(err){
	console.log(err);	
	}else{
	res.send(data);	
	}
})
});
/*  Create a '/users' route that responds to 
    a GET request with all users in the database */



module.exports = { 
  app: app,
  User: User
};
