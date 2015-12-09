'use strict';
const webpack = require('webpack')
const path = require('path');
var nodeEnvironment = process.env.NODE_ENV;

const config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app', 'main.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'app', 'build'),
        filename: 'bundle.js',
        publicPath: '/build',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ON_TEST: nodeEnvironment === 'test',
        })
    ]
};


module.exports = config;
