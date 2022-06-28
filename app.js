//모듈 불러오기
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet'); //웹해킹 방지하는 모듈추가..

//router(callback)
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');

//데이터베이스
const db          = require('./db/database');

// Create Express application
const app = express();

//Use Helmet for protection purposes.
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set web application to use Routers.
app.use('/', indexRouter); //Index
app.use('/users', usersRouter); //유저페이지인데 아직 아무런 기능이 없는게 함정..
app.use('/register', registerRouter); //회원가입

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
