const path = require('path');
const webpackConfig = require('./webpack.config');
const entry = path.resolve(webpackConfig.context, webpackConfig.entry);

const preprocessors = {};
preprocessors[entry] = ['webpack'];

// Karma configuration
// Generated on Tue Dec 08 2015 13:01:25 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'tests.bundle.js', watched: false },
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessors,


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    // webpack conf
    // see also: https://www.npmjs.com/package/karma-webpack-with-fast-source-maps
    webpack: {
      resolve: {
        root: __dirname,
        extensions: ['', '.js'],
      },
      devtool: 'cheap-module-source-map',
      module: {
        noParse: [
          /node_modules\/sinon\//,
        ],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [ /node_modules/ ],
          },
          {
            test: /\.html$/,
            loader: 'raw',
            exclude: [ /node_modules/ ],
          },
          {
            test: /\.scss$/,
            loader: 'null-loader', // 'style!css!sass',
            exclude: [ /node_modules/ ],
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'null-loader', //'url-loader?limit=10000&minetype=application/font-woff',
            exclude: [ /node_modules/ ],
          },
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'null-loader', //'file-loader',
            exclude: [ /node_modules/ ],
          },
          {
            test: /node_modules\/auth0-lock\/.*\.js$/,
            loaders: [
              'transform-loader/cacheable?brfs',
              'transform-loader/cacheable?packageify',
            ],
          },
          {
            test: /node_modules\/auth0-lock\/.*\.ejs$/,
            loader: 'transform-loader/cacheable?ejsify',
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
        ],
      },
      stats: { colors: true, reasons: true, errorDetails: true },
      debug: false,
      cache: true,
      plugins: [
        new webpack.DefinePlugin({
          VERSION: JSON.stringify(packageJson.version),
        }),
      ],
    },

    plugins: [
        require('karma-webpack'),
        'karma-chai',
        'karma-mocha',
        'karma-chrome-launcher',
    ]
  })
}
