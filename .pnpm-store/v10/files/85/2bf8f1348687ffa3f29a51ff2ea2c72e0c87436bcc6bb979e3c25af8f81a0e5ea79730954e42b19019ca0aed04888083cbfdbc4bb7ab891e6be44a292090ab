'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var bodyParser = require('body-parser');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');
var TIMEOUT = require('./constants');

function createProxyServer() {
  return proxyTarget(12346, 100, [{
    method: 'post',
    path: '/poster',
    fn: function (req, res) {
      res.send(req.body);
    }
  }]);
}

describe('middleware compatibility', function () {
  this.timeout(TIMEOUT.STANDARD);

  var proxyServer;

  beforeEach(function () {
    proxyServer = createProxyServer();
  });

  afterEach(function () {
    proxyServer.close();
  });

  describe('request body handling', function () {
    it('should use req.body when defined by previous middleware', function (done) {
      var app = express();

      // Simulate middleware that processes request body
      app.use(function (req, res, next) {
        var received = [];
        req.on('data', function onData(chunk) {
          if (!chunk) { return; }
          received.push(chunk);
        });
        req.on('end', function onEnd() {
          received = Buffer.concat(received).toString('utf8');
          req.body = JSON.parse(received);
          req.body.foo = 1;
          next();
        });
      });

      app.use(proxy('localhost:12346', {
        userResDecorator: function (rsp, data, req) {
          assert(req.body);
          assert.equal(req.body.foo, 1);
          assert.equal(req.body.mypost, 'hello');
          return data;
        }
      }));

      request(app)
        .post('/poster')
        .send({ mypost: 'hello' })
        .expect(function (res) {
          assert.equal(res.body.foo, 1);
          assert.equal(res.body.mypost, 'hello');
        })
        .end(done);
    });

    it('should stringify JSON body for proxy request', function (done) {
      var app = express();
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({
        extended: false
      }));
      app.use(proxy('localhost:12346'));
      request(app)
        .post('/poster')
        .send({
          mypost: 'hello',
          doorknob: 'wrect'
        })
        .expect(function (res) {
          assert.equal(res.body.doorknob, 'wrect');
          assert.equal(res.body.mypost, 'hello');
        })
        .end(done);
    });

    it('should convert body to Buffer when reqAsBuffer is set', function (done) {
      var app = express();
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({
        extended: false
      }));
      app.use(proxy('localhost:12346', {
        reqAsBuffer: true
      }));
      request(app)
        .post('/poster')
        .send({
          mypost: 'hello',
          doorknob: 'wrect'
        })
        .expect(function (res) {
          assert.equal(res.body.doorknob, 'wrect');
          assert.equal(res.body.mypost, 'hello');
        })
        .end(done);
    });
  });
});
