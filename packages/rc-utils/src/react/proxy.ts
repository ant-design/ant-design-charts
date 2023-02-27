import { proxy } from 'valtio';

export { useSnapshot } from 'valtio';

export type IProxy = object;

export const stateCache = new WeakMap();

export function snapProxy<T extends object>(proxyObject: T): T {
  if (!stateCache.get(proxyObject)) {
    stateCache.set(proxyObject, proxy(proxyObject));
  }
  return stateCache.get(proxyObject);
}

export function stateProxy<T extends object>(
  proxyObject: T,
): {
  state: T;
  snap: () => T;
} {
  return {
    state: snapProxy(proxyObject),
    snap: () => snapProxy(proxyObject),
  };
}
