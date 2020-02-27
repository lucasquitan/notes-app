const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Inside importations
const indexRoutes = require('./routes/index.routes');
const notesRoutes = require('./routes/notes.routes');

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
app.use(express.urlencoded({ extended: false }));

// Global variables

// Routes
app.use(indexRoutes);
app.use(notesRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
