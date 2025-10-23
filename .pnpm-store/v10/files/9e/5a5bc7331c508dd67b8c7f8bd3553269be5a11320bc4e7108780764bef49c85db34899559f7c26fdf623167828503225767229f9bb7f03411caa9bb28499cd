'use strict';

var ReactExports = require('react');
var proxyCompare = require('proxy-compare');
var useSyncExternalStoreExports = require('use-sync-external-store/shim');
var vanilla = require('valtio/vanilla');

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
  if (process.env.NODE_ENV !== 'production') {
    useAffectedDebugValue(currSnapshot, currAffected);
  }
  var proxyCache = ReactExports.useMemo(function () {
    return new WeakMap();
  }, []);
  return proxyCompare.createProxy(currSnapshot, currAffected, proxyCache, targetCache);
}

exports.useSnapshot = useSnapshot;
