// Karma configuration
// Generated on Mon Jul 09 2018 15:06:13 GMT-0500 (SA Pacific Standard Time)
var webpackConfig = require('./webpack/webpack.config');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    client: {
      clearContext: false
    },

    // list of files / patterns to load in the browser
    files: [
      { pattern: './src/unit-tests.ts' }
    ],

    resolve: {
      extensions: ['.js', '.ts']
    },

    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/unit-tests.ts': ['webpack', 'sourcemap'],
      '*.js': ['sourcemap'],
      '**/*.spec.ts': ['sourcemap', 'webpack'],
   },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','html'],

    htmlReporter: {
      outputFile: './src/units.html',
            
      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'Heroes',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

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

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    webpack: webpackConfig,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins : ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-webpack', 'karma-sourcemap-loader', 'karma-chrome-launcher', 'karma-htmlfile-reporter', 'karma-firefox-launcher'],

    
  })
}
