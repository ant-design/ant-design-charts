'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');
var TIMEOUT = require('./constants');

function createErrorProxyServer() {
  return proxyTarget(12346, 100, [{
    method: 'get',
    path: '/:errorCode',
    fn: function (req, res) {
      var errorCode = req.params.errorCode;
      if (errorCode === 'timeout') {
        return res.status(504).send('mock timeout');
      }
      return res.status(parseInt(errorCode)).send('test case error');
    }
  }]);
}

describe('proxy error handling', function () {
  this.timeout(TIMEOUT.STANDARD);

  var app;
  var proxyServer;

  beforeEach(function () {
    proxyServer = createErrorProxyServer();
    app = express();
  });

  afterEach(function () {
    proxyServer.close();
  });

  describe('when using default error handling', function () {
    describe('timeout scenarios', function () {
      it('should pass 504 timeout directly to client when emitted by proxy', function (done) {
        app.use(proxy('localhost:12346', {
          timeout: 1
        }));

        request(app)
          .get('/200')
          .expect(504)
          .expect('X-Timeout-Reason', 'express-http-proxy reset the request.')
          .end(done);
      });
    });

    describe('error status codes', function () {
      it('should pass 504 gateway timeout directly to client when emitted by the proxy', function (done) {
        app.use(proxy('localhost:12346'));
        request(app)
          .get('/504')
          .expect(504)
          .expect(function (res) {
            assert(res.text === 'test case error');
            return res;
          })
          .end(done);
      });

      it('should pass 500 server error directly to client when emitted by the proxy', function (done) {
        app.use(proxy('localhost:12346'));
        request(app)
          .get('/500')
          .expect(500)
          .end(function (err, res) {
            assert(res.text === 'test case error');
            done();
          });
      });
    });
  });

  describe('when using custom error handling', function () {
    describe('timeout scenarios', function () {
      it('should allow custom handling of timeout errors', function (done) {
        var customStatusCode = 399;
        var customStatusMessage = 'custom timeout message';

        app.use(proxy('localhost:12346', {
          timeout: 1,
          proxyErrorHandler: function (err, res, next) {
            next(err);
          }
        }));

        app.use(function (err, req, res, next) {
          if (err.code === 'ECONNRESET') {
            res.status(customStatusCode).send(customStatusMessage);
          }
        });

        request(app)
          .get('/200')
          .expect(function (res) {
            assert(res.text === customStatusMessage);
            return res;
          })
          .expect(customStatusCode)
          .end(done);
      });
    });

    describe('error transformation', function () {
      it('should allow transforming error responses', function (done) {
        app.use(proxy('localhost:12346', {
          timeout: 1,
          proxyErrorHandler: function (err, res, next) {
            switch (err && err.code) {
              case 'ECONNRESET':    { return res.status(405).send('504 became 405'); }
              case 'ECONNREFUSED':  { return res.status(200).send('gotcher back'); }
              default:              { next(err); }
            }
          }
        }));

        request(app)
          .get('/timeout')
          .expect(405)
          .expect(function (res) {
            assert(res.text === '504 became 405');
            return res;
          })
          .end(done);
      });
    });
  });
});
