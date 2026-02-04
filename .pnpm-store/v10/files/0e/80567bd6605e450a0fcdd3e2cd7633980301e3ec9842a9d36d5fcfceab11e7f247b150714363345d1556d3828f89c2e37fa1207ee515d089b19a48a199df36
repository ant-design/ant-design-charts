import { useMemo } from 'react';
export function useRefCallback(callback, initialValue) {
  var ref = useMemo(function () {
    var defaultValue = {
      current: initialValue
    };
    return new Proxy(defaultValue, {
      set: function set(target, prop, newValue) {
        if (!Object.is(target[prop], newValue)) {
          target[prop] = newValue;
          callback(ref);
        }
        return true;
      }
    });
  }, []);
  return ref;
}