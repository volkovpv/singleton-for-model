let express   = require('express'),
 path         = require('path'),
 favicon      = require('serve-favicon'),
 logger       = require('morgan'),
 cookieParser = require('cookie-parser'),
 bodyParser   = require('body-parser');

let index = require('./routes/index'),
 users    = require('./routes/users'),
 pet      = require('./routes/pet');

let Singleton = require('./singleton');

let app = express();

let config = {
    dbName  : 'livedb',
    userName: 'petrsql',
    password: 'petrsql',
    host    : 'localhost',
    port    : 5432,
};
let singleton = new Singleton(config);

console.log(`singleton.counter: ${singleton.counter} and singleton.prop: ${singleton.prop}`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/pet', pet);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');

  err.status = 404;
  next(err);
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
