(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('proxy-compare'), require('use-sync-external-store/shim'), require('valtio/vanilla')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'proxy-compare', 'use-sync-external-store/shim', 'valtio/vanilla'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.valtioReact = {}, global.React, global.proxyCompare, global.useSyncExternalStoreExports, global.valtioVanilla));
})(this, (function (exports, ReactExports, proxyCompare, useSyncExternalStoreExports, vanilla) { 'use strict';

  var use = ReactExports.use;
  var useSyncExternalStore = useSyncExternalStoreExports.useSyncExternalStore;
  var useAffectedDebugValue = function useAffectedDebugValue(state, affected) {
    var pathList = ReactExports.useRef();
    ReactExports.useEffect(function () {
      pathList.current = proxyCompare.affectedToPathList(state, affected, true);
    });
    ReactExports.useDebugValue(pathList.current);
  };
  var targetCache = new WeakMap();
  function useSnapshot(proxyObject, options) {
    var notifyInSync = options == null ? void 0 : options.sync;
    var lastSnapshot = ReactExports.useRef();
    var lastAffected = ReactExports.useRef();
    var inRender = true;
    var currSnapshot = useSyncExternalStore(ReactExports.useCallback(function (callback) {
      var unsub = vanilla.subscribe(proxyObject, callback, notifyInSync);
      callback();
      return unsub;
    }, [proxyObject, notifyInSync]), function () {
      var nextSnapshot = vanilla.snapshot(proxyObject, use);
      try {
        if (!inRender && lastSnapshot.current && lastAffected.current && !proxyCompare.isChanged(lastSnapshot.current, nextSnapshot, lastAffected.current, new WeakMap())) {
          return lastSnapshot.current;
        }
      } catch (e) {}
      return nextSnapshot;
    }, function () {
      return vanilla.snapshot(proxyObject, use);
    });
    inRender = false;
    var currAffected = new WeakMap();
    ReactExports.useEffect(function () {
      lastSnapshot.current = currSnapshot;
      lastAffected.current = currAffected;
    });
    {
      useAffectedDebugValue(currSnapshot, currAffected);
    }
    var proxyCache = ReactExports.useMemo(function () {
      return new WeakMap();
    }, []);
    return proxyCompare.createProxy(currSnapshot, currAffected, proxyCache, targetCache);
  }

  exports.useSnapshot = useSnapshot;

}));
