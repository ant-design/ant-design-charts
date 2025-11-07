'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

describe('timeout handling', function () {
  this.timeout(TIMEOUT.STANDARD);

  var app;
  var targetServer;
  var SERVER_DELAY = 1000;
  var TEST_PORT = 56001;

  beforeEach(function () {
    app = express();
    targetServer = proxyTarget(TEST_PORT, SERVER_DELAY, [
      {
        method: 'get',
        path: '/',
        fn: function (req, res) { res.sendStatus(200); }
      }, {
        method: 'post',
        path: '/post',
        fn: function (req, res) { res.sendStatus(200); }
      }, {
        method: 'put',
        path: '/put',
        fn: function (req, res) { res.sendStatus(200); }
      }
    ]);
  });

  afterEach(function () {
    targetServer.close();
  });

  describe('timeout configuration', function () {
    it('should fail with 504 when timeout is lower than server response time', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: 100
      }));

      request(app)
        .get('/')
        .expect(504)
        .expect('X-Timeout-Reason', 'express-http-proxy reset the request.')
        .end(done);
    });

    it('should succeed when timeout is higher than server response time', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: SERVER_DELAY + 200
      }));

      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });

    it('should handle timeout with custom error handler', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: 100,
        proxyErrorHandler: function(err, res, next) {
          assert.equal(err.code, 'ECONNRESET');
          res.status(408).send('Custom timeout error');
        }
      }));

      request(app)
        .get('/')
        .expect(408)
        .expect('Custom timeout error')
        .end(done);
    });
  });

  describe('timeout edge cases', function () {
    it('timeouts of 0 have no effect [this is an unintentional feature, but fixing it would be a breaking change]', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: 0
      }));

      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });

    it('should handle very large timeout value', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: 30000
      }));

      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });

    it('should handle undefined timeout value', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: undefined
      }));

      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });
  });

  describe('timeout with different HTTP methods', function () {
    it('should handle timeout for POST requests', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: 100
      }));

      request(app)
        .post('/post')
        .expect(504)
        .expect('X-Timeout-Reason', 'express-http-proxy reset the request.')
        .end(done);
    });

    it('should handle timeout for PUT requests', function (done) {
      app.use(proxy('http://localhost:' + TEST_PORT, {
        timeout: 100
      }));

      request(app)
        .put('/put')
        .expect(504)
        .expect('X-Timeout-Reason', 'express-http-proxy reset the request.')
        .end(done);
    });
  });
});
