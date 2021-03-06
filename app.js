var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var expressVue = require("express-vue");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var taskFlowRouter = require('./routes/task-flow')
var redirectRouter = require('./routes/redirect-task-flow')

var app = express();

// view engine setup
const vueOptions = {
  rootPath: path.join(__dirname, "/views"),
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/task-flow', taskFlowRouter);
app.use('/task-flow/redirect', redirectRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
