// Modules
// =============================================================================
var webpack = require('webpack');


// Exports
// =============================================================================
module.exports = {
    entry: {
        library: __dirname + '/app/assets/js/main.js'
    },
    devtool: 'source-map',
    output: {
        path    : __dirname + '/public/assets/js/',
        filename: 'main.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
