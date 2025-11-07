"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _require = require('./adapter'),
    getAdapter = _require.getAdapter;

var syncApiNames = ['getItem', 'setItem', 'removeItem', 'clear'];
var localStorage = {
  get async() {
    return getAdapter('storage').async;
  }

}; // wrap sync apis with async ones.

syncApiNames.forEach(function (apiName) {
  localStorage[apiName + 'Async'] = function () {
    var storage = getAdapter('storage');
    return _promise.default.resolve(storage[apiName].apply(storage, arguments));
  };

  localStorage[apiName] = function () {
    var storage = getAdapter('storage');

    if (!storage.async) {
      return storage[apiName].apply(storage, arguments);
    }

    var error = new Error('Synchronous API [' + apiName + '] is not available in this runtime.');
    error.code = 'SYNC_API_NOT_AVAILABLE';
    throw error;
  };
});
module.exports = localStorage;