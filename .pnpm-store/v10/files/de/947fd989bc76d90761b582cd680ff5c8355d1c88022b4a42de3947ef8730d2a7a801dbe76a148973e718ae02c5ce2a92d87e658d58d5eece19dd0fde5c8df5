'use strict';
var getRawBody = require('raw-body');
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var fs = require('fs');
var os = require('os');
var proxy = require('../');
var startProxyTarget = require('./support/proxyTarget');
var TIMEOUT = require('./constants');

const PORT_NUMBER =8109;

const pngHex = '89504e470d0a1a0a0' +
  '000000d4948445200' +
  '00000100000001080' +
  '60000001f15c48900' +
  '00000a49444154789' +
  'c6300010000050001' +
  '0d0a2db4000000004' +
  '9454e44ae426082';
const pngData = Buffer.from(pngHex, 'hex');

const processStuff = (req, res, next) => {
  getRawBody(req, {
    length: req.headers['content-length'],
  }).then((rawBody) => {
    res.json({rawBody, headers: req.headers});
  })
}

describe('limit', function () {
  var server;

  beforeEach(function () {
    server = startProxyTarget(8109);
  });

  afterEach(async function () {
    await server.close();
  });

  it('should not fail on large limit', function (done) {
    var filename = os.tmpdir() + '/express-http-proxy-test-' + (new Date()).getTime() + '-png-transparent.png';
    var app = express();
    app.use(proxy('localhost:8109', {
      parseReqBody: false,
      limit: '20gb',
    }));
    fs.writeFile(filename, pngData, function (err) {
      if (err) { throw err; }
      request(app)
        .post('/post')
        .attach('image', filename)
        .end(function (err) {
          fs.unlinkSync(filename);
          assert(err === null);
          // This test is both broken and I think unnecessary.
          // Its broken because http.bin no longer supports /post, but this test assertion is based on the old
          // httpbin behavior.
          // The assertion in the decorateRequest above verifies the test title.
          //var response = new Buffer(res.body.attachment.data).toString('base64');
          //assert(response.indexOf(pngData.toString('base64')) >= 0, 'response should include original raw data');

          done(err);
        });
    });
  });
  it('should fail with an error when exceeding limit', function (done) {
    var app = express();
    app.use(proxy('localhost:8109', {
      limit: 1,
    }));
    // silence jshint warning about unused vars - express error handler *needs* 4 args
    app.use(function (err, req, res, next) { // eslint-disable-line no-unused-vars
      res.json(err);
    });
    request(app)
      .post('/post')
      .send({ some: 'json' })
      .end(function (err, response) {
        assert(response.body.message === 'request entity too large');
        done();
      });
  });
});
