/*!
 * deep-rename-keys <https://github.com/jonschlinkert/deep-rename-keys>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var typeOf = require('kind-of');
var rename = require('rename-keys');

/**
 * Expose `renameDeep`
 */

module.exports = function renameDeep(obj, cb) {
  var type = typeOf(obj);

  if (type !== 'object' && type !== 'array') {
    throw new Error('expected an object');
  }

  var res = [];
  if (type === 'object') {
    obj = rename(obj, cb);
    res = {};
  }

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      if (typeOf(val) === 'object' || typeOf(val) === 'array') {
        res[key] = renameDeep(val, cb);
      } else {
        res[key] = val;
      }
    }
  }
  return res;
};
