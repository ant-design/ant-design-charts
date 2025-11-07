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

const PORT_NUMBER = 8111;

const pngHex = '89504e470d0a1a0a0' +
  '000000d4948445200' +
  '00000100000001080' +
  '60000001f15c48900' +
  '00000a49444154789' +
  'c6300010000050001' +
  '0d0a2db4000000004' +
  '9454e44ae426082';
const pngData = Buffer.from(pngHex, 'hex');

const parseRequest = (req, res, next) => {
  getRawBody(req, {
    length: req.headers['content-length'],
  }).then((rawBody) => {
    res.json({rawBody, headers: req.headers});
  })
}

describe('reqBodyEncoding [controls "accept-charset" header]', function () {
  var server;

  beforeEach(() => server = startProxyTarget(8111, 1000, [
    {
      method: 'post',
      path: '/post',
      fn: parseRequest,
    }
  ]));
  afterEach(async ()  => await server.close());

  describe('when unset <default>', () => {
    it('sets "accept-charset" to "utf-8"', (done) => {
      var app = express();
      app.use(proxy('localhost:8111'));
      request(app)
        .post('/post')
        .end(function (err, res) {
          assert(res.body.headers['accept-charset'] === 'utf-8');
          done(err);
        });
    });
  });

  describe('when set to <falsey>', () => {
    it('leaves "accept-charset" undefined"', (done) => {
      var app = express();
      app.use(proxy('localhost:8111', {
        reqBodyEncoding: null,
      }));
      request(app)
        .post('/post')
        .end(function (err, res) {
          assert.equal(res.body.headers['accept-charset'], undefined);
          done(err);
        });
    });
    describe('specific use cases', () => {
      it('image uploads are not set to an encoding', function (done) {
        var filename = os.tmpdir() + '/express-http-proxy-test-' + (new Date()).getTime() + '-png-transparent.png';
        var app = express();

        app.use(proxy('localhost:8111', {
          reqBodyEncoding: null,
        }));

        fs.writeFile(filename, pngData, function (err) {
          if (err) { throw err; }
          request(app)
            .post('/post')
            .attach('image', filename)
            .end(function (err, res) {
              fs.unlinkSync(filename);
              assert(res.body.headers['accept-charset'] === undefined);
              assert(res.body.headers['content-type'].match(/multipart\/form-data;/));
              assert(Buffer.from(res.body.rawBody.data).toString('hex').match(pngData.toString('hex')));
              done(err);
            });
        });

      });
    });
  });


  describe('when user sets reqBodyEncoding', function () {
    describe('when user uses a non-standard accepts-charset header', () => {
      it('application uses the non-standard accepts-charset header', (done) => {
        var app = express();
        app.use(proxy('localhost:8111', {
          reqBodyEncoding: 'utf-jalepeno'
        }));
        request(app)
          .get('/headers')
          .end(function (err, res) {
            if (err) { throw err; }
            assert.equal(res.body.headers['accept-charset'], 'utf-jalepeno');
            done(err);
          });
      });
    });
    it('should set the accepts-charset header', function (done) {
      var app = express();
      app.use(proxy('localhost:8111', {
        reqBodyEncoding: 'utf-16'
      }));
      request(app)
        .get('/headers')
        .end(function (err, res) {
          if (err) { throw err; }
          assert.equal(res.body.headers['accept-charset'], 'utf-16');
          done(err);
        });
    });
  });
});
