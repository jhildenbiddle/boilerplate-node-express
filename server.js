var bodyParser   = require('body-parser');
var browserSync  = require('browser-sync');
var compression  = require('compression');
var cookieParser = require('cookie-parser');
var favicon      = require('serve-favicon');
var isProduction = process.env.NODE_ENV === 'production';
var express      = require('express');
var path         = require('path');
var port         = process.env.PORT || 3000;

// App
var app = express();

// Set base director for views to allow abolute paths
app.locals.basedir = path.join(__dirname, 'app/views');

// View engine
app.set('views', path.join(__dirname, 'app/views/pages'));
app.set('view engine', 'pug');

// Middleware
app.use(compression());
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

// Routes
require('./app/routes')(app, isProduction);

// Production
if (isProduction) {
    app.listen(port, function() {});
}
// Development
else {
    browserSync.create().init({
        server         : './public',
        files          : [
            './app/views/**/*.pug',
            './public/**',
            './static/**'
        ],
        middleware     : [app],
        open           : false,
        notify         : false,
        reloadOnRestart: true
    });
}

module.exports = app;
