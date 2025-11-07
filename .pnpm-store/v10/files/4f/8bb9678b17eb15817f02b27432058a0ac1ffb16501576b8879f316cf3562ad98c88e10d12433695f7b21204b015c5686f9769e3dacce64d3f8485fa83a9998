"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-prototype-of"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _ = require('underscore'); // Helper function to check null or undefined.


var isNullOrUndefined = function isNullOrUndefined(x) {
  return _.isNull(x) || _.isUndefined(x);
};

var ensureArray = function ensureArray(target) {
  if (_.isArray(target)) {
    return target;
  }

  if (target === undefined || target === null) {
    return [];
  }

  return [target];
};

var transformFetchOptions = function transformFetchOptions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      keys = (0, _keys.default)(_ref),
      include = _ref.include,
      includeACL = _ref.includeACL;

  var fetchOptions = {};

  if (keys) {
    fetchOptions.keys = ensureArray(keys).join(',');
  }

  if (include) {
    fetchOptions.include = ensureArray(include).join(',');
  }

  if (includeACL) {
    fetchOptions.returnACL = includeACL;
  }

  return fetchOptions;
};

var getSessionToken = function getSessionToken(authOptions) {
  if (authOptions.sessionToken) {
    return authOptions.sessionToken;
  }

  if (authOptions.user && typeof authOptions.user.getSessionToken === 'function') {
    return authOptions.user.getSessionToken();
  }
};

var tap = function tap(interceptor) {
  return function (value) {
    return interceptor(value), value;
  };
}; // Shared empty constructor function to aid in prototype-chain creation.


var EmptyConstructor = function EmptyConstructor() {}; // Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.


var inherits = function inherits(parent, protoProps, staticProps) {
  var child; // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent's constructor.

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    /** @ignore */
    child = function child() {
      parent.apply(this, arguments);
    };
  } // Inherit class (static) properties from parent.


  _.extend(child, parent); // Set the prototype chain to inherit from `parent`, without calling
  // `parent`'s constructor function.


  EmptyConstructor.prototype = parent.prototype;
  child.prototype = new EmptyConstructor(); // Add prototype properties (instance properties) to the subclass,
  // if supplied.

  if (protoProps) {
    _.extend(child.prototype, protoProps);
  } // Add static properties to the constructor function, if supplied.


  if (staticProps) {
    _.extend(child, staticProps);
  } // Correctly set child's `prototype.constructor`.


  child.prototype.constructor = child; // Set a convenience property in case the parent's prototype is
  // needed later.

  child.__super__ = parent.prototype;
  return child;
}; // Suppress the date string format warning in Weixin DevTools
// Link: https://developers.weixin.qq.com/community/minihome/doc/00080c6f244718053550067736b401


var parseDate = typeof wx === 'undefined' ? function (iso8601) {
  return new Date(iso8601);
} : function (iso8601) {
  return new Date(Date.parse(iso8601));
};

var setValue = function setValue(target, key, value) {
  // '.' is not allowed in Class keys, escaping is not in concern now.
  var segs = key.split('.');
  var lastSeg = segs.pop();
  var currentTarget = target;
  segs.forEach(function (seg) {
    if (currentTarget[seg] === undefined) currentTarget[seg] = {};
    currentTarget = currentTarget[seg];
  });
  currentTarget[lastSeg] = value;
  return target;
};

var findValue = function findValue(target, key) {
  var segs = key.split('.');
  var firstSeg = segs[0];
  var lastSeg = segs.pop();
  var currentTarget = target;

  for (var i = 0; i < segs.length; i++) {
    currentTarget = currentTarget[segs[i]];

    if (currentTarget === undefined) {
      return [undefined, undefined, lastSeg];
    }
  }

  var value = currentTarget[lastSeg];
  return [value, currentTarget, lastSeg, firstSeg];
};

var isPlainObject = function isPlainObject(obj) {
  return _.isObject(obj) && (0, _getPrototypeOf.default)(obj) === Object.prototype;
};

var continueWhile = function continueWhile(predicate, asyncFunction) {
  if (predicate()) {
    return asyncFunction().then(function () {
      return continueWhile(predicate, asyncFunction);
    });
  }

  return _promise.default.resolve();
};

module.exports = {
  isNullOrUndefined: isNullOrUndefined,
  ensureArray: ensureArray,
  transformFetchOptions: transformFetchOptions,
  getSessionToken: getSessionToken,
  tap: tap,
  inherits: inherits,
  parseDate: parseDate,
  setValue: setValue,
  findValue: findValue,
  isPlainObject: isPlainObject,
  continueWhile: continueWhile
};