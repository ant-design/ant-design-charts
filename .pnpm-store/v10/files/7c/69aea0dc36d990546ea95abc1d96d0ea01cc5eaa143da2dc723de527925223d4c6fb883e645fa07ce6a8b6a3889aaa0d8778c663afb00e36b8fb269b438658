"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertStyles = exports.createHashStyleName = void 0;
var _utils = require("@emotion/utils");
// copied from https://github.com/emotion-js/emotion/blob/main/packages/utils/src/index.js

var isBrowser = typeof document !== 'undefined';
var createHashStyleName = exports.createHashStyleName = function createHashStyleName(cacheKey, hash) {
  return "".concat(cacheKey, "-").concat(hash);
};

/**
 * 向浏览器插入样式表
 * @param cache
 * @param serialized
 * @param isStringTag
 * @param options
 */
var insertStyles = exports.insertStyles = function insertStyles(cache, serialized, isStringTag, options) {
  var hashPriority = options.hashPriority || 'high';
  (0, _utils.registerStyles)(cache, serialized, isStringTag);
  var hashClassName = ".".concat(createHashStyleName(cache.key, serialized.name));
  var hashSelector = hashPriority === 'low' ? ":where(".concat(hashClassName, ")") : hashClassName;

  /* c8 ignore start */
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? hashSelector : '', current, cache.sheet, true);
      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      // @ts-ignore
      current = current.next;
    } while (current !== undefined);
    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};
/* c8 ignore end */