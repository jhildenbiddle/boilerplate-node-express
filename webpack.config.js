// Modules
// =============================================================================
var webpack = require('webpack');


// Config
// =============================================================================
module.exports = {
    entry: './app/assets/js/main.js',
    output: {
        path    : './public/js',
        filename: 'main.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
