'use strict';
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var fs = require('fs');
var os = require('os');
var proxy = require('../');
var startProxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

describe('headers: [content-length]', function () {
  var server;

  before(function () {
    server = startProxyTarget(8109, 1000);
  });

  after(function () {
    server.close();
  });

  this.timeout(TIMEOUT.STANDARD);

  describe('on proxy request', function () {
    it('a `GET` request should have a content-length header, and it should be 0', function (done) {
      var app = express();
      app.use(proxy('localhost:8109'));
      request(app)
        .get('/headers')
        .end(function (err, res) {
          if (err) { throw err; }
          assert(res.body.headers['content-length']);
          const contentLength = res.body.headers['content-length'];
          assert(Number(contentLength) === 0);
          done(err);
        });
    });

    describe('a `POST` request should have a content-length header, and it should be accurate', function () {
      it('when the author does not modify the proxyRequest', function(done) {
        var app = express();
        app.use(proxy('localhost:8109'));

        request(app)
          .post('/headers')
          .send({
            data: 'random string of words'
          })
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .end(function (err, res) {
            if (err) { throw err; }
            assert(res.body.headers['content-length']);
            const contentLength = res.body.headers['content-length'];
            assert.equal(contentLength, 33);
            done(err);
          });
      });

      it('when using parseReqBody as false', function (done) {
        var app = express();
        app.use(proxy('localhost:8109', {
          parseReqBody: false
        }));

        request(app)
          .post('/headers')
          .send({
            data: 'random string of words'
          })
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .end(function (err, res) {
            if (err) { throw err; }
            assert(res.body.headers['content-length']);
            const contentLength = res.body.headers['content-length'];
            assert.equal(contentLength, 33);
            done(err);
          });
      });
    });
  });


});
