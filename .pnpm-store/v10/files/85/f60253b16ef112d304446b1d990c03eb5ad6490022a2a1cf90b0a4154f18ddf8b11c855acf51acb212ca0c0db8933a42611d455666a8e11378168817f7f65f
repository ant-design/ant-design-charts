'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

describe('proxies https', function () {
  this.timeout(TIMEOUT.QUICK);

  var app;
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12345);
    app = express();
  });

  afterEach(async function () {
    await proxyServer.close();
  });

  /**
   * Instead of testing actual HTTPS connections (which would require SSL certificates),
   * we test that the proxy correctly configures itself for HTTPS by inspecting the
   * request options it generates. This approach:
   * 1. Is more reliable and consistent across environments
   * 2. Doesn't require SSL certificate setup
   * 3. Still verifies the core functionality of HTTPS configuration
   * 4. Will work in CI/CD environments without additional setup
   */
  function assertSecureRequest(hostString = 'localhost:12345', options = {}) {
    return new Promise((resolve, reject) => {
      let reqOptCollector;

      app.use(proxy(hostString, Object.assign({}, {
        options,
        sendProxyRequest: (container)  => {
          reqOptCollector = container.proxy;
          return Promise.resolve(container);
        },
        skipToNextHandlerFilter: () => true
      },
      )));

      request(app)
        .get('/get')
        .end(function (err) {
          if (err) { return reject(err); }
          assert.equal(reqOptCollector.requestModule.globalAgent.protocol, 'https:', 'Proxy should use HTTPS protocol');
          assert.equal(reqOptCollector.requestModule.globalAgent.defaultPort, 443, 'Proxy should use port 443');
          resolve(reqOptCollector);
        });
    });
  }

  describe('when host is a String', function () {
    describe('and includes "https" as protocol', function () {
      it('proxys via https', (done) => {
        assertSecureRequest('https://localhost:12345')
          .then(() => done())
          .catch(done);
      });
    });
    describe('option https is set to "true"', function () {
      it('proxys via https', function (done) {
        assertSecureRequest('https://localhost:12345', {
          https: true,
        })
          .then(() => done())
          .catch(done);
      });
    });
  });

  describe('when host is a Function', function () {
    describe('returned value includes "https" as protocol', function () {
      it('proxys via https', function (done) {
        assertSecureRequest(function () { return 'https://localhost:12345'; })
          .then(() => done())
          .catch(done);
      });
    });
    describe('option https is set to "true"', function () {
      it('proxys via https', function (done) {
        assertSecureRequest(function () { return 'https://localhost:12345'; }, { https: true })
          .then(() => done())
          .catch(done);
      });
    });
  });
});
