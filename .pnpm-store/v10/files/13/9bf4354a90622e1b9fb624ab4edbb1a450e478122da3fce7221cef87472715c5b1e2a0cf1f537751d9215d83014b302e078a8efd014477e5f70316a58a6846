"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _ = require('underscore');

var _require = require('promise-timeout'),
    timeout = _require.timeout;

var debug = require('debug');

var debugRequest = debug('leancloud:request');
var debugRequestError = debug('leancloud:request:error');

var _require2 = require('../adapter'),
    getAdapter = _require2.getAdapter;

var requestsCount = 0;

var ajax = function ajax(_ref) {
  var method = _ref.method,
      url = _ref.url,
      query = _ref.query,
      data = _ref.data,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      time = _ref.timeout,
      onprogress = _ref.onprogress;

  if (query) {
    var _context, _context2, _context4;

    var queryString = (0, _filter.default)(_context = (0, _map.default)(_context2 = (0, _keys.default)(query)).call(_context2, function (key) {
      var _context3;

      var value = query[key];
      if (value === undefined) return undefined;
      var v = (0, _typeof2.default)(value) === 'object' ? (0, _stringify.default)(value) : value;
      return (0, _concat.default)(_context3 = "".concat(encodeURIComponent(key), "=")).call(_context3, encodeURIComponent(v));
    })).call(_context, function (qs) {
      return qs;
    }).join('&');
    url = (0, _concat.default)(_context4 = "".concat(url, "?")).call(_context4, queryString);
  }

  var count = requestsCount++;
  debugRequest('request(%d) %s %s %o %o %o', count, method, url, query, data, headers);
  var request = getAdapter('request');
  var promise = request(url, {
    method: method,
    headers: headers,
    data: data,
    onprogress: onprogress
  }).then(function (response) {
    debugRequest('response(%d) %d %O %o', count, response.status, response.data || response.text, response.header);

    if (response.ok === false) {
      var error = new Error();
      error.response = response;
      throw error;
    }

    return response.data;
  }).catch(function (error) {
    if (error.response) {
      if (!debug.enabled('leancloud:request')) {
        debugRequestError('request(%d) %s %s %o %o %o', count, method, url, query, data, headers);
      }

      debugRequestError('response(%d) %d %O %o', count, error.response.status, error.response.data || error.response.text, error.response.header);
      error.statusCode = error.response.status;
      error.responseText = error.response.text;
      error.response = error.response.data;
    }

    throw error;
  });
  return time ? timeout(promise, time) : promise;
};

module.exports = ajax;