'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

describe('proxies headers', function () {
  this.timeout(TIMEOUT.QUICK);

  var http;
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12345);
    http = express();
    http.use(proxy('localhost:12345', {
      headers: {
        'X-Current-president': 'taft'
      }
    }));
  });

  afterEach(function () {
    proxyServer.close();
  });

  it('passed as options', function (done) {
    request(http)
      .get('/headers')
      .expect(200)
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.equal(res.body.headers['x-current-president'], 'taft', 'Custom header should be passed through');
        done();
      });
  });

  it('passed as on request', function (done) {
    request(http)
      .get('/headers')
      .set('X-Powerererer', 'XTYORG')
      .expect(200)
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.equal(res.body.headers['x-powerererer'], 'XTYORG', 'Request header should be passed through');
        done();
      });
  });
});

describe('Manipulating headers for the request to the proxy', function () {
  this.timeout(TIMEOUT.QUICK);

  var app;
  var targetServer;
  var TEST_PORT = 56001;
  var PROXY_IP = '192.168.1.100';
  var API_DOMAIN = 'localhost:' + TEST_PORT;

  beforeEach(function () {
    app = express();
    targetServer = proxyTarget(TEST_PORT, 100, [{
      method: 'get',
      path: '/headers',
      fn: function (req, res) {
        assert.equal(req.headers['x-forwarded-for'], PROXY_IP);
        assert.equal(req.headers['client-ip'], PROXY_IP);
        assert.equal(req.headers['x-real-ip'], PROXY_IP);
        res.json({ headers: req.headers });
      }
    }]);
  });

  afterEach(function () {
    targetServer.close();
  });

  describe('e.g., IP forwarding headers', function () {
    it('should pass user defined headers to the proxy target server', function (done) {
      app.use(proxy(`http://${API_DOMAIN}`, {
        proxyReqOptDecorator: function (proxyReqOpts) {
          // Testing that the headers are present in the request to the proxy
          proxyReqOpts.headers['X-Forwarded-For'] = PROXY_IP;
          proxyReqOpts.headers['X-Real-IP'] = PROXY_IP;
          proxyReqOpts.headers['Client-IP'] = PROXY_IP;
          return proxyReqOpts;
        }
      }));

      request(app)
        .get('/headers')
        .expect(200)
        .end(function (err, res) {
          if (err) { return done(err); }
          // Verify again here to guard against failures to call `proxyReqOptDecorator`
          assert.equal(res.body.headers['x-forwarded-for'], PROXY_IP);
          assert.equal(res.body.headers['client-ip'], PROXY_IP);
          assert.equal(res.body.headers['x-real-ip'], PROXY_IP);
          done();
        });
    });
  });
});

