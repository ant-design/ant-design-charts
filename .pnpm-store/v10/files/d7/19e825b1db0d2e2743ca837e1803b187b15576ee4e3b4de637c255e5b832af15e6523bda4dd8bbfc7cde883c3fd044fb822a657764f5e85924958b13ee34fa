'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

var proxyRouteFn = [{
  method: 'get',
  path: '/cookieTest',
  fn: function (req, res) {
    // This stub proxy server method simply copies the cookies from the inbound
    // request to the outbound response. This lets us check the proxy reponse
    // for the cookies on the request.
    Object.keys(req.cookies).forEach(key => {
      res.cookie(key, req.cookies[key]);
    });
    res.sendStatus(200);
  }
}];

describe("cookies", () => {
  describe('when cookies are sent on the user request', function () {
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

    it('they are copied to the proxy request', function (done) {
      request(app)
        .get('/cookieTest')
        .set('Cookie', 'myApp-token=12345667')
        .end(function (err, res) {
          var cookiesMatch = res.headers['set-cookie'].filter(function (item) {
            return item.match(/myApp-token=12345667/);
          });
          assert(cookiesMatch);
          done(err);
        });
    });
  });
});
