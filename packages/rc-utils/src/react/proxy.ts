import { proxy } from 'valtio';

export { useSnapshot } from 'valtio';

export type IProxy = ProxyHandler<object>;

export const stateCache = new WeakMap();

export const snapProxy = (state: object): IProxy => {
  if (!stateCache.get(state)) {
    stateCache.set(state, proxy(state));
  }
  return stateCache.get(state);
};

export const stateProxy = (config: object) => {
  return {
    state: snapProxy(config),
    getSnap: () => snapProxy(config),
  };
};
