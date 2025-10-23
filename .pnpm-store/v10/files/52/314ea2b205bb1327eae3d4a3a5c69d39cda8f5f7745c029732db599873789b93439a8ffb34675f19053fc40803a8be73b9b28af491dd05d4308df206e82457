'use strict';

var assert = require('assert');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');

describe('http verbs', function () {
  this.timeout(2000);

  var app;
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12345);
    app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(proxy('localhost:12345'));
  });

  afterEach(function () {
    proxyServer.close();
  });

  it('should proxy GET request and return unmodified proxy server response', function (done) {
    request(app)
      .get('/test-data')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.equal(res.status, 200, 'Response should have 200 status code');
        assert.equal(res.type, 'application/json', 'Response should be JSON');
        const expectedResponse = {
          id: 1,
          name: 'Test Item',
          description: 'This is a test item for proxy testing',
          timestamp: res.body.timestamp // We can't assert the exact timestamp since it's dynamic
        };
        assert.deepEqual(res.body, expectedResponse, 'Response should match the proxy server response exactly');
        done();
      });
  });

  it('test proxy post', function (done) {
    request(app)
      .post('/post')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.deepEqual(JSON.parse(res.text), {
          mypost: 'hello'
        });
        done();
      });
  });

  it('test proxy post by x-www-form-urlencoded', function (done) {
    request(app)
      .post('/post')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('mypost=hello')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.equal(res.text, 'mypost=hello');
        done();
      });
  });

  it('test proxy put', function (done) {
    var handler = {
      method: 'put',
      path: '/put',
      fn: function(req, res) {
        res.json(req.body);
      }
    };
    proxyServer.close();
    proxyServer = proxyTarget(12345, 100, [handler]);

    request(app)
      .put('/put')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.deepEqual(res.body, {
          mypost: 'hello'
        });
        done();
      });
  });

  it('test proxy patch', function (done) {
    var handler = {
      method: 'patch',
      path: '/patch',
      fn: function(req, res) {
        res.json(req.body);
      }
    };
    proxyServer.close();
    proxyServer = proxyTarget(12345, 100, [handler]);

    request(app)
      .patch('/patch')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.deepEqual(res.body, {
          mypost: 'hello'
        });
        done();
      });
  });

  it('test proxy delete', function (done) {
    var handler = {
      method: 'delete',
      path: '/delete',
      fn: function(req, res) {
        res.json(req.body);
      }
    };
    proxyServer.close();
    proxyServer = proxyTarget(12345, 100, [handler]);

    request(app)
      .del('/delete')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        if (err) { return done(err); }
        assert.deepEqual(res.body, {
          mypost: 'hello'
        });
        done();
      });
  });
});
