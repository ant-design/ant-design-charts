'use strict';

var assert = require('assert');
var express = require('express');
var http = require('http');
var startProxyTarget = require('./support/proxyTarget');
var proxy = require('../');
var TIMEOUT = require('./constants');

function createProxyServer({ path, port, response }) {
  var proxyRouteFn = [{
    method: 'get',
    path: path,
    fn: function (req, res) {
      res.write(response);
      res.end();
    }
  }];

  return startProxyTarget(port, 1000, proxyRouteFn);
}

function simulateUserRequest() {
  return new Promise(function (resolve, reject) {
    var req = http.request({
      hostname: 'localhost',
      port: 8308,
      path: '/'
    }, function (res) {
      var chunks = [];
      res.on('data', function (chunk) {
        chunks.push(chunk.toString());
      });
      res.on('end', function () {
        resolve(chunks);
      });
    });

    req.on('error', function (e) {
      reject('problem with request:', e.message);
    });

    req.end();
  });
}

describe('multiple proxy handlers', function () {
  this.timeout(TIMEOUT.MEDIUM);

  var server;
  var primaryProxyServer;
  var fallbackProxyServer;

  beforeEach(function () {
    primaryProxyServer = createProxyServer({
      path: '/',
      port: '8309',
      response: 'primary_response'
    });
    fallbackProxyServer = createProxyServer({
      path: '/',
      port: '8310',
      response: 'fallback_response'
    });
  });

  afterEach(function () {
    server.close();
    primaryProxyServer.close();
    fallbackProxyServer.close();
  });

  describe('when multiple proxies are defined for the same route', function () {
    describe('proxy selection behavior', function () {
      it('should use the first proxy when it succeeds', function (done) {
        var app = express();
        app.use(proxy('http://localhost:8309', {}));
        app.use(proxy('http://localhost:8310', {}));
        server = app.listen(8308);

        simulateUserRequest()
          .then(function (res) {
            assert.equal(res[0], 'primary_response', 'Should use primary proxy response');
            done();
          })
          .catch(done);
      });

      it('should use the fallback proxy when primary skips to next', function (done) {
        var app = express();
        app.use(proxy('http://localhost:8309', {
          skipToNextHandlerFilter: () => true // Force skip to next handler
        }));
        app.use(proxy('http://localhost:8310', {}));
        server = app.listen(8308);

        simulateUserRequest()
          .then(function (res) {
            assert.equal(res[0], 'fallback_response', 'Should use fallback proxy response');
            done();
          })
          .catch(done);
      });
    });
  });
});
