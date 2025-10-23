(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('valtio/react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'valtio/react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.valtioReactUtils = {}, global.React, global.valtioReact));
})(this, (function (exports, react$1, react) { 'use strict';

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

}));
