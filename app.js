var express=require('express');
var todoController=require('./controllers/myTodoController');
var app=express();
todoController(app);
app.use('/assets',express.static(__dirname+'/assets'));

