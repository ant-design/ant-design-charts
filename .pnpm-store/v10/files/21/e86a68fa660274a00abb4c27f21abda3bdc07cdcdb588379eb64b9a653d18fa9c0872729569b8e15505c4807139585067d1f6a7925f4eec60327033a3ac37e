'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

describe('url parsing', function () {
  var server;

  beforeEach(() => server = proxyTarget(8111, 1000, [
     {
      method: 'get',
      path: '/verify-port',
      fn: (req, res, next) => {
        debugger;
        res.json({recieved: true});
      }
    }
  ]));
  afterEach(async ()  => await server.close());
  this.timeout(TIMEOUT.STANDARD);

  it('can parse a url with a port', function (done) {
    var app = express();
    app.use(proxy('http://localhost:8111'));
    request(app)
      .get('/verify-port')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.equal(res.body.recieved, true);
        done();
      });
  });

  it('even with a trailing slash', function (done) {
    var app = express();
    app.use(proxy('http://localhost:8111'));
    request(app)
      .get('/verify-port')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.equal(res.body.recieved, true);
        done();
      });
  });
});


