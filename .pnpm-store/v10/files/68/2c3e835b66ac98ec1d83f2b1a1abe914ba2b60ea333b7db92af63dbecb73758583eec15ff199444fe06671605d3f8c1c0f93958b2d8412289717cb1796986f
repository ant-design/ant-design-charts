'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

var proxyRouteFn = [{
  method: 'get',
  path: '/test',
  fn: function (req, res) {
    res.send(req.url);
  }
}];

describe('proxies query parameters', function () {
  this.timeout(TIMEOUT.STANDARD);

  var app;
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12346, 100, proxyRouteFn);
    app = express();
    app.use(proxy('localhost:12346'));
  });

  afterEach(function () {
    proxyServer.close();
  });

  it('repeats query params to proxy server', function (done) {
    request(app)
      .get('/test?a=1&b=2&c=3')
      .end(function (err, res) {
        assert.equal(res.text, '/test?a=1&b=2&c=3');
        done(err);
      });
  });
});
