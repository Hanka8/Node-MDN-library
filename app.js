const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site

const app = express();

//set up a mongoose connection
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://hankam:library156@cluster0.trw1rmu.mongodb.net/local_library?retryWrites=true&w=majority";

async function main(){
  await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
}

main().catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware
// Middleware are functions that have access to the request and response objects and can perform tasks or modify them before they reach the route handlers.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route handling
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

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

//listen to port 8080 by default
app.listen(process.env.PORT, function(){
  console.log(`Server is running on port ${process.env.PORT}
  connection string is ${mongoDB}`);
});

module.exports = app;