'use strict';

var assert = require('assert');
var ScopeContainer = require('../lib/scopeContainer');
var resolveProxyReqPath = require('../app/steps/resolveProxyReqPath');
var expect = require('chai').expect;
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var TIMEOUT = require('./constants');

describe('proxy path resolution', function () {
  this.timeout(TIMEOUT.STANDARD);

  var container;

  beforeEach(function () {
    container = new ScopeContainer();
  });

  describe('path resolver types', function () {
    var testCases = [
      {
        name: 'default resolver',
        resolverFn: undefined,
        testData: [
          { url: 'http://localhost:12345', expected: '/' },
          { url: 'http://g.com/123?45=67', expected: '/123?45=67' }
        ]
      },
      {
        name: 'synchronous resolver',
        resolverFn: function () { return 'custom/path'; },
        testData: [
          { url: 'http://localhost:12345', expected: 'custom/path' },
          { url: 'http://g.com/123?45=67', expected: 'custom/path' }
        ]
      },
      {
        name: 'asynchronous resolver',
        resolverFn: function () {
          return new Promise(function (resolve) {
            resolve('async/path');
          });
        },
        testData: [
          { url: 'http://localhost:12345', expected: 'async/path' },
          { url: 'http://g.com/123?45=67', expected: 'async/path' }
        ]
      }
    ];

    testCases.forEach(function (testCase) {
      describe('when using ' + testCase.name, function () {
        testCase.testData.forEach(function (data) {
          it('should resolve ' + data.url + ' to ' + data.expected, function (done) {
            container.user.req = { url: data.url };
            container.options.proxyReqPathResolver = testCase.resolverFn;
            var result = resolveProxyReqPath(container);

            assert(result instanceof Promise, 'Resolver should return a Promise');

            result.then(function (container) {
              var resolvedPath = container.proxy.reqBuilder.path;
              if (!resolvedPath) {
                return done(new Error('reqBuilder.path is undefined'));
              }
              expect(resolvedPath).to.equal(data.expected);
              done();
            }).catch(done);
          });
        });
      });
    });
  });

  describe('path transformation examples', function () {
    it('should transform paths as shown in documentation', function (done) {
      var proxyTarget = require('../test/support/proxyTarget');
      var proxyServer = proxyTarget(12345, 100, [{
        method: 'get',
        path: '/tent',
        fn: function (req, res) {
          res.send(req.url);
        }
      }]);

      var app = express();
      app.use(proxy('localhost:12345', {
        proxyReqPathResolver: function (req) {
          var parts = req.url.split('?');
          var queryString = parts[1];
          var updatedPath = parts[0].replace(/test/, 'tent');
          return updatedPath + (queryString ? '?' + queryString : '');
        }
      }));

      request(app)
        .get('/test?a=1&b=2&c=3')
        .expect('/tent?a=1&b=2&c=3')
        .end(function (err) {
          proxyServer.close();
          done(err);
        });
    });
  });
});
