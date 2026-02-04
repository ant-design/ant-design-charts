'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

function proxyTarget(port, timeout, handlers) {
  var target = express();

  timeout = timeout || 100;

  // parse application/x-www-form-urlencoded
  target.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  target.use(bodyParser.json());
  target.use(cookieParser());

  target.use(function(req, res, next) {
    setTimeout(function() {
      next();
    }, timeout);
  });

  if (handlers) {
    handlers.forEach(function(handler) {
      target[handler.method](handler.path, handler.fn);
    });
  }

  target.get('/get', function (req, res) {
    res.send('OK');
  });

  target.get('/headers', function (req, res) {
    res.json({ headers: req.headers });
  });

  target.get('/user-agent', function (req, res) {
    res.json({ 'user-agent': req.headers['user-agent'] });
  });

  target.get('/test-data', function (_, res) {
    res.json({
      id: 1,
      name: 'Test Item',
      description: 'This is a test item for proxy testing',
      timestamp: new Date().toISOString()
    });
  });

  target.post('/post', function(req, res) {
    var contentType = req.headers['content-type'];
    if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
      // Convert the parsed body back to form-urlencoded format
      var formData = Object.keys(req.body)
        .map(key => `${key}=${req.body[key]}`)
        .join('&');
      res.type('application/x-www-form-urlencoded');
      res.send(formData);
    } else if (contentType && contentType.includes('application/json')) {
      res.json(req.body);
    } else {
      // For raw body or other content types
      req.pipe(res);
    }
  });

  target.use('/headers', function(req, res) {
    res.json({ headers: req.headers });
  });

  target.use(function(err, req, res, next) {
    res.send(err);
    next();
  });

  target.use(function(req, res) {
    res.sendStatus(404);
  });

  return target.listen(port);
}

module.exports = proxyTarget;
