var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var us = require('./routes/us');
var api = require('./routes/api');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/users', usersRouter);
app.use('/us', us);
app.use('/admin',require('./routes/admin'));
app.use('/api',api);
app.use('/',require('./routes/main'));

mongoose.connect('mongodb://127.0.0.1:27017/mengjj');
mongoose.connection.on("connected",function(){
	console.log("Mongoose connected success.")
});
mongoose.connection.on("error",function(){
	console.log("Mongoose connected fail.")
});
mongoose.connection.on("disconnected",function(){
	console.log("Mongoose connected disconnected.")
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
