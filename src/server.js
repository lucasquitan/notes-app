const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOvrd = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

// Routes importations
const index = require('./routes/index.routes');
const notes = require('./routes/notes.routes');
const users = require('./routes/users.routes');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOvrd('_method'));
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.sucess = req.flash('sucess');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use(index);
app.use(notes);
app.use(users);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
