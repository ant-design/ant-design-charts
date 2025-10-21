'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var TIMEOUT = require('./constants');

describe('userResHeaderDecorator', function () {
  var app;
  var serverReference;

  beforeEach(function () {
    app = express();
    var pTarget = express();
    pTarget.use(function (req, res) {
      res.header('x-my-not-so-secret-header', 'minnie-mouse');
      res.header('x-my-secret-header', 'mighty-mouse');
      res.json(req.headers);
    });
    serverReference = pTarget.listen(12345);
  });

  afterEach(function () {
    serverReference.close();
  });

  describe('header modification', function () {
    it('can remove headers from the response', function (done) {
      app.use('/proxy', proxy('http://127.0.0.1:12345', {
        userResHeaderDecorator: function (headers) {
          delete headers['x-my-secret-header'];
          return headers;
        }
      }));

      request(app)
        .get('/proxy')
        .expect(function (res) {
          assert(Object.keys(res.headers).indexOf('x-my-not-so-secret-header') > -1);
          assert(Object.keys(res.headers).indexOf('x-my-secret-header') === -1);
        })
        .end(done);
    });

    it('can add new headers to the response', function (done) {
      app.use('/proxy', proxy('http://127.0.0.1:12345', {
        userResHeaderDecorator: function (headers) {
          headers.boltedonheader = 'franky';
          return headers;
        }
      }));

      request(app)
        .get('/proxy')
        .expect(function (res) {
          assert(res.headers.boltedonheader === 'franky');
        })
        .end(done);
    });
  });

  describe('header proxying', function () {
    it('can copy request headers to response with new names', function (done) {
      app.use('/proxy', proxy('http://127.0.0.1:12345', {
        userResHeaderDecorator: function (headers, userReq) {
          if (userReq.headers['x-custom-header']) {
            headers['x-proxied-custom-header'] = userReq.headers['x-custom-header'];
          }
          if (userReq.headers['x-user-agent']) {
            headers['x-proxied-user-agent'] = userReq.headers['x-user-agent'];
          }
          return headers;
        }
      }));

      request(app)
        .get('/proxy')
        .set('x-custom-header', 'custom-value')
        .set('x-user-agent', 'test-agent')
        .expect(function (res) {
          assert.equal(res.headers['x-proxied-custom-header'], 'custom-value');
          assert.equal(res.headers['x-proxied-user-agent'], 'test-agent');
        })
        .end(done);
    });

    it('can copy request headers to response with same names', function (done) {
      app.use('/proxy', proxy('http://127.0.0.1:12345', {
        userResHeaderDecorator: function (headers, userReq) {
          headers['x-copied-header-1'] = userReq.headers['x-copied-header-1'];
          headers['x-copied-header-2'] = userReq.headers['x-copied-header-2'];
          return headers;
        }
      }));

      request(app)
        .get('/proxy')
        .set('x-copied-header-1', 'value1')
        .set('x-copied-header-2', 'value2')
        .expect(function (res) {
          assert.equal(res.headers['x-copied-header-1'], 'value1');
          assert.equal(res.headers['x-copied-header-2'], 'value2');
        })
        .end(done);
    });
  });
});
