'use strict';

var proxyCompare = require('proxy-compare');

var isObject = function isObject(x) {
  return typeof x === 'object' && x !== null;
};
var proxyStateMap = new WeakMap();
var refSet = new WeakSet();
var buildProxyFunction = function buildProxyFunction(objectIs, newProxy, canProxy, defaultHandlePromise, snapCache, createSnapshot, proxyCache, versionHolder, _proxyFunction) {
  if (objectIs === void 0) {
    objectIs = Object.is;
  }
  if (newProxy === void 0) {
    newProxy = function newProxy(target, handler) {
      return new Proxy(target, handler);
    };
  }
  if (canProxy === void 0) {
    canProxy = function canProxy(x) {
      return isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer);
    };
  }
  if (defaultHandlePromise === void 0) {
    defaultHandlePromise = function defaultHandlePromise(promise) {
      switch (promise.status) {
        case 'fulfilled':
          return promise.value;
        case 'rejected':
          throw promise.reason;
        default:
          throw promise;
      }
    };
  }
  if (snapCache === void 0) {
    snapCache = new WeakMap();
  }
  if (createSnapshot === void 0) {
    createSnapshot = function (_createSnapshot) {
      function createSnapshot(_x, _x2, _x3) {
        return _createSnapshot.apply(this, arguments);
      }
      createSnapshot.toString = function () {
        return _createSnapshot.toString();
      };
      return createSnapshot;
    }(function (target, version, handlePromise) {
      if (handlePromise === void 0) {
        handlePromise = defaultHandlePromise;
      }
      var cache = snapCache.get(target);
      if ((cache == null ? void 0 : cache[0]) === version) {
        return cache[1];
      }
      var snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
      proxyCompare.markToTrack(snap, true);
      snapCache.set(target, [version, snap]);
      Reflect.ownKeys(target).forEach(function (key) {
        if (Object.getOwnPropertyDescriptor(snap, key)) {
          return;
        }
        var value = Reflect.get(target, key);
        var _ref = Reflect.getOwnPropertyDescriptor(target, key),
          enumerable = _ref.enumerable;
        var desc = {
          value: value,
          enumerable: enumerable,
          configurable: true
        };
        if (refSet.has(value)) {
          proxyCompare.markToTrack(value, false);
        } else if (value instanceof Promise) {
          delete desc.value;
          desc.get = function () {
            return handlePromise(value);
          };
        } else if (proxyStateMap.has(value)) {
          var _ref2 = proxyStateMap.get(value),
            _target = _ref2[0],
            _ensureVersion = _ref2[1];
          desc.value = createSnapshot(_target, _ensureVersion(), handlePromise);
        }
        Object.defineProperty(snap, key, desc);
      });
      return Object.preventExtensions(snap);
    });
  }
  if (proxyCache === void 0) {
    proxyCache = new WeakMap();
  }
  if (versionHolder === void 0) {
    versionHolder = [1, 1];
  }
  if (_proxyFunction === void 0) {
    _proxyFunction = function proxyFunction(initialObject) {
      if (!isObject(initialObject)) {
        throw new Error('object required');
      }
      var found = proxyCache.get(initialObject);
      if (found) {
        return found;
      }
      var version = versionHolder[0];
      var listeners = new Set();
      var notifyUpdate = function notifyUpdate(op, nextVersion) {
        if (nextVersion === void 0) {
          nextVersion = ++versionHolder[0];
        }
        if (version !== nextVersion) {
          version = nextVersion;
          listeners.forEach(function (listener) {
            return listener(op, nextVersion);
          });
        }
      };
      var checkVersion = versionHolder[1];
      var ensureVersion = function ensureVersion(nextCheckVersion) {
        if (nextCheckVersion === void 0) {
          nextCheckVersion = ++versionHolder[1];
        }
        if (checkVersion !== nextCheckVersion && !listeners.size) {
          checkVersion = nextCheckVersion;
          propProxyStates.forEach(function (_ref3) {
            var propProxyState = _ref3[0];
            var propVersion = propProxyState[1](nextCheckVersion);
            if (propVersion > version) {
              version = propVersion;
            }
          });
        }
        return version;
      };
      var createPropListener = function createPropListener(prop) {
        return function (op, nextVersion) {
          var newOp = [].concat(op);
          newOp[1] = [prop].concat(newOp[1]);
          notifyUpdate(newOp, nextVersion);
        };
      };
      var propProxyStates = new Map();
      var addPropListener = function addPropListener(prop, propProxyState) {
        if (process.env.NODE_ENV !== 'production' && propProxyStates.has(prop)) {
          throw new Error('prop listener already exists');
        }
        if (listeners.size) {
          var remove = propProxyState[3](createPropListener(prop));
          propProxyStates.set(prop, [propProxyState, remove]);
        } else {
          propProxyStates.set(prop, [propProxyState]);
        }
      };
      var removePropListener = function removePropListener(prop) {
        var entry = propProxyStates.get(prop);
        if (entry) {
          var _entry$;
          propProxyStates.delete(prop);
          (_entry$ = entry[1]) == null || _entry$.call(entry);
        }
      };
      var addListener = function addListener(listener) {
        listeners.add(listener);
        if (listeners.size === 1) {
          propProxyStates.forEach(function (_ref4, prop) {
            var propProxyState = _ref4[0],
              prevRemove = _ref4[1];
            if (process.env.NODE_ENV !== 'production' && prevRemove) {
              throw new Error('remove already exists');
            }
            var remove = propProxyState[3](createPropListener(prop));
            propProxyStates.set(prop, [propProxyState, remove]);
          });
        }
        var removeListener = function removeListener() {
          listeners.delete(listener);
          if (listeners.size === 0) {
            propProxyStates.forEach(function (_ref5, prop) {
              var propProxyState = _ref5[0],
                remove = _ref5[1];
              if (remove) {
                remove();
                propProxyStates.set(prop, [propProxyState]);
              }
            });
          }
        };
        return removeListener;
      };
      var baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
      var handler = {
        deleteProperty: function deleteProperty(target, prop) {
          var prevValue = Reflect.get(target, prop);
          removePropListener(prop);
          var deleted = Reflect.deleteProperty(target, prop);
          if (deleted) {
            notifyUpdate(['delete', [prop], prevValue]);
          }
          return deleted;
        },
        set: function set(target, prop, value, receiver) {
          var hasPrevValue = Reflect.has(target, prop);
          var prevValue = Reflect.get(target, prop, receiver);
          if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
            return true;
          }
          removePropListener(prop);
          if (isObject(value)) {
            value = proxyCompare.getUntracked(value) || value;
          }
          var nextValue = value;
          if (value instanceof Promise) {
            value.then(function (v) {
              value.status = 'fulfilled';
              value.value = v;
              notifyUpdate(['resolve', [prop], v]);
            }).catch(function (e) {
              value.status = 'rejected';
              value.reason = e;
              notifyUpdate(['reject', [prop], e]);
            });
          } else {
            if (!proxyStateMap.has(value) && canProxy(value)) {
              nextValue = _proxyFunction(value);
            }
            var childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
            if (childProxyState) {
              addPropListener(prop, childProxyState);
            }
          }
          Reflect.set(target, prop, nextValue, receiver);
          notifyUpdate(['set', [prop], value, prevValue]);
          return true;
        }
      };
      var proxyObject = newProxy(baseObject, handler);
      proxyCache.set(initialObject, proxyObject);
      var proxyState = [baseObject, ensureVersion, createSnapshot, addListener];
      proxyStateMap.set(proxyObject, proxyState);
      Reflect.ownKeys(initialObject).forEach(function (key) {
        var desc = Object.getOwnPropertyDescriptor(initialObject, key);
        if ('value' in desc) {
          proxyObject[key] = initialObject[key];
          delete desc.value;
          delete desc.writable;
        }
        Object.defineProperty(baseObject, key, desc);
      });
      return proxyObject;
    };
  }
  return [_proxyFunction, proxyStateMap, refSet, objectIs, newProxy, canProxy, defaultHandlePromise, snapCache, createSnapshot, proxyCache, versionHolder];
};
var _buildProxyFunction = buildProxyFunction(),
  defaultProxyFunction = _buildProxyFunction[0];
function proxy(initialObject) {
  if (initialObject === void 0) {
    initialObject = {};
  }
  return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
  var proxyState = proxyStateMap.get(proxyObject);
  return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
  var proxyState = proxyStateMap.get(proxyObject);
  if (process.env.NODE_ENV !== 'production' && !proxyState) {
    console.warn('Please use proxy object');
  }
  var promise;
  var ops = [];
  var addListener = proxyState[3];
  var isListenerActive = false;
  var listener = function listener(op) {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(function () {
        promise = undefined;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  var removeListener = addListener(listener);
  isListenerActive = true;
  return function () {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject, handlePromise) {
  var proxyState = proxyStateMap.get(proxyObject);
  if (process.env.NODE_ENV !== 'production' && !proxyState) {
    console.warn('Please use proxy object');
  }
  var _ref6 = proxyState,
    target = _ref6[0],
    ensureVersion = _ref6[1],
    createSnapshot = _ref6[2];
  return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
var unstable_buildProxyFunction = buildProxyFunction;

exports.getVersion = getVersion;
exports.proxy = proxy;
exports.ref = ref;
exports.snapshot = snapshot;
exports.subscribe = subscribe;
exports.unstable_buildProxyFunction = unstable_buildProxyFunction;
