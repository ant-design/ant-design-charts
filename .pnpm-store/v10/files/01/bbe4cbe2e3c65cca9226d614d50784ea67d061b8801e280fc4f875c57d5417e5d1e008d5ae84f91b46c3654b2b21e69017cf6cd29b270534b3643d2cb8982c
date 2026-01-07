'use strict';

var express = require('express');
var request = require('supertest');
var proxy = require('../');
var http = require('http');
var assert = require('assert');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

describe('when skipToNextHandlerFilter is defined', function () {

  this.timeout(TIMEOUT.STANDARD);

  var app;
  var  slowTarget;
  var  serverReference;

  beforeEach(function () {
    app = express();
    slowTarget = express();
    slowTarget.use(function (req, res) { res.sendStatus(407); });
    serverReference = slowTarget.listen(12345);
  });

  afterEach(function () {
    serverReference.close();
  });

  var OUTCOMES = [
    { shouldSkip: false, expectedStatus: 407 },
    { shouldSkip: true, expectedStatus: 203 },
  ];

  OUTCOMES.forEach(function (outcome) {
    describe('and returns ' + outcome.shouldSkip, function () {
      it('express-http-proxy' + (outcome.shouldSkip ? ' skips ' : ' doesnt skip ') + 'to next()', function (done) {

        app.use('/proxy', proxy('http://127.0.0.1:12345', {
          skipToNextHandlerFilter: function (/*res*/) {
            return outcome.shouldSkip;
          }
        }));

        app.use(function (req, res) {
          res.sendStatus(203);
        });

        request(app)
          .get('/proxy')
          .expect(outcome.expectedStatus)
          .end(done);
      });
    });
  });
});
