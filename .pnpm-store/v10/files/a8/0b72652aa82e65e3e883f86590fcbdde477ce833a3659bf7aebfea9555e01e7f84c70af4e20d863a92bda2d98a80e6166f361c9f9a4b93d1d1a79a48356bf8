module.exports = config => {
  const customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: '45',
    },
    sl_ios_safari: {
      base: 'SauceLabs',
      browserName: 'iPhone',
      version: '10.3',
    },
  };

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    client: {
      mocha: {
        ui: 'bdd',
        timeout: 30000,
      },
    },

    // list of files / patterns to load in the browser
    files: ['test/browser/index.js'],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    sauceLabs: {
      testName: `LeanCloud Realtime SDK Test #${(
        process.env.TRAVIS_COMMIT || ''
      ).slice(0, 7)}`,
      recordVideo: true,
      connectOptions: {
        noSslBumpDomains: 'all',
        logfile: 'sauce_connect.log',
      },
    },
    customLaunchers,
    captureTimeout: 480000,
    browserNoActivityTimeout: 120000,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1,
  });
};
