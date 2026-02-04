System.register(['react', 'valtio/react'], (function (exports) {
  'use strict';
  var useLayoutEffect, useSnapshot;
  return {
    setters: [function (module) {
      useLayoutEffect = module.useLayoutEffect;
    }, function (module) {
      useSnapshot = module.useSnapshot;
    }],
    execute: (function () {

      exports("useProxy", useProxy);

      const DUMMY_SYMBOL = Symbol();
      function useProxy(proxy, options) {
        const snapshot = useSnapshot(proxy, options);
        snapshot[DUMMY_SYMBOL];
        let isRendering = true;
        useLayoutEffect(() => {
          isRendering = false;
        });
        return new Proxy(proxy, {
          get(target, prop) {
            return isRendering ? snapshot[prop] : target[prop];
          }
        });
      }

    })
  };
}));
