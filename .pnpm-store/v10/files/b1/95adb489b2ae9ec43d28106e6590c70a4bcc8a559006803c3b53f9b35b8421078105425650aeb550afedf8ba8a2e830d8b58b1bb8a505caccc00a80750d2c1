import ReactExports, { useRef, useCallback, useEffect, useMemo, useDebugValue } from 'react';
import { isChanged, createProxy, affectedToPathList } from 'proxy-compare';
import useSyncExternalStoreExports from 'use-sync-external-store/shim/index.js';
import { subscribe, snapshot } from 'valtio/vanilla';

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
  if (process.env.NODE_ENV !== "production") {
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

export { useSnapshot };
