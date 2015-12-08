'use strict';
var webpack = require('webpack'),
    path = require('path');

var APP = __dirname + '/app';

module.exports = {
    // config goes here
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './index.js']
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/,
            },
        ],
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel',
                exclude: /node_modules|bower_components/,
            },
            {
                //easy html template imports
                test: /\.html$/,
                loader: 'raw',
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test',
        })
    ],
};
