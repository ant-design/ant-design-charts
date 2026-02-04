"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExtractCritical = void 0;
// copy from
// https://github.com/emotion-js/emotion/blob/main/packages/server/src/create-instance/extract-critical.js

var createExtractCritical = exports.createExtractCritical = function createExtractCritical(cache) {
  if (cache.compat !== true) {
    // is this good? should we do this automatically?
    // this is only for when using the new apis (not emotion or create-emotion)
    cache.compat = true;
  }
  return function (html) {
    // parse out ids from html
    // reconstruct css/rules/cache to pass
    var RGX = new RegExp(cache.key + '-([a-zA-Z0-9-_]+)', 'gm');
    var o = {
      html: html,
      ids: [],
      css: ''
    };
    var match;
    var ids = {};
    while ((match = RGX.exec(html)) !== null) {
      if (ids[match[1]] === undefined) {
        ids[match[1]] = true;
      }
    }
    o.ids = Object.keys(cache.inserted).filter(function (id) {
      if ((ids[id] !== undefined || cache.registered[cache.key + '-' + id] === undefined) && cache.inserted[id] !== true) {
        o.css += cache.inserted[id];
        return true;
      }
      return false;
    });
    return o;
  };
};