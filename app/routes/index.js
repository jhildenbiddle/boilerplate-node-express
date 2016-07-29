module.exports = function(app, isProduction) {
    // Default
    app.route('/').get(function(req, res, next) {
        res.render('index/', {
            welcomeText: 'Welcome text from Express route'
        });
    });

    // Files
    app.use('/page', require('./page'));
    app.use(require('./404'));

    // Errors
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('errors/', {
            message: err.message,
            error: isProduction ? {} : err
        });
    });
};
