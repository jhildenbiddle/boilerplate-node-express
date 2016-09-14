var data = require('../data/data.json');

module.exports = function(app, isProduction) {
    // Default
    app.route('/').get(function(req, res, next) {
        res.render('default/', data);
    });

    // External route files
    app.use('/page', require('./page'));
    app.use(require('./error'));
};
