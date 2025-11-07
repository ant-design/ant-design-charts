'use strict';

var assert = require('assert');
var express = require('express');
var http = require('http');
var startProxyTarget = require('./support/proxyTarget');
var proxy = require('../');
var TIMEOUT = require('./constants');

function chunkingProxyServer() {
  var proxyRouteFn = [{
    method: 'get',
    path: '/stream',
    fn: function (req, res) {
      res.write('0');
      setTimeout(function () { res.write('1'); }, 100);
      setTimeout(function () {  res.write('2'); }, 200);
      setTimeout(function () { res.write('3'); }, 300);
      setTimeout(function () { res.end(); }, 500);
    }
  }];

  return startProxyTarget(8309, 1000, proxyRouteFn);
}

function simulateUserRequest() {
  return new Promise(function (resolve, reject) {
    var req = http.request({ hostname: 'localhost', port: 8308, path: '/stream' }, function (res) {
      var chunks = [];
      res.on('data', function (chunk) { chunks.push(chunk.toString()); });
      res.on('end', function () { resolve(chunks); });
    });

    req.on('error', function (e) {
      reject('problem with request:', e.message);
    });

    req.end();
  });
}

function startLocalServer(proxyOptions) {
  var app = express();
  app.get('/stream', proxy('http://localhost:8309', proxyOptions));
  return app.listen(8308);
}

describe('streaming behavior / piped requests', function () {
  this.timeout(TIMEOUT.MEDIUM);

  var server;
  var targetServer;

  beforeEach(function () {
    targetServer = chunkingProxyServer();
  });

  afterEach(function () {
    server.close();
    targetServer.close();
  });

  describe('when streaming is enabled', function () {
    var TEST_CASES = [{
      name: 'with default options',
      options: {}
    }, {
      name: 'with synchronous proxyReqOptDecorator',
      options: {
        proxyReqOptDecorator: function (reqBuilder) {
          return reqBuilder;
        }
      }
    }, {
      name: 'with asynchronous proxyReqOptDecorator',
      options: {
        proxyReqOptDecorator: function (reqBuilder) {
          return Promise.resolve(reqBuilder);
        }
      }
    }];

    TEST_CASES.forEach(function (testCase) {
      describe(testCase.name, function () {
        it('should receive response in chunks before request completion', function (done) {
          server = startLocalServer(testCase.options);
          simulateUserRequest()
            .then(function (res) {
              assert(res instanceof Array, 'Response should be an array of chunks');
              assert.equal(res.length, 4, 'Response should contain exactly 4 chunks');
              done();
            })
            .catch(done);
        });
      });
    });
  });

  describe('when streaming is disabled', function () {
    var TEST_CASES = [{
      name: 'with skipToNextHandler filter',
      options: {
        skipToNextHandlerFilter: function () {
          return false;
        }
      }
    }];

    TEST_CASES.forEach(function (testCase) {
      describe(testCase.name, function () {
        it('should receive response as a single chunk', function (done) {
          server = startLocalServer(testCase.options);

          simulateUserRequest()
            .then(function (res) {
              assert(res instanceof Array, 'Response should be an array');
              assert.equal(res.length, 1, 'Response should be a single chunk');
              done();
            })
            .catch(done);
        });
      });
    });
  });
});
