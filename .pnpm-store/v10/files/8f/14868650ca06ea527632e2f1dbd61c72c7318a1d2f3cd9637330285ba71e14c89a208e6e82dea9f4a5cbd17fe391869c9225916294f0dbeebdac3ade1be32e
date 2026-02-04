'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

describe('userResDecorator', function () {
  this.timeout(TIMEOUT.QUICK);
  var proxyServer;

  describe('conditions', function () {
    beforeEach(function () {
      proxyServer = proxyTarget(12345);
    });

    afterEach(async function () {
      await proxyServer.close();
    });

    describe('when handling a 304', function () {
      this.timeout(10000);

      var app;
      var slowTarget;
      var serverReference;

      beforeEach(function () {
        app = express();
        slowTarget = express();
        slowTarget.use(function (req, res) { res.sendStatus(304); });
        serverReference = slowTarget.listen(12346);
      });

      afterEach(function () {
        serverReference.close();
      });

      it('skips any handling', function (done) {
        app.use('/proxy', proxy('http://127.0.0.1:12346', {
          userResDecorator: function (/*res*/) {
            throw new Error('expected to never get here because this step should be skipped for 304');
          }
        }));

        request(app)
          .get('/proxy')
          .expect(304)
          .end(done);
      });
    });

    it('has access to original response', function (done) {
      var app = express();
      app.use(proxy('localhost:12345', {
        userResDecorator: function (proxyRes, proxyResData) {
          assert(proxyRes.connection);
          assert(proxyRes.socket);
          assert(proxyRes.headers);
          assert(proxyRes.headers['content-type']);
          return proxyResData;
        }
      }));

      request(app).get('/get').end(done);
    });

    it('works with promises', function (done) {
      var app = express();
      var handler = {
        method: 'get',
        path: '/promise',
        fn: function(req, res) {
          res.json({ origin: '127.0.0.1' });
        }
      };
      proxyServer.close();
      proxyServer = proxyTarget(12345, 100, [handler]);

      app.use(proxy('localhost:12345', {
        userResDecorator: function (proxyRes, proxyResData) {
          return new Promise(function (resolve) {
            const decoratedResponse = JSON.parse(proxyResData.toString());
            decoratedResponse.funkyMessage = 'oi io oo ii';
            setTimeout(function () {
              resolve(JSON.stringify(decoratedResponse));
            }, 200);
          });
        }
      }));

      request(app)
        .get('/promise')
        .end(function (err, res) {
          if (err) { return done(err); }
          assert.equal(res.body.origin, '127.0.0.1');
          assert.equal(res.body.funkyMessage, 'oi io oo ii');
          done();
        });
    });

    it('can modify the response data', function (done) {
      var app = express();
      var handler = {
        method: 'get',
        path: '/data',
        fn: function(req, res) {
          res.json({ origin: '127.0.0.1' });
        }
      };
      proxyServer.close();
      proxyServer = proxyTarget(12345, 100, [handler]);

      app.use(proxy('localhost:12345', {
        userResDecorator: function (proxyRes, proxyResData) {
          var data = JSON.parse(proxyResData.toString('utf8'));
          data.intercepted = true;
          return JSON.stringify(data);
        }
      }));

      request(app)
        .get('/data')
        .end(function (err, res) {
          if (err) { return done(err); }
          assert(res.body.intercepted);
          done();
        });
    });

    it('can modify the response headers, [deviant case, supported by pass-by-reference atm]', function (done) {
      var app = express();
      app.use(proxy('localhost:12345', {
        userResDecorator: function (rsp, data, req, res) {
          res.set('x-wombat-alliance', 'mammels');
          res.set('content-type', 'wiki/wiki');
          return data;
        }
      }));

      request(app)
        .get('/get')
        .end(function (err, res) {
          if (err) { return done(err); }
          assert.equal(res.headers['content-type'], 'wiki/wiki');
          assert.equal(res.headers['x-wombat-alliance'], 'mammels');
          done();
        });
    });

    it('can mutuate an html response', function (done) {
      var app = express();
      var handler = {
        method: 'get',
        path: '/html',
        fn: function(req, res) {
          res.send('<html><body>Oh, hey there</body></html>');
        }
      };
      proxyServer.close();
      proxyServer = proxyTarget(12345, 100, [handler]);

      app.use(proxy('localhost:12345', {
        userResDecorator: function (rsp, data) {
          data = data.toString().replace('Oh', '<strong>Hey</strong>');
          return data;
        }
      }));

      request(app)
        .get('/html')
        .end(function (err, res) {
          if (err) { return done(err); }
          assert.equal(res.status, 200, 'Response should have 200 status code');
          assert.equal(res.type, 'text/html', 'Response should be HTML content type');
          assert(res.text.includes('<strong>Hey</strong>'), 'Response should contain the modified text');
          assert(!res.text.includes('Oh, hey there'), 'Response should not contain the original text');
          done();
        });
    });

    it('can change the location of a redirect', function (done) {
      function redirectingServer(port, origin) {
        var app = express();
        app.get('/', function (req, res) {
          res.status(302);
          res.location(origin + '/proxied/redirect/url');
          res.send();
        });
        return app.listen(port);
      }

      var redirectingServerPort = 8012;
      var redirectingServerOrigin = ['http://localhost', redirectingServerPort].join(':');

      var server = redirectingServer(redirectingServerPort, redirectingServerOrigin);

      var proxyApp = express();
      var preferredPort = 3000;

      proxyApp.use(proxy(redirectingServerOrigin, {
        userResDecorator: function (rsp, data, req, res) {
          var proxyReturnedLocation = res.getHeaders ? res.getHeaders().location : res._headers.location;
          res.location(proxyReturnedLocation.replace(redirectingServerPort, preferredPort));
          return data;
        }
      }));

      request(proxyApp)
        .get('/')
        .expect(function (res) {
          res.headers.location.match(/localhost:3000/);
        })
        .end(function () {
          server.close();
          done();
        });
    });

    describe('when userResDecorator returns a Promise', function () {
      this.timeout(TIMEOUT.EXTENDED);  // give it some extra time to get response

      it('is able to read and manipulate the response', function (done) {
        var app = express();
        app.use(proxy('https://github.com/villadora/express-http-proxy', {
          userResDecorator: function (targetResponse, data) {
            data = data.toString().replace('DOCTYPE', 'WINNING');
            assert(data !== '');
            return data;
          }
        }));

        request(app)
          .get('/html')
          .end(function (err, res) {
            if (err) { return done(err); }
            assert(res.text.indexOf('WINNING') > -1);
            done();
          });
      });
    });
  });

  describe('test userResDecorator on html response from mock server', function () {
    var proxyServer;

    beforeEach(function () {
      var handler = {
        method: 'get',
        path: '/html',
        fn: function(req, res) {
          res.send('<!DOCTYPE html><html><body>Test page</body></html>');
        }
      };
      proxyServer = proxyTarget(12345, 100, [handler]);
    });

    afterEach(function () {
      proxyServer.close();
    });

    it('is able to read and manipulate the response', function (done) {
      var app = express();
      app.use(proxy('localhost:12345', {
        userResDecorator: function (targetResponse, data) {
          data = data.toString().replace('DOCTYPE', 'WINNING');
          return data;
        }
      }));

      request(app)
        .get('/html')
        .end(function (err, res) {
          if (err) { return done(err); }
          assert(res.text.indexOf('WINNING') > -1);
          done();
        });
    });
  });

  describe('test userResDecorator on html response from github', function () {

    /*
     Github provided a unique situation where the encoding was different than
     utf-8 when we didn't explicitly ask for utf-8.  This test helped sort out
     the issue, and even though its a little too on the nose for a specific
     case, it seems worth keeping around to ensure we don't regress on this
     issue.
     */

    it('is able to read and manipulate the response', function (done) {
      this.timeout(15000);  // give it some extra time to get response
      var app = express();
      app.use(proxy('https://github.com/villadora/express-http-proxy', {
        userResDecorator: function (targetResponse, data) {
          data = data.toString().replace('DOCTYPE', 'WINNING');
          assert(data !== '');
          return data;
        }
      }));

      request(app)
        .get('/html')
        .end(function (err, res) {
          if (err) { return done(err); }
          assert(res.text.indexOf('WINNING') > -1);
          done();
        });
    });
  });
});
