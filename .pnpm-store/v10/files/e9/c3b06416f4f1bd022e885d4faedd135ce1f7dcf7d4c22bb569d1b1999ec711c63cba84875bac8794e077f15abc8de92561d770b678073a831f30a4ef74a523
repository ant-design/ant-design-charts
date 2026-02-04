"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var storage = require('./localstorage');

var AV = require('./av');

var removeAsync = exports.removeAsync = storage.removeItemAsync.bind(storage);

var getCacheData = function getCacheData(cacheData, key) {
  try {
    cacheData = JSON.parse(cacheData);
  } catch (e) {
    return null;
  }

  if (cacheData) {
    var expired = cacheData.expiredAt && cacheData.expiredAt < Date.now();

    if (!expired) {
      return cacheData.value;
    }

    return removeAsync(key).then(function () {
      return null;
    });
  }

  return null;
};

exports.getAsync = function (key) {
  var _context;

  key = (0, _concat.default)(_context = "AV/".concat(AV.applicationId, "/")).call(_context, key);
  return storage.getItemAsync(key).then(function (cache) {
    return getCacheData(cache, key);
  });
};

exports.setAsync = function (key, value, ttl) {
  var _context2;

  var cache = {
    value: value
  };

  if (typeof ttl === 'number') {
    cache.expiredAt = Date.now() + ttl;
  }

  return storage.setItemAsync((0, _concat.default)(_context2 = "AV/".concat(AV.applicationId, "/")).call(_context2, key), (0, _stringify.default)(cache));
};