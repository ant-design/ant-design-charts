System.register(['react', 'proxy-compare', 'use-sync-external-store/shim', 'valtio/vanilla'], (function (exports) {
  'use strict';
  var useRef, useCallback, useEffect, useMemo, ReactExports, useDebugValue, isChanged, createProxy, affectedToPathList, useSyncExternalStoreExports, subscribe, snapshot;
  return {
    setters: [function (module) {
      useRef = module.useRef;
      useCallback = module.useCallback;
      useEffect = module.useEffect;
      useMemo = module.useMemo;
      ReactExports = module.default;
      useDebugValue = module.useDebugValue;
    }, function (module) {
      isChanged = module.isChanged;
      createProxy = module.createProxy;
      affectedToPathList = module.affectedToPathList;
    }, function (module) {
      useSyncExternalStoreExports = module.default;
    }, function (module) {
      subscribe = module.subscribe;
      snapshot = module.snapshot;
    }],
    execute: (function () {

      exports("useSnapshot", useSnapshot);

      const { use } = ReactExports;
      const { useSyncExternalStore } = useSyncExternalStoreExports;
      const useAffectedDebugValue = (state, affected) => {
        const pathList = useRef();
        useEffect(() => {
          pathList.current = affectedToPathList(state, affected, true);
        });
        useDebugValue(pathList.current);
      };
      const targetCache = /* @__PURE__ */ new WeakMap();
      function useSnapshot(proxyObject, options) {
        const notifyInSync = options == null ? void 0 : options.sync;
        const lastSnapshot = useRef();
        const lastAffected = useRef();
        let inRender = true;
        const currSnapshot = useSyncExternalStore(
          useCallback(
            (callback) => {
              const unsub = subscribe(proxyObject, callback, notifyInSync);
              callback();
              return unsub;
            },
            [proxyObject, notifyInSync]
          ),
          () => {
            const nextSnapshot = snapshot(proxyObject, use);
            try {
              if (!inRender && lastSnapshot.current && lastAffected.current && !isChanged(
                lastSnapshot.current,
                nextSnapshot,
                lastAffected.current,
                /* @__PURE__ */ new WeakMap()
              )) {
                return lastSnapshot.current;
              }
            } catch (e) {
            }
            return nextSnapshot;
          },
          () => snapshot(proxyObject, use)
        );
        inRender = false;
        const currAffected = /* @__PURE__ */ new WeakMap();
        useEffect(() => {
          lastSnapshot.current = currSnapshot;
          lastAffected.current = currAffected;
        });
        {
          useAffectedDebugValue(currSnapshot, currAffected);
        }
        const proxyCache = useMemo(() => /* @__PURE__ */ new WeakMap(), []);
        return createProxy(
          currSnapshot,
          currAffected,
          proxyCache,
          targetCache
        );
      }

    })
  };
}));
