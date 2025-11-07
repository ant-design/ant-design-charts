/*!
 * /**
 *  * Copyright (c) Meta Platforms, Inc. and affiliates.
 *  *
 *  * This source code is licensed under the MIT license found in the
 *  * LICENSE file in the root directory of this source tree.
 *  * /
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createCacheKey;
function _crypto() {
  const data = require("crypto");
  _crypto = function () {
    return data;
  };
  return data;
}
function _fs() {
  const data = require("fs");
  _fs = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// eslint-disable-next-line no-restricted-imports

// Should mirror `import('@jest/transform').TransformOptions`

// Should mirror `import('@jest/transform').Transformer['getCacheKey']`

const {
  NODE_ENV,
  BABEL_ENV
} = process.env;
function getGlobalCacheKey(files, values, length) {
  return [NODE_ENV, BABEL_ENV, ...values, ...files.map(file => (0, _fs().readFileSync)(file))].reduce((hash, chunk) => hash.update('\0', 'utf8').update(chunk || ''), (0, _crypto().createHash)('sha1')).digest('hex').slice(0, length);
}
function getCacheKeyFunction(globalCacheKey, length) {
  return (sourceText, sourcePath, configString, options) => {
    // Jest 27 passes a single options bag which contains `configString` rather than as a separate argument.
    // We can hide that API difference, though, so this module is usable for both jest@<27 and jest@>=27
    const inferredOptions = options || configString;
    const {
      config,
      instrument
    } = inferredOptions;
    return (0, _crypto().createHash)('sha1').update(globalCacheKey).update('\0', 'utf8').update(sourceText).update('\0', 'utf8').update(config.rootDir ? (0, _path().relative)(config.rootDir, sourcePath) : '').update('\0', 'utf8').update(instrument ? 'instrument' : '').digest('hex').slice(0, length);
  };
}

/**
 * Returns a function that can be used to generate cache keys based on source code of provided files and provided values.
 *
 * @param files - Array of absolute paths to files whose code should be accounted for when generating cache key
 * @param values - Array of string values that should be accounted for when generating cache key
 * @param length - Length of the resulting key. The default is `32`, or `16` on Windows.
 * @returns A function that can be used to generate cache keys.
 */
function createCacheKey(files = [], values = [], length = process.platform === 'win32' ? 16 : 32) {
  return getCacheKeyFunction(getGlobalCacheKey(files, values, length), length);
}
})();

module.exports = __webpack_exports__;
/******/ })()
;