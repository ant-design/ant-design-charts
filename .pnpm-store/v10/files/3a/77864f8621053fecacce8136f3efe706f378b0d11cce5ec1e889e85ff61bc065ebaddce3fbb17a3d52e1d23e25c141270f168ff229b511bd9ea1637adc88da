'use strict';

var react$1 = require('react');
var react = require('valtio/react');

var DUMMY_SYMBOL = Symbol();
function useProxy(proxy, options) {
  var snapshot = react.useSnapshot(proxy, options);
  snapshot[DUMMY_SYMBOL];
  var isRendering = true;
  react$1.useLayoutEffect(function () {
    isRendering = false;
  });
  return new Proxy(proxy, {
    get: function get(target, prop) {
      return isRendering ? snapshot[prop] : target[prop];
    }
  });
}

exports.useProxy = useProxy;
