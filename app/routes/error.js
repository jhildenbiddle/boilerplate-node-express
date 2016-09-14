var express      = require('express');
var isProduction = process.env.NODE_ENV === 'production';
var router       = express.Router();

// Error: 404
router.use(function(req, res, next) {
    var err = new Error('Not Found');

    err.status = 404;
    next(err);
});

// Error: Other
router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error/', {
        message: err.message,
        error: isProduction ? {} : err
    });
});

module.exports = router;
