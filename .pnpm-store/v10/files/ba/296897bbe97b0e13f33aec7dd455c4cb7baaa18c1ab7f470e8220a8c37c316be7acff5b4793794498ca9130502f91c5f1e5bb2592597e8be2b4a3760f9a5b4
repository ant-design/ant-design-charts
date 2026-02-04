'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');

describe('preserveReqSession', function () {

  this.timeout(2000);

  var app;
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12345);
    app = express();
    app.use(proxy('localhost:12345'));
  });

  afterEach(async function () {
    await proxyServer.close();
  });

  it('preserveReqSession', function (done) {
    app.use(function (req, _, next) {
      req.session = 'hola';
      next();
    });
    app.use(proxy('localhost:12345', {
      preserveReqSession: true,
      proxyReqOptDecorator: function (reqOpts) {
        assert.equal(reqOpts.session, 'hola', 'Session should be preserved');
        return reqOpts;
      }
    }));

    request(app)
      .get('/user-agent')
      .end(function (err) {
        if (err) { return done(err); }
        done();
      });
  });
});
