"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var define_MAIN_MODULES_default={"index-DsC5zpes.js":`import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useMemo, useContext, useState, useRef, useCallback, useEffect, createRef } from "react";
const ConfigContext = createContext({
  config: void 0
});
function ConfigProvider({
  children,
  config
}) {
  const value = useMemo(() => ({
    config
  }), [config]);
  return /* @__PURE__ */ jsx(ConfigContext.Provider, { value, children });
}
function useConfig() {
  return useContext(ConfigContext);
}
var __create$1 = Object.create, __defProp$2 = Object.defineProperty, __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor, __getOwnPropNames$1 = Object.getOwnPropertyNames, __getProtoOf$1 = Object.getPrototypeOf, __hasOwnProp$1 = Object.prototype.hasOwnProperty, __commonJS$1 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __copyProps$1 = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++)
    key = keys[i], !__hasOwnProp$1.call(to, key) && key !== except && __defProp$2(to, key, {
      get: ((k) => from[k]).bind(null, key),
      enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
    });
  return to;
}, __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(__defProp$2(target, "default", {
  value: mod,
  enumerable: !0
}), mod)), require_typeof$1 = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports, module) {
  function _typeof$2(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
      return typeof o$1;
    } : function(o$1) {
      return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, module.exports.__esModule = !0, module.exports.default = module.exports, _typeof$2(o);
  }
  module.exports = _typeof$2, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_toPrimitive$1 = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports, module) {
  var _typeof$1 = require_typeof$1().default;
  function toPrimitive$1(t, r2) {
    if (_typeof$1(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
      var i = e.call(t, r2 || "default");
      if (_typeof$1(i) != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r2 === "string" ? String : Number)(t);
  }
  module.exports = toPrimitive$1, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_toPropertyKey$1 = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports, module) {
  var _typeof = require_typeof$1().default, toPrimitive = require_toPrimitive$1();
  function toPropertyKey$1(t) {
    var i = toPrimitive(t, "string");
    return _typeof(i) == "symbol" ? i : i + "";
  }
  module.exports = toPropertyKey$1, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_defineProperty$1 = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports, module) {
  var toPropertyKey = require_toPropertyKey$1();
  function _defineProperty(e, r2, t) {
    return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r2] = t, e;
  }
  module.exports = _defineProperty, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_objectSpread2$1 = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports, module) {
  var defineProperty = require_defineProperty$1();
  function ownKeys(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r$1) {
        return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = arguments[r2] != null ? arguments[r2] : {};
      r2 % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
        defineProperty(e, r$1, t[r$1]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
        Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
      });
    }
    return e;
  }
  module.exports = _objectSpread2, module.exports.__esModule = !0, module.exports.default = module.exports;
} });
function observable(subscribe) {
  const self = {
    subscribe(observer) {
      let teardownRef = null, isDone = !1, unsubscribed = !1, teardownImmediately = !1;
      function unsubscribe() {
        if (teardownRef === null) {
          teardownImmediately = !0;
          return;
        }
        unsubscribed || (unsubscribed = !0, typeof teardownRef == "function" ? teardownRef() : teardownRef && teardownRef.unsubscribe());
      }
      return teardownRef = subscribe({
        next(value) {
          var _observer$next;
          isDone || (_observer$next = observer.next) === null || _observer$next === void 0 || _observer$next.call(observer, value);
        },
        error(err) {
          var _observer$error;
          isDone || (isDone = !0, (_observer$error = observer.error) === null || _observer$error === void 0 || _observer$error.call(observer, err), unsubscribe());
        },
        complete() {
          var _observer$complete;
          isDone || (isDone = !0, (_observer$complete = observer.complete) === null || _observer$complete === void 0 || _observer$complete.call(observer), unsubscribe());
        }
      }), teardownImmediately && unsubscribe(), { unsubscribe };
    },
    pipe(...operations) {
      return operations.reduce(pipeReducer, self);
    }
  };
  return self;
}
function pipeReducer(prev, fn) {
  return fn(prev);
}
function observableToPromise(observable$1) {
  const ac = new AbortController();
  return new Promise((resolve, reject) => {
    let isDone = !1;
    function onDone() {
      isDone || (isDone = !0, obs$.unsubscribe());
    }
    ac.signal.addEventListener("abort", () => {
      reject(ac.signal.reason);
    });
    const obs$ = observable$1.subscribe({
      next(data) {
        isDone = !0, resolve(data), onDone();
      },
      error(data) {
        reject(data);
      },
      complete() {
        ac.abort(), onDone();
      }
    });
  });
}
function share(_opts) {
  return (source) => {
    let refCount = 0, subscription = null;
    const observers = [];
    function startIfNeeded() {
      subscription || (subscription = source.subscribe({
        next(value) {
          for (const observer of observers) {
            var _observer$next;
            (_observer$next = observer.next) === null || _observer$next === void 0 || _observer$next.call(observer, value);
          }
        },
        error(error) {
          for (const observer of observers) {
            var _observer$error;
            (_observer$error = observer.error) === null || _observer$error === void 0 || _observer$error.call(observer, error);
          }
        },
        complete() {
          for (const observer of observers) {
            var _observer$complete;
            (_observer$complete = observer.complete) === null || _observer$complete === void 0 || _observer$complete.call(observer);
          }
        }
      }));
    }
    function resetIfNeeded() {
      if (refCount === 0 && subscription) {
        const _sub = subscription;
        subscription = null, _sub.unsubscribe();
      }
    }
    return observable((subscriber) => (refCount++, observers.push(subscriber), startIfNeeded(), { unsubscribe() {
      refCount--, resetIfNeeded();
      const index = observers.findIndex((v) => v === subscriber);
      index > -1 && observers.splice(index, 1);
    } }));
  };
}
function behaviorSubject(initialValue) {
  let value = initialValue;
  const observerList = [], addObserver = (observer) => {
    value !== void 0 && observer.next(value), observerList.push(observer);
  }, removeObserver = (observer) => {
    observerList.splice(observerList.indexOf(observer), 1);
  }, obs = observable((observer) => (addObserver(observer), () => {
    removeObserver(observer);
  }));
  return obs.next = (nextValue) => {
    if (value !== nextValue) {
      value = nextValue;
      for (const observer of observerList) observer.next(nextValue);
    }
  }, obs.get = () => value, obs;
}
function createChain(opts) {
  return observable((observer) => {
    function execute(index = 0, op = opts.op) {
      const next = opts.links[index];
      if (!next) throw new Error("No more links to execute - did you forget to add an ending link?");
      return next({
        op,
        next(nextOp) {
          return execute(index + 1, nextOp);
        }
      });
    }
    return execute().subscribe(observer);
  });
}
function isObject(value) {
  return !!value && !Array.isArray(value) && typeof value == "object";
}
const run = (fn) => fn();
function sleep(ms = 0) {
  return new Promise((res) => setTimeout(res, ms));
}
var __create = Object.create, __defProp$1 = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
    key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp$1(to, key, {
      get: ((k) => from[k]).bind(null, key),
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  return to;
}, __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(__defProp$1(target, "default", {
  value: mod,
  enumerable: !0
}), mod));
const noop = () => {
}, freezeIfAvailable = (obj) => {
  Object.freeze && Object.freeze(obj);
};
function createInnerProxy(callback, path, memo) {
  var _memo$cacheKey;
  const cacheKey = path.join(".");
  return (_memo$cacheKey = memo[cacheKey]) !== null && _memo$cacheKey !== void 0 || (memo[cacheKey] = new Proxy(noop, {
    get(_obj, key) {
      if (!(typeof key != "string" || key === "then"))
        return createInnerProxy(callback, [...path, key], memo);
    },
    apply(_1, _2, args) {
      const lastOfPath = path[path.length - 1];
      let opts = {
        args,
        path
      };
      return lastOfPath === "call" ? opts = {
        args: args.length >= 2 ? [args[1]] : [],
        path: path.slice(0, -1)
      } : lastOfPath === "apply" && (opts = {
        args: args.length >= 2 ? args[1] : [],
        path: path.slice(0, -1)
      }), freezeIfAvailable(opts.args), freezeIfAvailable(opts.path), callback(opts);
    }
  })), memo[cacheKey];
}
const createRecursiveProxy = (callback) => createInnerProxy(callback, [], /* @__PURE__ */ Object.create(null)), createFlatProxy = (callback) => new Proxy(noop, { get(_obj, name) {
  if (name !== "then")
    return callback(name);
} });
var require_typeof = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports, module) {
  function _typeof$2(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o$1) {
      return typeof o$1;
    } : function(o$1) {
      return o$1 && typeof Symbol == "function" && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, module.exports.__esModule = !0, module.exports.default = module.exports, _typeof$2(o);
  }
  module.exports = _typeof$2, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_toPrimitive = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports, module) {
  var _typeof$1 = require_typeof().default;
  function toPrimitive$1(t, r2) {
    if (_typeof$1(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
      var i = e.call(t, r2 || "default");
      if (_typeof$1(i) != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r2 === "string" ? String : Number)(t);
  }
  module.exports = toPrimitive$1, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_toPropertyKey = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports, module) {
  var _typeof = require_typeof().default, toPrimitive = require_toPrimitive();
  function toPropertyKey$1(t) {
    var i = toPrimitive(t, "string");
    return _typeof(i) == "symbol" ? i : i + "";
  }
  module.exports = toPropertyKey$1, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_defineProperty = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports, module) {
  var toPropertyKey = require_toPropertyKey();
  function _defineProperty(e, r2, t) {
    return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r2] = t, e;
  }
  module.exports = _defineProperty, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_objectSpread2 = __commonJS({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports, module) {
  var defineProperty = require_defineProperty();
  function ownKeys(e, r2) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r2 && (o = o.filter(function(r$1) {
        return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t = arguments[r2] != null ? arguments[r2] : {};
      r2 % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
        defineProperty(e, r$1, t[r$1]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
        Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
      });
    }
    return e;
  }
  module.exports = _objectSpread2, module.exports.__esModule = !0, module.exports.default = module.exports;
} });
__toESM(require_objectSpread2());
__toESM(require_defineProperty());
var import_objectSpread2$1$1 = __toESM(require_objectSpread2());
function transformResultInner(response, transformer2) {
  if ("error" in response) {
    const error = transformer2.deserialize(response.error);
    return {
      ok: !1,
      error: (0, import_objectSpread2$1$1.default)((0, import_objectSpread2$1$1.default)({}, response), {}, { error })
    };
  }
  return {
    ok: !0,
    result: (0, import_objectSpread2$1$1.default)((0, import_objectSpread2$1$1.default)({}, response.result), (!response.result.type || response.result.type === "data") && {
      type: "data",
      data: transformer2.deserialize(response.result.data)
    })
  };
}
var TransformResultError = class extends Error {
  constructor() {
    super("Unable to transform response from server");
  }
};
function transformResult(response, transformer2) {
  let result;
  try {
    result = transformResultInner(response, transformer2);
  } catch {
    throw new TransformResultError();
  }
  if (!result.ok && (!isObject(result.error.error) || typeof result.error.error.code != "number")) throw new TransformResultError();
  if (result.ok && !isObject(result.result)) throw new TransformResultError();
  return result;
}
__toESM(require_objectSpread2());
var import_defineProperty$5 = __toESM$1(require_defineProperty$1()), import_objectSpread2$1 = __toESM$1(require_objectSpread2$1());
function isTRPCClientError(cause) {
  return cause instanceof TRPCClientError;
}
function isTRPCErrorResponse(obj) {
  return isObject(obj) && isObject(obj.error) && typeof obj.error.code == "number" && typeof obj.error.message == "string";
}
function getMessageFromUnknownError(err, fallback) {
  return typeof err == "string" ? err : isObject(err) && typeof err.message == "string" ? err.message : fallback;
}
var TRPCClientError = class TRPCClientError2 extends Error {
  constructor(message, opts) {
    var _opts$result, _opts$result2;
    const cause = opts == null ? void 0 : opts.cause;
    super(message, { cause }), (0, import_defineProperty$5.default)(this, "cause", void 0), (0, import_defineProperty$5.default)(this, "shape", void 0), (0, import_defineProperty$5.default)(this, "data", void 0), (0, import_defineProperty$5.default)(this, "meta", void 0), this.meta = opts == null ? void 0 : opts.meta, this.cause = cause, this.shape = opts == null || (_opts$result = opts.result) === null || _opts$result === void 0 ? void 0 : _opts$result.error, this.data = opts == null || (_opts$result2 = opts.result) === null || _opts$result2 === void 0 ? void 0 : _opts$result2.error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, TRPCClientError2.prototype);
  }
  static from(_cause, opts = {}) {
    const cause = _cause;
    return isTRPCClientError(cause) ? (opts.meta && (cause.meta = (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, cause.meta), opts.meta)), cause) : isTRPCErrorResponse(cause) ? new TRPCClientError2(cause.error.message, (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), {}, { result: cause })) : new TRPCClientError2(getMessageFromUnknownError(cause, "Unknown error"), (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, opts), {}, { cause }));
  }
};
function getTransformer(transformer2) {
  const _transformer = transformer2;
  return _transformer ? "input" in _transformer ? _transformer : {
    input: _transformer,
    output: _transformer
  } : {
    input: {
      serialize: (data) => data,
      deserialize: (data) => data
    },
    output: {
      serialize: (data) => data,
      deserialize: (data) => data
    }
  };
}
__toESM$1(require_objectSpread2$1());
__toESM$1(require_objectSpread2$1());
__toESM$1(require_objectSpread2$1());
__toESM$1(require_objectSpread2$1());
const lazyDefaults = {
  enabled: !1,
  closeMs: 0
}, keepAliveDefaults = {
  enabled: !1,
  pongTimeoutMs: 1e3,
  intervalMs: 5e3
}, exponentialBackoff = (attemptIndex) => attemptIndex === 0 ? 0 : Math.min(1e3 * 2 ** attemptIndex, 3e4), resultOf = (value, ...args) => typeof value == "function" ? value(...args) : value;
var import_defineProperty$3 = __toESM$1(require_defineProperty$1()), TRPCWebSocketClosedError = class TRPCWebSocketClosedError2 extends Error {
  constructor(opts) {
    super(opts.message, { cause: opts.cause }), this.name = "TRPCWebSocketClosedError", Object.setPrototypeOf(this, TRPCWebSocketClosedError2.prototype);
  }
}, ResettableTimeout = class {
  constructor(onTimeout, timeoutMs) {
    this.onTimeout = onTimeout, this.timeoutMs = timeoutMs, (0, import_defineProperty$3.default)(this, "timeout", void 0);
  }
  /**
  * Resets the current timeout, restarting it with the same duration.
  * Does nothing if no timeout is active.
  */
  reset() {
    this.timeout && (clearTimeout(this.timeout), this.timeout = setTimeout(this.onTimeout, this.timeoutMs));
  }
  start() {
    clearTimeout(this.timeout), this.timeout = setTimeout(this.onTimeout, this.timeoutMs);
  }
  stop() {
    clearTimeout(this.timeout), this.timeout = void 0;
  }
};
function withResolvers() {
  let resolve, reject;
  return {
    promise: new Promise((res, rej) => {
      resolve = res, reject = rej;
    }),
    resolve,
    reject
  };
}
async function prepareUrl(urlOptions) {
  const url = await resultOf(urlOptions.url);
  if (!urlOptions.connectionParams) return url;
  const connectionParams = \`\${url.includes("?") ? "&" : "?"}connectionParams=1\`;
  return url + connectionParams;
}
async function buildConnectionMessage(connectionParams) {
  const message = {
    method: "connectionParams",
    data: await resultOf(connectionParams)
  };
  return JSON.stringify(message);
}
var import_defineProperty$2 = __toESM$1(require_defineProperty$1()), RequestManager = class {
  constructor() {
    (0, import_defineProperty$2.default)(this, "outgoingRequests", new Array()), (0, import_defineProperty$2.default)(this, "pendingRequests", {});
  }
  /**
  * Registers a new request by adding it to the outgoing queue and setting up
  * callbacks for lifecycle events such as completion or error.
  *
  * @param message - The outgoing message to be sent.
  * @param callbacks - Callback functions to observe the request's state.
  * @returns A cleanup function to manually remove the request.
  */
  register(message, callbacks) {
    const { promise: end, resolve } = withResolvers();
    return this.outgoingRequests.push({
      id: String(message.id),
      message,
      end,
      callbacks: {
        next: callbacks.next,
        complete: () => {
          callbacks.complete(), resolve();
        },
        error: (e) => {
          callbacks.error(e), resolve();
        }
      }
    }), () => {
      this.delete(message.id), callbacks.complete(), resolve();
    };
  }
  /**
  * Deletes a request from both the outgoing and pending collections, if it exists.
  */
  delete(messageId) {
    messageId !== null && (this.outgoingRequests = this.outgoingRequests.filter(({ id }) => id !== String(messageId)), delete this.pendingRequests[String(messageId)]);
  }
  /**
  * Moves all outgoing requests to the pending state and clears the outgoing queue.
  *
  * The caller is expected to handle the actual sending of the requests
  * (e.g., sending them over the network) after this method is called.
  *
  * @returns The list of requests that were transitioned to the pending state.
  */
  flush() {
    const requests = this.outgoingRequests;
    this.outgoingRequests = [];
    for (const request of requests) this.pendingRequests[request.id] = request;
    return requests;
  }
  /**
  * Retrieves all currently pending requests, which are in flight awaiting responses
  * or handling ongoing subscriptions.
  */
  getPendingRequests() {
    return Object.values(this.pendingRequests);
  }
  /**
  * Retrieves a specific pending request by its message ID.
  */
  getPendingRequest(messageId) {
    return messageId === null ? null : this.pendingRequests[String(messageId)];
  }
  /**
  * Retrieves all outgoing requests, which are waiting to be sent.
  */
  getOutgoingRequests() {
    return this.outgoingRequests;
  }
  /**
  * Retrieves all requests, both outgoing and pending, with their respective states.
  *
  * @returns An array of all requests with their state ("outgoing" or "pending").
  */
  getRequests() {
    return [...this.getOutgoingRequests().map((request) => ({
      state: "outgoing",
      message: request.message,
      end: request.end,
      callbacks: request.callbacks
    })), ...this.getPendingRequests().map((request) => ({
      state: "pending",
      message: request.message,
      end: request.end,
      callbacks: request.callbacks
    }))];
  }
  /**
  * Checks if there are any pending requests, including ongoing subscriptions.
  */
  hasPendingRequests() {
    return this.getPendingRequests().length > 0;
  }
  /**
  * Checks if there are any pending subscriptions
  */
  hasPendingSubscriptions() {
    return this.getPendingRequests().some((request) => request.message.method === "subscription");
  }
  /**
  * Checks if there are any outgoing requests waiting to be sent.
  */
  hasOutgoingRequests() {
    return this.outgoingRequests.length > 0;
  }
}, import_defineProperty$1 = __toESM$1(require_defineProperty$1());
function asyncWsOpen(ws) {
  const { promise, resolve, reject } = withResolvers();
  return ws.addEventListener("open", () => {
    ws.removeEventListener("error", reject), resolve();
  }), ws.addEventListener("error", reject), promise;
}
function setupPingInterval(ws, { intervalMs, pongTimeoutMs }) {
  let pingTimeout, pongTimeout;
  function start() {
    pingTimeout = setTimeout(() => {
      ws.send("PING"), pongTimeout = setTimeout(() => {
        ws.close();
      }, pongTimeoutMs);
    }, intervalMs);
  }
  function reset() {
    clearTimeout(pingTimeout), start();
  }
  function pong() {
    clearTimeout(pongTimeout), reset();
  }
  ws.addEventListener("open", start), ws.addEventListener("message", ({ data }) => {
    clearTimeout(pingTimeout), start(), data === "PONG" && pong();
  }), ws.addEventListener("close", () => {
    clearTimeout(pingTimeout), clearTimeout(pongTimeout);
  });
}
var WsConnection = class WsConnection2 {
  constructor(opts) {
    var _opts$WebSocketPonyfi;
    if ((0, import_defineProperty$1.default)(this, "id", ++WsConnection2.connectCount), (0, import_defineProperty$1.default)(this, "WebSocketPonyfill", void 0), (0, import_defineProperty$1.default)(this, "urlOptions", void 0), (0, import_defineProperty$1.default)(this, "keepAliveOpts", void 0), (0, import_defineProperty$1.default)(this, "wsObservable", behaviorSubject(null)), (0, import_defineProperty$1.default)(this, "openPromise", null), this.WebSocketPonyfill = (_opts$WebSocketPonyfi = opts.WebSocketPonyfill) !== null && _opts$WebSocketPonyfi !== void 0 ? _opts$WebSocketPonyfi : WebSocket, !this.WebSocketPonyfill) throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a \`WebSocket\`-ponyfill");
    this.urlOptions = opts.urlOptions, this.keepAliveOpts = opts.keepAlive;
  }
  get ws() {
    return this.wsObservable.get();
  }
  set ws(ws) {
    this.wsObservable.next(ws);
  }
  /**
  * Checks if the WebSocket connection is open and ready to communicate.
  */
  isOpen() {
    return !!this.ws && this.ws.readyState === this.WebSocketPonyfill.OPEN && !this.openPromise;
  }
  /**
  * Checks if the WebSocket connection is closed or in the process of closing.
  */
  isClosed() {
    return !!this.ws && (this.ws.readyState === this.WebSocketPonyfill.CLOSING || this.ws.readyState === this.WebSocketPonyfill.CLOSED);
  }
  async open() {
    var _this = this;
    if (_this.openPromise) return _this.openPromise;
    _this.id = ++WsConnection2.connectCount;
    const wsPromise = prepareUrl(_this.urlOptions).then((url) => new _this.WebSocketPonyfill(url));
    _this.openPromise = wsPromise.then(async (ws) => {
      _this.ws = ws, ws.addEventListener("message", function({ data }) {
        data === "PING" && this.send("PONG");
      }), _this.keepAliveOpts.enabled && setupPingInterval(ws, _this.keepAliveOpts), ws.addEventListener("close", () => {
        _this.ws === ws && (_this.ws = null);
      }), await asyncWsOpen(ws), _this.urlOptions.connectionParams && ws.send(await buildConnectionMessage(_this.urlOptions.connectionParams));
    });
    try {
      await _this.openPromise;
    } finally {
      _this.openPromise = null;
    }
  }
  /**
  * Closes the WebSocket connection gracefully.
  * Waits for any ongoing open operation to complete before closing.
  */
  async close() {
    var _this2 = this;
    try {
      await _this2.openPromise;
    } finally {
      var _this$ws;
      (_this$ws = _this2.ws) === null || _this$ws === void 0 || _this$ws.close();
    }
  }
};
(0, import_defineProperty$1.default)(WsConnection, "connectCount", 0);
function backwardCompatibility(connection) {
  return connection.isOpen() ? {
    id: connection.id,
    state: "open",
    ws: connection.ws
  } : connection.isClosed() ? {
    id: connection.id,
    state: "closed",
    ws: connection.ws
  } : connection.ws ? {
    id: connection.id,
    state: "connecting",
    ws: connection.ws
  } : null;
}
var import_defineProperty$4 = __toESM$1(require_defineProperty$1()), import_objectSpread2 = __toESM$1(require_objectSpread2$1()), WsClient = class {
  constructor(opts) {
    var _opts$retryDelayMs;
    (0, import_defineProperty$4.default)(this, "connectionState", void 0), (0, import_defineProperty$4.default)(this, "allowReconnect", !1), (0, import_defineProperty$4.default)(this, "requestManager", new RequestManager()), (0, import_defineProperty$4.default)(this, "activeConnection", void 0), (0, import_defineProperty$4.default)(this, "reconnectRetryDelay", void 0), (0, import_defineProperty$4.default)(this, "inactivityTimeout", void 0), (0, import_defineProperty$4.default)(this, "callbacks", void 0), (0, import_defineProperty$4.default)(this, "lazyMode", void 0), (0, import_defineProperty$4.default)(this, "reconnecting", null), this.callbacks = {
      onOpen: opts.onOpen,
      onClose: opts.onClose,
      onError: opts.onError
    };
    const lazyOptions = (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, lazyDefaults), opts.lazy);
    this.inactivityTimeout = new ResettableTimeout(() => {
      if (this.requestManager.hasOutgoingRequests() || this.requestManager.hasPendingRequests()) {
        this.inactivityTimeout.reset();
        return;
      }
      this.close().catch(() => null);
    }, lazyOptions.closeMs), this.activeConnection = new WsConnection({
      WebSocketPonyfill: opts.WebSocket,
      urlOptions: opts,
      keepAlive: (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, keepAliveDefaults), opts.keepAlive)
    }), this.activeConnection.wsObservable.subscribe({ next: (ws) => {
      ws && this.setupWebSocketListeners(ws);
    } }), this.reconnectRetryDelay = (_opts$retryDelayMs = opts.retryDelayMs) !== null && _opts$retryDelayMs !== void 0 ? _opts$retryDelayMs : exponentialBackoff, this.lazyMode = lazyOptions.enabled, this.connectionState = behaviorSubject({
      type: "state",
      state: lazyOptions.enabled ? "idle" : "connecting",
      error: null
    }), this.lazyMode || this.open().catch(() => null);
  }
  /**
  * Opens the WebSocket connection. Handles reconnection attempts and updates
  * the connection state accordingly.
  */
  async open() {
    var _this = this;
    _this.allowReconnect = !0, _this.connectionState.get().state !== "connecting" && _this.connectionState.next({
      type: "state",
      state: "connecting",
      error: null
    });
    try {
      await _this.activeConnection.open();
    } catch (error) {
      return _this.reconnect(new TRPCWebSocketClosedError({
        message: "Initialization error",
        cause: error
      })), _this.reconnecting;
    }
  }
  /**
  * Closes the WebSocket connection and stops managing requests.
  * Ensures all outgoing and pending requests are properly finalized.
  */
  async close() {
    var _this2 = this;
    _this2.allowReconnect = !1, _this2.inactivityTimeout.stop();
    const requestsToAwait = [];
    for (const request of _this2.requestManager.getRequests()) request.message.method === "subscription" ? request.callbacks.complete() : request.state === "outgoing" ? request.callbacks.error(TRPCClientError.from(new TRPCWebSocketClosedError({ message: "Closed before connection was established" }))) : requestsToAwait.push(request.end);
    await Promise.all(requestsToAwait).catch(() => null), await _this2.activeConnection.close().catch(() => null), _this2.connectionState.next({
      type: "state",
      state: "idle",
      error: null
    });
  }
  /**
  * Method to request the server.
  * Handles data transformation, batching of requests, and subscription lifecycle.
  *
  * @param op - The operation details including id, type, path, input and signal
  * @param transformer - Data transformer for serializing requests and deserializing responses
  * @param lastEventId - Optional ID of the last received event for subscriptions
  *
  * @returns An observable that emits operation results and handles cleanup
  */
  request({ op: { id, type, path, input, signal }, transformer: transformer2, lastEventId }) {
    return observable((observer) => {
      const abort = this.batchSend({
        id,
        method: type,
        params: {
          input: transformer2.input.serialize(input),
          path,
          lastEventId
        }
      }, (0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, observer), {}, { next(event) {
        const transformed = transformResult(event, transformer2.output);
        if (!transformed.ok) {
          observer.error(TRPCClientError.from(transformed.error));
          return;
        }
        observer.next({ result: transformed.result });
      } }));
      return () => {
        abort(), type === "subscription" && this.activeConnection.isOpen() && this.send({
          id,
          method: "subscription.stop"
        }), signal == null || signal.removeEventListener("abort", abort);
      };
    });
  }
  get connection() {
    return backwardCompatibility(this.activeConnection);
  }
  reconnect(closedError) {
    var _this3 = this;
    if (this.connectionState.next({
      type: "state",
      state: "connecting",
      error: TRPCClientError.from(closedError)
    }), this.reconnecting) return;
    const tryReconnect = async (attemptIndex) => {
      try {
        await sleep(_this3.reconnectRetryDelay(attemptIndex)), _this3.allowReconnect && (await _this3.activeConnection.close(), await _this3.activeConnection.open(), _this3.requestManager.hasPendingRequests() && _this3.send(_this3.requestManager.getPendingRequests().map(({ message }) => message))), _this3.reconnecting = null;
      } catch {
        await tryReconnect(attemptIndex + 1);
      }
    };
    this.reconnecting = tryReconnect(0);
  }
  setupWebSocketListeners(ws) {
    var _this4 = this;
    const handleCloseOrError = (cause) => {
      const reqs = this.requestManager.getPendingRequests();
      for (const { message, callbacks } of reqs)
        message.method !== "subscription" && (callbacks.error(TRPCClientError.from(cause ?? new TRPCWebSocketClosedError({
          message: "WebSocket closed",
          cause
        }))), this.requestManager.delete(message.id));
    };
    ws.addEventListener("open", () => {
      run(async () => {
        var _this$callbacks$onOpe, _this$callbacks;
        _this4.lazyMode && _this4.inactivityTimeout.start(), (_this$callbacks$onOpe = (_this$callbacks = _this4.callbacks).onOpen) === null || _this$callbacks$onOpe === void 0 || _this$callbacks$onOpe.call(_this$callbacks), _this4.connectionState.next({
          type: "state",
          state: "pending",
          error: null
        });
      }).catch((error) => {
        ws.close(3e3), handleCloseOrError(error);
      });
    }), ws.addEventListener("message", ({ data }) => {
      if (this.inactivityTimeout.reset(), typeof data != "string" || ["PING", "PONG"].includes(data)) return;
      const incomingMessage = JSON.parse(data);
      if ("method" in incomingMessage) {
        this.handleIncomingRequest(incomingMessage);
        return;
      }
      this.handleResponseMessage(incomingMessage);
    }), ws.addEventListener("close", (event) => {
      var _this$callbacks$onClo, _this$callbacks2;
      handleCloseOrError(event), (_this$callbacks$onClo = (_this$callbacks2 = this.callbacks).onClose) === null || _this$callbacks$onClo === void 0 || _this$callbacks$onClo.call(_this$callbacks2, event), (!this.lazyMode || this.requestManager.hasPendingSubscriptions()) && this.reconnect(new TRPCWebSocketClosedError({
        message: "WebSocket closed",
        cause: event
      }));
    }), ws.addEventListener("error", (event) => {
      var _this$callbacks$onErr, _this$callbacks3;
      handleCloseOrError(event), (_this$callbacks$onErr = (_this$callbacks3 = this.callbacks).onError) === null || _this$callbacks$onErr === void 0 || _this$callbacks$onErr.call(_this$callbacks3, event), this.reconnect(new TRPCWebSocketClosedError({
        message: "WebSocket closed",
        cause: event
      }));
    });
  }
  handleResponseMessage(message) {
    const request = this.requestManager.getPendingRequest(message.id);
    if (!request) return;
    request.callbacks.next(message);
    let completed = !0;
    "result" in message && request.message.method === "subscription" && (message.result.type === "data" && (request.message.params.lastEventId = message.result.id), message.result.type !== "stopped" && (completed = !1)), completed && (request.callbacks.complete(), this.requestManager.delete(message.id));
  }
  handleIncomingRequest(message) {
    message.method === "reconnect" && this.reconnect(new TRPCWebSocketClosedError({ message: "Server requested reconnect" }));
  }
  /**
  * Sends a message or batch of messages directly to the server.
  */
  send(messageOrMessages) {
    if (!this.activeConnection.isOpen()) throw new Error("Active connection is not open");
    const messages = messageOrMessages instanceof Array ? messageOrMessages : [messageOrMessages];
    this.activeConnection.ws.send(JSON.stringify(messages.length === 1 ? messages[0] : messages));
  }
  /**
  * Groups requests for batch sending.
  *
  * @returns A function to abort the batched request.
  */
  batchSend(message, callbacks) {
    var _this5 = this;
    return this.inactivityTimeout.reset(), run(async () => {
      _this5.activeConnection.isOpen() || await _this5.open(), await sleep(0), _this5.requestManager.hasOutgoingRequests() && _this5.send(_this5.requestManager.flush().map(({ message: message$1 }) => message$1));
    }).catch((err) => {
      this.requestManager.delete(message.id), callbacks.error(TRPCClientError.from(err));
    }), this.requestManager.register(message, callbacks);
  }
};
function createWSClient(opts) {
  return new WsClient(opts);
}
function wsLink(opts) {
  const { client } = opts, transformer2 = getTransformer(opts.transformer);
  return () => ({ op }) => observable((observer) => {
    const connStateSubscription = op.type === "subscription" ? client.connectionState.subscribe({ next(result) {
      observer.next({
        result,
        context: op.context
      });
    } }) : null, requestSubscription = client.request({
      op,
      transformer: transformer2
    }).subscribe(observer);
    return () => {
      requestSubscription.unsubscribe(), connStateSubscription == null || connStateSubscription.unsubscribe();
    };
  });
}
var import_defineProperty = __toESM$1(require_defineProperty$1()), import_objectSpread2$4 = __toESM$1(require_objectSpread2$1()), TRPCUntypedClient = class {
  constructor(opts) {
    (0, import_defineProperty.default)(this, "links", void 0), (0, import_defineProperty.default)(this, "runtime", void 0), (0, import_defineProperty.default)(this, "requestId", void 0), this.requestId = 0, this.runtime = {}, this.links = opts.links.map((link) => link(this.runtime));
  }
  $request(opts) {
    var _opts$context;
    return createChain({
      links: this.links,
      op: (0, import_objectSpread2$4.default)((0, import_objectSpread2$4.default)({}, opts), {}, {
        context: (_opts$context = opts.context) !== null && _opts$context !== void 0 ? _opts$context : {},
        id: ++this.requestId
      })
    }).pipe(share());
  }
  async requestAsPromise(opts) {
    var _this = this;
    try {
      const req$ = _this.$request(opts);
      return (await observableToPromise(req$)).result.data;
    } catch (err) {
      throw TRPCClientError.from(err);
    }
  }
  query(path, input, opts) {
    return this.requestAsPromise({
      type: "query",
      path,
      input,
      context: opts == null ? void 0 : opts.context,
      signal: opts == null ? void 0 : opts.signal
    });
  }
  mutation(path, input, opts) {
    return this.requestAsPromise({
      type: "mutation",
      path,
      input,
      context: opts == null ? void 0 : opts.context,
      signal: opts == null ? void 0 : opts.signal
    });
  }
  subscription(path, input, opts) {
    return this.$request({
      type: "subscription",
      path,
      input,
      context: opts.context,
      signal: opts.signal
    }).subscribe({
      next(envelope) {
        switch (envelope.result.type) {
          case "state": {
            var _opts$onConnectionSta;
            (_opts$onConnectionSta = opts.onConnectionStateChange) === null || _opts$onConnectionSta === void 0 || _opts$onConnectionSta.call(opts, envelope.result);
            break;
          }
          case "started": {
            var _opts$onStarted;
            (_opts$onStarted = opts.onStarted) === null || _opts$onStarted === void 0 || _opts$onStarted.call(opts, { context: envelope.context });
            break;
          }
          case "stopped": {
            var _opts$onStopped;
            (_opts$onStopped = opts.onStopped) === null || _opts$onStopped === void 0 || _opts$onStopped.call(opts);
            break;
          }
          case "data":
          case void 0: {
            var _opts$onData;
            (_opts$onData = opts.onData) === null || _opts$onData === void 0 || _opts$onData.call(opts, envelope.result.data);
            break;
          }
        }
      },
      error(err) {
        var _opts$onError;
        (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, err);
      },
      complete() {
        var _opts$onComplete;
        (_opts$onComplete = opts.onComplete) === null || _opts$onComplete === void 0 || _opts$onComplete.call(opts);
      }
    });
  }
};
const untypedClientSymbol = Symbol.for("trpc_untypedClient"), clientCallTypeMap = {
  query: "query",
  mutate: "mutation",
  subscribe: "subscription"
}, clientCallTypeToProcedureType = (clientCallType) => clientCallTypeMap[clientCallType];
function createTRPCClientProxy(client) {
  const proxy = createRecursiveProxy(({ path, args }) => {
    const pathCopy = [...path], procedureType = clientCallTypeToProcedureType(pathCopy.pop()), fullPath = pathCopy.join(".");
    return client[procedureType](fullPath, ...args);
  });
  return createFlatProxy((key) => key === untypedClientSymbol ? client : proxy[key]);
}
function createTRPCClient(opts) {
  const client = new TRPCUntypedClient(opts);
  return createTRPCClientProxy(client);
}
__toESM$1(require_objectSpread2$1());
__toESM$1(require_objectSpread2$1());
var require_asyncIterator = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(exports, module) {
  function _asyncIterator$1(r2) {
    var n, t, o, e = 2;
    for (typeof Symbol < "u" && (t = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
      if (t && (n = r2[t]) != null) return n.call(r2);
      if (o && (n = r2[o]) != null) return new AsyncFromSyncIterator(n.call(r2));
      t = "@@asyncIterator", o = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  function AsyncFromSyncIterator(r2) {
    function AsyncFromSyncIteratorContinuation(r$1) {
      if (Object(r$1) !== r$1) return Promise.reject(new TypeError(r$1 + " is not an object."));
      var n = r$1.done;
      return Promise.resolve(r$1.value).then(function(r$2) {
        return {
          value: r$2,
          done: n
        };
      });
    }
    return AsyncFromSyncIterator = function(r$1) {
      this.s = r$1, this.n = r$1.next;
    }, AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function() {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function(r$1) {
        var n = this.s.return;
        return n === void 0 ? Promise.resolve({
          value: r$1,
          done: !0
        }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
      throw: function(r$1) {
        var n = this.s.return;
        return n === void 0 ? Promise.reject(r$1) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }
    }, new AsyncFromSyncIterator(r2);
  }
  module.exports = _asyncIterator$1, module.exports.__esModule = !0, module.exports.default = module.exports;
} });
__toESM$1(require_asyncIterator());
__toESM$1(require_objectSpread2$1());
var require_usingCtx = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(exports, module) {
  function _usingCtx() {
    var r2 = typeof SuppressedError == "function" ? SuppressedError : function(r$1, e$1) {
      var n$1 = Error();
      return n$1.name = "SuppressedError", n$1.error = r$1, n$1.suppressed = e$1, n$1;
    }, e = {}, n = [];
    function using(r$1, e$1) {
      if (e$1 != null) {
        if (Object(e$1) !== e$1) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
        if (r$1) var o = e$1[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
        if (o === void 0 && (o = e$1[Symbol.dispose || Symbol.for("Symbol.dispose")], r$1)) var t = o;
        if (typeof o != "function") throw new TypeError("Object is not disposable.");
        t && (o = function() {
          try {
            t.call(e$1);
          } catch (r$2) {
            return Promise.reject(r$2);
          }
        }), n.push({
          v: e$1,
          d: o,
          a: r$1
        });
      } else r$1 && n.push({
        d: e$1,
        a: r$1
      });
      return e$1;
    }
    return {
      e,
      u: using.bind(null, !1),
      a: using.bind(null, !0),
      d: function() {
        var o, t = this.e, s = 0;
        function next() {
          for (; o = n.pop(); ) try {
            if (!o.a && s === 1) return s = 0, n.push(o), Promise.resolve().then(next);
            if (o.d) {
              var r$1 = o.d.call(o.v);
              if (o.a) return s |= 2, Promise.resolve(r$1).then(next, err);
            } else s |= 1;
          } catch (r$2) {
            return err(r$2);
          }
          if (s === 1) return t !== e ? Promise.reject(t) : Promise.resolve();
          if (t !== e) throw t;
        }
        function err(n$1) {
          return t = t !== e ? new r2(n$1, t) : n$1, next();
        }
        return next();
      }
    };
  }
  module.exports = _usingCtx, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_OverloadYield = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(exports, module) {
  function _OverloadYield(e, d) {
    this.v = e, this.k = d;
  }
  module.exports = _OverloadYield, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_awaitAsyncGenerator = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(exports, module) {
  var OverloadYield$1 = require_OverloadYield();
  function _awaitAsyncGenerator$1(e) {
    return new OverloadYield$1(e, 0);
  }
  module.exports = _awaitAsyncGenerator$1, module.exports.__esModule = !0, module.exports.default = module.exports;
} }), require_wrapAsyncGenerator = __commonJS$1({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(exports, module) {
  var OverloadYield = require_OverloadYield();
  function _wrapAsyncGenerator$1(e) {
    return function() {
      return new AsyncGenerator(e.apply(this, arguments));
    };
  }
  function AsyncGenerator(e) {
    var r2, t;
    function resume(r$1, t$1) {
      try {
        var n = e[r$1](t$1), o = n.value, u = o instanceof OverloadYield;
        Promise.resolve(u ? o.v : o).then(function(t$2) {
          if (u) {
            var i = r$1 === "return" ? "return" : "next";
            if (!o.k || t$2.done) return resume(i, t$2);
            t$2 = e[i](t$2).value;
          }
          settle(n.done ? "return" : "normal", t$2);
        }, function(e$1) {
          resume("throw", e$1);
        });
      } catch (e$1) {
        settle("throw", e$1);
      }
    }
    function settle(e$1, n) {
      switch (e$1) {
        case "return":
          r2.resolve({
            value: n,
            done: !0
          });
          break;
        case "throw":
          r2.reject(n);
          break;
        default:
          r2.resolve({
            value: n,
            done: !1
          });
      }
      (r2 = r2.next) ? resume(r2.key, r2.arg) : t = null;
    }
    this._invoke = function(e$1, n) {
      return new Promise(function(o, u) {
        var i = {
          key: e$1,
          arg: n,
          resolve: o,
          reject: u,
          next: null
        };
        t ? t = t.next = i : (r2 = t = i, resume(e$1, n));
      });
    }, typeof e.return != "function" && (this.return = void 0);
  }
  AsyncGenerator.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, AsyncGenerator.prototype.next = function(e) {
    return this._invoke("next", e);
  }, AsyncGenerator.prototype.throw = function(e) {
    return this._invoke("throw", e);
  }, AsyncGenerator.prototype.return = function(e) {
    return this._invoke("return", e);
  }, module.exports = _wrapAsyncGenerator$1, module.exports.__esModule = !0, module.exports.default = module.exports;
} });
__toESM$1(require_usingCtx());
__toESM$1(require_awaitAsyncGenerator());
__toESM$1(require_wrapAsyncGenerator());
__toESM$1(require_objectSpread2$1());
var __defProp = Object.defineProperty, __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever, util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items)
      obj[item] = item;
    return obj;
  }, util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] != "number"), filtered = {};
    for (const k of validKeys)
      filtered[k] = obj[k];
    return util2.objectValues(filtered);
  }, util2.objectValues = (obj) => util2.objectKeys(obj).map(function(e) {
    return obj[e];
  }), util2.objectKeys = typeof Object.keys == "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object)
      Object.prototype.hasOwnProperty.call(object, key) && keys.push(key);
    return keys;
  }, util2.find = (arr, checker) => {
    for (const item of arr)
      if (checker(item))
        return item;
  }, util2.isInteger = typeof Number.isInteger == "function" ? (val) => Number.isInteger(val) : (val) => typeof val == "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val == "string" ? \`'\${val}'\` : val).join(separator);
  }
  util2.joinValues = joinValues, util2.jsonStringifyReplacer = (_, value) => typeof value == "bigint" ? value.toString() : value;
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => ({
    ...first,
    ...second
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (data) => {
  switch (typeof data) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(data) ? ZodParsedType.array : data === null ? ZodParsedType.null : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && data instanceof Map ? ZodParsedType.map : typeof Set < "u" && data instanceof Set ? ZodParsedType.set : typeof Date < "u" && data instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), quotelessJson = (obj) => JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:"), ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super(), this.issues = [], this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    }, this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, actualProto) : this.__proto__ = actualProto, this.name = "ZodError", this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    }, fieldErrors = { _errors: [] }, processError = (error) => {
      for (const issue of error.issues)
        if (issue.code === "invalid_union")
          issue.unionErrors.map(processError);
        else if (issue.code === "invalid_return_type")
          processError(issue.returnTypeError);
        else if (issue.code === "invalid_arguments")
          processError(issue.argumentsError);
        else if (issue.path.length === 0)
          fieldErrors._errors.push(mapper(issue));
        else {
          let curr = fieldErrors, i = 0;
          for (; i < issue.path.length; ) {
            const el = issue.path[i];
            i === issue.path.length - 1 ? (curr[el] = curr[el] || { _errors: [] }, curr[el]._errors.push(mapper(issue))) : curr[el] = curr[el] || { _errors: [] }, curr = curr[el], i++;
          }
        }
    };
    return processError(this), fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError))
      throw new Error(\`Not a ZodError: \${value}\`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {}, formErrors = [];
    for (const sub of this.issues)
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [], fieldErrors[firstEl].push(mapper(sub));
      } else
        formErrors.push(mapper(sub));
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => new ZodError(issues);
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      issue.received === ZodParsedType.undefined ? message = "Required" : message = \`Expected \${issue.expected}, received \${issue.received}\`;
      break;
    case ZodIssueCode.invalid_literal:
      message = \`Invalid literal value, expected \${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}\`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = \`Unrecognized key(s) in object: \${util.joinValues(issue.keys, ", ")}\`;
      break;
    case ZodIssueCode.invalid_union:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = \`Invalid discriminator value. Expected \${util.joinValues(issue.options)}\`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = \`Invalid enum value. Expected \${util.joinValues(issue.options)}, received '\${issue.received}'\`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      message = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      message = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof issue.validation == "object" ? "includes" in issue.validation ? (message = \`Invalid input: must include "\${issue.validation.includes}"\`, typeof issue.validation.position == "number" && (message = \`\${message} at one or more positions greater than or equal to \${issue.validation.position}\`)) : "startsWith" in issue.validation ? message = \`Invalid input: must start with "\${issue.validation.startsWith}"\` : "endsWith" in issue.validation ? message = \`Invalid input: must end with "\${issue.validation.endsWith}"\` : util.assertNever(issue.validation) : issue.validation !== "regex" ? message = \`Invalid \${issue.validation}\` : message = "Invalid";
      break;
    case ZodIssueCode.too_small:
      issue.type === "array" ? message = \`Array must contain \${issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than"} \${issue.minimum} element(s)\` : issue.type === "string" ? message = \`String must contain \${issue.exact ? "exactly" : issue.inclusive ? "at least" : "over"} \${issue.minimum} character(s)\` : issue.type === "number" ? message = \`Number must be \${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}\${issue.minimum}\` : issue.type === "bigint" ? message = \`Number must be \${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}\${issue.minimum}\` : issue.type === "date" ? message = \`Date must be \${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}\${new Date(Number(issue.minimum))}\` : message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      issue.type === "array" ? message = \`Array must contain \${issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than"} \${issue.maximum} element(s)\` : issue.type === "string" ? message = \`String must contain \${issue.exact ? "exactly" : issue.inclusive ? "at most" : "under"} \${issue.maximum} character(s)\` : issue.type === "number" ? message = \`Number must be \${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} \${issue.maximum}\` : issue.type === "bigint" ? message = \`BigInt must be \${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} \${issue.maximum}\` : issue.type === "date" ? message = \`Date must be \${issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than"} \${new Date(Number(issue.maximum))}\` : message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      message = \`Number must be a multiple of \${issue.multipleOf}\`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError, util.assertNever(issue);
  }
  return { message };
}, en_default = errorMap, overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params, fullPath = [...path, ...issueData.path || []], fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0)
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps)
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap(), issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      s.status === "dirty" && status.dirty(), arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key, value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted" || value.status === "aborted")
        return INVALID;
      key.status === "dirty" && status.dirty(), value.status === "dirty" && status.dirty(), key.value !== "__proto__" && (typeof value.value < "u" || pair.alwaysSet) && (finalObject[key.value] = value.value);
    }
    return { status: status.value, value: finalObject };
  }
}, INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (value) => ({ status: "dirty", value }), OK = (value) => ({ status: "valid", value }), isAborted = (x) => x.status === "aborted", isDirty = (x) => x.status === "dirty", isValid = (x) => x.status === "valid", isAsync = (x) => typeof Promise < "u" && x instanceof Promise, errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message == "string" ? { message } : message || {}, errorUtil2.toString = (message) => typeof message == "string" ? message : message == null ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [], this.parent = parent, this.data = value, this._path = path, this._key = key;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}, handleResult = (ctx, result) => {
  if (isValid(result))
    return { success: !0, data: result.value };
  if (!ctx.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const error = new ZodError(ctx.common.issues);
      return this._error = error, this._error;
    }
  };
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error))
    throw new Error(\`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.\`);
  return errorMap2 ? { errorMap: errorMap2, description } : { errorMap: (iss, ctx) => {
    const { message } = params;
    return iss.code === "invalid_enum_value" ? { message: message ?? ctx.defaultError } : typeof ctx.data > "u" ? { message: message ?? required_error ?? ctx.defaultError } : iss.code !== "invalid_type" ? { message: ctx.defaultError } : { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result))
      throw new Error("Synchronous parse encountered promise.");
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: (params == null ? void 0 : params.async) ?? !1,
        contextualErrorMap: params == null ? void 0 : params.errorMap
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async)
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        (_b = (_a = err == null ? void 0 : err.message) == null ? void 0 : _a.toLowerCase()) != null && _b.includes("encountered") && (this["~standard"].async = !0), ctx.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params == null ? void 0 : params.errorMap,
        async: !0
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx }), result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => typeof message == "string" || typeof message > "u" ? { message } : typeof message == "function" ? message(val) : message;
    return this._refinement((val, ctx) => {
      const result = check(val), setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      return typeof Promise < "u" && result instanceof Promise ? result.then((data) => data ? !0 : (setError(), !1)) : result ? !0 : (setError(), !1);
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => check(val) ? !0 : (ctx.addIssue(typeof refinementData == "function" ? refinementData(val, ctx) : refinementData), !1));
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync, this._def = def, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def == "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def == "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}, cuidRegex = /^c[^\\s-]{8,}$/i, cuid2Regex = /^[0-9a-z]+$/, ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i, uuidRegex = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/i, nanoidRegex = /^[a-z0-9_-]{21}$/i, jwtRegex = /^[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]*$/, durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\\d+Y)|(?:[-+]?\\d+[.,]\\d+Y$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:(?:[-+]?\\d+W)|(?:[-+]?\\d+[.,]\\d+W$))?(?:(?:[-+]?\\d+D)|(?:[-+]?\\d+[.,]\\d+D$))?(?:T(?=[\\d+-])(?:(?:[-+]?\\d+H)|(?:[-+]?\\d+[.,]\\d+H$))?(?:(?:[-+]?\\d+M)|(?:[-+]?\\d+[.,]\\d+M$))?(?:[-+]?\\d+(?:[.,]\\d+)?S)?)??$/, emailRegex = /^(?!\\.)(?!.*\\.\\.)([A-Z0-9_'+\\-\\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\\-]*\\.)+[A-Z]{2,}$/i, _emojiRegex = "^(\\\\p{Extended_Pictographic}|\\\\p{Emoji_Component})+$", emojiRegex, ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\/(3[0-2]|[12]?[0-9])$/, ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dateRegexSource = "((\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\\\d|30)|(02)-(0[1-9]|1\\\\d|2[0-8])))", dateRegex = new RegExp(\`^\${dateRegexSource}$\`);
function timeRegexSource(args) {
  let secondsRegexSource = "[0-5]\\\\d";
  args.precision ? secondsRegexSource = \`\${secondsRegexSource}\\\\.\\\\d{\${args.precision}}\` : args.precision == null && (secondsRegexSource = \`\${secondsRegexSource}(\\\\.\\\\d+)?\`);
  const secondsQuantifier = args.precision ? "+" : "?";
  return \`([01]\\\\d|2[0-3]):[0-5]\\\\d(:\${secondsRegexSource})\${secondsQuantifier}\`;
}
function timeRegex(args) {
  return new RegExp(\`^\${timeRegexSource(args)}$\`);
}
function datetimeRegex(args) {
  let regex = \`\${dateRegexSource}T\${timeRegexSource(args)}\`;
  const opts = [];
  return opts.push(args.local ? "Z?" : "Z"), args.offset && opts.push("([+-]\\\\d{2}:?\\\\d{2})"), regex = \`\${regex}(\${opts.join("|")})\`, new RegExp(\`^\${regex}$\`);
}
function isValidIP(ip, version) {
  return !!((version === "v4" || !version) && ipv4Regex.test(ip) || (version === "v6" || !version) && ipv6Regex.test(ip));
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return !1;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return !1;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "="), decoded = JSON.parse(atob(base64));
    return !(typeof decoded != "object" || decoded === null || "typ" in decoded && (decoded == null ? void 0 : decoded.typ) !== "JWT" || !decoded.alg || alg && decoded.alg !== alg);
  } catch {
    return !1;
  }
}
function isValidCidr(ip, version) {
  return !!((version === "v4" || !version) && ipv4CidrRegex.test(ip) || (version === "v6" || !version) && ipv6CidrRegex.test(ip));
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = String(input.data)), this._getType(input) !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      }), INVALID;
    }
    const status = new ParseStatus();
    let ctx;
    for (const check of this._def.checks)
      if (check.kind === "min")
        input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "max")
        input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "length") {
        const tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
        (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }) : tooSmall && addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }), status.dirty());
      } else if (check.kind === "email")
        emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "emoji")
        emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "uuid")
        uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "nanoid")
        nanoidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "nanoid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid")
        cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid2")
        cuid2Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "ulid")
        ulidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "url")
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          }), status.dirty();
        }
      else check.kind === "regex" ? (check.regex.lastIndex = 0, check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "regex",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty())) : check.kind === "trim" ? input.data = input.data.trim() : check.kind === "includes" ? input.data.includes(check.value, check.position) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { includes: check.value, position: check.position },
        message: check.message
      }), status.dirty()) : check.kind === "toLowerCase" ? input.data = input.data.toLowerCase() : check.kind === "toUpperCase" ? input.data = input.data.toUpperCase() : check.kind === "startsWith" ? input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { startsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "endsWith" ? input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { endsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "datetime" ? datetimeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "datetime",
        message: check.message
      }), status.dirty()) : check.kind === "date" ? dateRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "date",
        message: check.message
      }), status.dirty()) : check.kind === "time" ? timeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "time",
        message: check.message
      }), status.dirty()) : check.kind === "duration" ? durationRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "duration",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "ip" ? isValidIP(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "ip",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "jwt" ? isValidJWT(input.data, check.alg) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "jwt",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "cidr" ? isValidCidr(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "cidr",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64" ? base64Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64url" ? base64urlRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64url",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: options
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (options == null ? void 0 : options.precision) > "u" ? null : options == null ? void 0 : options.precision,
      offset: (options == null ? void 0 : options.offset) ?? !1,
      local: (options == null ? void 0 : options.local) ?? !1,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: options
    }) : this._addCheck({
      kind: "time",
      precision: typeof (options == null ? void 0 : options.precision) > "u" ? null : options == null ? void 0 : options.precision,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options == null ? void 0 : options.position,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to \`.min(1)\`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodString.create = (params) => new ZodString({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodString,
  coerce: (params == null ? void 0 : params.coerce) ?? !1,
  ...processCreateParams(params)
});
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = Number.parseInt(val.toFixed(decCount).replace(".", "")), stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = Number(input.data)), this._getType(input) !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx;
    const status = new ParseStatus();
    for (const check of this._def.checks)
      check.kind === "int" ? util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: check.message
      }), status.dirty()) : check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? floatSafeRemainder(input.data, check.value) !== 0 && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : check.kind === "finite" ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_finite,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf")
        return !0;
      ch.kind === "min" ? (min === null || ch.value > min) && (min = ch.value) : ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: (params == null ? void 0 : params.coerce) || !1,
  ...processCreateParams(params)
});
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce)
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    if (this._getType(input) !== ZodParsedType.bigint)
      return this._getInvalidInput(input);
    let ctx;
    const status = new ParseStatus();
    for (const check of this._def.checks)
      check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? input.data % check.value !== BigInt(0) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    }), INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodBigInt.create = (params) => new ZodBigInt({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodBigInt,
  coerce: (params == null ? void 0 : params.coerce) ?? !1,
  ...processCreateParams(params)
});
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = !!input.data), this._getType(input) !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: (params == null ? void 0 : params.coerce) || !1,
  ...processCreateParams(params)
});
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = new Date(input.data)), this._getType(input) !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      }), INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    const status = new ParseStatus();
    let ctx;
    for (const check of this._def.checks)
      check.kind === "min" ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        message: check.message,
        inclusive: !0,
        exact: !1,
        minimum: check.value,
        type: "date"
      }), status.dirty()) : check.kind === "max" ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        message: check.message,
        inclusive: !0,
        exact: !1,
        maximum: check.value,
        type: "date"
      }), status.dirty()) : util.assertNever(check);
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => new ZodDate({
  checks: [],
  coerce: (params == null ? void 0 : params.coerce) || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(params)
});
var ZodSymbol = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(params)
});
var ZodUndefined = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(params)
});
var ZodNull = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(params)
});
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(params)
});
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(params)
});
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    }), INVALID;
  }
};
ZodNever.create = (params) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(params)
});
var ZodVoid = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(params)
});
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input), def = this._def;
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value, tooSmall = ctx.data.length < def.exactLength.value;
      (tooBig || tooSmall) && (addIssueToContext(ctx, {
        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: tooSmall ? def.exactLength.value : void 0,
        maximum: tooBig ? def.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: def.exactLength.message
      }), status.dirty());
    }
    if (def.minLength !== null && ctx.data.length < def.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.minLength.message
    }), status.dirty()), def.maxLength !== null && ctx.data.length > def.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.maxLength.message
    }), status.dirty()), ctx.common.async)
      return Promise.all([...ctx.data].map((item, i) => def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i)))).then((result2) => ParseStatus.mergeArray(status, result2));
    const result = [...ctx.data].map((item, i) => def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => new ZodArray({
  type: schema,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(params)
});
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else return schema instanceof ZodArray ? new ZodArray({
    ...schema._def,
    type: deepPartialify(schema.element)
  }) : schema instanceof ZodOptional ? ZodOptional.create(deepPartialify(schema.unwrap())) : schema instanceof ZodNullable ? ZodNullable.create(deepPartialify(schema.unwrap())) : schema instanceof ZodTuple ? ZodTuple.create(schema.items.map((item) => deepPartialify(item))) : schema;
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape(), keys = util.objectKeys(shape);
    return this._cached = { shape, keys }, this._cached;
  }
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      }), INVALID;
    }
    const { status, ctx } = this._processInputParams(input), { shape, keys: shapeKeys } = this._getCached(), extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (const key in ctx.data)
        shapeKeys.includes(key) || extraKeys.push(key);
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key], value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough")
        for (const key of extraKeys)
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
      else if (unknownKeys === "strict")
        extraKeys.length > 0 && (addIssueToContext(ctx, {
          code: ZodIssueCode.unrecognized_keys,
          keys: extraKeys
        }), status.dirty());
      else if (unknownKeys !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key, value = await pair.value;
        syncPairs.push({
          key,
          value,
          alwaysSet: pair.alwaysSet
        });
      }
      return syncPairs;
    }).then((syncPairs) => ParseStatus.mergeObjectSync(status, syncPairs)) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    return errorUtil.errToObj, new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b;
          const defaultError = ((_b = (_a = this._def).errorMap) == null ? void 0 : _b.call(_a, issue, ctx).message) ?? ctx.defaultError;
          return issue.code === "unrecognized_keys" ? {
            message: errorUtil.errToObj(message).message ?? defaultError
          } : {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    return new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask))
      mask[key] && this.shape[key] && (shape[key] = this.shape[key]);
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape))
      mask[key] || (shape[key] = this.shape[key]);
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      mask && !mask[key] ? newShape[key] = fieldSchema : newShape[key] = fieldSchema.optional();
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape))
      if (mask && !mask[key])
        newShape[key] = this.shape[key];
      else {
        let newField = this.shape[key];
        for (; newField instanceof ZodOptional; )
          newField = newField._def.innerType;
        newShape[key] = newField;
      }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.strictCreate = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.lazycreate = (shape, params) => new ZodObject({
  shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), options = this._def.options;
    function handleResults(results) {
      for (const result of results)
        if (result.result.status === "valid")
          return result.result;
      for (const result of results)
        if (result.result.status === "dirty")
          return ctx.common.issues.push(...result.ctx.common.issues), result.result;
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
    if (ctx.common.async)
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    {
      let dirty;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        }, result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid")
          return result;
        result.status === "dirty" && !dirty && (dirty = { result, ctx: childCtx }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
      }
      if (dirty)
        return ctx.common.issues.push(...dirty.ctx.common.issues), dirty.result;
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => new ZodUnion({
  options: types,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(params)
});
var getDiscriminator = (type) => type instanceof ZodLazy ? getDiscriminator(type.schema) : type instanceof ZodEffects ? getDiscriminator(type.innerType()) : type instanceof ZodLiteral ? [type.value] : type instanceof ZodEnum ? type.options : type instanceof ZodNativeEnum ? util.objectValues(type.enum) : type instanceof ZodDefault ? getDiscriminator(type._def.innerType) : type instanceof ZodUndefined ? [void 0] : type instanceof ZodNull ? [null] : type instanceof ZodOptional ? [void 0, ...getDiscriminator(type.unwrap())] : type instanceof ZodNullable ? [null, ...getDiscriminator(type.unwrap())] : type instanceof ZodBranded || type instanceof ZodReadonly ? getDiscriminator(type.unwrap()) : type instanceof ZodCatch ? getDiscriminator(type._def.innerType) : [], ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    const discriminator = this.discriminator, discriminatorValue = ctx.data[discriminator], option = this.optionsMap.get(discriminatorValue);
    return option ? ctx.common.async ? option._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : option._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [discriminator]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length)
        throw new Error(\`A discriminator value for key \\\`\${discriminator}\\\` could not be extracted from all schema options\`);
      for (const value of discriminatorValues) {
        if (optionsMap.has(value))
          throw new Error(\`Discriminator property \${String(discriminator)} has duplicate value \${String(value)}\`);
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a), bType = getParsedType(b);
  if (a === b)
    return { valid: !0, data: a };
  if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b), sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid)
        return { valid: !1 };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length)
      return { valid: !1 };
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index], itemB = b[index], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return { valid: !1 };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  } else return aType === ZodParsedType.date && bType === ZodParsedType.date && +a == +b ? { valid: !0, data: a } : { valid: !1 };
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input), handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight))
        return INVALID;
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), { status: status.value, value: merged.data }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }),
      this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })
    ]).then(([left, right]) => handleParsed(left, right)) : handleParsed(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
};
ZodIntersection.create = (left, right, params) => new ZodIntersection({
  left,
  right,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(params)
});
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (ctx.data.length < this._def.items.length)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), INVALID;
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status.dirty());
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
    }).filter((x) => !!x);
    return ctx.common.async ? Promise.all(items).then((results) => ParseStatus.mergeArray(status, results)) : ParseStatus.mergeArray(status, items);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    const pairs = [], keyType = this._def.keyType, valueType = this._def.valueType;
    for (const key in ctx.data)
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    return ctx.common.async ? ParseStatus.mergeObjectAsync(status, pairs) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    return second instanceof ZodType ? new _ZodRecord({
      keyType: first,
      valueType: second,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(third)
    }) : new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}, ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      }), INVALID;
    const keyType = this._def.keyType, valueType = this._def.valueType, pairs = [...ctx.data.entries()].map(([key, value], index) => ({
      key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
      value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
    }));
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key, value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted")
            return INVALID;
          (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key, value = pair.value;
        if (key.status === "aborted" || value.status === "aborted")
          return INVALID;
        (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => new ZodMap({
  valueType,
  keyType,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(params)
});
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      }), INVALID;
    const def = this._def;
    def.minSize !== null && ctx.data.size < def.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.minSize.message
    }), status.dirty()), def.maxSize !== null && ctx.data.size > def.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.maxSize.message
    }), status.dirty());
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        element.status === "dirty" && status.dirty(), parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ctx.common.async ? Promise.all(elements).then((elements2) => finalizeSet(elements2)) : finalizeSet(elements);
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => new ZodSet({
  valueType,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(params)
});
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      }), INVALID;
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap }, fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]), parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          throw error.addIssue(makeArgsIssue(args, e)), error;
        }), result = await Reflect.apply(fn, this, parsedArgs);
        return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          throw error.addIssue(makeReturnsIssue(result, e)), error;
        });
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success)
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        const result = Reflect.apply(fn, this, parsedArgs.data), parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success)
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    return this.parse(func);
  }
  strictImplement(func) {
    return this.parse(func);
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args || ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}, ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    return this._def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => new ZodLazy({
  getter,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(params)
});
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => new ZodLiteral({
  value,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(params)
});
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data != "string") {
      const ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(util.getValidEnumValues(this._def.values))), !this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => new ZodNativeEnum({
  values,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(params)
});
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === !1)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      }), INVALID;
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => this._def.type.parseAsync(data, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
};
ZodPromise.create = (schema, params) => new ZodPromise({
  type: schema,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(params)
});
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input), effect = this._def.effect || null, checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async)
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          return result.status === "aborted" ? INVALID : result.status === "dirty" || status.value === "dirty" ? DIRTY(result.value) : result;
        });
      {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        return result.status === "aborted" ? INVALID : result.status === "dirty" || status.value === "dirty" ? DIRTY(result.value) : result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async)
          return Promise.resolve(result);
        if (result instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return acc;
      };
      if (ctx.common.async === !1) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value), { status: status.value, value: inner.value });
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value).then(() => ({ status: status.value, value: inner.value }))));
    }
    if (effect.type === "transform")
      if (ctx.common.async === !1) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: status.value, value: result };
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
          status: status.value,
          value: result
        })) : INVALID);
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => new ZodEffects({
  schema,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect,
  ...processCreateParams(params)
});
ZodEffects.createWithPreprocess = (preprocess, schema, params) => new ZodEffects({
  schema,
  effect: { type: "preprocess", transform: preprocess },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(params)
});
var ZodOptional = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => new ZodOptional({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(params)
});
var ZodNullable = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => new ZodNullable({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(params)
});
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    return ctx.parsedType === ZodParsedType.undefined && (data = this._def.defaultValue()), this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => new ZodDefault({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof params.default == "function" ? params.default : () => params.default,
  ...processCreateParams(params)
});
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    }, result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    return isAsync(result) ? result.then((result2) => ({
      status: "valid",
      value: result2.status === "valid" ? result2.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    })) : {
      status: "valid",
      value: result.status === "valid" ? result.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => new ZodCatch({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof params.catch == "function" ? params.catch : () => params.catch,
  ...processCreateParams(params)
});
var ZodNaN = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(params)
});
var BRAND = Symbol("zod_brand"), ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}, ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async)
      return (async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), DIRTY(inResult.value)) : this._def.out._parseAsync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      })();
    {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), {
        status: "dirty",
        value: inResult.value
      }) : this._def.out._parseSync({
        data: inResult.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}, ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input), freeze = (data) => (isValid(data) && (data.value = Object.freeze(data.value)), data);
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => new ZodReadonly({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(params)
});
function cleanParams(params, data) {
  const p = typeof params == "function" ? params(data) : typeof params == "string" ? { message: params } : params;
  return typeof p == "string" ? { message: p } : p;
}
function custom(check, _params = {}, fatal) {
  return check ? ZodAny.create().superRefine((data, ctx) => {
    const r2 = check(data);
    if (r2 instanceof Promise)
      return r2.then((r22) => {
        if (!r22) {
          const params = cleanParams(_params, data), _fatal = params.fatal ?? fatal ?? !0;
          ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
        }
      });
    if (!r2) {
      const params = cleanParams(_params, data), _fatal = params.fatal ?? fatal ?? !0;
      ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
    }
  }) : ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
}, ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2.ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline", ZodFirstPartyTypeKind2.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: \`Input not instance of \${cls.name}\`
}) => custom((data) => data instanceof cls, params), stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, ostring = () => stringType().optional(), onumber = () => numberType().optional(), oboolean = () => booleanType().optional(), coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: !0 }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: !0 }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: !0
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: !0 }),
  date: (arg) => ZodDate.create({ ...arg, coerce: !0 })
}, NEVER = INVALID, AgentAvailabilityError = /* @__PURE__ */ ((AgentAvailabilityError2) => (AgentAvailabilityError2.NO_CONNECTION = "no_connection", AgentAvailabilityError2.NO_AUTHENTICATION = "no_authentication", AgentAvailabilityError2.INCOMPATIBLE_VERSION = "incompatible_version", AgentAvailabilityError2.OTHER = "other", AgentAvailabilityError2))(AgentAvailabilityError || {});
external_exports.discriminatedUnion("isAvailable", [
  external_exports.object({
    isAvailable: external_exports.literal(!0)
  }),
  external_exports.object({
    isAvailable: external_exports.literal(!1),
    error: external_exports.nativeEnum(AgentAvailabilityError),
    errorMessage: external_exports.string().optional()
  })
]);
var AgentStateType = /* @__PURE__ */ ((AgentStateType2) => (AgentStateType2.IDLE = "idle", AgentStateType2.THINKING = "thinking", AgentStateType2.WORKING = "working", AgentStateType2.CALLING_TOOL = "calling_tool", AgentStateType2.WAITING_FOR_USER_RESPONSE = "waiting_for_user_response", AgentStateType2.FAILED = "failed", AgentStateType2.COMPLETED = "completed", AgentStateType2))(AgentStateType || {});
external_exports.object({
  state: external_exports.nativeEnum(AgentStateType),
  description: external_exports.string().min(3).max(128).optional()
});
var baseSelectedElementSchema = external_exports.object({
  nodeType: external_exports.string().min(1).max(96).describe("The node type of the element."),
  xpath: external_exports.string().min(1).max(1024).describe("The XPath of the element."),
  attributes: external_exports.record(external_exports.union([external_exports.string(), external_exports.boolean(), external_exports.number()])).transform((obj) => {
    const importantAttributes = /* @__PURE__ */ new Set([
      "class",
      "id",
      "style",
      "name",
      "role",
      "href",
      "for",
      "placeholder",
      "alt",
      "title",
      "ariaLabel",
      "ariaRole",
      "ariaDescription",
      "ariaHidden",
      "ariaDisabled",
      "ariaExpanded",
      "ariaSelected"
    ]), entries = Object.entries(obj), importantEntries = [], otherEntries = [];
    for (const [key, value] of entries) {
      const stringValue = typeof value == "string" ? value : String(value), truncatedValue = stringValue.length > 4096 ? \`\${stringValue.slice(0, 4096)}...[truncated]\` : stringValue;
      if (importantAttributes.has(key))
        importantEntries.push([key, truncatedValue]);
      else {
        const processedValue = stringValue.length > 256 ? \`\${stringValue.slice(0, 256)}...[truncated]\` : stringValue;
        otherEntries.push([key, processedValue]);
      }
    }
    const maxOtherAttributes = 100 - importantEntries.length, truncatedOtherEntries = otherEntries.slice(
      0,
      Math.max(0, maxOtherAttributes)
    ), result = Object.fromEntries([
      ...importantEntries,
      ...truncatedOtherEntries
    ]);
    return otherEntries.length > maxOtherAttributes && maxOtherAttributes > 0 && (result.__truncated__ = \`...[\${otherEntries.length - maxOtherAttributes} more entries truncated]\`), result;
  }).describe(
    "A record of attributes of the element. Important attributes (class, id, style, etc.) are never truncated away. Other attributes may be truncated if there are too many total attributes."
  ),
  textContent: external_exports.string().transform((val) => val.length > 2048 ? \`\${val.slice(0, 2048)}...[truncated]\` : val).describe(
    "Text content of the element. Will be truncated after 2048 characters."
  ),
  ownProperties: external_exports.record(external_exports.any()).transform((obj) => {
    const entries = Object.entries(obj), truncatedEntries = entries.slice(0, 500), result = Object.fromEntries(truncatedEntries);
    return entries.length > 500 && (result.__truncated__ = \`...[\${entries.length - 500} more entries truncated]\`), result;
  }).describe(
    "Custom properties that the underlying object may have. Will be truncated after 500 entries. Object are only copied up to 3 levels deep, all children and levels will be truncated equally. Only elements that are serializable will be sent over"
  ),
  boundingClientRect: external_exports.object({
    top: external_exports.number(),
    left: external_exports.number(),
    height: external_exports.number(),
    width: external_exports.number()
  }).strict(),
  pluginInfo: external_exports.array(
    external_exports.object({
      pluginName: external_exports.string().max(128),
      content: external_exports.string().max(4096)
    })
  )
}), selectedElementSchema = baseSelectedElementSchema.extend({
  parent: baseSelectedElementSchema.optional()
}), userMessageMetadataSchema = external_exports.object({
  currentUrl: external_exports.string().max(1024).url().nullable(),
  currentTitle: external_exports.string().max(256).nullable(),
  currentZoomLevel: external_exports.number(),
  viewportMinScale: external_exports.number().optional(),
  viewportMaxScale: external_exports.number().optional(),
  viewportResolution: external_exports.object({
    width: external_exports.number().min(0),
    height: external_exports.number().min(0)
  }),
  devicePixelRatio: external_exports.number(),
  userAgent: external_exports.string().max(1024),
  locale: external_exports.string().max(64),
  selectedElements: external_exports.array(selectedElementSchema)
}), userMessageContentItemSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("text"),
    text: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("image"),
    mimeType: external_exports.string().max(32),
    data: external_exports.string().base64()
  })
]);
external_exports.object({
  id: external_exports.string(),
  contentItems: external_exports.array(userMessageContentItemSchema),
  createdAt: external_exports.date(),
  metadata: userMessageMetadataSchema,
  pluginContent: external_exports.record(external_exports.record(userMessageContentItemSchema)),
  sentByPlugin: external_exports.boolean()
});
var agentMessageContentItemPartSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("text"),
    text: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("image"),
    mimeType: external_exports.string().max(32),
    data: external_exports.string().base64(),
    replacing: external_exports.boolean()
  })
]);
external_exports.object({
  messageId: external_exports.string().describe(
    "Make sure this stays consistent across all message parts for this message in order to properly concatenate the message parts"
  ),
  updateParts: external_exports.array(
    external_exports.object({
      contentIndex: external_exports.number().min(0).describe(
        "The index of the content item in the message. This is used to concatenate the message parts properly. Make sure that the part type is consistent across all parts."
      ),
      part: agentMessageContentItemPartSchema.describe(
        "Part that will be concatenated to the previously existing content."
      )
    })
  ),
  createdAt: external_exports.date(),
  resync: external_exports.boolean().describe(
    "If true, the update will be handled like a full resync of the complete message. It will thus replace the complete previous message."
  )
}).strict().describe(
  "Update for the existing message with the user. To clear a message, just send a empty message with a new ID."
);
var DEFAULT_STARTING_PORT = 5746, DoubleIndexedKV = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.keyToValue.set(key, value), this.valueToKey.set(value, key);
  }
  getByKey(key) {
    return this.keyToValue.get(key);
  }
  getByValue(value) {
    return this.valueToKey.get(value);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, Registry = class {
  constructor(generateIdentifier) {
    this.generateIdentifier = generateIdentifier, this.kv = new DoubleIndexedKV();
  }
  register(value, identifier) {
    this.kv.getByValue(value) || (identifier || (identifier = this.generateIdentifier(value)), this.kv.set(identifier, value));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(value) {
    return this.kv.getByValue(value);
  }
  getValue(identifier) {
    return this.kv.getByKey(identifier);
  }
}, ClassRegistry = class extends Registry {
  constructor() {
    super((c) => c.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(value, options) {
    typeof options == "object" ? (options.allowProps && this.classToAllowedProps.set(value, options.allowProps), super.register(value, options.identifier)) : super.register(value, options);
  }
  getAllowedProps(value) {
    return this.classToAllowedProps.get(value);
  }
};
function valuesOfObj(record) {
  if ("values" in Object)
    return Object.values(record);
  const values = [];
  for (const key in record)
    record.hasOwnProperty(key) && values.push(record[key]);
  return values;
}
function find(record, predicate) {
  const values = valuesOfObj(record);
  if ("find" in values)
    return values.find(predicate);
  const valuesNotNever = values;
  for (let i = 0; i < valuesNotNever.length; i++) {
    const value = valuesNotNever[i];
    if (predicate(value))
      return value;
  }
}
function forEach(record, run2) {
  Object.entries(record).forEach(([key, value]) => run2(value, key));
}
function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
  for (let i = 0; i < record.length; i++) {
    const value = record[i];
    if (predicate(value))
      return value;
  }
}
var CustomTransformerRegistry = class {
  constructor() {
    this.transfomers = {};
  }
  register(transformer2) {
    this.transfomers[transformer2.name] = transformer2;
  }
  findApplicable(v) {
    return find(this.transfomers, (transformer2) => transformer2.isApplicable(v));
  }
  findByName(name) {
    return this.transfomers[name];
  }
}, getType = (payload) => Object.prototype.toString.call(payload).slice(8, -1), isUndefined = (payload) => typeof payload > "u", isNull = (payload) => payload === null, isPlainObject = (payload) => typeof payload != "object" || payload === null || payload === Object.prototype ? !1 : Object.getPrototypeOf(payload) === null ? !0 : Object.getPrototypeOf(payload) === Object.prototype, isEmptyObject = (payload) => isPlainObject(payload) && Object.keys(payload).length === 0, isArray = (payload) => Array.isArray(payload), isString = (payload) => typeof payload == "string", isNumber$1 = (payload) => typeof payload == "number" && !isNaN(payload), isBoolean = (payload) => typeof payload == "boolean", isRegExp = (payload) => payload instanceof RegExp, isMap = (payload) => payload instanceof Map, isSet = (payload) => payload instanceof Set, isSymbol = (payload) => getType(payload) === "Symbol", isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf()), isError = (payload) => payload instanceof Error, isNaNValue = (payload) => typeof payload == "number" && isNaN(payload), isPrimitive = (payload) => isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber$1(payload) || isString(payload) || isSymbol(payload), isBigint = (payload) => typeof payload == "bigint", isInfinite = (payload) => payload === 1 / 0 || payload === -1 / 0, isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView), isURL = (payload) => payload instanceof URL, escapeKey = (key) => key.replace(/\\./g, "\\\\."), stringifyPath = (path) => path.map(String).map(escapeKey).join("."), parsePath = (string) => {
  const result = [];
  let segment = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char === "\\\\" && string.charAt(i + 1) === ".") {
      segment += ".", i++;
      continue;
    }
    if (char === ".") {
      result.push(segment), segment = "";
      continue;
    }
    segment += char;
  }
  const lastSegment = segment;
  return result.push(lastSegment), result;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var simpleRules = [
  simpleTransformation(isUndefined, "undefined", () => null, () => {
  }),
  simpleTransformation(isBigint, "bigint", (v) => v.toString(), (v) => typeof BigInt < "u" ? BigInt(v) : (console.error("Please add a BigInt polyfill."), v)),
  simpleTransformation(isDate, "Date", (v) => v.toISOString(), (v) => new Date(v)),
  simpleTransformation(isError, "Error", (v, superJson) => {
    const baseError = {
      name: v.name,
      message: v.message
    };
    return superJson.allowedErrorProps.forEach((prop) => {
      baseError[prop] = v[prop];
    }), baseError;
  }, (v, superJson) => {
    const e = new Error(v.message);
    return e.name = v.name, e.stack = v.stack, superJson.allowedErrorProps.forEach((prop) => {
      e[prop] = v[prop];
    }), e;
  }),
  simpleTransformation(isRegExp, "regexp", (v) => "" + v, (regex) => {
    const body = regex.slice(1, regex.lastIndexOf("/")), flags = regex.slice(regex.lastIndexOf("/") + 1);
    return new RegExp(body, flags);
  }),
  simpleTransformation(
    isSet,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v) => [...v.values()],
    (v) => new Set(v)
  ),
  simpleTransformation(isMap, "map", (v) => [...v.entries()], (v) => new Map(v)),
  simpleTransformation((v) => isNaNValue(v) || isInfinite(v), "number", (v) => isNaNValue(v) ? "NaN" : v > 0 ? "Infinity" : "-Infinity", Number),
  simpleTransformation((v) => v === 0 && 1 / v === -1 / 0, "number", () => "-0", Number),
  simpleTransformation(isURL, "URL", (v) => v.toString(), (v) => new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var symbolRule = compositeTransformation((s, superJson) => isSymbol(s) ? !!superJson.symbolRegistry.getIdentifier(s) : !1, (s, superJson) => ["symbol", superJson.symbolRegistry.getIdentifier(s)], (v) => v.description, (_, a, superJson) => {
  const value = superJson.symbolRegistry.getValue(a[1]);
  if (!value)
    throw new Error("Trying to deserialize unknown symbol");
  return value;
}), constructorToName = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((obj, ctor) => (obj[ctor.name] = ctor, obj), {}), typedArrayRule = compositeTransformation(isTypedArray, (v) => ["typed-array", v.constructor.name], (v) => [...v], (v, a) => {
  const ctor = constructorToName[a[1]];
  if (!ctor)
    throw new Error("Trying to deserialize unknown typed array");
  return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
  return potentialClass != null && potentialClass.constructor ? !!superJson.classRegistry.getIdentifier(potentialClass.constructor) : !1;
}
var classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => ["class", superJson.classRegistry.getIdentifier(clazz.constructor)], (clazz, superJson) => {
  const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
  if (!allowedProps)
    return { ...clazz };
  const result = {};
  return allowedProps.forEach((prop) => {
    result[prop] = clazz[prop];
  }), result;
}, (v, a, superJson) => {
  const clazz = superJson.classRegistry.getValue(a[1]);
  if (!clazz)
    throw new Error(\`Trying to deserialize unknown class '\${a[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564\`);
  return Object.assign(Object.create(clazz.prototype), v);
}), customRule = compositeTransformation((value, superJson) => !!superJson.customTransformerRegistry.findApplicable(value), (value, superJson) => ["custom", superJson.customTransformerRegistry.findApplicable(value).name], (value, superJson) => superJson.customTransformerRegistry.findApplicable(value).serialize(value), (v, a, superJson) => {
  const transformer2 = superJson.customTransformerRegistry.findByName(a[1]);
  if (!transformer2)
    throw new Error("Trying to deserialize unknown custom value");
  return transformer2.deserialize(v);
}), compositeRules = [classRule, symbolRule, customRule, typedArrayRule], transformValue = (value, superJson) => {
  const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableCompositeRule)
    return {
      value: applicableCompositeRule.transform(value, superJson),
      type: applicableCompositeRule.annotation(value, superJson)
    };
  const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
  if (applicableSimpleRule)
    return {
      value: applicableSimpleRule.transform(value, superJson),
      type: applicableSimpleRule.annotation
    };
}, simpleRulesByAnnotation = {};
simpleRules.forEach((rule) => {
  simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = (json, type, superJson) => {
  if (isArray(type))
    switch (type[0]) {
      case "symbol":
        return symbolRule.untransform(json, type, superJson);
      case "class":
        return classRule.untransform(json, type, superJson);
      case "custom":
        return customRule.untransform(json, type, superJson);
      case "typed-array":
        return typedArrayRule.untransform(json, type, superJson);
      default:
        throw new Error("Unknown transformation: " + type);
    }
  else {
    const transformation = simpleRulesByAnnotation[type];
    if (!transformation)
      throw new Error("Unknown transformation: " + type);
    return transformation.untransform(json, superJson);
  }
}, getNthKey = (value, n) => {
  if (n > value.size)
    throw new Error("index out of bounds");
  const keys = value.keys();
  for (; n > 0; )
    keys.next(), n--;
  return keys.next().value;
};
function validatePath(path) {
  if (includes(path, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (includes(path, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (includes(path, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var getDeep = (object, path) => {
  validatePath(path);
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (isSet(object))
      object = getNthKey(object, +key);
    else if (isMap(object)) {
      const row = +key, type = +path[++i] == 0 ? "key" : "value", keyOfRow = getNthKey(object, row);
      switch (type) {
        case "key":
          object = keyOfRow;
          break;
        case "value":
          object = object.get(keyOfRow);
          break;
      }
    } else
      object = object[key];
  }
  return object;
}, setDeep = (object, path, mapper) => {
  if (validatePath(path), path.length === 0)
    return mapper(object);
  let parent = object;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (isArray(parent)) {
      const index = +key;
      parent = parent[index];
    } else if (isPlainObject(parent))
      parent = parent[key];
    else if (isSet(parent)) {
      const row = +key;
      parent = getNthKey(parent, row);
    } else if (isMap(parent)) {
      if (i === path.length - 2)
        break;
      const row = +key, type = +path[++i] == 0 ? "key" : "value", keyOfRow = getNthKey(parent, row);
      switch (type) {
        case "key":
          parent = keyOfRow;
          break;
        case "value":
          parent = parent.get(keyOfRow);
          break;
      }
    }
  }
  const lastKey = path[path.length - 1];
  if (isArray(parent) ? parent[+lastKey] = mapper(parent[+lastKey]) : isPlainObject(parent) && (parent[lastKey] = mapper(parent[lastKey])), isSet(parent)) {
    const oldValue = getNthKey(parent, +lastKey), newValue = mapper(oldValue);
    oldValue !== newValue && (parent.delete(oldValue), parent.add(newValue));
  }
  if (isMap(parent)) {
    const row = +path[path.length - 2], keyToRow = getNthKey(parent, row);
    switch (+lastKey == 0 ? "key" : "value") {
      case "key": {
        const newKey = mapper(keyToRow);
        parent.set(newKey, parent.get(keyToRow)), newKey !== keyToRow && parent.delete(keyToRow);
        break;
      }
      case "value": {
        parent.set(keyToRow, mapper(parent.get(keyToRow)));
        break;
      }
    }
  }
  return object;
};
function traverse(tree, walker2, origin = []) {
  if (!tree)
    return;
  if (!isArray(tree)) {
    forEach(tree, (subtree, key) => traverse(subtree, walker2, [...origin, ...parsePath(key)]));
    return;
  }
  const [nodeValue, children] = tree;
  children && forEach(children, (child, key) => {
    traverse(child, walker2, [...origin, ...parsePath(key)]);
  }), walker2(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
  return traverse(annotations, (type, path) => {
    plain = setDeep(plain, path, (v) => untransformValue(v, type, superJson));
  }), plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
  function apply(identicalPaths, path) {
    const object = getDeep(plain, parsePath(path));
    identicalPaths.map(parsePath).forEach((identicalObjectPath) => {
      plain = setDeep(plain, identicalObjectPath, () => object);
    });
  }
  if (isArray(annotations)) {
    const [root, other] = annotations;
    root.forEach((identicalPath) => {
      plain = setDeep(plain, parsePath(identicalPath), () => plain);
    }), other && forEach(other, apply);
  } else
    forEach(annotations, apply);
  return plain;
}
var isDeep = (object, superJson) => isPlainObject(object) || isArray(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
function addIdentity(object, path, identities) {
  const existingSet = identities.get(object);
  existingSet ? existingSet.push(path) : identities.set(object, [path]);
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
  const result = {};
  let rootEqualityPaths;
  return identitites.forEach((paths) => {
    if (paths.length <= 1)
      return;
    dedupe || (paths = paths.map((path) => path.map(String)).sort((a, b) => a.length - b.length));
    const [representativePath, ...identicalPaths] = paths;
    representativePath.length === 0 ? rootEqualityPaths = identicalPaths.map(stringifyPath) : result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
  }), rootEqualityPaths ? isEmptyObject(result) ? [rootEqualityPaths] : [rootEqualityPaths, result] : isEmptyObject(result) ? void 0 : result;
}
var walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
  const primitive = isPrimitive(object);
  if (!primitive) {
    addIdentity(object, path, identities);
    const seen = seenObjects.get(object);
    if (seen)
      return dedupe ? {
        transformedValue: null
      } : seen;
  }
  if (!isDeep(object, superJson)) {
    const transformed2 = transformValue(object, superJson), result2 = transformed2 ? {
      transformedValue: transformed2.value,
      annotations: [transformed2.type]
    } : {
      transformedValue: object
    };
    return primitive || seenObjects.set(object, result2), result2;
  }
  if (includes(objectsInThisPath, object))
    return {
      transformedValue: null
    };
  const transformationResult = transformValue(object, superJson), transformed = (transformationResult == null ? void 0 : transformationResult.value) ?? object, transformedValue = isArray(transformed) ? [] : {}, innerAnnotations = {};
  forEach(transformed, (value, index) => {
    if (index === "__proto__" || index === "constructor" || index === "prototype")
      throw new Error(\`Detected property \${index}. This is a prototype pollution risk, please remove it from your object.\`);
    const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
    transformedValue[index] = recursiveResult.transformedValue, isArray(recursiveResult.annotations) ? innerAnnotations[index] = recursiveResult.annotations : isPlainObject(recursiveResult.annotations) && forEach(recursiveResult.annotations, (tree, key) => {
      innerAnnotations[escapeKey(index) + "." + key] = tree;
    });
  });
  const result = isEmptyObject(innerAnnotations) ? {
    transformedValue,
    annotations: transformationResult ? [transformationResult.type] : void 0
  } : {
    transformedValue,
    annotations: transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
  };
  return primitive || seenObjects.set(object, result), result;
};
function getType2(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
function isArray2(payload) {
  return getType2(payload) === "Array";
}
function isPlainObject2(payload) {
  if (getType2(payload) !== "Object")
    return !1;
  const prototype = Object.getPrototypeOf(payload);
  return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
  propType === "enumerable" && (carry[key] = newVal), includeNonenumerable && propType === "nonenumerable" && Object.defineProperty(carry, key, {
    value: newVal,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function copy(target, options = {}) {
  if (isArray2(target))
    return target.map((item) => copy(item, options));
  if (!isPlainObject2(target))
    return target;
  const props = Object.getOwnPropertyNames(target), symbols = Object.getOwnPropertySymbols(target);
  return [...props, ...symbols].reduce((carry, key) => {
    if (isArray2(options.props) && !options.props.includes(key))
      return carry;
    const val = target[key], newVal = copy(val, options);
    return assignProp(carry, key, newVal, target, options.nonenumerable), carry;
  }, {});
}
var SuperJSON = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with \`null\`.
   */
  constructor({ dedupe = !1 } = {}) {
    this.classRegistry = new ClassRegistry(), this.symbolRegistry = new Registry((s) => s.description ?? ""), this.customTransformerRegistry = new CustomTransformerRegistry(), this.allowedErrorProps = [], this.dedupe = dedupe;
  }
  serialize(object) {
    const identities = /* @__PURE__ */ new Map(), output = walker(object, identities, this, this.dedupe), res = {
      json: output.transformedValue
    };
    output.annotations && (res.meta = {
      ...res.meta,
      values: output.annotations
    });
    const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
    return equalityAnnotations && (res.meta = {
      ...res.meta,
      referentialEqualities: equalityAnnotations
    }), res;
  }
  deserialize(payload) {
    const { json, meta } = payload;
    let result = copy(json);
    return meta != null && meta.values && (result = applyValueAnnotations(result, meta.values, this)), meta != null && meta.referentialEqualities && (result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities)), result;
  }
  stringify(object) {
    return JSON.stringify(this.serialize(object));
  }
  parse(string) {
    return this.deserialize(JSON.parse(string));
  }
  registerClass(v, options) {
    this.classRegistry.register(v, options);
  }
  registerSymbol(v, identifier) {
    this.symbolRegistry.register(v, identifier);
  }
  registerCustom(transformer2, name) {
    this.customTransformerRegistry.register({
      name,
      ...transformer2
    });
  }
  allowErrorProps(...props) {
    this.allowedErrorProps.push(...props);
  }
};
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
SuperJSON.serialize;
SuperJSON.deserialize;
SuperJSON.stringify;
SuperJSON.parse;
SuperJSON.registerClass;
SuperJSON.registerCustom;
SuperJSON.registerSymbol;
SuperJSON.allowErrorProps;
var transformer = SuperJSON;
const agentContext = createContext({
  availableAgents: [],
  connected: null,
  connectedUnavailable: !1,
  requiresUserAttention: !1,
  isInitialLoad: !0,
  connectAgent: () => {
  },
  disconnectAgent: () => {
  },
  refreshAgentList: () => {
  },
  isRefreshing: !1
});
function getAgentUniqueKey(agent) {
  return \`\${agent.name}|||\${agent.description}|||\${agent.port}\`;
}
function persistSelectedAgent(agent) {
  try {
    const uniqueKey = getAgentUniqueKey(agent);
    sessionStorage.setItem("stagewise_toolbar_selected_agent", uniqueKey), console.debug(\`[AgentProvider] Persisted selected agent: \${uniqueKey}\`);
  } catch (error) {
    console.warn("[AgentProvider] Failed to persist selected agent:", error);
  }
}
function getPersistedAgentKey() {
  try {
    return sessionStorage.getItem("stagewise_toolbar_selected_agent");
  } catch (error) {
    return console.warn("[AgentProvider] Failed to retrieve persisted agent:", error), null;
  }
}
function findPersistedAgent(availableAgents) {
  const persistedKey = getPersistedAgentKey();
  if (!persistedKey)
    return null;
  const matchingAgent = availableAgents.find(
    (agent) => getAgentUniqueKey(agent) === persistedKey
  );
  return matchingAgent && console.debug(
    \`[AgentProvider] Found persisted agent: \${matchingAgent.name} (port \${matchingAgent.port})\`
  ), matchingAgent || null;
}
async function checkAgentOnPort(port) {
  console.debug(\`[AgentProvider] Checking for agent on port \${port}...\`);
  try {
    const hostname = window.parent.location.hostname, response = await fetch(\`http://\${hostname}:\${port}/stagewise/info\`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      signal: AbortSignal.timeout(2e3)
      // 2 second timeout
    });
    if (response.ok) {
      const info = await response.json();
      if (info && typeof info.name == "string" && typeof info.description == "string" && info.capabilities)
        return console.debug(
          \`[AgentProvider] Found agent "\${info.name}" on port \${port}: \${info.description}\`
        ), {
          port,
          name: info.name,
          description: info.description,
          info
        };
      console.warn(
        \`[AgentProvider] Invalid agent info received on port \${port}\`
      );
    } else
      console.debug(
        \`[AgentProvider] HTTP \${response.status} response on port \${port}\`
      );
  } catch (error) {
    error instanceof Error && !error.message.includes("timeout") && console.debug(
      \`[AgentProvider] Error checking port \${port}: \${error.message}\`
    );
  }
  return null;
}
async function scanForAgents(startPort = DEFAULT_STARTING_PORT) {
  console.info(
    \`[stagewise] The following errors are expected ✅

They happen because we're searching for available agents...\`
  ), console.debug(
    \`[AgentProvider] Starting agent scan from port \${startPort}...\`
  );
  const agents = [];
  let currentPort = startPort, consecutiveFailures = 0;
  const maxConsecutiveFailures = 2, initialScanCount = 2, expandedScanCount = 1;
  for (let i = 0; i < initialScanCount; i++) {
    const agent = await checkAgentOnPort(currentPort);
    agent ? (agents.push(agent), consecutiveFailures = 0) : consecutiveFailures++, currentPort++;
  }
  for (; consecutiveFailures < maxConsecutiveFailures; ) {
    let foundInThisChunk = !1;
    for (let i = 0; i < expandedScanCount; i++) {
      const agent = await checkAgentOnPort(currentPort);
      agent && (agents.push(agent), foundInThisChunk = !0, consecutiveFailures = 0), currentPort++;
    }
    foundInThisChunk || consecutiveFailures++;
  }
  return console.debug(
    \`[AgentProvider] Scan complete! Found \${agents.length} total agents:\`,
    agents.map((a) => \`\${a.name} (port \${a.port})\`)
  ), agents;
}
function createWebSocketClient(port, onConnectionLost, onConnectionEstablished, onConnectionFailed, connectionStabilityTimeoutRef) {
  console.debug(
    \`[AgentProvider] Creating WebSocket client for port \${port}...\`
  );
  let isConnectionStable = !1, connectionFailedCalled = !1;
  const hostname = window.parent.location.hostname, wsClient = createWSClient({
    url: \`ws://\${hostname}:\${port}/stagewise/ws\`,
    onClose(cause) {
      console.debug(
        \`[AgentProvider] WebSocket closed for port \${port}: \${cause}\`
      ), connectionStabilityTimeoutRef.current && !isConnectionStable && (console.debug(
        \`[AgentProvider] Connection closed before stability timeout - clearing timeout for port \${port}\`
      ), clearTimeout(connectionStabilityTimeoutRef.current), connectionStabilityTimeoutRef.current = null, connectionFailedCalled || (console.debug(
        \`[AgentProvider] Unstable connection detected for port \${port} - calling onConnectionFailed\`
      ), connectionFailedCalled = !0, onConnectionFailed())), isConnectionStable && (console.debug(
        \`[AgentProvider] Stable connection lost for port \${port} - calling onConnectionLost\`
      ), onConnectionLost());
    },
    onOpen() {
      console.debug(
        \`[AgentProvider] WebSocket opened for port \${port} - starting stability check...\`
      ), connectionStabilityTimeoutRef.current && clearTimeout(connectionStabilityTimeoutRef.current), connectionStabilityTimeoutRef.current = setTimeout(() => {
        console.debug(
          \`[AgentProvider] Connection stability confirmed for port \${port}\`
        ), isConnectionStable = !0, connectionStabilityTimeoutRef.current = null, onConnectionEstablished();
      }, 200);
    }
  }), client = createTRPCClient({
    links: [
      wsLink({
        client: wsClient,
        transformer
      })
    ]
  });
  return console.debug(\`[AgentProvider] WebSocket client created for port \${port}\`), { client, wsClient };
}
function AgentProvider({ children }) {
  console.debug("[AgentProvider] AgentProvider component initializing...");
  const [availableAgents, setAvailableAgents] = useState([]), connected = useRef(null), connectedWsClient = useRef(
    null
  ), [connectedPort, setConnectedPort] = useState(null), [isRefreshing, setIsRefreshing] = useState(!1), [finishedInitialScan, setFinishedInitialScan] = useState(!1), [connectedUnavailable, setConnectedUnavailable] = useState(!1), [requiresUserAttention, setRequiresUserAttention] = useState(!1), [isInitialLoad, setIsInitialLoad] = useState(!0), previouslySelectedPortRef = useRef(null), retryIntervalRef = useRef(null), retryCountRef = useRef(0), isManualSelectionRef = useRef(!1), delayTimeoutRef = useRef(null), connectionStabilityTimeoutRef = useRef(null), startRetryConnection = useCallback(
    (port) => {
      console.debug(
        \`[AgentProvider] Starting retry connection logic for port \${port}...\`
      ), retryIntervalRef.current && (console.debug("[AgentProvider] Clearing existing retry interval..."), clearInterval(retryIntervalRef.current)), retryCountRef.current = 0, isManualSelectionRef.current ? console.debug(
        "[AgentProvider] Skipping retry setup - this was a manual selection change"
      ) : (console.debug(
        \`[AgentProvider] Setting up retry interval (every 2s) for port \${port} (max 5 retries)...\`
      ), retryIntervalRef.current = setInterval(() => {
        if (retryCountRef.current >= 5) {
          console.debug(
            \`[AgentProvider] Maximum retry attempts (5) reached for port \${port}, stopping retries\`
          ), retryIntervalRef.current && (clearInterval(retryIntervalRef.current), retryIntervalRef.current = void 0);
          return;
        }
        previouslySelectedPortRef.current === port && !connected.current && !isManualSelectionRef.current ? (retryCountRef.current++, console.debug(
          \`[AgentProvider] Retrying connection to agent on port \${port} (attempt \${retryCountRef.current}/5)...\`
        ), connectAgentInternal(port, !1)) : (console.debug(
          \`[AgentProvider] Stopping retry attempts for port \${port} (conditions no longer met)\`
        ), retryIntervalRef.current && (clearInterval(retryIntervalRef.current), retryIntervalRef.current = void 0));
      }, 2e3));
    },
    [connected]
  ), stopRetryConnection = useCallback(() => {
    retryIntervalRef.current && (console.debug("[AgentProvider] Stopping retry connection attempts..."), clearInterval(retryIntervalRef.current), retryIntervalRef.current = void 0);
  }, []), scanAgents = useCallback(async () => {
    console.debug(
      \`[AgentProvider] Starting agent scan... (finishedInitialScan: \${finishedInitialScan}, connected: \${!!connected.current})\`
    ), setIsRefreshing(!0);
    try {
      const agents = await scanForAgents(), previousCount = availableAgents.length, newCount = agents.length;
      if (previousCount !== newCount && console.debug(
        \`[AgentProvider] Available agents changed: \${previousCount} → \${newCount}\`
      ), setAvailableAgents(agents), console.debug(
        \`[AgentProvider] Scanned: \${agents.length} agents found, connected: \${!!connected.current}\`
      ), console.debug(
        \`[AgentProvider] finishedInitialScan: \${finishedInitialScan}, connected: \${!!connected.current}\`
      ), !finishedInitialScan && !connected.current && agents.length > 0) {
        const persistedAgent = findPersistedAgent(agents);
        persistedAgent ? (console.debug(
          \`[AgentProvider] Auto-connecting to persisted agent: \${persistedAgent.name} (port \${persistedAgent.port})\`
        ), connectAgentInternal(persistedAgent.port, !1)) : agents.length === 1 && (console.debug(
          \`[AgentProvider] Auto-connecting to single available agent: \${agents[0].name} (port \${agents[0].port})\`
        ), connectAgentInternal(agents[0].port, !1));
      }
      if (!connected && previouslySelectedPortRef.current && !isManualSelectionRef.current) {
        const previousAgent = agents.find(
          (agent) => agent.port === previouslySelectedPortRef.current
        );
        previousAgent ? (console.debug(
          \`[AgentProvider] Attempting to reconnect to previously selected agent: \${previousAgent.name} (port \${previousAgent.port})\`
        ), connectAgentInternal(previousAgent.port, !1)) : console.debug(
          \`[AgentProvider] Previously selected agent (port \${previouslySelectedPortRef.current}) is no longer available\`
        );
      }
    } catch (error) {
      console.error("[AgentProvider] Failed to scan for agents:", error);
    } finally {
      setIsRefreshing(!1), setFinishedInitialScan(!0), console.debug("[AgentProvider] Agent scan complete. Refreshing: false");
    }
  }, [connected, finishedInitialScan, availableAgents.length]), connectAgentInternal = useCallback(
    async (port, isManual = !1) => {
      console.debug(
        \`[AgentProvider] Attempting to connect to agent on port \${port} (manual: \${isManual})...\`
      ), previouslySelectedPortRef.current = port, isManualSelectionRef.current = isManual;
      try {
        if (stopRetryConnection(), connected.current) {
          console.debug(
            \`[AgentProvider] Cleaning up existing connection (port \${connectedPort})...\`
          ), connectionStabilityTimeoutRef.current && (clearTimeout(connectionStabilityTimeoutRef.current), connectionStabilityTimeoutRef.current = null);
          const wsClient2 = connectedWsClient.current;
          if (wsClient2)
            try {
              console.debug(
                "[AgentProvider] Explicitly closing existing WebSocket connection"
              ), wsClient2.close();
            } catch (error) {
              console.debug(
                "[AgentProvider] Error closing existing WebSocket:",
                error
              );
            }
          connected.current = null, connectedWsClient.current = null, setConnectedPort(null), await new Promise((resolve) => setTimeout(resolve, 100)), console.debug("[AgentProvider] WebSocket cleanup delay complete");
        }
        const { client, wsClient } = createWebSocketClient(
          port,
          () => {
            console.debug(
              \`[AgentProvider] Connection lost to agent on port \${port}\`
            ), setConnectedUnavailable(!0);
            const wsClient2 = connectedWsClient.current;
            if (wsClient2)
              try {
                console.debug(
                  "[AgentProvider] Explicitly closing WebSocket after connection loss"
                ), wsClient2.close();
              } catch (error) {
                console.debug(
                  "[AgentProvider] Error closing WebSocket after connection loss:",
                  error
                );
              }
            connected.current = null, connectedWsClient.current = null, setConnectedPort(null), console.info(
              "[stagewise] Searching for available agents after connection loss..."
            ), scanAgents(), isManualSelectionRef.current ? console.debug(
              "[AgentProvider] Not starting retry attempts (manual disconnection)"
            ) : (console.debug(
              \`[AgentProvider] Starting retry attempts for port \${port}...\`
            ), startRetryConnection(port));
          },
          () => {
            if (console.debug(
              \`[AgentProvider] Connection established to agent on port \${port}\`
            ), setConnectedPort(port), setConnectedUnavailable(!1), retryCountRef.current = 0, setIsInitialLoad(!1), !isManual) {
              const agentToPersist = availableAgents.find(
                (agent) => agent.port === port
              );
              agentToPersist && persistSelectedAgent(agentToPersist);
            }
            isManual ? console.debug(
              "[AgentProvider] Skipping agent list refresh for manual connection"
            ) : (console.debug(
              "[AgentProvider] Refreshing agent list after automatic reconnection..."
            ), scanAgents());
          },
          () => {
            console.debug(
              \`[AgentProvider] Connection failed for agent on port \${port} (unstable)\`
            ), connected.current = null, connectedWsClient.current = null, setConnectedPort(null), setConnectedUnavailable(!0), isManual || (console.debug(
              \`[AgentProvider] Starting retry attempts for unstable connection on port \${port}...\`
            ), startRetryConnection(port));
          },
          connectionStabilityTimeoutRef
        );
        connected.current = client, connectedWsClient.current = wsClient, console.debug(
          \`[AgentProvider] WebSocket client created for port \${port} - waiting for stability confirmation...\`
        );
      } catch (error) {
        console.error(
          \`[AgentProvider] Failed to connect to agent on port \${port}:\`,
          error
        ), connectionStabilityTimeoutRef.current && (clearTimeout(connectionStabilityTimeoutRef.current), connectionStabilityTimeoutRef.current = null);
        const wsClient = connectedWsClient.current;
        if (wsClient)
          try {
            console.debug(
              "[AgentProvider] Explicitly closing WebSocket after connection failure"
            ), wsClient.close();
          } catch (closeError) {
            console.debug(
              "[AgentProvider] Error closing WebSocket after connection failure:",
              closeError
            );
          }
        connected.current = null, connectedWsClient.current = null, setConnectedPort(null), setConnectedUnavailable(!0), isManual || (console.debug(
          \`[AgentProvider] Failed to connect to agent on port \${port}, starting retry attempts...\`
        ), startRetryConnection(port));
      }
    },
    [
      connectedPort,
      startRetryConnection,
      stopRetryConnection,
      scanAgents,
      availableAgents
    ]
  ), disconnectAgent = useCallback(() => {
    console.debug(
      \`[AgentProvider] Manual disconnect requested (current port: \${connectedPort})...\`
    ), stopRetryConnection(), connectionStabilityTimeoutRef.current && (clearTimeout(connectionStabilityTimeoutRef.current), connectionStabilityTimeoutRef.current = null);
    const wsClient = connectedWsClient.current;
    if (wsClient)
      try {
        console.debug(
          "[AgentProvider] Explicitly closing WebSocket for manual disconnect"
        ), wsClient.close();
      } catch (error) {
        console.debug(
          "[AgentProvider] Error closing WebSocket during manual disconnect:",
          error
        );
      }
    connected.current = null, connectedWsClient.current = null, setConnectedPort(null), setConnectedUnavailable(!1), previouslySelectedPortRef.current = null, isManualSelectionRef.current = !0, console.debug("[AgentProvider] Successfully disconnected from agent");
  }, [connectedPort, stopRetryConnection]), connectAgent = useCallback(
    (port) => {
      console.debug(
        \`[AgentProvider] Manual connection requested to port \${port}...\`
      );
      const agentToPersist = availableAgents.find(
        (agent) => agent.port === port
      );
      agentToPersist && persistSelectedAgent(agentToPersist), stopRetryConnection(), setTimeout(() => {
        console.debug(
          "[AgentProvider] Resetting manual selection flag to allow future auto-reconnects..."
        ), isManualSelectionRef.current = !1;
      }, 100), connectAgentInternal(port, !0);
    },
    [connectAgentInternal, stopRetryConnection, availableAgents]
  ), refreshAgentList = useCallback(() => {
    console.debug("[AgentProvider] Manual refresh of agent list requested..."), scanAgents();
  }, [scanAgents]);
  useEffect(() => {
    console.debug(
      \`[AgentProvider] State change - Available agents: \${availableAgents.length}\`,
      availableAgents.map((a) => \`\${a.name} (\${a.port})\`)
    );
  }, [availableAgents]), useEffect(() => {
    console.debug(
      \`[AgentProvider] Connection state changed: \${connected ? \`Connected to port \${connectedPort}\` : "Not connected"}\`
    );
  }, [connected, connectedPort]), useEffect(() => {
    console.debug(\`[AgentProvider] Refreshing state changed: \${isRefreshing}\`);
  }, [isRefreshing]), useEffect(() => {
    console.debug(
      "[AgentProvider] Component mounted, starting initial agent scan..."
    ), scanAgents();
  }, []), useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialLoad(!1);
    }, 1e3);
    return () => clearTimeout(timeout);
  }, []), useEffect(() => (connected.current && !connectedUnavailable ? (delayTimeoutRef.current && (clearTimeout(delayTimeoutRef.current), delayTimeoutRef.current = null), setRequiresUserAttention(!1)) : delayTimeoutRef.current || (delayTimeoutRef.current = setTimeout(() => {
    setRequiresUserAttention(!0), delayTimeoutRef.current = null;
  }, 500)), () => {
    delayTimeoutRef.current && (clearTimeout(delayTimeoutRef.current), delayTimeoutRef.current = null);
  }), [connectedPort, connectedUnavailable]), useEffect(() => () => {
    console.debug("[AgentProvider] Component unmounting, cleaning up..."), stopRetryConnection(), delayTimeoutRef.current && clearTimeout(delayTimeoutRef.current), connectionStabilityTimeoutRef.current && clearTimeout(connectionStabilityTimeoutRef.current);
    const wsClient = connectedWsClient.current;
    if (wsClient)
      try {
        console.debug(
          "[AgentProvider] Explicitly closing WebSocket connection on unmount"
        ), wsClient.close();
      } catch (error) {
        console.debug(
          "[AgentProvider] Error closing WebSocket on unmount:",
          error
        );
      }
    console.debug("[AgentProvider] Cleanup complete");
  }, [stopRetryConnection]);
  const agentGetter = useMemo(() => ({
    agent: connected.current
  }), [connectedPort]), providerInterface = useMemo(
    () => ({
      availableAgents,
      connected: connected.current ? {
        agent: connected.current,
        ...availableAgents.find((a) => a.port === connectedPort)
      } : null,
      connectedUnavailable,
      requiresUserAttention,
      isInitialLoad,
      connectAgent,
      disconnectAgent,
      refreshAgentList,
      isRefreshing
    }),
    [
      availableAgents,
      agentGetter,
      connectAgent,
      disconnectAgent,
      refreshAgentList,
      isRefreshing,
      connectedUnavailable,
      requiresUserAttention,
      isInitialLoad
    ]
  );
  return /* @__PURE__ */ jsx(agentContext.Provider, { value: providerInterface, children });
}
const useAgents = () => useContext(agentContext), agentMessagingContext = createContext({
  sendMessage: () => {
  },
  agentMessage: null
}), AgentMessagingProvider = ({
  children
}) => {
  const providerId = useMemo(() => Math.random().toString(36).substr(2, 9), []), agent = useAgents().connected, [agentMessage, setAgentMessage] = useState(null), processedUpdatesRef = useRef(/* @__PURE__ */ new Set()), handleMessageUpdate = useCallback(
    (update) => {
      var _a;
      const updateKey = \`\${update.messageId}-\${(_a = update.createdAt) == null ? void 0 : _a.getTime()}-\${update.resync}\`;
      if (!processedUpdatesRef.current.has(updateKey)) {
        if (processedUpdatesRef.current.add(updateKey), processedUpdatesRef.current.size > 100) {
          const entries = Array.from(processedUpdatesRef.current);
          processedUpdatesRef.current = new Set(entries.slice(-50));
        }
        setAgentMessage((prev) => {
          if (!prev || prev.id !== update.messageId || update.resync)
            return {
              id: update.messageId,
              contentItems: update.updateParts.sort((a, b) => a.contentIndex - b.contentIndex).map((part) => part.part)
            };
          {
            const newContentItems = [...prev.contentItems];
            for (const part of update.updateParts) {
              const existingItem = newContentItems[part.contentIndex];
              if (existingItem && part.part.type !== existingItem.type)
                throw new Error("Cannot update a part of a different type");
              if (existingItem && existingItem.type === "text" && part.part.type === "text") {
                const updatedItem = {
                  ...existingItem,
                  text: existingItem.text + part.part.text
                };
                newContentItems[part.contentIndex] = updatedItem;
              } else if (existingItem && existingItem.type === "image" && part.part.type === "image") {
                let updatedItem;
                existingItem.data && part.part.data ? updatedItem = {
                  ...existingItem,
                  data: existingItem.data + part.part.data
                } : updatedItem = part.part, newContentItems[part.contentIndex] = updatedItem;
              } else
                newContentItems[part.contentIndex] = part.part;
            }
            return {
              id: update.messageId,
              contentItems: newContentItems
            };
          }
        });
      }
    },
    [providerId]
  );
  useEffect(() => {
    if (agent !== null) {
      const subscription = agent.agent.messaging.getMessage.subscribe(
        void 0,
        {
          onData: (value) => {
            handleMessageUpdate(value);
          },
          onError: () => {
            setAgentMessage(null);
          }
        }
      );
      return () => {
        try {
          subscription.unsubscribe();
        } catch (error) {
          console.debug(
            "[AgentMessagingProvider] Error unsubscribing from messaging:",
            error
          );
        }
      };
    } else
      setAgentMessage(null);
  }, [agent, handleMessageUpdate]);
  const handleUserMessage = (message) => {
    agent == null || agent.agent.messaging.sendUserMessage.mutate(message);
  };
  return /* @__PURE__ */ jsx(
    agentMessagingContext.Provider,
    {
      value: { agentMessage, sendMessage: handleUserMessage },
      children
    }
  );
}, useAgentMessaging = () => useContext(agentMessagingContext);
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const CLASS_PART_SEPARATOR = "-", createClassGroupUtils = (config) => {
  const classMap = createClassMap(config), {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  return {
    getClassGroupId: (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      return classParts[0] === "" && classParts.length !== 1 && classParts.shift(), getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    },
    getConflictingClassGroupIds: (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      return hasPostfixModifier && conflictingClassGroupModifiers[classGroupId] ? [...conflicts, ...conflictingClassGroupModifiers[classGroupId]] : conflicts;
    }
  };
}, getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0)
    return classPartObject.classGroupId;
  const currentClassPart = classParts[0], nextClassPartObject = classPartObject.nextPart.get(currentClassPart), classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart)
    return classGroupFromNextClassPart;
  if (classPartObject.validators.length === 0)
    return;
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}, arbitraryPropertyRegex = /^\\[(.+)\\]$/, getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1], property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property)
      return "arbitrary.." + property;
  }
}, createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config, classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups)
    processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
  return classMap;
}, processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition == "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition == "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}, getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  return path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    currentClassPartObject.nextPart.has(pathPart) || currentClassPartObject.nextPart.set(pathPart, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  }), currentClassPartObject;
}, isThemeGetter = (func) => func.isThemeGetter, createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let cacheSize = 0, cache = /* @__PURE__ */ new Map(), previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value), cacheSize++, cacheSize > maxCacheSize && (cacheSize = 0, previousCache = cache, cache = /* @__PURE__ */ new Map());
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0)
        return value;
      if ((value = previousCache.get(key)) !== void 0)
        return update(key, value), value;
    },
    set(key, value) {
      cache.has(key) ? cache.set(key, value) : update(key, value);
    }
  };
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length, createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0, parenDepth = 0, modifierStart = 0, postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index)), modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      currentCharacter === "[" ? bracketDepth++ : currentCharacter === "]" ? bracketDepth-- : currentCharacter === "(" ? parenDepth++ : currentCharacter === ")" && parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart), baseClassName = stripImportantModifier(baseClassNameWithImportantModifier), hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier, maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR, parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
}, stripImportantModifier = (baseClassName) => baseClassName.endsWith(IMPORTANT_MODIFIER) ? baseClassName.substring(0, baseClassName.length - 1) : baseClassName.startsWith(IMPORTANT_MODIFIER) ? baseClassName.substring(1) : baseClassName, createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, !0]));
  return (modifiers) => {
    if (modifiers.length <= 1)
      return modifiers;
    const sortedModifiers = [];
    let unsortedModifiers = [];
    return modifiers.forEach((modifier) => {
      modifier[0] === "[" || orderSensitiveModifiers[modifier] ? (sortedModifiers.push(...unsortedModifiers.sort(), modifier), unsortedModifiers = []) : unsortedModifiers.push(modifier);
    }), sortedModifiers.push(...unsortedModifiers.sort()), sortedModifiers;
  };
}, createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
}), SPLIT_CLASSES_REGEX = /\\s+/, mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils, classGroupsInConflict = [], classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index], {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition, classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      if (classGroupId = getClassGroupId(baseClassName), !classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = !1;
    }
    const variantModifier = sortModifiers(modifiers).join(":"), modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier, classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId))
      continue;
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0, argument, resolvedValue, string = "";
  for (; index < arguments.length; )
    (argument = arguments[index++]) && (resolvedValue = toValue(argument)) && (string && (string += " "), string += resolvedValue);
  return string;
}
const toValue = (mix) => {
  if (typeof mix == "string")
    return mix;
  let resolvedValue, string = "";
  for (let k = 0; k < mix.length; k++)
    mix[k] && (resolvedValue = toValue(mix[k])) && (string && (string += " "), string += resolvedValue);
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils, cacheGet, cacheSet, functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    return configUtils = createConfigUtils(config), cacheGet = configUtils.cache.get, cacheSet = configUtils.cache.set, functionToCall = tailwindMerge, tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult)
      return cachedResult;
    const result = mergeClassList(classList, configUtils);
    return cacheSet(classList, result), result;
  }
  return function() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  return themeGetter.isThemeGetter = !0, themeGetter;
}, arbitraryValueRegex = /^\\[(?:(\\w[\\w-]*):)?(.+)\\]$/i, arbitraryVariableRegex = /^\\((?:(\\w[\\w-]*):)?(.+)\\)$/i, fractionRegex = /^\\d+\\/\\d+$/, tshirtUnitRegex = /^(\\d+(\\.\\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\\b(calc|min|max|clamp)\\(.+\\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\\(.+\\)$/, shadowRegex = /^(inset_)?-?((\\d+)?\\.?(\\d+)[a-z]+|0)_-?((\\d+)?\\.?(\\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\\(.+\\)$/, isFraction = (value) => fractionRegex.test(value), isNumber = (value) => !!value && !Number.isNaN(Number(value)), isInteger = (value) => !!value && Number.isInteger(Number(value)), isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1)), isTshirtSize = (value) => tshirtUnitRegex.test(value), isAny = () => !0, isLengthOnly = (value) => (
  // \`colorFunctionRegex\` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, \`hsl(0 0% 0%)\` would be classified as a length without this check.
  // I could also use lookbehind assertion in \`lengthUnitRegex\` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
), isNever = () => !1, isShadow = (value) => shadowRegex.test(value), isImage = (value) => imageRegex.test(value), isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value), isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever), isArbitraryValue = (value) => arbitraryValueRegex.test(value), isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly), isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber), isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever), isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage), isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow), isArbitraryVariable = (value) => arbitraryVariableRegex.test(value), isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength), isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName), isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition), isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize), isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage), isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, !0), getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  return result ? result[1] ? testLabel(result[1]) : testValue(result[2]) : !1;
}, getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = !1) => {
  const result = arbitraryVariableRegex.exec(value);
  return result ? result[1] ? testLabel(result[1]) : shouldMatchNoLabel : !1;
}, isLabelPosition = (label) => label === "position" || label === "percentage", isLabelImage = (label) => label === "image" || label === "url", isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size", isLabelLength = (label) => label === "length", isLabelNumber = (label) => label === "number", isLabelFamilyName = (label) => label === "family-name", isLabelShadow = (label) => label === "shadow", getDefaultConfig = () => {
  const themeColor = fromTheme("color"), themeFont = fromTheme("font"), themeText = fromTheme("text"), themeFontWeight = fromTheme("font-weight"), themeTracking = fromTheme("tracking"), themeLeading = fromTheme("leading"), themeBreakpoint = fromTheme("breakpoint"), themeContainer = fromTheme("container"), themeSpacing = fromTheme("spacing"), themeRadius = fromTheme("radius"), themeShadow = fromTheme("shadow"), themeInsetShadow = fromTheme("inset-shadow"), themeTextShadow = fromTheme("text-shadow"), themeDropShadow = fromTheme("drop-shadow"), themeBlur = fromTheme("blur"), themePerspective = fromTheme("perspective"), themeAspect = fromTheme("aspect"), themeEase = fromTheme("ease"), themeAnimate = fromTheme("animate"), scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue], scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"], scaleOverscroll = () => ["auto", "contain", "none"], scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing], scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()], scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue], scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue], scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue], scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue], scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()], scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()], scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue], scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }], scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }], scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength], scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ], scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength], scaleLineStyle = () => ["solid", "dashed", "dotted", "double"], scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition], scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ], scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue], scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue], scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue], scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => (overrideProperty(baseConfig, "cacheSize", cacheSize), overrideProperty(baseConfig, "prefix", prefix), overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName), overrideConfigProperties(baseConfig.theme, override.theme), overrideConfigProperties(baseConfig.classGroups, override.classGroups), overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups), overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers), overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers), mergeConfigProperties(baseConfig.theme, extend.theme), mergeConfigProperties(baseConfig.classGroups, extend.classGroups), mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups), mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers), mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers"), baseConfig), overrideProperty = (baseObject, overrideKey, overrideValue) => {
  overrideValue !== void 0 && (baseObject[overrideKey] = overrideValue);
}, overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject)
    for (const key in overrideObject)
      overrideProperty(baseObject, key, overrideObject[key]);
}, mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject)
    for (const key in mergeObject)
      mergeArrayProperties(baseObject, mergeObject, key);
}, mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  mergeValue !== void 0 && (baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue);
}, extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension == "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
function getElementAtPoint(x, y) {
  return window.parent.document.elementsFromPoint(
    x,
    y
  ).find(
    (element) => !element.closest("svg") && !element.closest("STAGEWISE-TOOLBAR") && isElementAtPoint(element, x, y)
  ) || window.parent.document.body;
}
const isElementAtPoint = (element, clientX, clientY) => {
  const boundingRect = element.getBoundingClientRect(), isInHorizontalBounds = clientX > boundingRect.left && clientX < boundingRect.left + boundingRect.width, isInVerticalBounds = clientY > boundingRect.top && clientY < boundingRect.top + boundingRect.height;
  return isInHorizontalBounds && isInVerticalBounds;
}, getXPathForElement = (element, useId) => {
  if (element.id && useId)
    return \`/*[@id="\${element.id}"]\`;
  let nodeElem = element;
  const parts = [];
  for (; nodeElem && Node.ELEMENT_NODE === nodeElem.nodeType; ) {
    let nbOfPreviousSiblings = 0, hasNextSiblings = !1, sibling = nodeElem.previousSibling;
    for (; sibling; )
      sibling.nodeType !== Node.DOCUMENT_TYPE_NODE && sibling.nodeName === nodeElem.nodeName && nbOfPreviousSiblings++, sibling = sibling.previousSibling;
    for (sibling = nodeElem.nextSibling; sibling; ) {
      if (sibling.nodeName === nodeElem.nodeName) {
        hasNextSiblings = !0;
        break;
      }
      sibling = sibling.nextSibling;
    }
    const prefix = nodeElem.prefix ? \`\${nodeElem.prefix}:\` : "", nth = nbOfPreviousSiblings || hasNextSiblings ? \`[\${nbOfPreviousSiblings + 1}]\` : "";
    parts.push(prefix + nodeElem.localName + nth), nodeElem = nodeElem.parentElement;
  }
  return parts.length ? \`/\${parts.reverse().join("/")}\` : "";
};
var HotkeyActions = /* @__PURE__ */ ((HotkeyActions2) => (HotkeyActions2[HotkeyActions2.ESC = 0] = "ESC", HotkeyActions2[HotkeyActions2.CTRL_ALT_C = 1] = "CTRL_ALT_C", HotkeyActions2))(HotkeyActions || {});
const hotkeyActionDefinitions = {
  0: {
    keyComboDefault: "Esc",
    keyComboMac: "esc",
    isEventMatching: (ev) => ev.code === "Escape"
  },
  1: {
    keyComboDefault: "Ctrl+Alt+C",
    keyComboMac: "⌘+⌥+C",
    isEventMatching: (ev) => ev.code === "KeyC" && (ev.ctrlKey || ev.metaKey) && ev.altKey
  }
}, customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "bg-image": [
        "bg-gradient",
        "bg-gradient-light-1",
        "bg-gradient-light-2",
        "bg-gradient-light-3"
      ]
    }
  }
});
function cn(...inputs) {
  return customTwMerge(clsx(inputs));
}
const generateId = (length = 16) => Math.random().toString(36).substring(2, length + 2), copyObject = (obj, depth = 0, maxDepth = 3) => {
  if (obj == null)
    return obj;
  if (typeof obj != "object")
    return typeof obj == "function" ? void 0 : obj;
  if (depth >= maxDepth)
    return Array.isArray(obj) ? [] : {};
  if (Array.isArray(obj))
    return obj.map((item) => copyObject(item, depth + 1, maxDepth)).filter((item) => item !== void 0);
  const result = {};
  for (const key of Object.getOwnPropertyNames(obj))
    if (!excludedProperties.has(key))
      try {
        const value = obj[key];
        if (typeof value == "function")
          continue;
        const copiedValue = copyObject(value, depth + 1, maxDepth);
        copiedValue !== void 0 && (result[key] = copiedValue);
      } catch {
        continue;
      }
  return result;
}, excludedProperties = /* @__PURE__ */ new Set([
  "constructor",
  "__proto__",
  "prototype",
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toString",
  "valueOf",
  "toLocaleString"
]), truncateString = (str, maxLength) => str.length <= maxLength ? str : \`\${str.substring(0, maxLength - 3)}...\`, truncateAttributes = (attributes) => {
  const result = {}, limitedEntries = Object.entries(attributes).slice(0, 100);
  for (const [key, value] of limitedEntries) {
    if (value == null) continue;
    (/* @__PURE__ */ new Set([
      "class",
      "id",
      "style",
      "name",
      "role",
      "href",
      "for",
      "placeholder",
      "alt",
      "title",
      "ariaLabel",
      "ariaRole",
      "ariaDescription"
    ])).has(key) ? result[key] = truncateString(value, 4096) : result[key] = truncateString(value, 256);
  }
  return result;
}, truncateOwnProperties = (properties) => {
  const result = {}, limitedEntries = Object.entries(properties).slice(0, 500);
  for (const [key, value] of limitedEntries)
    result[key] = truncateValue(value, 0, 2);
  return result;
}, truncateValue = (value, currentDepth, maxDepth) => {
  if (value == null) return value;
  if (currentDepth >= maxDepth)
    return Array.isArray(value) ? [] : typeof value == "object" ? {} : value;
  if (typeof value == "string")
    return truncateString(value, 1024);
  if (Array.isArray(value))
    return value.slice(0, 50).map((item) => truncateValue(item, currentDepth + 1, maxDepth));
  if (typeof value == "object") {
    const result = {}, limitedEntries = Object.entries(value).slice(0, 50);
    for (const [key, val] of limitedEntries)
      result[key] = truncateValue(val, currentDepth + 1, maxDepth);
    return result;
  }
  return value;
}, truncatePluginInfo = (pluginInfo) => pluginInfo.map((plugin) => ({
  pluginName: truncateString(plugin.pluginName, 128),
  content: truncateString(plugin.content, 4096)
})), getSelectedElementInfo = (element, callDepth) => {
  const boundingRect = element.getBoundingClientRect(), rawAttributes = element.getAttributeNames().reduce(
    (acc, name) => {
      const value = element.getAttribute(name);
      return value !== null && (acc[name] = value), acc;
    },
    {}
  ), rawOwnProperties = Object.getOwnPropertyNames(element).filter((prop) => !excludedProperties.has(prop)).reduce(
    (acc, prop) => {
      try {
        const value = element[prop];
        typeof value != "function" && (acc[prop] = copyObject(value, 0, 2));
      } catch {
      }
      return acc;
    },
    {}
  );
  return {
    nodeType: truncateString(element.nodeName, 96),
    xpath: truncateString(getXPathForElement(element, !1), 1024),
    attributes: truncateAttributes(rawAttributes),
    textContent: truncateString(element.textContent || "", 512),
    ownProperties: truncateOwnProperties(rawOwnProperties),
    boundingClientRect: {
      top: boundingRect.top,
      left: boundingRect.left,
      height: boundingRect.height,
      width: boundingRect.width
    },
    parent: element.parentElement && (callDepth ?? 0) < 10 ? getSelectedElementInfo(element.parentElement, (callDepth ?? 0) + 1) : null,
    pluginInfo: truncatePluginInfo([])
  };
}, collectUserMessageMetadata = (selectedElements) => ({
  currentUrl: truncateString(window.parent.location.href, 1024),
  currentTitle: truncateString(window.parent.document.title, 256),
  currentZoomLevel: 0,
  devicePixelRatio: window.parent.devicePixelRatio,
  userAgent: truncateString(window.parent.navigator.userAgent, 1024),
  locale: truncateString(window.parent.navigator.language, 64),
  selectedElements,
  viewportResolution: {
    width: window.parent.innerWidth,
    height: window.parent.innerHeight
  }
}), AppContext = createContext(null), STORAGE_KEY$1 = "stgws:companion";
function loadStateFromStorage() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY$1);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return console.error("Failed to load state from storage:", error), {};
  }
}
function saveStateToStorage(state) {
  try {
    sessionStorage.setItem(STORAGE_KEY$1, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save state to storage:", error);
  }
}
function AppStateProvider({ children }) {
  const [state, setState] = useState(() => {
    const storedState = loadStateFromStorage();
    return {
      appBlockRequestList: [],
      appUnblockRequestList: [],
      lastBlockRequestNumber: 0,
      lastUnblockRequestNumber: 0,
      isMainAppBlocked: !1,
      toolbarBoxRef: createRef(),
      minimized: storedState.minimized ?? !1,
      requestMainAppBlock: () => 0,
      // These will be replaced by the actual implementations
      requestMainAppUnblock: () => 0,
      discardMainAppBlock: () => {
      },
      discardMainAppUnblock: () => {
      },
      setToolbarBoxRef: () => {
      },
      unsetToolbarBoxRef: () => {
      },
      minimize: () => {
      },
      expand: () => {
      }
    };
  });
  useEffect(() => {
    saveStateToStorage({
      minimized: state.minimized
    });
  }, [state.minimized]);
  const requestMainAppBlock = useCallback(() => {
    let newHandleValue = 0;
    return setState((prev) => (newHandleValue = prev.lastBlockRequestNumber + 1, {
      ...prev,
      appBlockRequestList: [...prev.appBlockRequestList, newHandleValue],
      lastBlockRequestNumber: newHandleValue,
      isMainAppBlocked: prev.appUnblockRequestList.length === 0
    })), newHandleValue;
  }, []), requestMainAppUnblock = useCallback(() => {
    let newHandleValue = 0;
    return setState((prev) => (newHandleValue = prev.lastUnblockRequestNumber + 1, {
      ...prev,
      appUnblockRequestList: [...prev.appUnblockRequestList, newHandleValue],
      lastUnblockRequestNumber: newHandleValue,
      isMainAppBlocked: !1
    })), newHandleValue;
  }, []), discardMainAppBlock = useCallback((handle) => {
    setState((prev) => {
      const newBlockRequestList = prev.appBlockRequestList.filter(
        (h) => h !== handle
      );
      return {
        ...prev,
        appBlockRequestList: newBlockRequestList,
        isMainAppBlocked: newBlockRequestList.length > 0 && prev.appUnblockRequestList.length === 0
      };
    });
  }, []), discardMainAppUnblock = useCallback((handle) => {
    setState((prev) => {
      const newUnblockRequestList = prev.appUnblockRequestList.filter(
        (h) => h !== handle
      );
      return {
        ...prev,
        appUnblockRequestList: newUnblockRequestList,
        isMainAppBlocked: prev.appBlockRequestList.length > 0 && newUnblockRequestList.length === 0
      };
    });
  }, []), setToolbarBoxRef = useCallback((ref) => {
    setState((prev) => ({ ...prev, toolbarBoxRef: ref }));
  }, []), unsetToolbarBoxRef = useCallback(() => {
    setState((prev) => ({ ...prev, toolbarBoxRef: createRef() }));
  }, []), minimize = useCallback(() => {
    setState((prev) => ({ ...prev, minimized: !0 }));
  }, []), expand = useCallback(() => {
    setState((prev) => ({ ...prev, minimized: !1 }));
  }, []), value = {
    requestMainAppBlock,
    requestMainAppUnblock,
    discardMainAppBlock,
    discardMainAppUnblock,
    isMainAppBlocked: state.isMainAppBlocked,
    toolbarBoxRef: state.toolbarBoxRef,
    setToolbarBoxRef,
    unsetToolbarBoxRef,
    minimized: state.minimized,
    minimize,
    expand
  };
  return /* @__PURE__ */ jsx(AppContext.Provider, { value, children });
}
function useAppState() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppState must be used within an AppStateProvider");
  return context;
}
const agentAvailabilityContext = createContext({
  isAvailable: !1,
  error: AgentAvailabilityError.NO_CONNECTION
});
function AgentAvailabilityProvider({
  children
}) {
  const agent = useAgents().connected, [availability, setAvailability] = useState({
    isAvailable: !1,
    error: AgentAvailabilityError.NO_CONNECTION
  });
  return useEffect(() => {
    if (agent !== null) {
      const subscription = agent.agent.availability.getAvailability.subscribe(
        void 0,
        {
          onData: (value) => {
            setAvailability(value);
          },
          onError: () => {
            setAvailability({
              isAvailable: !1,
              error: AgentAvailabilityError.NO_CONNECTION
            });
          }
        }
      );
      return () => {
        try {
          subscription.unsubscribe();
        } catch (error) {
          console.debug(
            "[AgentAvailabilityProvider] Error unsubscribing from availability:",
            error
          );
        }
      };
    } else
      setAvailability({
        isAvailable: !1,
        error: AgentAvailabilityError.NO_CONNECTION
      });
  }, [agent]), /* @__PURE__ */ jsx(agentAvailabilityContext.Provider, { value: availability, children });
}
const useAgentAvailability = () => useContext(agentAvailabilityContext), STORAGE_KEY = "stagewise_toolbar_open_panels", loadPersistedState = () => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return console.warn("[PanelsProvider] Failed to load persisted state:", error), {};
  }
}, savePersistedState = (state) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("[PanelsProvider] Failed to save persisted state:", error);
  }
}, PanelsContext = createContext({
  isSettingsOpen: !1,
  openSettings: () => null,
  closeSettings: () => null,
  isChatOpen: !1,
  openChat: () => null,
  closeChat: () => null,
  openPluginName: null,
  openPlugin: () => null,
  closePlugin: () => null,
  isAgentConnectivityOpen: !1,
  openAgentConnectivity: () => null,
  closeAgentConnectivity: () => null
}), PanelsProvider = ({
  children
}) => {
  const { minimized } = useAppState(), persistedState = useMemo(() => loadPersistedState(), []), [isSettingsOpenInternal, setIsSettingsOpen] = useState(
    persistedState.isSettingsOpen ?? !1
  ), [isChatOpenInternal, setIsChatOpen] = useState(
    persistedState.isChatOpen ?? !1
  ), [openPluginInternal, setOpenPlugin] = useState(
    persistedState.openPlugin ?? null
  ), {
    connected,
    connectedUnavailable,
    requiresUserAttention,
    isInitialLoad
  } = useAgents(), availabilityStatus = useAgentAvailability(), [
    agentConnectivityManuallyDismissed,
    setAgentConnectivityManuallyDismissed
  ] = useState(persistedState.agentConnectivityManuallyDismissed ?? !1);
  useEffect(() => {
    savePersistedState({
      isSettingsOpen: isSettingsOpenInternal,
      isChatOpen: isChatOpenInternal,
      openPlugin: openPluginInternal,
      agentConnectivityManuallyDismissed
    });
  }, [
    isSettingsOpenInternal,
    isChatOpenInternal,
    openPluginInternal,
    agentConnectivityManuallyDismissed
  ]), useEffect(() => {
    connected && !connectedUnavailable && availabilityStatus.isAvailable && setAgentConnectivityManuallyDismissed(!1);
  }, [connected, connectedUnavailable, availabilityStatus]);
  const isAgentConnectivityOpen = useMemo(() => {
    const result = (requiresUserAttention || !availabilityStatus.isAvailable) && !agentConnectivityManuallyDismissed && !minimized && !isInitialLoad;
    return console.debug("[PanelsProvider] isAgentConnectivityOpen calculation:", {
      requiresUserAttention,
      availabilityStatus: availabilityStatus.isAvailable,
      agentConnectivityManuallyDismissed,
      minimized,
      isInitialLoad,
      result
    }), result;
  }, [
    requiresUserAttention,
    agentConnectivityManuallyDismissed,
    minimized,
    isInitialLoad,
    availabilityStatus
  ]), isSettingsOpen = useMemo(() => !requiresUserAttention && availabilityStatus.isAvailable && isSettingsOpenInternal && !minimized && !isInitialLoad, [
    requiresUserAttention,
    availabilityStatus,
    isSettingsOpenInternal,
    minimized,
    isInitialLoad
  ]), isChatOpen = useMemo(() => !requiresUserAttention && availabilityStatus.isAvailable && isChatOpenInternal && !minimized && !isInitialLoad, [
    requiresUserAttention,
    availabilityStatus,
    isChatOpenInternal,
    minimized,
    isInitialLoad
  ]), openPluginName = useMemo(() => !requiresUserAttention && availabilityStatus.isAvailable && !isInitialLoad && !minimized ? openPluginInternal : null, [
    requiresUserAttention,
    availabilityStatus,
    openPluginInternal,
    minimized,
    isInitialLoad
  ]);
  return /* @__PURE__ */ jsx(
    PanelsContext.Provider,
    {
      value: {
        isSettingsOpen,
        openSettings: () => setIsSettingsOpen(!0),
        closeSettings: () => setIsSettingsOpen(!1),
        isChatOpen,
        openChat: () => setIsChatOpen(!0),
        closeChat: () => setIsChatOpen(!1),
        openPluginName,
        openPlugin: (pluginName) => setOpenPlugin(pluginName),
        closePlugin: () => setOpenPlugin(null),
        isAgentConnectivityOpen,
        openAgentConnectivity: () => setAgentConnectivityManuallyDismissed(!1),
        closeAgentConnectivity: () => setAgentConnectivityManuallyDismissed(!0)
      },
      children
    }
  );
}, usePanels = () => useContext(PanelsContext), PluginContext = createContext({
  plugins: [],
  toolbarContext: {
    sendPrompt: () => {
    },
    mainAppWindow: window.parent
  }
});
function PluginProvider({ children }) {
  const { config } = useConfig(), { sendMessage } = useAgentMessaging(), { openChat } = usePanels(), plugins = (config == null ? void 0 : config.plugins) || [], toolbarContext = useMemo(() => ({
    sendPrompt: async (prompt) => {
      const userMessage = {
        ...prompt,
        id: generateId(),
        createdAt: /* @__PURE__ */ new Date(),
        sentByPlugin: !0,
        metadata: collectUserMessageMetadata([]),
        pluginContent: {}
      };
      sendMessage(userMessage), openChat();
    },
    mainAppWindow: window.parent
  }), [sendMessage]), pluginsLoadedRef = useRef(!1);
  useEffect(() => {
    pluginsLoadedRef.current || (pluginsLoadedRef.current = !0, plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onLoad) == null || _a.call(plugin, toolbarContext);
    }));
  }, [plugins, toolbarContext]);
  const value = useMemo(() => ({
    plugins,
    toolbarContext
  }), [plugins, toolbarContext]);
  return /* @__PURE__ */ jsx(PluginContext.Provider, { value, children });
}
function usePlugins() {
  return useContext(PluginContext);
}
const glassyBoxClassName = \`
  z-0
  before:absolute before:content-normal before:size-full before:inset-0 before:border before:border-zinc-950/20 before:ring-inset before:ring-[1.5px] before:ring-white/30 before:backdrop-blur-sm before:-z-20 before:bg-white/85 before:rounded-[inherit]
  after:absolute after:pointer-events-none after:rounded-[inherit] after:block after:size-full after:inset-0 after:shadow-glass
\`;
function Glassy({
  className,
  as,
  ref,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    as || "div",
    {
      ref,
      className: cn(glassyBoxClassName, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "-z-10 pointer-events-none absolute inset-0 flex size-full items-center justify-center overflow-hidden rounded-[inherit]", children: /* @__PURE__ */ jsx("div", { className: "size-full min-h-48 min-w-48 bg-[image:var(--glass-texture)] bg-center bg-cover bg-no-repeat opacity-30" }) }),
        children
      ]
    }
  );
}
function Panel({
  children,
  alwaysFullHeight = !1,
  className
}) {
  return /* @__PURE__ */ jsx(
    Glassy,
    {
      as: "section",
      className: cn(
        "pointer-events-auto flex max-h-full min-h-48 flex-col items-stretch justify-start rounded-3xl",
        alwaysFullHeight && "h-full",
        className
      ),
      children
    }
  );
}
function PanelHeader({
  title,
  description,
  iconArea,
  actionArea,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "flex w-auto flex-row items-center justify-between gap-2 rounded-t-[inherit] border-zinc-500/15 border-b bg-gradient-to-b from-transparent via-transparent to-white/5 pt-3 pr-3 pb-2 pl-4 text-foreground",
        className
      ),
      children: [
        iconArea,
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col", children: [
          title && /* @__PURE__ */ jsx("h3", { className: "font-medium text-lg", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground/70", children: description })
        ] }),
        actionArea,
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute right-0 bottom-0 left-0 h-px w-full bg-gradient-to-r from-white/10 via-white/30 to-white/10" })
      ]
    }
  );
}
function PanelContent({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: cn(
        "flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-4 text-foreground",
        className
      ),
      children
    }
  );
}
function PanelFooter({
  children,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className: cn(
        "flex flex-row items-end justify-end gap-2 rounded-b-[inherit] border-zinc-500/15 border-t bg-white/5 pt-2 pr-3 pb-3 pl-4 text-foreground/80 text-sm",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 left-0 h-px w-full bg-gradient-to-r from-zinc-100/10 via-zinc-100/30 to-zinc-100/10" }),
        children
      ]
    }
  );
}
function Button({
  children,
  variant = "primary",
  size = "md",
  glassy = !0,
  asChild,
  className,
  ...props
}) {
  return asChild ? /* @__PURE__ */ jsx("button", { ...props, className: "cursor-pointer", children }) : /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: cn(
        "flex h-12 cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-medium text-sm text-white",
        size === "sm" && "h-8",
        size === "md" && "h-12",
        size === "lg" && "h-16",
        variant === "primary" && "bg-blue-600",
        variant === "secondary" && "bg-black/5 text-zinc-950/70",
        variant === "outline" && "border border-zinc-500 bg-white text-blue-500",
        variant === "ghost" && "bg-transparent text-blue-500",
        glassy && "origin-center rounded-xl border border-black/10 ring-1 ring-white/20 transition-all duration-150 ease-out after:absolute after:inset-0 after:size-full after:content-normal after:rounded-[inherit] after:bg-gradient-to-b after:from-white/5 after:to-white/0 after:transition-colors after:duration-150 after:ease-out hover:border-black/5 hover:shadow-xs hover:after:from-blue-50/20 hover:after:to-blue-50/15 active:scale-[98%] active:border-black/15 active:shadow-inset active:after:from-transparent active:after:to-transparent disabled:pointer-events-none disabled:bg-black/5 disabled:text-foreground/60 disabled:opacity-30",
        className
      ),
      type: "submit",
      children
    }
  );
}
const falsyToString = (value) => typeof value == "boolean" ? \`\${value}\` : value === 0 ? "0" : value, cx = clsx, cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config == null ? void 0 : config.variants) == null) return cx(base, props == null ? void 0 : props.class, props == null ? void 0 : props.className);
  const { variants, defaultVariants } = config, getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props == null ? void 0 : props[variant], defaultVariantProp = defaultVariants == null ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  }), propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    return value === void 0 || (acc[key] = value), acc;
  }, {}), getCompoundVariantClassNames = config == null || (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props == null ? void 0 : props.class, props == null ? void 0 : props.className);
};
export {
  AgentStateType as A,
  Button as B,
  ConfigProvider as C,
  Glassy as G,
  HotkeyActions as H,
  PanelsProvider as P,
  useAppState as a,
  usePlugins as b,
  useAgentMessaging as c,
  usePanels as d,
  collectUserMessageMetadata as e,
  generateId as f,
  getSelectedElementInfo as g,
  AgentProvider as h,
  AgentAvailabilityProvider as i,
  AgentMessagingProvider as j,
  PluginProvider as k,
  hotkeyActionDefinitions as l,
  cn as m,
  getElementAtPoint as n,
  getXPathForElement as o,
  useAgentAvailability as p,
  glassyBoxClassName as q,
  Panel as r,
  PanelHeader as s,
  PanelContent as t,
  useAgents as u,
  PanelFooter as v,
  cva as w,
  AgentAvailabilityError as x,
  AppStateProvider as y
};
`,"index.js":`import * as React from "react";
import React__default, { createContext, useState, useEffect, useContext, useCallback, useMemo, useRef, useLayoutEffect, forwardRef, Fragment, isValidElement, cloneElement, createElement, useId as useId$1, useReducer, useSyncExternalStore, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { A as AgentStateType, u as useAgents, a as useAppState, b as usePlugins, c as useAgentMessaging, d as usePanels, e as collectUserMessageMetadata, g as getSelectedElementInfo, f as generateId, C as ConfigProvider, h as AgentProvider, i as AgentAvailabilityProvider, j as AgentMessagingProvider, P as PanelsProvider, k as PluginProvider, H as HotkeyActions, l as hotkeyActionDefinitions, m as cn, n as getElementAtPoint, o as getXPathForElement, p as useAgentAvailability, G as Glassy, q as glassyBoxClassName, r as Panel, s as PanelHeader, t as PanelContent, v as PanelFooter, B as Button, w as cva, x as AgentAvailabilityError, y as AppStateProvider } from "index-DsC5zpes.js";
import * as ReactDOM from "react-dom";
import { createPortal, flushSync } from "react-dom";
import config from "@stagewise/toolbar/config";
const appStyle = '/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:""}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-900:oklch(40.8% .123 38.172);--color-yellow-500:oklch(79.5% .184 86.047);--color-lime-200:oklch(93.8% .127 124.321);--color-green-300:oklch(87.1% .15 154.449);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-emerald-500:oklch(69.6% .17 162.48);--color-teal-300:oklch(85.5% .138 181.071);--color-teal-400:oklch(77.7% .152 181.912);--color-teal-500:oklch(70.4% .14 182.503);--color-cyan-200:oklch(91.7% .08 205.041);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-300:oklch(82.8% .111 230.318);--color-sky-500:oklch(68.5% .169 237.323);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-950:oklch(28.2% .091 267.935);--color-indigo-200:oklch(87% .065 274.039);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-500:oklch(58.5% .233 277.117);--color-violet-400:oklch(70.2% .183 293.541);--color-violet-600:oklch(54.1% .281 293.009);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-500:oklch(62.7% .265 303.9);--color-fuchsia-400:oklch(74% .238 322.16);--color-fuchsia-700:oklch(51.8% .253 323.949);--color-pink-500:oklch(65.6% .241 354.308);--color-rose-300:oklch(81% .117 11.638);--color-rose-600:oklch(58.6% .253 17.585);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-900:oklch(21% .006 285.885);--color-zinc-950:oklch(14.1% .005 285.823);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-3xl:1.5rem;--shadow-lg:0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;--drop-shadow-xl:0 9px 7px #0000001a;--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-foreground:var(--color-zinc-950);--color-muted-foreground:var(--color-zinc-700);--color-border:var(--color-zinc-500);--ease-spring:linear(0,-.00946,.0219,.0793,.152,.237,.326,.419,.509,.597,.68,.755,.823,.882,.933,.976,1.01,1.04,1.06,1.07,1.08,1.09,1.09,1.09,1.09,1.08,1.07,1.07,1.06,1.05,1.04,1.03,1.03,1.02,1.01,1.01,1,1,.998,.996,.994,.993,.992,.992,.992,.992,.992,.993,.994,.994,.995,.996,.997,.997,.998,.998,.999,.999,1);--ease-spring-soft:linear(0,-.0531,.117,.293,.46,.61,.738,.838,.913,.965,1,1.02,1.03,1.03,1.03,1.03,1.03,1.02,1.01,1.01,1.01,1,1,1,1);--glass-texture:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAHCEAQAAADJ6qOsAAAgAElEQVR42u29S5Ijy3KYDUATbUDUlShSGmjU3aeO9VzDfwV3oVwFOS47dap7B5IZL0WZ5pRd/IMqHGRG+Ns9XpkOs7auAhJZQMbL4wvPL67//b//+//vcrlc7vfL7nG/X1+fP2+fj3tO9777d+i47ev75++/bl572Xy1zc/3XzY/f7teP366Xi+X6/X+9eP/j3+32/Nn6N/H+64/Hmd7PAc9ymuNXYPL5f61Lpf7F+ic//N/3v98CXz8j/9x/Yf9d7n+/Pztx/Oo6/vn/79/PvH2+fvbx+e+/rY59vX5XT7qFl2etnoB12Xddy/Lbvv7pqxf97/X/1+vl9fNz9Dr5XPf93/n/vn7/fvzM3zU60edvt8vL5tr8cv9/vHz/X7/9te/fvy8/b987n6/vj/f80fb/93ahref4/H753Pf9n/jcrnfn/V787m/7N/38f9f/hJbv7ePr18/6vqmbH9u6v2PzfN/1PfP5942rz3q/m9lHdmc6xWqS5+PV6rPYB7fpX0L/Tvex0raa8w57r9K/g7+866vr46B2/b1DWuf9O8ff6so05f9+Z9t4XK5f9u3lY/6v/330S7vX+p2iv/8v/4X3Db+w3+4/gPUhvfX5NGv78b+H3CZfdR/bb8g6zPYcv0Gl+v9K/DsF+C4Zv0H9bgRYcD3ZwfPD0JcUKEZ0DzHYQ3Ie6GoQXobEEV+X/jYukH0fci+4z4YKL/LR70iBhv3c82vAtFJ8IOQ/BzbgNTarrCgrrz+m/L5RXp9y7+BH/PROXPBKxzMXi5/8zfPgL9VWRoeL3Sdx/tPKkia5RHZL/f7zHBfX9atosxepHVj36Y//lZxzFvE5I6aiEEBX2wZYX38PsiJ+tuycf0xuTHXi38YUR9vgov93XMBW7wGD87lILSlJ3gD0HbEtlldXMeGvfa3fzumAsk7LPlgE91he8+nKdfi9e/WwVxB4d6QQPwdC4CooEYXNKHB1O/ayRAVeA2ov1+gwWYzkfpFUq71c3K6E1nX5df2+ho9YFuO8/zcMsj29+9lkPBBR6mJBRVwPR7/+T/jfX/EtYlqixjtdwZOP4BnB0MIIMCiO9MnzYpoWNrXvAVBdCi/Y5X/fr/+KJdOykArokOkP+NH5Rkx2PzjPz6RKv49HzOaPwacF0WX9t17feDAutf1oj+/lF5pOvr9a9BM/SOwgZYzOIIVOduUD5xQ/b7+xAabVo+fPz/qOt+e62WKTdD1EvBRrBTrNb7vGXUcOjFu04qdE2Y+SN6OMXSdfrbJjzYgab/9xwZ4qS6qvUYHztMEWLLKvx9UtB10RGBlWSbEByQfvYIaVh+KNSJCh2f1gvf92npGHh0YaMvNSqWwerMJ8l99A9D1nc8t+cg9rGfR8mVCSecqJRFUB9tymZAqE6Z8X+r318uE2zynlQYIfbBET3h6DJrYMmFUm9ZMmKzXXLu8D1Esjlx+5nl+gd+H9/Ga/lcacNnHdU0d7b/KczNUPTA3yxo8yQvL0nCfg1Hx+hs0w7jf90l8+4RumF7VgZcm+LB3dND3nWSZ8DPxE14m3H/u/e/2nKwxFAubvRZBtmaZkCAR9Y0BXH2mgixvp8afB1omfH6W2SgWPUDWbfp+ly0Tcn8LqEPfo/sKaf/xqGetVyksgbfmZ2MNeNGWF0G13qhJT/H7D4g6bykWFlyVr/2n/wT3/y3bjZVoWyZj9bXDx+lZlglvlgu5v8PJTx/iGmx5146/0y3/SQZY68yGWiYc8ZDRuGqZcIJZdExnwF+LmGVC6V01m4nAb5//v1FtFJsJ00QLT3aP6lQtFOvxfy+KBc3sPwOrb7JBencX8/d6khr+aLZMKA1kKIqlqz/+ZUILxdLd1SZ/H7RMyI2RFop1vT6DrP/4H/d3xnr7wGJirFomjAzwVqNYt21j1xdGSST6BFbWWUzR6N6kMwwo6KIH0/2M14qP6fLYz/JbUKx/+qfy1lbtMuFjwKHurOKXna0NqucaPrOk8N1eF+DBCjjPG15vPsgRHUzxye4amoW/B6JYsr/fsky5PCymfF8kx0tJSATFmmVSM4po9ZpglpMc4bd8L/ryH1Bgte3jpRTrcrlc/vSnOriiAxN4MqFdjZFOcCV9haVc57vj/g+CRSsZuCCrX2Clu139cwlCMBuqZxiSu8UgsiXtoKPvzBgdRBTE48UeOOoD9e0yYRTF8t7tJx1gdRQLzMl6o+ozdXdSmYcFUySaYtHXs/4ccMf5dE09//7WRbU//jE7b1m/63KQLhPekWCrC8VStR38dy+BijiuH8XS3qggzKV8k1IsrCykS4TYe+zgRNKPPilW32T0MjiFQcgsFOtWN3qZ+6pIiP2uaeAROVn4Z/F1Dp/ytfd9ILW/o1ASRMVSK0xgCkfokRRL9j1gZFxgZTHF8gRbUe+Tl694mVBKsYSTCHAA2oovf993xLC2QatsiKFY4+mEsMS/KOo748TSTcCMFOs18tvrlwbjk9219SFKyWJdGtQEClAfH5GLpb3mUopludHF+n/kpHwCglVd7O/6D4xrHEYqG2qKhS0TchQLXirEKRZkYe83W416lMuEe5M8aNEtKJZsVhiZ7N67kWmlo1wHXT9fW/B5igXO3N6p3Qi0FMs6WG6lgRTFekwgelEsfpnwo74XN7X8Ajz3Ap9nH4zf7/NRrM0rwyiWRwVipVi6SRWsTOEplq4sKJu8lmI16vm+9a6/ZXDKUywYQvSiWGqTO90Q5Pk09sAKTmSPpFhQIXIJ79IgShJkWShW+Z5ZKBY2o6+p53wUS7Gl0XfhbPi7NgijX6cplsSLtZlUfdNSLAmJvl4/Ji6RFKvX3YSfE6UvcLnstz3ZTiqKYOtXaRuagWLF3hnopVi2ZUJL/eCWCbUUC1ni/11Csep26PNiUW2/+NRf4OsI52JJJ8LS/kObi7UCxbp9dACUq0g2y9pug9JzedDW4K6bQaimWHhj8VOs7ftmoVTxFGs/4MgljDA5PRPF+vz/FaJYNF2oZ+pIHuPyFOvxGEGx4LLUUazihhiufw2nXFHKBssSooVieZeQtRTLsleebjLKU6veFMt+XD2xjiSQhto9FcW6wXSh/CBalC1bYowWj9INzjIb+tgIN5pi2SudjmL9l/8yimI9B+PNAP3CUayWNKrVHobRFEsze6Yo1nbSUHe4mIA0KRZGsTYB0VdqcGlAsSwPl67mmBRLE2RZKNb1DQnM3iwUC2izP6WBFtZ+LRSLm0hHUSz9HYXw3qazUawyyZ2gWTxd0N6maadYEhnevmFrKRbeuGIoVquZZ6uK5adY9YAzA8WS3fSgG/QEFujvkhkz/XdoisW1J+4uJbiznoNibV9vSbF0ZQpdmxiK1ULbcD6KZZvIWCiWtl+Q9uvc0iBHv6KgBj6xniXAgeXFIyjWDTFu/wpfMM2GvfNRrOu1ng1hf38TUE1LsYrnf0Lvm5NiwfVkBMWKJR93UeAkDKJe63NhNvdIiiWfILWkWNSA0q88sZn9Ntl9P7h8vgftUy0Uy/gYQrHa3FEo77fpwKU1xUL/L/6un2Jp7yrkBL4aikUFhDNRrIkIFjjwkSRLFtTgSfJ9crE4b5b8jsJRFEvuruk/g9DfUYgF8XjC+woUS0u55qFYkIB0vzfhCIp1vUJL4fj2OS0olpRmUBTr87kNxdrX+SNSrMi6IQ3EIoNuD8XCpKMW4iU1vEvzsaKhRi+KZT/HHBTrto/Yy0CLXy60NBRNoUr3n+tPsfZuLMnAHKdp4CnW9hFFsf7pn+5/9t9RyCe8R1CsUYHnWhSLT3RvSbG4GbUm4T36ASe7eymWvB9AjtEGWaEUa6wX66N+e5cNW1Ispl2/Fe349+JziSjWVsCryceilgvjKNYzhzOKYgnqlZJi9bW73/hKhSW/40s7ERQrblDl8rWsFKt+nqNYrWaaIxGplGJdrzjFgpeffRRr26m3Wj4cTbG2AZeMYpWdOiYg7UOxysGlUK38kA6eJ6JY4Y8V7O5j+7d4isWNMVAbgEgW9DNEurTl0GPvwBbnAPKsf8j7/zYU6/Y503qRBlk20sBLSCMolrwCkRQLCbJ4igURq33DjEt4LynWdimlN8WiPEE+ikUPOLKAuw6yLHRLl8yqoljfhTSLCaokFAub1eLqBrxzv/8STbFkAdXxKBYWZM1AsayBz8oUC9JtaIJvOcWCJxrQ59dSLCmhllKsAppMSbEUtbgbxdoSrCrIgrY6sVCsUZs/aykWdExh7H2XkAmL58o705Q8IhPesYYYS7Fs9alnwrtxuUDz2is/c2Yp1htGsfBOeK9skN6NpNlSJykWP4mYnWL5Ai5tcB35neVLhVKK9Xzu+ga9JqFYQDBIUizNXoVHpFj8uDiWYpVLhGqSJXdkzU+x4Fn/vgFIKBa2XBivbdBRrKiHk2KJ5aNaitU64d1DsZigSkSximBfQLHgQQTunKG7CvebQNfXqKZYsqALplgzahtiKda+zh+BYumPo4M0/nwxFEsXyNooFlKGb0zA9Q61G4hiSZPdj0yxoOvmoVjRQdYN2BHesFwodWT5ttLxbR7bkmLxO3lHJLxHdI7ttA1iinWJplijtQ29KFb92jbhfWd6h5bAK4pFL0PwAkMLxYreCLpHrg5Psfb1HaBYL0BOpphi9djTdAWKRdVv23fUUKy904xfIoT3J5RoG7YTjXJ80QRS0PGacufbkzyv2NM2/VvoyClWI4J1/6XsEDSDV4Qa36po8GyPUlMsWcI758VqmfA+E8WSER4pxYKDLL1/7VgUS6dtwCcOEMGqO2AoF+uZ8A69n6NY+Gvw0gimbagHlH7aBp5i7dr2t+2kAmj7CMVqrm1QUyyrtqE9xWpHrrRtXbpsaP0b1HLfg2JpJkTayRJNsah4II5iKfq6d119bE+xbhBlqElWX4oV4cOSUiyptmFNitU74d1CsXTahtUoliRQEgZPYRRrG+DUHXN9VyHdyes7R41YsPUgKn38+PGcUMgpFjSpwCiWf7CPmuRa2oqeTnkN8XNRLLjtyyiWR9uwXS6XJLhTk60RFEsaTPnlo/z43IhgUXd74UFWKSLVdXL0htC2DiFqk9/dUiFLsaQEq622AaNY/R96ilUH7i20Db0pFrdHITJYuygW/rlgbcPjjj6sM46Wj3IUCxpcoDo+Sj7ahmLdfx1BsfwTuvgtdLzJ794t3FpQrMidPiLko9x+hb0plnTyFTO+9ZeP3uoBsO4sqa1ObBTLF9n2oFhwo9hrG4DXf3Di0aKDPqC24f5lM2AAG+N6KFaEtkHf2L2UQRMoldoGDcXaTjSIWT6pbXgEOHr5qFXb4KVY/bQNOop1/wYMuKIkd2X9MhveW1Is2Tm8bi05xaL7AT/FwssSplhlW+wtH8Uoli23kYIF+8l19JLh7PLRG3whsKXC8stBFEt+V2F8sCUlFKqE9zci4HqHAyd+z0JvYDW3toFrfPwWOpHahrLsIwbkhhSLC85e+WDOrm3AO1uOYplJCEmxZtM2yCkWWN9RirXtFxvLR1/j+pZ1KBb/na9v1okTFzR7KFaEtqFs11iwJQikDBRLNnGKmBzYKRZaJ9z9x424mMJ8LF+DsM6mvBtBAxdTpG3YUywoqBonH51H27ClWNLZzHryUV1nfBct/wkoliKoks3yNRRrBfloS5o1hmLNpW044hY6ujYO36iAB1d2ihWhbZD+owKgzSrWFy/F8tCr3hTLG2Td4GUcTWOTU6z6y+4pVsxG0NLBM0bbsKVYdOBlv9MkPorvQbH8G0HPLh+VzEy15SzJ52gtH8WXGtaQj26fayUfxSgWTi08FMtPUyODKC5AsrSpGbbQ0VEsXtvAtWu87Gj5KKRtwNou1p4j+sAIitVi/JtJ23ADKo5gqZC+qzByB/SI/Cw5FesnHy062tPKRz8/37LyUeXMV0yxLhPIRx8Ua9/m1pKPttQ27MsHm1BwFOv+wt2Buq07xACeW+h0lI9qJldbioW83ywf3bfftvLRCIp1Nvno7bPxft0P/LogC5FHCu/6grUNvvwsmmLRCe96ipXyUew7iCnWJZpiRWsbsOetFEuYd/WdeO308lFu09uWj3qpn540tZaPtnicYQudFeWjtLYhXj6q6y/vX6U5fGegWLdyALTvpafXNmwi4u+RpMrXAGH5qFTbUF7DlI96KBY84IyQj0YNdkr56EVCvM4qH4Xqd2/5aFG2am0DRG5nlo8Sdep1xS10tAP/DPJRul+TyUclriwbxSK/2WQUC4IgsRTrhgdTH2j74187ihV5J2GRqyGcVXm0DetQrF7aBohiSbQN1IDj3U6lNcWSXIdIigUNkF6K9Qhw4A7YIh8dpW2Yi2IxbZuhWHGBvW8ioiED/SkWVb9t33u8fNRDsUptg3YzaM3dwSMpll8+ipZ/GIi4xVKUPtoGeYeQ8tHeD4hiKT7/1PLR3hRLY4T3UKxi26kg+ah1UuDVNozdQsdCsVI+ivfXR5SPWidkmgA3Wj7KUSx5/zliCx2ypH/I672+/7iVs7CCPgTkYsWRhtXlo9jsZhZtQ8pH+1GsXvJRCcW6LCQflfUla2gb6r405aNnkI9iFAtqi7y24eOGjxnlo3gwqJePzkKxtEHW7THj2g6AvgE+5aNwsArTrdBYfGptw77xAc9NJx+N0jbAx4TKR8m/30o+us3Fmlk+un1uJvkoR7G2/WLKR+Mplqc/5bQNXNCsuznGpm3Q5l1p26+EYmmdafNsoRPzuGF5BL47CvE8gpSP1tQq5aNYeYyVj0YFslb5aBTFsszyKW2DLo8jVj4qH0T7aRtSPjqnfNQTiOkpFj9Bsmyhg3y/btoGWfvzy0dX2kJHQ7Fu2ACvnwndXzyDYG+K1V8+Wq/1cgnuR9A2YLOds8lHLeUKDNbfideabqGDd8Lx8lG6A9VTrF6bn/fdQiemjkUFUVyAZGlTXvloTKAYLx+NplhR2oaIPvAMW+gYCNYHXSCSr1X7FPopFpy8HBNsaalYlHz0nNqGlI/6KJb27sP69Vj56EPbsG9zPvlohLYBk4/2SniHKdY2/SLloyMoVvttcyRtHG2bLoolWbaltA1SikW102NtoROvbbjhy1bPC8PMvET7FOq20JFHtvLIO+WjmmNSPiqnMPJgij5mZvloqW2IlI9qOlhJH2FLym1R1+vBhutLUz66tnxUQrGohPfi2DeKYkEJ73CgBGsbZpGP9t9Cp1/C+40nKX/Mlr7pv6SMYiGz3u8RPqyYQlxPPirXNqwpHy2DrNnko7pBOU4+ah9safkoP9tN+ShPsfb1fZPnmvLRg8hHZVta6Z6jno/QNswgH+1BsYQ1J1RvdKMHe2i7hziKFVXBtVvoCDBiU/moLn8iLuGdiOiXk49aZ7RHpVibY5rKR7cJ7xQ5SvkoVn5UnyqhWB6CFkMDUj7KTpi6baHj1TZQwRc12YqlWPsUg5XkoxzFuv31r38sCX6h7nSrZ10eiiXNl4nZQqfNkoFdPsoRrajOMkI+GhFknVU+2oJixclH2YT37fUAtQ0pH60f/EbQu8BJsYVOykdtFCsuALdoG7jJU8QWOprroUl298pHI4P5WeWjXJB1u98vl2eQBf2r7yjcom0bxYojDfpgqwfFOo58NOpxRvmolmL1lY+ys/xTyEdbBNE/fjzrOr+FDiwf9Uy0ziwf9VKsaG2DVz4qpVjFhAilWJK8SWp5sCXFstSRGSiWkGDRA34569JtSJny0TJwggKqlI9Wz6V8lJkBW4KzMuAiKFa4fNSibYihWPi5e8hHcYq1r+8Nt9DRPlI+GkSxvPJR+H24exFLeKcnS7rAahWK5dU2AM+rlgr/yMGiKBZNUKQUK+Wj+4AKlo/iS7QpH+1Psc4qH5VrG7Ty0UefISFIZ5WPQpOKI8hHLa+lfBSjWNXnepfkxrWWj2779hYUi/vb0doGL6AQLBHiXix+wP8YDPEvm/JRayONplg9tQ1QQ5yFYvVMeLeUa1v5qEzbwAddKR+Fy7X1FjoxdczTt1DahthlQ/lxM8lHeYoFn1umbeApVmv5aCvNQtsl6TqNh36/nGLtlgilgRbQAbDy0REUq598dNcolpSPcpWnHcU6jnzUN/jKKVY7+Sg/U5fIRzFtg4ZiRctHN5/1YPJRfKlwBoplnczMLh+VXgsNxbIuG2oo1mdb+SnNvYqQj/aiWJ48TYpiKcfVf6gI1ueS1U8o0Crpwqaj+CabGdkoFlAo32eSj0obXcpHZTN7OOG9oliXaIqV8lEbxaLko9QM2TMD9shHo2hGZCD9qO8++WjkZ2lPsWIDrrbkiqEY4VvoPJ/zUCyffBSfREXTqrqfH7uFTgzFqgjWI7iS0CtIlod1Cl6KhUS308hHV6RYM8tHkbqiko8+6oiGYslmSykfLYKp3ymiJdc2pHy0rO/R8tHZt9DRH7eqfBTXNsRSrBj5KPe6n2JR12/EFjoWisUvFd40wdX9/jHbEkbiL/EUy0qqqIseq22wUKxtwjvWWFvJR4nZ5nLyUa5+pXzUTrEuQm0D9hp+neaQj7bMzeLvDt62Z6m2YVX56DiKxdTvUIqlmfxY5aMUxZJqG6BAigquPBRrlHxU3l/HJbw/gqxK04AFW3ijRSnWRUex6kEwmmJxx4+Sj0KdMXbto+Wjlq0B/u7vRslH/xiMu2obUj76x3VgtQ11Z72GfHT76CkfZQKvlI+mfLThJFq+bQ7VzqUUK/r7tNE30EuFUor1CLJu0uCqpFgECv3FRrFslf0I8lFM24DNgkdrG6L+rl4+Cn6ag8tH+2gbhPLRi4RiSQOqzVKikWLB2gZ5XzKXfFRPsXQUDXikfNQRlEVRLI98VEKxtgSmplK4tuGcW+iQdQahWHiQddPcQQjlD30OAt/0DV+/hc72uHgfVnv5KK9twGlWZHATkfAeQbEE5fx1FopF1ZEWSaBWbQPToSu1DTaKVXfW8doGZsLk1ja0ko8WhDLlo+YAKea4UfJRzSRL3lfEaRuwgIsLtlpQrP5b6FAUS7fic5MmWu9JFpdoLaVYzyBrPMXyNF6ZfJRPeOflo/isN5ZicdF5H4q1e345+ah2YIvQNjAUSxFUlbN8vXwU6qzx62uTj27vaizo1ruGYkHnb5HwTpdhykd1AdK68tE2W+jUgYJG2yANviw7NWyDrFZb6EgJqo9ioXTrpyrAkie+eyiWfhC0UKxZ5aOpbcC+g1jbkPJRuPM2yEf92gY66OotH4XKsaZY8sEhklzVg46XYm37xZSP2ilW1HeUUKw+8lGZtoELpKhJUovr6xnXY7bQsVCsOsi6WYKrcuCDK4qeYnkKLOWj/SlW1GMmbcN55aOiGvKGEayyU37Mnssgi97nrI+2AaBgh5OPzkyxrJOZueWjWor17K/aykdlwWBr+WhritVG21ATQO1YedMM7PyATyUj1xF89BY64+WjMdoGPcWyLRXqyMws2oaKYlX1yhIwp3zURrEeAQ7cCe9zobjZsCbhXdqxcs9xx7aiWpHyUWiiuhLFig24+pEV3xY6fCC1Py6WYkm0DZHyUdm1pmFB7GbOLYn1c6y8WYKp7SbQdEXpsYVOO/mov8B0FMsW1IZ3Ej8uAx4xFAurUykfbS0f3dZpn3xUVh4cxdrU53dq9jlC2xAtH43YQiflo+eSj1LHtZKP8hSL3FprIYr1DLJusIpBF2gV5IGiWEvJRy0USy4fxbUNn6//4Dxk7bQNs1OslI8KXVhTyEc1wdRY+Wg/bYOOYqV8tBXFYuq3d1ItKgOrfFRLsTzyUU0+VjuKBWsb2lMsPB+LC7Ju5YCt//e0u8MJ7ykfxQYkTNtABVS8FTqkk5hUPjqPtmE2iqWZ9faWj9Zta1b5KH7usRRrX99TPorX0zPJR/lxgNM2yMiV1PLeagsdzcS27xY6/HgpWiIsk97rQIBOeE/5KNop/E41REo+CpXH8eWjUlKa8tFy0BwlHy03gl5ZPtpD21AQqZSPqv7uceSjxERcIR+tSQwlH322v17yUcyNRW0EPWILHejayYKsG0dKNMuEWML7GeSjEooVKR+lOspR2oZ28lE+4T3lo/QMmOjQX1tSLLyTXk8+2olQpnzUHCDFHDeDfJSmWPIAbm75qD0w70GxoACVCfB/gAGWJHAaoW1YST6q3EKnqXw0qrOfRz6KdlVCbUNrinVc+ShNseTy0ToH5KltIGarw+SjPbUNdZnJtA11X5ry0XPIR8n/lRSrvXzUSrHm3EKH26twP2beJPk+ERSLucgvHJ2KplgpH21DsebSNrSjWCkfrb4TKB/VLjWMko9iwtER8lFZvk3KR719WRSt0pO6dvLR7QQ+Uj4q3QzaEsREBuZtt9DBSVa59LojWNqgCg+2fNqGnhTLQ7bkM6z15KNybUPKR6Mplp5uxctH9YMsrG2AZaLzykeBgX4J+Wjdl6Z89OjyUQn9iggGt/JRqH1bttDpKR/VjuHeLXQgknXDBnQvycIGQAvFar2FDl8oc8hHdYNiXMI7/vlTPtqLYvWSj9Z/x6pt2MtHtwnvWDDmlY/GaxtazH6tQS0sH908l/LRy4zyUcvEiS6vqC10LNqGleSjbbbQkVKsj2t685ITSNsABWoeilXOujTy0R4US1cBcIqFrbNLg96ozjHlo/qg6TzyUTbhfXs9QG1DK/ko8IpT25Dy0Vkolv64WeSj17dZ5aMa2JDyUbCOvHPX9RYRXPGzoyj5aBwC1Adb7SnWfkCYTT6q0zakfHQ8xWojH6Xr9WUh+ahs4JxXPgr1pSkfTfmohWI9iAtGsbR7FPajWNyNMu0C++c4Dd88c7kASe7Q7ykfVa/hv9oo1szyUf0xKR8dS7E0s95e2gY8pyPlo1r5KEextnU+5aN2KnYu+Wid8E5Plup2jR3bhmLpx/A28lGYZt2wQpxH2yD7gnPJR2Xahs0xbm1DWUY9KNbmlZSPGmdqE3SgLMwAACAASURBVMpHLwEU60JRLEg+CnXSdVAWKx+VD5wpH21JsTSvp3yUp1jR2obW8tH983L5KEax+m2hA9Gs/XtvkkbImd3jtQ0yiiV47/TyUb6T4+WjBCJ2BTuzy0dnoliSOnJ2+Sg1w20lH6UDspSPagjomhQr5rjF5aNvXopl8V+1lo/OuYXOfsnwRhWiNsFaQrFkCe/nkY9GUqyzyUclFKuXfBTopKaTj/ahWLS2QSofJRJbm2sbHrko+8+e8lFrkDUjxTqZfPTipVifbeWnZ4/CFlvocBTLN9a53v1+uVzfb5oCty4ZRmsbWlEsj3zUMvvyUayUj6Z81E2xzPJR4GeVtuHZCdcJ7xDl8lBA6yw11ovjq+spH42lU9LPdTT5KE6xpNoGOoAqAy1pmzwWxXo+d+OiYZtwdDb5aHlLfluypZWPYhTLWyZRFCvlo9bAa275qFZSKB+QMW0DHDxR8lG4055LPnq5zCQf/aM/TfnoJeWjunYr+Q61fFQbhMmW28duBM19Rum5b9o/vKZ81LcEKKVY8i10pNqGmmLty+K5VCgkPoEJ7+hs8xDaBuuM9ujy0W3dj5CPbgMc6o4koO2nfBRpzykftVGslI/KtQ1lO/XIR/V0SA8LIrbQseRu33jsGPFvDvloa4plLwybfFQS+EZ1jpClVnuOPtoG8vOLE97PLh/VvZ7y0TEUaz9pTfmoj2Lx5zu3fNS6R6FXPqr7rHKKJb1pxhN4qwiWJujio+09xSoqwoucYtmI1RHko1DCO0YcN9d9mHw0cgYcTbE4Snp2ilW/lvLRHhRrm/DOU6yUj2rplP64deSj0RRr33732ga8Xfvlo3qKRctHJXc1RvXpN01Ahf2slY9uZkubDoGWj2opFvLeQ8lHsTJL+WjKR6UUa2X5qEXbEEOx8L8RTbHgskv5qCNAOol89Pomp1h1eygT3iUBFPUc9zxHsVaRj7oJlifxvYd8NGZAPIZ8FKeK55WPFlK7lI8Wg2ZLbQNFsSzy0SJwVt5JGCMfhc6f8lE/xbL287JznEE+StUXXj4qHPt+agItLODiy9SvbdDWlSjAcOMaE1VQ1mT3lvJR/iIcVT66jrZhpHy0Dt7bUyyqjqwvH5VrG1I+Gkoo1fLRYIqlfaR8dADFIsqLlY9qKZbkdSywsi7Tzb6FjusuQi7Qgo5P+aidYlE5bT21DfNSrLnkowD1OKB8VFKmdvlouVRooVgpHy0p1v1FVsYpHyXOdHj5aPndtPJRrbahNcVquYUO9vxNQz5iNoJO+WiMJyXlo/B3SPmok2JNJR+lgzE7BTymfBRa+ofko/s6j1OsmDrm6VtSPgqPgb3lo9tJhtR7hU2opG1Seq3KhPcR8lHstZulwkXJRyO1DT3ko1EUC5gFpHzUQbGEQ1PKR6eUjz47dXqGy2kbUj5a1veUj3LHpXxUEyh75aPcP/46ybUNHMXy1DXNJOv2OWP8wUWYXL6GLdCKpVit5aMWiuWRj0op1r4saPkoQA9TPgrUK7wtpLaBolh6+ejc2oaUj85Nsbz02BaYHUM+Gkux9kuFGL3qJR9tQbEs5PO2vXDaRu6Vj9LerJSPWigWV0aRnaNEPjqHtoH8/Er5qOf6HEY++spTrnhtQ8pHW8pHZQnvs1MsPe06i3y01jbggTSX8F5PjLDJ0qry0aiE95uts6Y7Yzm9KhPeUz4q+z46+SgWeG2u+8G1DSkfDaZYyPtU8tGLlWJh1zfloxDFkspH7f1//EQt5aPSMpDLR8nzMH+3XCl53vCxb3+4tmEG+agkoLKWH/bzjSMQXMPy5mMdUz5q0za0ko+W1zsyuJlb27AfdIDnUj56WUM+2lLb8Ji0IHdJpXz0kvJRzyA7Qj4KP0fLR3UUS65toIhVP4ol76stKQTYuW7ehk3Rq7/+tb18tBwQLRTLRqrsz80iHy3oYcpHDRTLS0t7U6zZ5KP88sJe21B24MikySQfLd1cFvnoWG0D1p5TPsofdyz5qGZ/QhvFkmsbtHcES7UN0VvotKivQIClp1gWmiWnWB46EkOxbBc45aNzUKyUj+qDpH7y0UfHXspH6aWGOeWjkUnQRkKZ8lFzgBRz3OryUZpilZMdnbahhXzUcz3jUgeuv39cq+vv5c83X4MuqQn+Mx1spXyUpli6hHdNwFvOeqMq8THlo3ZtA0E9Uj7KdrpQLlYtHx2hbQAoWMpHjUFWT4rVUtvgCcSiKFYb+ag42P0pWSakgrBeFEsTxFmWCpEAy0axJAN7eQz0OzQAEp/mBPJRcZgzjGLpGuQs2oaKYgH1akux7DPfxeWjXSjWI8DB5KNYMIbPfp/latuvEC+7WbUNBvnoyxnlo9agzTpp935HCcWSykeZAC5M26AJqqRtUj6Rjdc2WCbRNyIK/aFp3JotdFI+KjnfkeWjbR8x8tH9gBNBsRaWj37nAi9Bp84lvG+vR5B81Np509oGrI6vpm2AJhUpHz2+fDSCYmFtx7pHoUY+KttCh+73oxLeuXpys1Zq6R1rkfJR/G9GUayUj+Kz3ujZZ8pHe1GsOeSjbL0+mHy0n7aBHxBTPmoPuNqSqziKpQ2ufBSrhDHwcj0sH+XysSzXOppiacqL+ow3KPKMoFgt5KPFIKikWCkfxcoosnNcWz7KaxskdcQWwKd89FjyUfzcq8pHV6VY+uOOLR/dnr+lfFS7R6GVRI+iWMC4Ub1+s1Yk7cxYom4o6UIP+ag0al5NPirRNmAU67zyUZ6O4mWe8lH4tTj5aLkRdHv5KKxtkM+w15WPWupQ24laykc1oENGscjTueWjn20oVD4aS7Fo+ag22BJqGqrgoOkWOhQB28y0m8lHMYoVSapGyEfhhHe8rCKDm5SP6gOrlI/yFAvvpFvJR9Hbsg8vH43YQiflo/PJR5Vb6Lxp5aPWbXJmk49a7i6Enrtxs8cIiqVPuPZpG8oB0dKJ2kiVLrpV3LYrlo/S2oaUj0rlo1ynRVEs66w85aN1+4E74Rnko7W2AaNYI7QNcDmkfFT3d88jH7X1v3uKhfdTtXwUa7uj5aN2evURk6A5WAx96bwRtEfbcDz5qL3BrS0fbZnwPhPFktSRM8pHywCn1DaMlY9C5bjfPoSrBy1JZUmxmKNTPnpy+SjRxsXy0cf4srJ8VDvWizQNslkBPjBzsktp0LV/T3uKlfLRueWjUQ8o4d0nH43RNhBtLeWjgk53VvkoQEJ+Ym17hHxUTrFSPnpG+aglOBbs9flTG2iNlo/qJ2K1d+/WajaFDeySgR56DzQAUtoGCcWSdBwj5aOSxmqhWI+lwtYUSxeErSQf1Xf0KR/1USws4R0Lxij5qEUkmPLRlI9qj1tVPmqhWMXvIvko1Haj5KPIVQrRNtBj/T7Iuumi+/YUq9Q2QOdABsHDyUf5BubTNqR8VEuxYDKa8lFc28B06ib5KD0DjtE2pHwUplgpH7VTrPnloxptg6ztaOmUlHLZKBbd71sS3rnJlUrToK3o1uUpZvbl1jboKNaq8tG9tqEum33CO1R2vbQNKR/tT7F6aRtSProLEieVjz771JSPxh43k3yUKzudtkFGser2q9M2YNfE2nY4+WjEUuG2f7lJClVKILxbtsjloz5tw1ryUT7hHaZY1bLgO0SxsAC4ZUdoOaaPfDQm4T3lo3sK0Vs+us3FSvmoXttAU6yUj9rON14+KgMYkfLR/U0fFKnijpPcuCKhWEyM8M0CWUiTu+XupIjkW6+2oRgUhAnv9u/gkY9aKJZW2wDPNGzahrJ8elCszSuH0zYchWIhE6jm8lHKFA3dUUjNgFvJR+XtGKdYPbUNdoqlq0ORbTjlo/UERDPeUuXVQj6Kt0GcYnFBlW6sjE1415Hrj5jkxnVGyIX8IenMrRSLeu8mqDJoG8bIR/2EQkWx2AbgTXAfpW1oJx+dS9swK8WSzIT9Ce/gIFJRLD7o6q1t8MtH25apjmKlfBTvh1M+KqNY21jBIhf1y0djxidPLvXNciJLwy6fO6J8VIsTrQ0Rmw31ko9GdfrzUCyvtoGnWNbGq+2A15GPYueTyUfLTreUj1Iz4J7aBvizj5aP7icUmi10BslHh2gbpCSsFcWaTT4q/NTvsvEOl49KttHpqW3gygTvo++/iJLckYryQ9OZ95CPerUNXvmoLT8r5aOaY0bKR4kzdZGPSq/VGeSjcCf8XCr87OC+QZTLc/088lFJPegjH+XLbjL5qLrfSPmonGJJ5aNyiiXVNtBBFRRI9ZSPWlM7yLsIo4IsasbqlY9atQ0einVE+aglqE35KEax5tc2RMtHKW2Dj2LBEwesbdFLEPuE97qTTvnoEeSjnmDkzPJRrk1Gy0cL6jydfJRKeLeM1beIWTB0rKQALXlZSm1DGMXaHncU+ej+uj2XCoXEJzDhHfv9fPLRKOLXQz4qaes95aPbAIeaAdfXaZS2QU7Fout6ykd97c563GzyUY5iEeVlolj1xGi/VAi13ZbyUXqpUNa/kncRYthN/sdk4kiKYukCLkjbEEWx2mkb2lGselbjkY9SZRHVOQKfOeWjKR+lJhFTyEeBV5zahpSP9qRY1slOykfbUSytEyuaYtHve94oYyWNN210rJkxR1EsegBgKdaLnGL5qN0K8tHNQPbOJbxD1zrloykfbSUfFdLZZeSjso445aOjKJYvQLIGZmvJR5n3uCnWZ3v9qV0mhK6JdYN1z1Ihu0RoKTyMQHAVp4V8dDPTFstHR1GsGeSjUAOgGmHKR1M+2ks+qqBYYvkolouFLUto2mwMxcL/RspH+1IsPe06vnxUv4UOLx+VkipsAsU9T1yJL73ryc0ib4ubMdkCrnLg02obWlCso8tHcap4XvlogaC7yEe1tGoF+ei27lu1DZh8FDqWmK3+YtsAOkY+Cp0/5aPWiUhbirWyfFQXXMXIR/mJTK1tGC0ftSwVlo+blSZEUyxpoEWTFWnCe9wWOq3ko4ISaSgfXUfbMFI+WgfvNMXSdr7UrebWWVU0xZJ01lzCO0yudAnvNL1K+ShdZikfdQRITopl+1nbzimKJQuufPLRMlaw3DHItXFvW/LAEUwlcfNQK+msOYJiwYEVTbHwhPf55aNjKVY/bcO8FOs48lEtPZhPPgrP1HlXDpyLNV4++sxFOY98tO9SYW/5aC+KdUT5aHnTh3WPQn/COy0f5eIk6DVVkrvgzogf2sL1yEZTPpoU63JJ+ahl0hMRiEkoFtGhN9c2PJYK9+3raWkeJx/VBcrHkI/G1DFP35LyUarsJMFVG/ko1BalQlJpm5RPZHVLhVxZqZPcrUuF1GC8vnxUlvCe8lFpR5jy0ZPIRwXaBjnFitM2pHw0Rj46d8J7ykc1wfUz4T0i6JXIRy3SUQ3F0gVe8t93mobWSe6aDn5d+WgfbYOEYmmRMz7D4OWjAD08pHwUplh7bQOV8G7VNkQTvwnlo5dYijW3tuGI8lFoosolTc9EsVI+qqVYZPsNlY+W9Z/ekQE6j5UO80uF0iD8pgkOelIsXcCV8lGmPJrIRyM7xwj5aCttg+K7KeWjtk44mmLp6dZ08lGxtmETQKV8NEA+ujrFslKn2eWj0mvxSHiXahj08lFO2+Dfo5Bqw1Ztg3VMBk3ulpmzNGqWJLx75KP4+VI+KvzUKvkoFnhtrvsw+WjkDHgWipXyUVm9lmobpLd7p3wUolhy+eiqFMsXIFkDs3j5qG3iZG//m8cbs7xf5ETCE+ko+Sh/rfGEd/yc4I0f4PmDk9z1BMKb8P58Ly8fFd7tMpl8FNc2jJCPlmUV2THOLB8tl0KBq6LWNqR8NI5iXRBtQxk0tdY2PP4+YqxO+ehiFEtPu1I+Wo8vdm2D5s5Bj7ZBMyEtgyxqXL95gqpIikUN4lHyUUrbMIpiWc4hrwz95KNFY035KECx8DJL+aidYtHahiKBtpt8tAzyUj7aj2KlfNRPM53y0YuOYqHH/bQsE5aTKv5aYUuFeC6WdMebm5Zc6aiWj2JJAy3svdAA2INiSRNcB1MstgGkfLT6hikfFVAsSWcNvIbKRxERqUrb8Oxwy6XCOeWjkm182pBJHcVqJR/1UCx/XxMjH/UuL46kWLLA2EOxcG2DRz6KBVZ2igUvFX4cX0+uUU2Dh1zNQrG88tEiqk35qLIcSooV1emnfPT48lFL/gdHsbDOD1oqpDvpPtoGgIKdVj76+fvS8lFLIGWhWD3lo3EUiya7kLZBGmh5tA0RqwGmHCz7UiGcYyClWFrZaMpH21IsbaNK+WhbipXyUTnFwuWj9JKhZzYsXSKUBso9Et7xgbaevKZ89DzyUbhOxMtHoYkRt0wo169YruNHvUcI17ewHCz7zBgmEK3ko/f7OPkoNDsbLR+tByI8OZiTj3LlEUWxUj5qDbzmk49KKVZJIfBZNKtt2F6PcPmotPOGBxWaYgEkZKi2YS8f3T0PaRtSPno5rnwUf669fFRKryTHEd/+i3Gs/+bKwbJ0+J5Zs1c+CleC3hSrhQ/LQ7H2jVU2q6HloxiVSPloykcdFOvCUyx6ELpcLm/UHYSPACflo7L+t5zNM8u5KR8NOO5s8lFoqXzffnXaBvv1xYKsZz+v6UtFOVjWpcIoimX7B2kboihWrLahzxY69awGk49iDYsKqFI+ij5SPnrpLx991GmNfHSbi5Xy0ZSPesa/GeWjujbul48Sn+V3yTWXkCp8AuXTNiBXhgiy9jfLVAGWrfLEuSWkgZdP27DfU+so8lGMYqV8tK22YRTFSvmorF5r5aPUDNgvH4W1DfI+tp98tI22IeWjPchVHMXi27Ci/YfKRzVJ7rY+kF8qlJbpLaLyyAsVTnj3BlOSbXbqAfCjszyCfFSa9Jzy0ZY0J+WjfeSjmLYBp1jbWfM4+ShWVvPJR+HySfmonXadTz4KHBMmH6UmTRDlklIs2fi87+eLwKzKw71xd820uBXc09i3//76157y0e2yTluKZTlHykfHUKyUj/amWOhVO4V8dKy2wUuxdHUosg2nfDQiyKbLzrCtDkGx0ON+WpYJy0mV4Ft/kV7D4maYXd9/8xS+Lf/HR7G2z2kpFzYAahvvgbfQYRtAykfxhri6fLQnxUr5KD64YBTLLnzuS7E08lGs7qR8tBXwOK58lJokSeWjmOG9eP6rtO7cLNF2q8g5Uj66D8Ss2oY2FMvnw/I1PnggsmsbUj46h7YhogOOoljB8tFXWznK5aPYUuFK8tHLZXb5KExugfN/Z8aHlI86gjKgv1fRKxnFws8/m3xU48aSBllbw/utV+TcSz7KES89xYI7Bs8WOpbgCT5+Hm3DXBRrFm0DGMCD9UrT0Z9MPorNlEMoVhng6OSjsoR3jmKtoG1wyEdfgNdF8lH9MlMMDEj5KD8GSpcIvRQL1zZEm9zRq/HFFlR/TNCaikZbaRtsQddT26CVj8ZtoTOTfJSc1ai1DXPJR9s+YuSjGBlN+ShFIfBBeIR8VD8ThweVmmJBdXxR+egl5aNHkI/W2gY6uIqhWHgbheWj3CTJk/AOQBN2LHOJRn0US/f3rHvj0QMDSbEU2oZzyUe5hHd+BpzyUR3FSvkoRrGkg9DlcPLRftoGniylfFRPOHxja3/5qKwNt5KPIhOSn9plQtvYu6dY++CNCrLu31yi0d4J7zZypZOPzqJtGCUflVAsCdWgAq7IjnAt+Sif8C6pI6Molp5u2eWjLSjW5VDyUfzcKR+Np1gRUCHlo+RnCZOPcrTKJh+tgyxJWZk2e+55VxLVkbeQjxaPw8lHudk+NSBo5aPUXobnlI9C1zjlo5ocjpSPyijWGtqGcRRrlLZBT09SPiqhWJrNoKV3F8r70PtX7LibFV2OolgpH6UJBV8W/eSjHI20dpQpH7UOHtPLR41b6Pjlo3SHvJ58tMdEd2X5aKuJchTF4s+X8lGrfFQSWMHPwxTr0ddDfcMt4lbviAHP09j12oCUj0pm+9CAFC0fjevslpSPvkAUCy+z3EJHV3Zy+ej+9718lFoatGobePlorW3AKFbKR21BVspHI4JsffuXlyEuH+2pbZAHWfXnu0kuuDW51qttsMhHbQFXPQCmfFT0rZeWj0YmvBffyKBtoCmWtp2tSLFmlY9+PPfsHywUS0K4+AnTR9uCBgRJcJAUK5pUxchH46jYfPLRkmJFyUehYEazTGgZL/iyqfv6m6dxRokMLQ2bCrhSPmopo/Xko3JtA0yxoh6rykd7UqyjyUdhCtZHPgrQlOnlozDF4uWjn33EoeWjvShWVC6XRNtQt/H28lEpveKCLmvCOxRkuZPc4yqjjGJF0KwysNpUmpSPCstOIh/lNoeGO+VWs88jyUdl2gZOPqrPQdB3jEeRj0qo1Vhtg5yKxVOsilh1lY/2oFbHl4/KKZYWfvD1RUaxoB0O4GArTttgWyp81n9Vkru1Q++hbdBSFIO2IeWjSAOgjPkyihXZEZ5BPuqbqc6qbZBSrJJC4INwnHx0E0BNqm3oKx8FgipUPgpNKiK1DS0olr0cY7bQSfmo7PpR8tGyjVu0Dfby/Qiybp6KFIEbozpy/9Y5em0D8+kOLh/VaRugaz2LtiHlo8eiWNJB6LKQfFQ2WM4lH90E1uBSITSpOLp8NFpSeiT5qJZiIX3/T++dhvJ2yCe837SYbGaKZdujsKZYUm0DT7Hq3IH55KN8wjtMsarj3ml60VM+qj+mj3zUpm04E8WaWT6K5WJhHbOmHcdQLPxvjJCPwuXBUSy4znMU6/OR8tEF5KPE+YZqG7SBJx9k3b/eWhCUEU4Wa7BVz7bAgVGY8B4bAPSRj/Kz/eIcodqGXhRr88rM2oZQipXyUape49oGTD4KHYtfIzrhHadYmLZBR7Gg88+obdDUm9kpVsSY6KVYLb6jtq1Ly5ELyLBJPK9SqLUNUPvmgjDJteWCrNtHcHH/er3Sd3NFLHX1ko9KAy2arFi0DceVjwqb6rulozu6fFSR8J7y0Utr+ahV29BePkovTRxTPnpkiqUPkLxurXXlo3BbpKhuTbHK9qgJqmSTH2kfvwuwtif8CLYkQVCED2uUfBQOrFI+OopiFY31gPJRr7aBnD0tSrH4hHeFfPTVVnZybcNDPipJcO+pbdh6gUrx4jiKZdU2DKNYKR/tLh/9aHtWioVdD0g+6tU2yMfXOshC7iJ8BloR+R624KDtFjrcfnk6ihWnbWhNsYjr7ZKPltqGlI+aKdZFSrG07XAuimXvrDGa1Uo+ul0q3Le5j1wsaOZsnVhaE93tG7y3oFh4GZ9dPsqf4yzyUbLPb6JtkBAteHKlaTf7IIu5i3BPtDwzZe+dD5rCti8T8vJRrbbB03BXko96g94oipXyUR/V9AQIM8lH/RSL1jZsNnpmtA0pH035qPa4c8lH9Vvo4N+F0jZwS4fb5//5n+9//ud//riRQ57wXtf9m2yQ0g14noLCKJalI7cP8LtK801YxVI+imgbPl4bJx+lkiFbU6zV5KPStuzvjPVEREJLvBRrFW1Dykd9g/FIipXyURH1DNI2+JLc//KX+5//8hc40JKQrJucIMHLhivIR3UBV0v5KK1twAlFTLBlJZEWigWVBRf8RnWYAA1Qy0f7aBskFAsjo3NqGzR3GUko1szahk0AlfJRQj4KBE6sfJSaREC/95CP9t5Cxwcxjigf5bQNMMXSJL5jj3/5l32QJasf9y8GTYOMZs2gbZhPPiqnAmeQj2KB1+a6D5OPRs6KUz7qv74d5aNibYMkoNosJZ5WPgpTLFrbAFOs+bUNM1Os+O/YWz5afVIRxYIS3i2B1iPI0lzbm+1C379G7E3YS9uQ8lGffFROseAGwC0Lpny0OiLloxNQrO2smVo6bKVtiKFYY+Wj+BY6x9Q2WO+8T/koej6ztkEbVEnI87/8y/3P//t/1306G2DpKxMeZFkj6VHahmj5aMsAYIR8VECxUj7KBFkpH5URiFnlo2VH/NA2YMciE9PTyUehLXTOLB+1jHe9yFU0xYqSj0ooFnYNIG2DhF797d/S7eIRZHHX6aYd0ItO/ys0A48KvFaVj0opVgttg5RQaCmWdm3+KNqGlI/2eawpHy2XClM+CpddykdbUSzpxHhl+ShPsXTaBm8+1jbI4mjWLabyyJxZkfJRbcW3LRlatQ0lxeonH/UuDzJBlZhiSYLelI+KKVZX+ai2bZ5VPsr9K4+XUKyUj37U9wnkow7wkPJRXXC1b3t6ioV/fqu2QfPd//Vf73/+13+FA61bRGXyVA4rxZLQDq9sFM4NkmkbrteUj5YUq3jvD23HmPJRnmJp2yGVpDuKeFg661by0c1A+Tumbdi3uVo+KiFSI+SjY7UNNMXaTlYHyUdf4/qalI9Kg+RIikUFXRJ6pe33H4HW9hrdIhoRRrGOIh+Fc4M4ihUpH62DrCPIR7nyiKJYKR/1Uc1jy0fZhPftxCRMPiopm9by0e0j5aN0kJXyUWtw7ZOPevU9rbQNXKD1f/7Px7+b5aLjFx4fBFeWjwKV5ptw8+cgihWzLAhRrJSP1oNQa4pl0TZQ9SrlozQtoSkWOwi9ccsIKR+1UixYPrp5KysflQTtPR8pH9W1dU07vgTJR7mgyrJMiD1uUR2lROHgKfAo+ajtH6RtiKJY/eSjEeWCNToJxYKIIlc+UR2mRD46h7aB/PwpH1VQrJJC4MfptQ1lR122s8dSYcpHqwCJlY/e73L5aH1zxJoUS3aOGG2DdyzuRbFkfQanbcAploReeft81RKhPBcLJlkzyEfLwrSQrAj5qPRapnz0eNoGK8U6orahN8Xa1mkFxVLLR8uOGg7KUj7aUj4atcdd3LgYT7EsEyi/32umLXSqT/qO9fHSbXIiKdbNW4h4gT4bzory0fq9R5WP2rQN8hk/3ABSPkoGXKfRNoyVj2IJ7zzFknXW7eSjcFmtLx8F6nvKRy/HlI/SwVWcfBTWNui8WI4A6/6lxLYx0bovPU5rPwAAIABJREFUSm9NulrJR2XahtgAoJXpnf8cKR/1BFk4xcKCeJpi4eWU8tGLStvAy0dhItVPPloa5i3y0VHaBkg+KqVYknqT8tE4cmUd+zVtHS9Hq7YBumud1zZgE6W//3t7e7jxHXw8xVpNPkovG0q1DTKKlfJReaM9mnz0IWSMpFja73Zg+ehFR7F02oZn57yGfFS+UtCGWJby0aNvoRMx3p1PPkqeu5m2Afo5IMCqgyzpDJWuIPTt9SvIR7fHpnyUmu1fLterXdvQSz7q1TasIR/ltQ0pHxXXmDdJHzizfHS7TIIlvG9/nlHbMAHFUiW8p3xUfu3jKRb++SltA7ZM+F//q609ADlYfpJlTdi2kZh28lE60NoN9ikfVTeuGuM+lgpbU6yIjmR++ai98z2afLQXxZpBPrq2tmF6ihXYj6R8VHdnYTuKhdGriET3G97Jf3T0VoqlSXhfQT7KaRuk8tE4itVXPtqDYknI4iwUK+qxnny0DrJml4/qKda68tFNfX4HnjukfJQeoFltQ1OKZQUHKR+t256HYmm1DdDPFop1u3R70JtC+wbI9vJR/nwy+WgcxWonH7VRLL98FEp4h96b8tF22gZrh7qqtiHlo7NRrFj5qKA+TUuxUj5qp1ibvjtU2xAcYEVSLFuHbknGnF0+ylOsGPloNMVqLR/FnqccWbEd31ryUbxuzS8f1XbGK8hHqQTZlI9KKVasfHTlLXRk5ziXfFRGscogC2qLVVv5KUl411IsAcHS5WTRF56mWL4Om78LjepUbfLRcrZVUywoyOIpljyAjExu77eFTspHoSAr5aNjKNa2Tnvko/UsuKd8FNY2yAfOfvLRR5Alo1gpH20TmB1HPlpTrGqJ8R2KFbjEdurnwACLDrL0CbX1ptCeitBTPkrlbdUD4HMQ5K/bOeWjtLYBJ1mRHePc2gZ6cpLyUbIzPpl8FCur+eSjCK36wteBlI+mfBQ935uOYkETafyOwu2///bf5O3h9n//b708AResXUZqjaqjzq8pdH1gFSUfhRPejywfpWYvEvlo0VhTPgrWK6ycUj566SgflSwNWrUNR5KPWiiWpN6kfDSOXNlIXX/56OO1RzvEvr824V1NsKRBVkuKtaJ8FCMrNvkoTaciKJaFUGgpVspHo4P+lI9CFEsYcA2Vj26XCvcBy7N/sFAsCeGSykcxoWLKR9tTrIjxbjX5KESx5MEVez6RtoGfSPPLhFKK9ccSoSTIiqJYXk9PVFRvoVgj5KMrUSxoIEr5qIdi9dU2rCwfRerSMPkoPEOGE97rWXIf+SgwUKd8NDDISvmovq3z5WilWPi14CiW9cYUg6YBDrL0s2AZxbIFbTHyUclgXwZWm8G+s7ahvXxUR7HkjVUiH5U0ouhgB7+G7bUN1KCDUaxe2obilWnko0Lbe3eK9QhwOLN7fb1lCe8cxTqytiHlo3Vb9IKIM8hHoYk0lUNZT4BkFGsXYMkolocKVB3IV+1M2att4Ao7Uj5aDoIzy0dbUQsvxZLQxf4Uq+3DSrHwuhWjbcDrwxryUR/F8stH63YZo204tnyU1TakfPSS8lEPxbJqGyRLhRXBkuVj2ShWNG5kztRNPorjzShtQ3v5aJstdGwUyyMfjU94H0exUj5qHwCVt3kj74mTj8IbQc8sH+2nbbBRLHhSMat8dKS2IeWjzwlHmfC+jRU4bUPYEiEXZH02/C/eijWKYkXLR5/vgyiWTNvAU6y7sNHPKx+VUixJMEwFXLEB/kryUT7h3UuxziIfNVIsVD6Kd9Q0xbLTD698FD93S4rFaxvWlI96wELKR7HgiqRYb/vzY+2BpHk/JY4simKZt8rRzE5baxu0FEvakcfIR8mAziUfbbmFzgryUexOzvPKR6FrnPJRhXz01UaxYG0DnMvxQbGwY+FrFCsf1WgbsPfPrG2IkI+2eGgS3lM+KiunR8K75tw6ikVrGzjDOxpgtVwqTPloHMWybKFzFPkoRyOjJw+9KRb/fVM+GiwfxeqiKuF9O2mYUT5KaRuwtj3mJga7fJQjt+XvSD9yWG3DyvJRxU0sSoql0zaUv0NBFkmwZEuFcYOWh2LNKB/VahtqirUdEHVU4Ejy0ee1TfmoUj76AlEsvJxSPnoJ0DasIR/FxYslxVpRPhpBruL3Ok35qIdiabUNGopl0TZAv//93+/bxM3fLNpRrFnko1aSVQz232Iq7XryUe2shtI2pHxUJR+9SCmWp/32oljE9TiEfBTrtC1BKh10oe025aP1w0yxYiZ27SiWdGI8Qj4qUa4I2y9KsaClQkjb8JhIc9qGx+/bIIsNsHpRrG2QZY22I6J6j7Zhf1yd8O6hWFEBwDwUK+WjdoqV8lGgPU0sH4W1DTW54rQNKR9N+aiPTumPO558VDIhoYgWNAkp3/OYXN9imkWUfDQWV1rko1SgpR3ggcj8m2SgTPkorm34bExK+WjcUiF+DWfRNlAUK+WjI+Sj+B2CK2kb5FQsnmJVdCrlo+JznEc+GkWxyhWvzdL+Tyy4go7/u7+7/oMowDq6tkFDsXQBFy8f3fzSXD5qpVKj5aNQWXDBbxRFmkk+KgsqKIqF1anzykeJgCtCPvpGUaSW8lHgFae24WjyUbW2oSnFsvbHKR+1Uiw+4R3OodRtBi0mWNYNoXveTSE4UzeKNZN8VDIT9VAsgho6KJZe24AFY60T3lM+6gvOYjpjPRGR0BKnfPRilY9S+xq2oFiyieuR5KPq+pTy0SXko6i24Q07D0yx8HZLBVflcbfYytKeYmkrgrRTj0p4r987Xj4KbaGjJRN2osjdDROnbegnH9Uf00c+atM2eClWy4R3TX5GBMXCKEQZZFkp1lhtQ5x8tPwbKR/VUyxPn5LyUbovkGgbasN7TbGQ9iKiWNerMsCyJryPkI8SnYxricdGsTj5qDThXRqg6ohWW/koOPBSFItNeKcoFh30nl7bEEqxziYf5f8eLx+FiVSMfFQSdEXJR6Hzz6Jt0FCs2eWjLSlWBLzQf8ehFIv5W1Jtw0c7kBCtW3yVOb62wRJo0RRLWrmOKR8tKNbFQ7FsDWsdioXMxKUJ7ykfvYyRj2Lahp4Ui17aO458lKdY68hHpZNp2bh4TPko0bYNFAvXNsCTI/pndYDVV9vgi9gjtA0eirU9ViIfhWZeKR+Nl4/GzT6Pom2gyinlo5dwbQM0O5bJR3trGy6XZ7JvOXufmWLNKh+1UKyUj9JtF27HMvkoLyN9tgEtxWpEsGIo1rbx6DYU1lMsCe1oJR8VDpSihHe+oRxTPvoIslagWJEJ73ibS/noavLRbYBDyUc9QSpPsWS0arR89FHX6fKaUz46+xY60onxyvJRPcXCr8f1CqsbzARLTrFsCe/AeUK1DZbPoZWP4q/ZtA1A4OmQj+q0DSvIRyVkMYpieeWjUY+Uj0o6Vz7hPVY+yia8b+t+ykddFAueUHAUC9c2NKdYKR+dRD4K95u0tgGnWHXS+7Y9mwlWK21D630He8tH+fPFUizvUs6K8lFoqRB6byv5KNEZTikf7aVtgIKPGeSjFM3yUSx2EEr5aFCZ1v+z8lEw4b0jxQocK1M+KqdYMm0DMC4pKNZzwtFM0xBJsVI+aqVYem2DlUqNko9Kl/o4R1Zsx6e/M7WPtgGmWPWsXkKx9B15ykfBTr6q01QOxyPhPeWjbvnoJeWja8tH9cEV2+7fMIq1DbJK+Sjuxao9ca4AayVtA3GmA8lH9bOJVhSLoIYu+ejm56Xlo5HJsikftV/fGeSjNdHaU6zyWHgGnfLRCG2Dsj5NS7GOKB8tKZY8uJJpGzTxAp7cvidZt0vzRzttg7UiSDv10fLRKG0DR7F8PixLQxwrH40IblI+qu+sjygfhScO4CQi5aNdKdau/JeRj8bdxCWjWL7J0bHkozKKJXdkXS4BAVYvbUMExZLKR1tpG/aDPS8fhWZeKR/1y0eLxpry0UCKdTb5KB+4X3+73+sgK+WjviCrF8VK+WibgGlW+ajsO9dLhViwdetTZdaSj1IFECEfxchKykdRinXRUSw+JyrloykfxYIrj3wUIVpqbQPsxkr5KHzdY+WjteIj5aMcxTqKfBS+oxBKeK+hTJmPFRZgpXz0+PJR7fFj5aPyXLgjy0cVFIuRj8LahpSP6soTWCokrxf3D+rczysfvX9J+Wib8W41+SjejkmKJXJjccuDbpP7SIq1bTwpH+VM3LHy0REUSyMfra9ZykelFAuhm79629YoikVcj2Hy0fu9nulfdtqGWPmoJum8lXy0Z8K7JHhO+ejx5aPcJOlyub7J9EmSYPCZ8A4HXdefYQFWS/noatoG3b9YbYPFrHwE+ShUFlx5RFGsmeWjEoq1r1spHx0hH8UoklU+KqmvreWj20fKR/VBVspH7W1ds2wooViPiXzZfugbU4IJViv5aK9zaCgWFWhZ6FUkxdJvoWN/7ijy0fiEd7Qz7CofxSnWGG0DFHycRT7KUyzsX8pHNWWW8lFTgCR21HmhxkzyUSvF4gzvnZPcz0OxbMuEMor1+bpaPtqCYkmv1Sry0fiOb3b5KPhI+Wh9jqHyUTzwSvlohHyUp1jHkI/KziHP55pVPipr/+T/JMUqaS40Odr+Hh5gHVE++jiXNNq13FVYaxtqigUPhCkf3fysko/CrrL15aO0tuGY8tFR2obHICmVjyIUi1120GobUj4K9avgXdopHw0+bqR81LuFDvx34KVzqp8fQrCwWYYlWo/QNljylaIT3mmywstHW22hEycf3Tf6meSj0cHN3NqG3W+Hk49qg6oo+Shdb3D5KFSnMW0DRbGg16RBKkWx4LJK+WjKR9kzLSEf/dQxvMkoVvWN0MlOlyXCY2gb2spH4cDKpm2IpFjx8lEPjfTJR5/XNuWjI+Wj0cHo6vLRB8XCZtKcfFSyNOiVj0L7JOr6kP7ahpSPtqFYljF2Dfko+fY3imLVQRacizWIYMVQrG3jmVHboCFbEFmRJrxbKdbR5aNUwKwp1+NQrDHy0VUpVg/5KJbwTslH9+2w1jbMIB/1rhT4yzrlo9rx7kzy0e3fkFBs6cSkW4A1gmJFJbxHfGZrcGXXNpxFPirTNqR8tIV8lL/DKuWjss9U7Dzgko+W2oY99eIpVpS2AaBgP7E6kPLReIoVFyDZx90V5KNaioW1h1rbsN8IejDBiqdYUbOkFvJRyWBPROYpH1XPYHH5KJef1Zditdc2GCkWWq+I5ajv1utzdPkoRLE88lHO7C4hUhb56EraBtlgeg75qPS4M8hHgRtS3iRePAvJahpgpXxUT1FaaBtSPgp3unPIR9s+YihWXaeoQNxKsY4sHy2IlVs+Wre9PvLRTX1+B55L+aifYqV8dIh8FF2OFFGszVj1o+tWOZHaBk9BRWobtIXbSj6K/PXDyUe1jTXlo1ydTPmoZiBcST5K96cpH035qCpAclIs3+TLQ7F0wRVdZ4AJ0u+SicoES4R/fHzRUqGHYmkLP5JipXzUF/git4wfQj7aI+HdJh9tr23A68Ma8lEtxeIHL7xOe7QN0oAm5aP4ZPXM8tFeFMsKRDQ29hiKBbeDbRt4fP4uAVavhPeIQtNqG1I+6qNY+OfpKx+FyqcNxZpR2wBRLKgcUz4qnfFeDPLRx2yda0tW+egjcLZRLFjbIO9P+slHf/z4GG+i5aOOwT6cYo3UNhxXPkq26TeIYnF38E5CsOQUiy9Qn3zUG9BZgqmUj6LBSDf5qIZ6+SiW/piUj7b83j6KFScf1WkbtBRLGqTqafR88lG4DPzahvsd1jaMkI96+pTzyEctwdX1zdbvl1vofLSBbgHWkeWjmlnwOPkon/A+g3yUL9uUj7ahWFgQn/JRaibMdOgK+eh+ti4hFlwullU+ilMmTD5aaxswirW2fDS2PrWmWHHLfNbAbLR8tF7Jkd2wcH3DKFbx6dCE90c/PxHBiqFY28Yzo3zUSrKKwd4gH8UHQc1xKR89GsXyy0fPRLFmk49CFMkrH5UQLn5VYO8E4sp8dfnojBQrIpCaUT4aqW3AfiZSf5gga//oGmC1pFgRt4ZHJ7xD9EoadO2PsyW896JY0uvSSttQzPinlI/KtQ3ryUfxO1RTPnpRaBu2z0ETh8+6/ztMsmj5KKRt6CEfBQbq6eWjGoplVThEBVkzyUe9546ICyLkowzF4j7t+0Si0TiKBZwnVD4qIR8SwZ2FYiGROatt+OxoDyoffQZZXLnOIB/VdSQpH+1BsYjr0Vk+CtdriGLhdwjS8lGkbzidtkHyvIZiabQNRorVqI+xBEhet9ZqFAteHdlSrM+8LXSpsHuAlfJRK02xUqzquIPIRysipNY2pHyUG4BSPiqUj3LBWATFquo0dOegTj5qHYzX1Tb4ttCRykfHahtSPuqnWIJ2Di4Vbq71+5AASx5ktR+cI+WjGm2DNR9LSbFeOIrVQz7ai2Ipyi3lo3BAIZKPaihWGawcWD4qoVivEMWCj4XrNRZQWeSjm6XEcIolC6r7aRuwgRKSj5YT1s/jlPJRth6lfHSJLXRIiiWYeFzfJ1wihDp8eWGOko9qomVtkvvzfRDF4rUNNHF4dhKzUKyUj9LnGCkf9VAsffBdB+ILy0exTvlVQ7Hm0TZ4KVY/bYNEPgpTrJSPYiTsCPJR+bJhvVchTLHqx7AAa6S2YSb5qJ5i1Vs9xFAs/WziDPJRPOg9r3y0F8VqkfAeQa8kHbRcPooFbLB8lGq3kfJRSdCFyUfldGJfv1trG6QUK+Wj+rF1RvkoRLH0wRVveae20ZmYYMVQrO1g0UY+KsujoQSiHo1DNMWSNeTzyEclQbKfYumPGSkfbU2xWia8a5KdrRRrvHy0XCqMp1j00p6fYvVRc+i0DTDFSvmo7Xxx8lEPsZYFV39Melg/1jPp/aNtDg2wZpePem5jjZKPwk4smXx0m/AOU6yx8lFvAxJSrKby0bjZ55Ly0ZdIijVa2xBFsRia1UE+Sv+rqRdPsSK0DTBV669tiN1CJ+WjURTL9h2vb9L3Se/yp3/W7Fd4/X1ygtWfYhkLuZl8tDy+DKw2g71Q28Be727yUSzPhm+UcfJRTNuwAsWaS9sABe06iiWjnykfvey0DXb5qCdI5SkW2G5/SAbbvtqGlI/aA6T55aN1X/1Rbrbgqt5Op/j/rfzbwwOslI/qg66Uj0oolk/bsIJ8NOoRo23QeYJSPsoSK5F8FKNIK8tHt48V5aOa+mR8NNM2WPrhs8hHOaK8GWv+eG0BgmWnWMB5vrYrdFnCu0c+yjfkPvLRSIqFEQobxZLLRzfvIRPeucD4Ua+OIB+VJbxTFCvlo5+PlI8uLR+t67uVYpX1fXb5aE+KNU4+GkGxcIXDdlI/RYDlkY/Ko/W5tQ1lgY+Xj+Lahv31mFc+aqFYWDCFaRu8gdVM8lHZAJTy0ZXlo4+lwpSPUhRrNxhD2oaUj17OJx+Fz3N9o5LfpyFYvRLeI9BlC21Da/kon/Duv06zyUeZGY9a24BRrNbahpSPgldJRbEiSMgR5KPlseW5ziofrcuQXvo/k3xUMJFdUD4aQ7H2k/maaC2yRAh1+PLClFCsOG2DrmFbgiqLfFTwiVQUa//9R1KsKzOTi9M24HlYrTo++TF95KNjtA3EgPyqaacRFCvlo8eUjz4oFjIYn1o+OhvFos8lT3iPoFh1O94HWlMFWLNrG1pQLGoQlwddUdoGf0NpJR/VLdmO0zYcWz6KBfFVYJ7y0ZSPou085aNHlI/qJjuR5MrariVL/TqKVeZnXd8WI1gxFGs7G9d03jPKR8vAajPYf9MPujFb6EwuH71wFMs7+B5PPipOeE/5KEKxRslH8X0K55SPQrljEQGyvOxTPqo932j5KHAeIcWS5s/pA60pCVZrijVa29BSPvqYbWkS3leRj9o6hpSPxlEstE6lfFRIsZhZs0k+Ck0cqNyqOeWj1x/1edaXj0ZS0XUoVsxx0YGiZXJMpYJIlwun8GD1pFjAeb5GFRTwaX5oOnbrdjnMnSvfZDNnvbaBOy5CPspRrJSP1o815aPzahtmlo+Wk4ZW8lFN0rk10f1o8tGVKda55KP3F25C46FYUwZYfSkWrm2IpFjSWWkP+ejn4wX/vB6KJXVo6YKtlI/KKFbUo6981E5Ge1Css8tHJdc45aPyQTflo3Hkiv6bsrsKNa5KPtC6/na5XH97/L8owdJRrNbaBi3FitQ2QIXfi2JZlvGOIB+VzHRiE97RzjDlo5eUj8IUC/uX8lEjsUz5aAeKFSsfFfdrL5qEd2DrnE1QtcgSYaR8lC/sOeWjtj0L5RTrkT8gp1gpH8XKSPIex0xMLR/to22QUKy6TpUDTMpHY+WjUMI7TbJSPmqVj0I3eKR8NOK4ubUN0jY+NcE6u3y0LLho+WjZMaR89Djy0cgEWot8tJe2oXilG8XSkqie8lGsjVi1DSkfpSjW7mfxpELYXlM+Oqm2YaNj+I06fuElQqjDj6VYq8hHZRRrG2TVaDuCYu2//7zyUZxiVQNbykeN8tE6eJdTLH3wXQfiHrrVQ9sg7djhAWst+SgiAD60fBSnWGeSj7rdWqoJBHGkgGLtJ4ER2oYl7iJM+ahW14DLR5FBcBqK1Uo+KqBYKR9lgqyzyUdbaxui5KP7eq2Xj0qWBr3yUWifRB2pgLUNo+WjZX0vKVbKR2OOs+RcQUuFkusu0Tbsf77/ih1zEIIVQ7G2s/Ee8lGttkFDtqDASpLw3pJi9ZaPKrfQuXAUiwqYJZ1lykfjKdYRtQ1a+egzybaeNEjko/u2VmsbZpGP6oODyDLGKNau/FM+ilAsXx8XJR+V/C14f0IXwfp3/65NB7wKxRolH7XMgi3yUW3CO0yx7NoGa4ccTRkt8lF470eLmyzlozTFgu+wiu08x1Is6nivfJSbOGjko1Bw1Vs+er2Ol4/W5fFMeLdtoeML4HtTrLhlvniKZQ8UZRSLo1s4zUII1gpBViuKBZznq7VyCIo8RD4qGezx80q30ImRj0IUS1pOo+Wj25k2Jh/l8rNmoFjzy0clQdd5KBZT2iaKRclHoTsKuYE3Qj46s7ZBKxYuKdbq8tHYAGkW+Sj9+mc5vFB9NzzZqZcJH/+WWSL0aBv0FKuvtmEW+ej9fnkhcmOayEc9S4YzyEe5QDiCYqV8VBNY9aFYveWj+N/Ty0epff96ykc3n/cdeG4KbQNGsaLlo40o1nBtgwV2IEHabxF9J0WxsCALW8nAqBWY5H4EiqXpPGeTj0oaW2v5aN24Uz6KUSytfDQ+4R3tDCeRj+61DRQdTfkoObCC2gZqpl985zcsoOLko3R/mvJRgXyUnFR0oFhdxtfWFEtLriLSCZiJD3Tn/q/QcTuCNXuQxVGsusO3XfQIbUMritVaPnq5aClWykexMmrbuc0uHwU//ynkoxJtg2FDaOIz1RSrrNNR2gZpQJPy0ep1lXxUfwPEvBRrhHw0imJp2jH0b7m7CM+obYiRj5baBpJipXwUHBBk8lGofNpQrDHyUVrbkPJR5ay4IcXSaxvKSQ59rc8rH4Up1kd9T/noePmoty6UQRY29u6fqylWFWCdOeG9r7ZBN3u2ykeZvCBQPspc28nko9JG308+qqFeMR2f/Jh22oa63RRHpHz0Eisfvd9jtA1aiiW9hkeWj/IrDikfxUjYDFvoSG5wkmgY6kn0M8hakmCNoljx2gZ4iaeltmFLsZCzLigf1ZeJkGKlfNRMsXbPp3yUp1iSoKqZtkGSi5Xy0ZSPxgRIMce1IlfyoJgKtp53FYIBVlIsejYeV4gx2gbNEpVUPjoLxZKVUX/5aH3NUj6a8lEdxRopH6W0DfuAZR75KJYDlvJRP8WKAhGyc8TLRy2TbKmmpwyyuPb8WX6/kgRr9YT3I8tHe2kbaIrll49KkL+FYkkH30htQ8pHyRor1jakfJTsvMXaBtlAUss/JfJRSNvQQz4KDNQpH+1IsWaWj7bOsbzf7y9ygvUkWbeetzDPTLHo6zCXfFQ7uNOzbA3FWlM+Wgw2ztkTTLHKpcJ5KFZ7bYORYonrVcpH2dJ+hT+PTNuglY9KiVTKR49FsWIDpDHyUSvFepSbxOy+fe62bWjHpFjttA0+PGmf1XKF2o5iVcctIR/lG7+fYmGUcbx8tO0jRj66r1NcQJXyUT3FkmgbyrEg5aM1xfLIR/cU664iWikf7UertEEW5ci62WbvqwVZsYVtLXSttkHS2Dx3Eo6kWHZSlfJRedDVj2KlfJSkekPkowTFQtuIRT76fD7lo3L5aD1R7USxQh+j5KPjKNYjyJLRrBt3wTLhnaZYnruZuNci5aN1JYApFqJtUFKsfcK7hWJFkC1fJ3EM+WiPhHebfPSPwTjlowbCJdU2aClWC22DYIIZJh+dS9uQ8lEvnODbuU0+qgmk8f77I8iittC5YV9qJZp1RPmopiO3k6xaPkp8vZSPggOCXD6KB71H1zbQt7FLKVYZdKV8lP8bNcWaVT4Kaxvkg+2+fqd8tBepWlM+KrG7c6kfzz4LDrTEHqykWLvzTCsf1QRaZcS9GexTPspSrLIByuSjkiA5ruPrS7H47wcnvHsolj74rgPxM8hHickDqW2AlwpbyUdRdYpbPvqnP6V81EuxrOPWbPJRa59B0a3t5LAcU2/SP5raBj2JWUE+Gq1t6EGxZpKP4jca6OWjcbPNteSj+7qV8lGNfBQenLm/L8s5oaSjUGBl1Tbw8tFa24BRrLHahpSPxgRc81As3bj7QbO2z92sHc6ZKBZwniXlo5J8ILt8FPq868tH5Y2ulo8+gqxzUyxe28BtLu6lWCtpGyCKpb0jEZKPWikWRJEg+agnSKWDLqxMZfLRvtqGlI/aAyS5PqcnxbIFWx9J8JfL/eWm+cNJsXpQLNssWLJMiL82p3w0kmJJG2upbfj83SQflZDF41Msi7bhvPJRQ6K7SNvAUaySInG5GYRMAAAgAElEQVQUS6JtmEE+un2kfPQ4FCuKXLXO0btZL/Sqj+s15aNYDpaNYrWTj/qDLY98NF7bIOssbQnvM8tH8YR3MIAX1auUj8IkAiZXbL1+4wIqTNtAX/vjaxvOLh+VTqZlbTNG2+D5DuVNINTflIyx6s2eV6dYdYfvIR/95KMabUPZWcsCrZSP0q/1ko9GzjZTPnoS+eglgGKx2oby/8dSoSbwEtKQMG1DD4qV8lEuqNcFcGPyr+IJoopgrUSxRmobWslHNQXeST6q0DYcXT6q1zZAgdfmujfTNqR8tC/Fwq9NO/koRbG08tE91dpTrO1r0DlaUSzZ4PlRv1M+2v+x+hY6evEo/rhZ3pTaht15ppGPWoIqnmK10TZ45aNaQtFWPlp2sLy2oZ98VH9MH/lovLZhNfloKZCMko/u38/LR6GE99byUT7g8VIs/G+sKR+Fg6wjbaETmX/Vu08NC7CSYukqhQ9X9tE20PJR8jFMPjo3xbJpG84lH90H8UQtPqx8VJq/01o+Ct0py8lHpVvoFIGz8k5CTNugo1jQ+VsnvNMUyyIflZOzXhRrXvnoWIqlFo0mxZJRrKhAdP9en7ZBE2hBgVXKR+0UyxKopHw05aMEsZpGPrpvf/EUi17a81Os1gnvKR8dQ7Ggut0imJS2/1vEHzsjxZpd26ClWPtjUz6qoFhibUPKR9UUK+WjQfJR/u/PJR8t21R9HC0f3RC3lI8OCDQC7OyvlrbqJ1cxFMsVYB2JYh1V2zBOPlovFaZ8dEcTlpGPttI2tJWPHk/bAFEs/R2J8fLRMhdLIh/VJJ175KMSmpXyUT3F8vQpK8pHvWDp5v1jx9A22C6oNdmupbYBIie2oCtW2zAjxbI21lXko3JtA0yxoh595aP6tnkk+ehjkGwhH4UCqP3/vHxUco1Xl49S2oZF5KOvun4FD5BWl49SFEvSb9wu+UAplv6i+imWV9swq3zUS7FGykc3HYZhRsRrG6jA+FGvWpmbzyYfldWbdeWjm+fC5aPbn1M+6qkDtLZhAorlojaxAdIY+WgEdAkLsFI+uutAptE22MjV9n0t5aN+bcNI+aiVYlGkEXNkRXYIFvlolLYh5aMcVbIRq2j5qFfbkPJRTj66C6xSPhoY6M1GsVwB1krb54yUj2oDqxby0bLD1eZjbTQOQfLRmPqW8lHLddTJRyPpWcpHSbIxRD4qmelz2oayLaZ8lCWWKR/tTLF67V+4fT1siTC1DbvzfPUUSiTF8iS7bylW0ZhPJB+N0zZwwUqL7XO8dCaaYjEBV8pHEfmolXBJ5KMtKBb0mvQapny0ev2FqitlkJXy0RYQyEaxTpWDdQxtg29/OZ2uoZaPImcVahv8A31/ikXP9jXaBot8tOhAUz4qoFjlALSCfFQakM0oH8Vysai7CVM+6pePajQcKR+NlY9Kg8tb5AU9M8UCzhMqHy3O9MNDsTRka3ssTrHE10QlH7VQrAnko9R5Uj4KDzRSbcNh5aOQUHIV+ShEkSBtwwzyUegOyPj+mSpjXj7KUyzXUmFTiqV5/WjyUej1091FeFT5qOZzS4Ot/WspH42gWHUZpHyUqKlCbQOVe3VO+aidYuETB+o7Y+SK3hy6h3z0+qM+z9zyUZ5iuWhoykc7Jrzfoi9wykflFCtSPkrMcFXE6uzy0d4UqwyyZqdYI+WjxLt/pb/L+eSjwPtevRRrM8io5aPUQNxWPiobPFeQjwZSrJSPOr6DBoI0IVgpH93+XCe8RxZg+ZpU22ALumaQj9ZEYh6K5dc2pHzUSrFSPsq9FqBtuEAJ7yWZSvmohGLB8lH5Fjq+AN7wcMlH4yhWzHG+uwVpstvkLsKVlA0eihXx3XvLR6lAaz35qD94SvmotHOcRT56bG3D7PJRaNIA7TnIJbxD1/Us8lF+1436RqIjyUel6TSysTJePupdKsT+ZrMcrJSP0hTraPJRRNugpFgpH8XKKHJWCgSYk8tHwc8vTnhfgWKNlY/OqW0QTDBPIB/96E8x+egoinU0+Wh0oBl2F+HKj9nlo0JcOYV8lPiTL3KKFVPJZ5ePft4SL5KPQuWz6aBTPnoQikWQDbN8lBskBVfCpG3Qykcf5ZryUUg+ivWlYylWTJ8znmL5lg35pcJbZEdZ/oGUj+7O81VfCdpQLE/Ce8pH943bIh/dHMfKRzXUK6r+SI9J+WgvimWTj8ZQLL22AV4qbCcfhcvtePLRYvkw5aMXb/6VPL3DulR4i56NJsWK7cit8lGrtkGej5XyUQXFSvkoE2QdVT4aQUJGyUeZiQP5nbl/UoolC7r88lEs4Er5aMvJ3Gj5qKWfB/tNNMi6RXeWR6RYGm0D01VOq22gAq3ytX2ghVEs8TVJ+eidL8sWVCvlo7pgvQzEPW13Bfmoh2JBFGlm+aiUwMTUbSnFQiesAMVK+ajtOPkenJp6AuZgnZVkRWobPBQromBbU6wYbcM4+ajnHP3ko/JcuJSPbuuWVNswh3zUE4hxAVQMxQLzDVFtg4Rica/1kI9er3PJR+vySvmoos9tKh+Vf0c4R/HWosM8E8XSd6h+iqVJeLfkYklewxvv3PLRFShWykflFEtSr+DvMl4+KqFYxfXoLB/dbVbOahukuVgWkaj3PTNrGx4Uiz8u5aPwcfHyUQvggCzvt1az0tWCrCNrGyQNPFo+GqNtkF6PlI+mfBReKkz5qIhmkRTLq20o/38EWa3lo5v6/A48l/JR/+Ow8lF7cLgPsk6taWgx24+I0D13LvWQj3JCTEbb0IBi+YMnq3wUplj95aPxCe/obLG5fDRa22ChWLJ6s758VEKxqJk+V2cgirV9DTpHykf39T3lo5Lj+mkbBBPUNzbASorVjmJtG0+McM9Wwa3BVdmhlxSr7ux98lENxfKQqogAeJR8NH7yME4+aumLjkixUj5qaaPHkY8WgVXKRwMDPYu2Qdfvf/T5SbCUQVYLitVD26BpbDaSVc624uSjVoqlDbagu8WE2ya8amf7cJD1pFgabcPR5KO0tiHlozPJRyUD6FY+KqVYj3JN+WjKR3tQrBhyVQdZt54XbAWKJWwOoRTLS6IiGrYm0V2yX+Fx5KP+hHeaYlXnebcEKsfXNtDtJuWjPSkWnPAukY/uqVXKR3vLR6G6MzPFmkHb4NF4JMHqTLFGyke1A5o2uOqpbbATB5/mYYy2QS8fjZsgpXyUfz9MsVpqG1rKR5U15E0aFEnlox5tQ8pH6z6UW2oeQbFWko96Ju03C7ZMiqWTj7bWNhCfUhRkRWyhg5/XIh+FvnssxVpNPvoIss5NsdaSj3opJP+8StsgCcZevRRrE5ij8tH977V81BukWuWj0N2PFmrhLfue8lFpXYmmWNagpSfFilgq7Eawei99taZYnu86Uj6qoVdU0IW/lvJRmmLpE96lNyMcn2Khdeow8tGG2gYJxRL8DZ18FMu5mlE+Cnz+wfLR54Qi5aOqPlclH5UmvLtN7j0fKR+NpVhebQOWr2HNwbJRrKPKR+O1DfNQrPbaBi3FktQr+LuMl4/q6dbc8tHtzykf1VIsnjClfBTtl5rflSgJsm49qVNqG6jG208+Km3g+IbEXKCV8lH68x5JPtr2kfLRUIolfs1JsUzahpSPpnw0jmJFHEdTLMkjk9ydQVbKR+l8rI3GIUjbkPJR2fVO+Wg0xZLVm3PIRzGKpdU2lO1tTvloP21DykdDA6QmdyVqlgpvvejVqhRL2CxOLx/FKBY+W9ZpG4rnlpKPtqJYUDm1bKtQoN4j4d0mH6UT3lM+Sgdj8Hn2Ce8QxdrWaUzbQFEs6DV/X+iVj/bXNqR8FKtj+vEtOuFd831u3C2z+TintkErH4WOOZp8VEOxtvJRPcVaRz66eWUy+Sj4aVI+enlSCa18FA/6afkoRqTqXKyW8lG/tgE7f3SQJSCWZML7JeWjYool+7v8UuFUSe5n1zYwzaqhfNSnbdBQre2xRWP+FkWxestHt41WmhhPN8CUj8YNQCkfXU0+ClGkdvJRlFC4KVZ0IK2Tj+7rO0C5Uj7a4DhJubNJ7j2DrNUplpVa9aVY/gFtpHzU+z1SPnpkirV7HqJYLxKKVQ440fLRthSLnzBhFOvc8tFa24BRrLHaBjnFSvkoPNF1kDD1UuEwggU9Utsgp1gpH21DsVI+uiLFEstHL3qKJdM2EAOy2McTRbEk2gYN4eotHy21DX3ko1D5pXw0YJI0kXxUflcicQ71UuHQACvlo1YK0p9iWZYJOYrFaxtSPkpRLAlZjKJYcm1Df/moRNuAUyx7wrt18pPyUVw+Wv6f8lGdtiHlo22WAzWfeYjJPSmWthCPLx8VNvWUjyIUC1oqpALjB+WJvtsQGoSg11vJR/GEd4pipXz087mF5aOjtA1yKtaqjGnalfJRjGIFkLDfNEHW8AAr5aPU63PKRz3aBrzTT/molmJRpJEmhq0pVttHykdDKZb4tfp5XtvQVj5qnmA6tQ195aO0tkEjHx2vbZiNYmnOoZ0cD01yX/kxQj4alfCupVhYY7PcVVifa5x81PrcGPkorG3AKFZf+ei+HqV8dA2KFSMfxX5fWz4q61P7yUcFtYCTj06jbZhdPup5bdok99Q28BTLW0kjKJYn4R2Xj8ZpG6wUq598FBfnabUN3AwTz8OKbauWY/rIR/XahpSP0sFYS/ko/q+VtuFU8tHLTBRrJfko/ppsqTAJViOK1SJCHy0fpQZxWnRJyUfrQdBGsWLkoy0plnS/KzjI2i8VWuSjRWB7cPno7vmUj/IBVzf5KK1twOWjRNn8YtsAeh35qFfbcEn5aBjF0gRZ0wRYZ6dYq2obNGRrH2hhFEs8fDSRj9qXDJvIR6lyS/koPNBIE94HyEflHfvE8tEu2oZ9G6u1DV6KRS/tzScfhcsn5aMxAZf+s2xe+Y16/1QEK7UNto7c8r4W8lEq2Nq/lvJRSSPlKFZdBikfJWqqQT4KDzje5cEIr5M1oGYCKJW2QVlDXPJRKLjqrW24XK4/6r+d8tExMUGMfNQ6RkqOnT7JPbUNsRQrUtswTj6qS3hfTT7qoVhlkDU7xWqlbYiTj0qCLhvF8gRPLeSj1Ll7UyyJtgEb4DRJ59ZE91m0DS3ko9v6zclHe1AszesW+aj1/MV5UMv7dAHWMbUN7ShWb20DRE5sQZdVPiobEDXX4yjyUYouzigfjXrEaBvWko96AjEmgBouH8WDFU7bQN8k00s+un2sJh81TMwOJR+1tz84yLqttix3ZooFyUe1FWqkfJQTYqZ8VCcflWobqMD4QXniEt7RWd508lFJvfJQrJYJ7zJPlZliNZWPfn5vg3yU9mClfJSiXSkfbZvwDgdZt1aVICkW1eHbKNZ2sLDmZUXMkK3BVdlRt5WP2rUNccFWW/moZtDtJR+13JkapW1I+WgYxRK/Vj9v0zZo5KPYa77B+ZzyUW5SYa1PmiDLQrEi9hiMCargIGsXYM0YZK32aCkfnVXb4JWPwjkjUfJR+6DmXzIcJx/lEt7L8tl00MPko5HJ1CkfXUE+ul8qxNpuykddtUAkHy1eX0Y+Ki2XKIqlgxjX38C7CGcKslI+yjeekWUXlfC+snzUm6QZLR+1EI2Uj6Z8VPJajHwUTnjn5aN1wjtEsaTXkKJYcLmlfHTbBo6pbahJmI+MfQRZU99FeGZtw1Hlo221DevJR5EyGKZtSPloXa9SPiobJHVBvE/b0Eo++mhTHvkoFnCtLx9lJ27TyEetx8UtFX7047eVgprUNsgp1qzy0fI1/LznkI+WFCtaPtqLaqV81Dr5mUc+ShErhl6lfPSqmcRG1u2q33TLRyFqdRaK5Q2qRFvlzLxUeCaKZSFTnve1kI+21zakfJSiWJdLP/moV9uQ8lF7kGUdlAU0K0g+qtE21G1OIh+FtA2t5aPX614++qjfK8tH9xRLXW+mlY/20hdNuVVOUix9YUPahtnko9LXMIolHDKYHIKUj/aQj0ZMIlI+Ghs0zSMfxbUNGMWqAyhaPiolUt73WCZPKR+No1i6MVLbL/kp1va52wrkKOWj1OsybUPL6B3SNmhI1vPYOPmovVHqtA19KVbKRz0UK+Wja8pHqaDnEWS1lo9u6vP08tHP7/3FQ7GkdSZQPurSNsRSLD7hXbxVzr/92/3P//Zv9oAgH6Mplvy9+iVGu7bBKx99PtdePuoxvfeSj0oH1ZSPkldniLYh5aM8xaLko3uStadY29eg63pG+ShcjrW2QUOxZtc2xMpHbZ+D3CoHCrSSYrWlWFZtQ4R8NLqCR8tH8c4i5aMUxdIMuikfJT9/ykcHy0fLhPd9oOXXNggmmAeSj+5KZ0Ox/kh4T/noxe/GYpPck2b1DbL8FCDlo3KKlfLRlI/6KdaK2oYV5aM4kdLJRx/lmvJRSD5a96Vnlo/agzr4AeZgzRpknV0+Ok7boJ/xHlE+6qdYsFQ05aNtKRYTcIVoG1agWFptA0esUj7qk4/+6U/jKda2P01tg6y/1nwmNMn9EWTNvk/hkSnWPNqGlI/GB1spH928kvLRy0j5KD9h2jyWko96tA2t5aOXyzhtwza/VScflbfP8fJRae6rL+GdOh+paVhhuTC1DbEUq7W2QZvsjlMs8fBhplizyEcFFOuioViPIKs11Ur5qJ5ijZKPShLeo+WjHMXaBOaofHT/ey0f9VxDLqhK+ejsFMs+wQ27i5D7pjMGWUmxdB15b22DNujCX2snH424Q6SXfDSaYknIYkmxourvceSjVML7OvLRHtoG/Jw2bUMZQKV81EaxtvV9dYrVQtvgXSpkCdbj8f/+39wkKynW7jxfLQFZS4qlIVpQIFBSLGH3nfJRhGKlfFRNscT1ajX5aHE9ppGPUtqGXvLRY2kb/BTrDPJRD9WCnhOb3GcLso4pHx2nbegpH5UEXM9j9hTLo22wd2QpH035aKy2QTPh8VCshtqGpvLRbZ3m5KOQtiFCPgq8wspHoTqe8lEzxeouH8Vfgyc8XJtWbZUzO8lan2J5Bi1/p95a2xAhH4UGQA3FouSj3ru/Uj4aUX/by0ejtQ1eirWStqE4Rw/5KPm7RduQ8tF9fU/5qDxQ006kl9uL8OgUyyofBar014hKGtnAbcqGlI/ybeAY8tE5tA3k50/56MHloxJtA0WxNPLR8m+kfJSmWF5tQ8ulQeyhDrCSYrUPsqwFvZJ8VK5r2C9RHVk+aqFYgvcuIx/dvDJQ29CPYsnqUspHuWsE52LBgVVRNr/YNoCGtQ3y/nVfv1M+OgbK2IIq3VKhiWDNFGSdST6qJ1vzykc1VGt7bNGYDyUfZTrllI9eWmob6HbDaRtWpVgd5aOvcopl1zbs291zEhZLsbByS/koVHdmolia8TBiqdC8RJgkaw6K5enILe+bUT7aS9uQ8tGUj1IUK+Wjvr/RWj4K52elfDTloxaqxfsMXQHWXMQnKVZLijW7fDRoSEn5aMpHG8pHZTdUaMr+CBRLKh+ttQ28fBTSNmBBsCbp3CofLYM82fniA+Y4+Si1bdSa8tGI85rvIpyZYqV8VEejRspHLcuEKR+Vykf12oaUj3LnjpCP6tugpcOPaKPSZPWe8lH4u9Hy0fJ/r7bBKx8FPv8y2gaYYkmC9HEUq4W2oTwPd8QhCBb0SIq1O89U8lHJYH4E+ahuIJ1f2xBFsXSBQ3ttQ/GNUj66p3rd5aNyirV/LeWjWoolKUebfHQGiuXto2WTGnr1wR1gZcJ7W4pl1TasJh+1aBtml4+2plhE6TTRNrSkWN6cvrEUC6tTKR+V/41nkCWgWCZtQ8pH+8lHG1KsIfJRa5AVQrAy4b1tkOWnAPPLRzWBFtyQ7doGG8XSBUqrUixqSTE+4X0cxdJqG1pTrPPJR9Gr8pv2Gq0nH/2o30eWj7bYZitCPhq5EXfoXYSzPs6U8K7HpPNoG7QBVU2yVPLRi45inUs+KtmTkDumFcWaVz76R/1K+WgD+WiR/P4bRLE2ZOh3mE7VS4UQ4ZJew3byUfxvHFk+GkGxWmobdOeFJz5hAVZSrDEUa1Vtg1U+uj+2THhP+aiw1uzko3UZ8NqGlI+Cy/ApH720kI/urkCYtgEpm1D5qEbbgJ0/OsgS1AKRtuEY8tHYpcLDE6yzUSx90DWvtkFDtfDzpnyUp1jV0e+WQCXloykflRCrFvJRjbZh3+6eCe9RFMuqbZBSrOhAWkex9vUdCKwWl4/a2po0YAsNsJJirUuxRmobIIpFBVs0xSo7iZSPwkFWykclFMunbUj5qF8+qtE2SJLd+de08tGyTdXH1dqG8jwpH11H28CPE8/zHVbTkBSLPM9U2obV5aPQYBkhH5WVTRv5aBlkyQfEY1Esm7bhGbRDdSTloxqKtXuepVhloNVa2yCjWFD5PeWjkslaykf9FEs3RsYEWeEBVspH56dYVlKyinxUrm1oR7Figy1t+fnloxRdTPmohmIdQz4aQbG0SfM2igVrG7D/Uz66vHz01dPPUBTLfxfh9bUJwZp1qfDsFKuQZX7VzZb5wUCb8O6Rj1IaAWIAhD4Fq22QXZd+8lHoOCzIai0frZ8/hrbBT7GOJR8tiAWrbdAQrlby0X0QBVMsOhgdpW0YSbGWk492mZxoj308DrtEiF2EM8tHgWbzdTT1swZXZYeg1Dao5KPya3I++WgkRUr5qL7stTP1FoEYE0A5ttCRyUcfQZZFPoq9ZhmcuTYl1zaMo1iPpUIpxTqCfFSjbdD+3izAyoT3tkGWvzLNKx+tg6eUj2oGIz3F2msb6ms/Uj66r0cpH4Ven34LHbF8VDYgbykWnvBeUqyHfBTbvxApm3CKJetHxshHkbrPyUdfpBRrRvmorb+VfYbDE6wVKZbsO82jbYhq4N6Ed5hi2bQNveSjsRSL23w0TttAB7ZtO8g55KPwUmELinUi+SiZ8A7LR3ffSSQf3VOrlI8GyEfJSYXhJpmB8tGY93a5izAp1hwUy9ORW95npVjUIC7dDDpO29BHPhpLscAyoChWahuYIAunWPWgA1/nlI9iFEsTjCkmDikfbVDWPeWjn4+p5KPWIOsUBCsp1jHloxhJqc9r0TacQj560VAsC+E4mrbhfhcnvKd89DIfxXpQpP3vc8pHqXywVvLRot80yUfxSYUs4d0xQQqlWEvsRZgUa12KNZt81KptsFMsv7ahFdkaIR+9XPQUK24ycRRtQ02t8N/bUqze2oY4imXTNkBBy1zy0esPwIe3nHwUp1jy9jmDfFQboEGP0xCspFjry0elr/koVoy2ARostXcSUhSL/gx+iiXRNsxOsebSNjyDdvq7SOuXvOy1gdTs8tHiebG2YX75qGzCm/LROIpFv+5fKuwSYKV8tC3Fst6SfUT56PNYq3y0HhDtFMunbbBSrAj5qGTQnV0+GvVI+WgcxboEyUcpigXlQklpVcpHjy8fjV4apM7fjWClfLTlI+Wjc8pH/QEptIWOVj5azvZTPhoRSKR8tLd8VEqxtpMGibZhMyH6RmkbUj66DMUKnEDoKdb2uVMtEWIXJOWj+8FwNPVbQz56F86sxstHiaVbMcXibiSYWT7aR9sgoVhYnUr5qCLgV8lHn98R0zbI5KNWcki1qS3Fmlk+qqVYe/no/WU0xfInvNuDrK4BVia8tw2yLNTKQ2DOLR+NuVHAFmz1l4/WwRSc8F6Wz/Mc4+SjkTPjlI/Gyke1FCtKPvoMospcrJSPyiiWVD66qx9DKFYv2jXkLsKkWD2/U8pHZ5GPaimWtIxmlo9SQXHrjm9m+egRtQ0BFIsNwrYkorW2YR+wtJOPwuV2bvnoLBSLft22GXT3ACsp1hwUy9ORW953FPmoZcBK+ei55aPAay9U2Z5ZPiqkX5Kr8ka1R02yO/Q+q3z00aY88lEs4Gq1VMhNxIm7tE3yUaJ8u2sblriLMCnWehQL0jbMIh+1JruXFMswrHTbQqeXfBQajPBrBslHP4Ks1lTryPJRrC7NTrFWlY+WAROnbaAt7/p265WPSgf3qEBaRrF2xywrH2Vazqu2rxoSYCXFakuxemsbestHqaALfy3lox6KRXW8XBBcUqy42WXKR6Mp1hHloxBFgrQN2P8j5aPX69zyUf8WOvL2OYe2QbZUeOq7CI9OsTzaBoxizaBtsOVgUWbylI9uXp9ePhoRIKR81BZIrSwf3U4aMBo1Wj7qvblolHyUKP9DaRuW24sw5aOtKZZN2wAsgX2d6XrhSga5fBTv4I8rH6UoVjnj11AsDVmcgWJFPVI+GkexLkHaBgHFQhPecVr1dGO1lI9uPlfKRyekWMWrr9J2M5RgpXx0joBydm1Dyke5TpuXj+IUq418FKeGz8D9PPLRftoGruyPJx/FPh++/6ZOPkprG1I+uq/vR6JY2qVC6D2nXyLELsyR5aP6SjePtsETXKV8VFJmMfLRspwkA7W9rs4uHwU/f8pHbfLR11YUK+WjHoq1e56hWGvIRwWth72Te3iAlQnvbYMsaxQ/q7YBVwZokt7LhHewQ0A7Bu/3P5t8FDfun1M+Cpwh5aMXsXxU8Tni5aOEUiPlozzFml4+GrFP4fC7CJNi9fxO81CsiM2foYBJQ7Xw826XCuPkox6KJb2GjbUNbvloi+Am5aP2wN1LsWaRj2IUq5V8FMrVkl7DEfLRP/0p5aNaiqUPuuilwikCrKRY61KsGG3DceWjfSmWPohN+aj/kfJRH8Wyykc1A/J24oDlN0nUDNjvGMWS0KtW8tHLJeWjkgDdDwLwICsJVlIsBT2h7/7SzOiAV1I+GhJsjZWPboMszWCc8tF9ncLq0uO5lI/a5aPlpMEiH+XJhm6SmfJRvP9sIB9VXx/+usJB1jQBVlKsthSrt3xU28FENXbdvz3Fkie8n0U+6tM2nF0+qqBYIm2Dto6NoFh6uiWjWIKAyyUfxbQN2P8pH51DPhpBsSInJVPfRThLkJXyUWrAnks+KrdVtUoAABgZSURBVBnMpfJRYgCEPsUJ5KPSsuC1Da0olq4+t9c2GCmWuF6NkI+OoFjC/QnD5KPQd6YoljTnKlo+Oq+2gaZY2wlrpLahZQK8xti+rXuZ5H7AIKulfBSboUSSKG8DP6p8dBTFKmf8VopFBcD9KVbbR4x8FKtT55aPSs/XSz6KvQb0GWaKtflc78BzS8hHOYolCcxnTngHjnidlmDNRLFWfEQmvM8uH6UCLWtO1ozyUfuS4Tj5KJXwDgVd2yAr5aN2iqWZba8mH9VtoYN9vpSPtqVY68pH7QEVnY+VBOtAFEv2nVI+WpOslI/SZaaTj3JlxglKYzrClI9a2+Wx5aOPIEsrH62XCiGKJb2GPeSj5d+YRz76R386vXzUMnnZBllTBlhJseagWJZB2vO+3vLR/bEpHy3KIOWjjiAr5aNh8lEuCFPKR+uJg1XbYJGPSoKux12NXvmoPKjrTbF2x80gH3219sNc/5sEKymWOeiCtA0pH0356Nnlo/z3S/noHBRr9yC1DQ+KtP+9lXwUK7eUjzaiWEHUaqG9CJNitaVYvbUNI+Wj8mArSj66nYGNplgpH0VeSfno5djyUTrgklMsqWw0QtuQ8lGaYgnlo+EUyxqMJcE6KcXyaBs4iuUNLDzaBvsm0BKK5ZnxpHxUsjm0N9hJ+eh8FGuUfBQPqmiK9ZlzVXmpJPJRaQDVQj4KOby0f9s7oeUp1u4YBcVSaRuGUqwlCFZSrONRrG6ho3GZMFo+GjWoxS4ZjpWPUmVSUqy4jnEe+ahe22CXj+rqko5i9dY2RMhHpRRrU29+l9IqjmJJrqVXPgq03Wm0DUeQj1r65+kJVspHx1AsnbZhbfkopREgBkDoU7y0olg2O3SUfNSnbYAoFhV49aVYfeWjeMJ7RbHIWT38XWK0DZ5AapR8FKNYZd2PkI/W2gZcPpraBq4dTycfNS0V5l6EJwyyPPJR/cC1rrah7AhSPsod00Y+Wr8n5aN0nVpXPiq9808qH+UDtBj5KP7Ppm0QtLWUjxooVu+lQuz5JQKsXCpsG2RZScBK2gZL0AVRLL+2IeWjKR9N+ej++Vnko3jCe02lylwsWj5almtfivVRv1M+GkexpNcuCdbBKZbsO81DsaK0DdqASiYfjdE2pHwUJ1nS99jqah2o90h4t8lH22gbotvlseSjuwdJsbYUaattsFCs9vJR/G+kfDS27i+jaUiKdRyKNULboJWPwonxnLbBSrHsJPAs8tEisD24tgGiWOCnSfnoZT35qEbbgFMsv7YBO390kNVCPjqSYnnGzCRYSbFCKZZV2yA7v0/bQAVaGEmpzzsfxdLPrvrJR6GE9+211gbJ0ROEXhSL/34pH52VYpXaBm4LHWq/QgvFsmobpBQreqmwhXx0EMUyLxUuuRdhUqy2FGuktkEbLFgHNP2/PtqGo8pHsTJ4BMsaihU3mVhSPvoC1Stc25Dy0Sj5KBxY0cFPpHwUa1OUtgH6LCPko8Tdg2Hy0YYUyzU+5l2ESbHKSm+mWDNrGyTESiIf1WsbuIaY8tFV5KOttA0K+Sj07l/p75LyUZ5i7b4Fo22YVT4Kle9TPiqhWX0S3tvIRzf98veWFMvSLpYLsJJizUmxoga6ZqFjgHwU78zXl4/6KNb88lG5tgGmWFEPSNvgo1httA1Hk49iwtGUj/amWO3lo0T7arZUiL22JMFK+egYipXyUbG2AZ19HYdigbN9F8Xi5KPRCe/EdekqH7VRrHHahmPIR9Gr8htwTVI+GkaxbPLRclKB9Z+N5KPmiWwuEZ4syEr5aKx8tOwUaopVHeegWPsgKzo/y0LTLBSLu5GAu9mgPcVq+7DKR8+ibWgkH0WXCjmKVdbp2eWjfML7evJRCa1quIVOVX8O78HKpcK2QZYtoDq+fHQ/8Nvko1aKta581KZtKMunBcUqg6yZ5aPAGU6tbVDKRxWfQyYfrVUMuHwU78fiKZasHzmffDSgz1DnYyXBOiHFkn2n48lHreLRrXy0Pu9x5aP6gdaubdAExZFt1XJMH/loP21D9HU6urbhQbFKOgVRJEjbMLt89E9/Oq581EmxxG3kUc5LB1hJsdpSrAhtw0zyUaiTjpePShPe40hgK/moUEgaom1I+WhJsepBB3ltGYqlp1vHkI+Wx9W/j5OP9tI2vL8/xxueYu3re6R8NJpice0hCVZSLKrrO7V8VJIPRHhchlIs6TW0JrwLKdZFSrGkeVfHl4+KE95TPpryUZd8VJaKERtIy+Sju2Nmk4+qgqzlA6ykWPNTLAulsgQLLSlWykfJ4MxNsbbB8rnlo2hNTfnoZUb5KKxtwP4fKx+9/gByMFM+2jDISoKVFMtMsVbWNliS2mPko0fVNkRRrJSPzi0frcv+3PLR+jvPKx+V9a/ryUc/6nxH+ai4vh8iwEqKNYZiRZClmeSjkuDreYxVPsoPiCkfpcsiimKtLh/dLxX2ko/2b7c95KPb4FFIsQzahpSPWuSjPMXSBuxtKBZUNochWCkfnYNi0Z3yceSjcONN+ah+4HxSLCrhnQ6MIxPe0esynXyUq1cUxbIG3Vr5aBTFwpYKJW2boliCnK0LIh9lv/eDYj2PS/koVz6RFAvrT4MpFhlk5RJhBlkpH3VoG9rJR/l8maPJRyW0sbV81HJnapS2wU+x9nXqSPJRzYTpMol8dBs4pXxUTrFayUcbbKHDBlmHCrByqbBtkBVDsfwdfEv5qM7uDg38UfJR+2AXIR+VfQYPxbLJR/EyGScfbbV1D06xUj6qIVYcJdFvoaPRNqR8VEuxtvWdkI9+BlnTbKEDBllJsJJiKb5Tf22D5xjpzNenbRgrH4UoVkywdX2VXWt4oOUpVkUO3i2d3dHko/QAkPJRBc2SLikqKJZe2/CgSPvf15OP9qdYu+ch+Wg1qZhAPloFWYcLsJJitaVYvbUNKR/10z9NYKV5jujoUz4aFmSlfFRLsahztJKPloEVt1xI/Y5RLEnQ1Uo+er2mfNQSZCXBSoql7frMFGt1bcPq8lF9EDWDfHQdbcOa8lGvtqEdxbLcBTZaPgrd0SfRNkTIR+lj1pGP8gHy1BRrV58OGWAlxZqTYkUNdM1Cx7sn6GonH42kWOvJR3m6WFKsqLp3HPloHWRF6FRaUywi4FxSPorJSKPko5u2p9I2zCAfxdvRkhTrjyArCVZSrFCKtbJ8lBvIpSQrWtvQagudFeWjsqWcHtoG+DGnfJT7bnaKhZX92eSj1ysvH71cYIpFX6u6XCPlo9L+tXXCe/wWOu3ko1SZlXXqsAFWUqzWFCtK2yBv7C3JFd7YNXcVttQ2xFMsHamIoFg6bQM16PJOspiACg/U55SPaiiWtt1FJMG3aLOCCZNY22CVj5Z1Wi4fhbUN/klSyketdUjTV5x6s+eUj7YNsqwdrYZiaYMMC8WiAq2Uj3oplk0+WpeDXD7aj2LNIh99ahuAepPy0YtYPip6naBYbBspc7GogVorH+Wo09ryUfBu7Sm20KECrVwizCDL8Z3moVhR2gZvcDWHfFQTPOmPby0flQ1wkiXadhRrlLZB8fmnlo96qMI88tFHkIVTrJJOle1MIh+VXmOOYm0+13Ly0SKw6iEfDQELhw+wcqmwLcWK0DZgFGuEtiFGPlpqG3rLR+vBUxtsURRLQjJsFGs7IMwtH9280jzhXUuxgE8znbYhKvAaKx/dfaNm8tFWW+jIyNUc8lH8BpZaPgpRLLh+kwnv3y0BflmGSbCSYnmbRXf5qD6o82kbNFQLP69NPmqnWD5tA/zaePloj9yKqCAhSttAf5+Ujypo1hTy0TLI+mzXJvmooO87nHy0plj7/vTzuQhtg6v/OI3JPSnW/BSrRQcfNcuyBVsx2oaovDTLtZK4ceTlRVIssXz0ckn56J5i7f5iykcv7eWj20kERbHgwKpuWx75qIxiYfLROuGdoljQ+Q8uH3V7sZJgJcVqSrFW1jbYcrB4bYPy2i4hH3VSrIuUYkmIIdFhLkuxgKCioXzUG7iP0DbEUazPB0Ox6MnDXtswq3wUKl8dxWpTt6Vb6OwmUq3ko6r6edoAKynWGIoVQZZWk48+j4UT3o8oH7VtoSPXNuyv23MQSPmoiGIp5aOyAD4iCT4w4OwkH1VpG7b1hpSPQm4si3wUb9N2+WjvLXS28tHVKVYSrKRY3SkW3SmnfBQKsnrJRz0US7+FjrQsnhQLS3jng5szaRvqwRgP3rHv4t1CZz35qIxi0ZMHnGLV33krHy2DFk4+apkkRctHe05sR8lHvY9TBVgzU6zZg6yUj+roFUextoMgTLGq47rIR1ttoeOhWJKcmDnko20fMRRrX6dayEcj26qm7LzyUYReTSkftd2oEisf7UGxRstHKYolOd/pCNas8tEVHqO1DZoBoIV8tA6erLlZ55OPFhvP/mZoMZPJR/f1KOWjbbbQkU6ANtejiXzUQbHAa0NpG6QUK2ILHa98tOckt/6/j3w0Cdaij9Q26F5bWT5Kd9IxFMt6LSPKw1Lea8tH9cecVT7ag2K1lo/KKRYuH8W0DWVw03MLnc2EwSQfHUuxdoGVmmJJk989uVinDLAy4X1+irWdnawmH4UT41vJR+0Uy+7DslEsbraPlFrKR4EgS0uxgE8zTNvQgmIV1yNEPioM0qiryGobMIoF3VVYB2ax2gZJ2ULy0ckplkk+Kq9rGWAlxVqIYlkdWDPJRymSgs+6eshHfaRqZfloi7Y6imLx33ld+WhLioUM1N+FAZdLPoppG6g7BrG7DSPrq41i4RO1ebbQ8clHkbqkplinDbCSYs1JsbCBYmb5qPzfaPmofwsdqQ9nNvloFMWaSduAU6zdK0vJR3tSLOoc0fJRjELtA6pngANpG3pQLK18tIcfi5KPbilWJ21DBlhJseamWDr5qGzA174vgmJpaZZ+AMQpll3bYCVV5Mx3Qfmo3Y3lDRKiEt6BXL5DyEf1wVQ7ilU8OshHaaIFUyycflsnm1qKtX0ummIh7XeUfPS7ZtJ06gArKdYYiqU7Fh4IPTOmiKRbr3zUS7Hs8lGcYnkCsZ5b6MCBq1Y+aqdJXooV9agpliqIf4HqFR789pOPUsfotA0q+aiUYqEJ71EUq14m5CiWznVVykdlFOspH8Uo1vZx8C10kmAlxZqDYsVoG+Ip1ozyUf9A359ijdhC5/O4d6ockmKxFAs6GzjgxPnW/BRLch2M8lEpxVLQMxvFgolWfVfh/hrqKJZWPqr5udVyISQflVIsXD7almKdPsBK+WhbihUzKPEU6wjy0QiKJesIZRSr9xY6yIxfoW04J8WSDQ77IH6/VEhvoVMGKz3ko3EUSzVhcstHJRSruHsQkI9CFAteHqQCHGHQK5aPjqZY2y10NpTSKR9tS7GSYE1MsY7x6EOxLO8bJR/1USydtsFDsfTHeyjW9Td9/acplnQLnbj2O4d8VEKxuHpl6ZsOQLFMA6mWYl2Au2Qldw9aKJZsyXC/VLgWxZKUKycf3R373UqxMsBagGKttlR4ZIrF5WXYxaMeilV9ooNQLHzGb6VYWDm1olijHjEUa1+njkCxLF6rjhSLlI9CXiwLxfJMbFehWP4tdJ59KLBRvJhiQc9lgJWPDkHWuhRLM4vlXFj1MdvO4Nkh9NtCJynWUShWmfCOU6wI+egcFEtDnXpuoSOkWCDBwu4YTIqloVj2LXTgSYWdYmWAlRRruu9LUazWm8tKPodFPirRNzDy0QZb6LSiWPQACgVj4ymWLciaaVmf2VScIsBLUixrECagXO4tdICff6MoFiQfLQOp53O14T1ih4bVKJZePkpRLOpney5WBlj5GE6xrJ1sxN2FLSmWLLgqKRb5aLCFTguK5RlE21AsT46NwYg9IcXaPZ8U6xK2hc6rLMBFJw4ExaqT3a1eLNlG0PgWOp6fWzyk8lHouhTLg6EUqyz3DLCSYh2CYsXNemVBliUXqzyeolhILhY11Pwqv4bno1hQWWkoVo/dAVoSLZxiSeWjcADfg2LFXwfRcVKKddFTrN33D6VYNh8WO2EwU6zHz73lo1KKhZ0rimJlgJWPpFjC81ONCwuaelIsbBA8A8W639tSLO210GoboijWP/6jlmJBnx+io7AXqwfF4v7erBSL+p6QtkFPsZ4C0lYUS9uX9pxs6LbQaUqxMsBKijUvrZIGPdEbzmoplqSDX5Ni6Z6bkWLBA1wsxfLUq1GUqxQyMtoGkGJpvttMFMuzhU4ExUKCLVTbwBEpiRcLaqcjcrEspCyaYhXPN6NYF2KZMAOsfHSnWP6BaT9ItLoTUTJb5ihWo1ysi5xiSa4FTSdGUSx92XwMAhqCJbnm1lyteSgW+s2cFIue4VspliVAjdxCh3sOebzS5EpKsfbiUSig2gdWe4pVlOEvlr7BS7Gw97ZYJtRtoSOjWNo+OPciTIq1LMXyzJb1yckw/SjPwy1J8HoGN8VSJCLfv0dSLP3xdopVlIeYYnGdIb9seCyKVU9syO/34v1uXoplvU6Sdhl5Huseh9QSOEyx9k6sMtiSnsc6+dFQrM/jfvau81aKdb/T1PYRjGspVgZY+VicYsUEZhEdwHiKBXcOLQbDiEBMUfK/6QfCkmJdf9j2KYyaIIynWPT32t9RiBDjX2egWLEDsphifVfUERXFKq7Dm4Zi7Z97JrzXbizrHoUyiqVtF3/zN3NRrKJOhFGsx+8ZYCXFWo5icbNwz6COUSzLLFdKsaDgbDsA6vcotFAs+Bhr8FRcx1dZkHt9pZcaaor1cW38FEvqjWpFrXxBdSuKFbH8rH/OSlpaUSxl0vur7O98TB6u1+ubjGLRQRZFrSKu7aaNvtfPf/STRVv9aS3D+SmWvC5lgJWPQQ8dxbLSKAmtiliSsFAsKBDbDnz2QVdHsXzBU8zAaKVY1OxRk4fFDZzQ+xTb/vyQvCc6yNLnYkkplu4aSClW7yVUhd2dpVj0OWhCt/neb9AdhY/AhgqyHoZ36vx6Wl1PXCw5WOVr61Ms+d2FGWAtSnuOskeh9Y7CfgEENDuTB11csEUFBPUA6KFYdtWFrDPWUyzkr5juKLzft4PBfpZNmd29AY5k0MK/c71MeL+32QTaEay/8AMMfJNEb4IRRbGkuVTEeV519RuiWLQTiyJbkmR3C00sg72ovvooFOuxj+X2tQywiMdMy4T5gBrxx6xkZKeOLRtovVjY3njeDYl1sy74mFZ5V/LZsOWOQjiggoIqnGzF7VGoVX+0o1gyZcP1iie7R1EsbT0YTLHU9KpQhkCB1W8SigUFOrCKoaZYkrJi9gz9XVO/qWXCkXZ3Igj7xRaMyyhWBlhJsQZSrI/OvifFsnXm9sFRsl8hNtATjVtw+zW/pNNDPLp/TZrMbEt6llIGabK7ZysdBSH9GUebPBSLH5wlS8/WAFta7lE5bYbXv0sp2GOfQmWw9QZMLH6nAirOdxVxMwue6/VBia05YC2WCakx5jOY/spQrMdPL5Y6kwFWPg4bcEbPjjTn01AsLsh6vlbSBTTHQmF27xEweGfMok+IKhueZXF935fL825CjF61T3aXB+p/+7dxA5CeYpV1C1p+xncJsJT/DFvmaAL0uGAYprOIuPedl48+vViaSZmUYlk9WL2WDd/f73/mJbBouQH5V7DZXbpMmAEW88hlwv7Bku64eoBoNKj/sCYoU5SqHNi1CbS67ybZd1A2cNoDK/xWdTpg1i8TYmVjzb+ijpl1P0Lllao2gfbUrYhr5Lmu8jsG79+59qZ1Y30+XjFyhSW+f37fnYC0Vi/gS4eSa9iursrvJuxcrxGK9cdzvwCBlVnZkAHWgQKRoywTthq4eggOpR2vzIW192JJk90j7vyyB7ktOm/SGXQpllTeLIRBYnf3dK6Kuwx/tm6HDooF1imuXnmWCXvnTCre890jKxVcjTcuMMICLS4XSzPxhM/54eYqJkvv2ja/PbblMqGMYoHX6UUaVEsmFRlg5WPa4FH7nvYzJXqJh9MFUIGWZwDYf/8Vlgmtg6iEYsF3E0oS3fHrLgtAZN9Jfldq5DKhvk499yfE65Us0TeaKFuX7+nj7MnuOvkonewOECBQlSBZntNunRNBGGe4o3Cb7C6tEzDFek4qNmRL5cTKAOsAj6OIR62NuFWnHr08IdkUGpglNRde9nRiaY6DNov2DazPAFkSaM0wgej/wH1Ko+thiyAzMhlefy75PoxQXhUVaHnatL297tvYRuvwc0hNLpQNUa5BTTn//wjo+oOCe6uSAAAAAElFTkSuQmCC);--gradient:url(data:image/png;base64,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Lkj8yHXZ5TfOBYf9PFMw0sl5YoFYLLSx3MasaKjE08RhRdUo359xWeG8xVktV1nznvyFoZy2kuI6zWHEsIQ4EhAho4oSyrAQoVUjxUSS9qMe/iHHnyCXTK4SGDkWUIEKyfGD/8Hvbs381KSbFIoCnS+2/TEKBHeBRs22v49tu3ECBJ6BK63lr9SB2U/Say0tfAT0bwMX1y1N3gMud4DBJ10yJEcK0PTn88D7GX1TFhi4BbrX3N6a+zh9ANLU1fINcHAIjBUoe93j3V3tvf17ptnfD1oXcp3/D10UAAAN92lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDozYmQzMGE4My01MzllLTQ4MzYtODM3NC02NDJjZmYwYjMwYTEiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDYyMDQ1MTEtZDhhZS00ZWEzLTk4N2QtODcwZmI3ODRlM2ZmIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWNmN2VkZGUtY2IyYy00MjY1LWExNTUtOTBlNWJmOTk2MGIxIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE3MTE5MTU5MTA3NTc3NjAiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yNCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiY2M3MDgxNi1jYjIzLTQxNDItYjg0Yy1lNWMzODhiOGM3ODIiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDMtMjZUMTA6MTk6MzYiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZThjNGJjZjEtYmQ4Ni00YjVkLTg5MzktOGJmNzBlY2MyZGZkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTAzLTMxVDIyOjExOjUwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PlE6FucAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoAx8UCzJJFY2xAAAFJUlEQVRYw3WW0ZbbNgxEL0iQlJymzS/1/5/6JU16dmNbEok+EKJpNZUPjrRaSTMYDAEKf/5lhABNwAx2g+OAxwYfT/h4wI8HPB7AHdiBAzBAPCIQPIR+NH/uAJ4edz8//LyjIB1cxL9p/d1GJ3QYHOeNOn3UHEj8/pWATc+f79pEvD+vtPMdg2ZQDVrroHuDvUKrU+aHX9eJQLjESaBdSFxVayi1MY5mUB14qx4HtGMisE3X53GWIE4AswrtknkcaihbBXEZqgM/dnju/byf4LuDn1H/I+fr49dSMIHyRkS5b73+SK/3dnTwn1uPurlhtksZ5qyaA3BRYCZngF48UVE+7iDB1bJe8/sBP5+wb8Otr9ofk6wziE0ZhktZ5qNNUVH+uTNWghlsrStQ92m5bBfw2c1caps80/McLurYZNCG8v2zK4B0E7Y2ZTuD71PWXOquCIpQMBJGcgJnxHelxKOvgo9fNJDqsf1P41GnED0ygUQgA5lG5qBwDBW0J6kBMhAMooE0FD6mevEmz7vhZBAVhEggoRQSSkLJTqDQyGxkHmTuKKYJbhHWMFXmLAGfTiD+YumcTj+BowMHFiLFCfRfJlAwMpXCRiaTCSnx8bvCl5OAQHqVQeHnRCBMXUqmWgsBQQksBFYiK8oyCGSUjJCdQOZJQUOGr4nn18j+20zAy9AJPFyTOJ15I6VECpGVyG0CX0hDgUgaBA4KmUxcE+1L4vFb5PtJIDsB4SzBfllWMsAjEUVZSawoNyI3v1488kQAEtXNF8nYmthXZV2U7+uFQDhb8Wv0jbUaHLyQWUncPPq1TvJ3+ymJgAKZSmIjETTRSmIriaUoMUdqFijiQo8SyHB4X1JKRlnJI27kQWBxRQqRjJJcJSHRSFS0q6GJPSWKKjkpSw58pmkVRINg6AncP6Oe9RmFlcLNlTgJdPdHsr8VUIRIQ9n9usZIDpEUIzkGlhD4jGHq0E5AvV5lAlwpLBRuLIPMMoEvI/Me4p5p3piMSJZAEiEhJBHKOfCQ1/TF0BuFQmZhfSOwsjiREzy56XRkrgQCASFgRKq35oqwNyGaoAbaILe+9M18x4WBgX5jpfivZ7sMBTp49uV2gqtXuTtGHNQI7IQxmONuxGrEClqNXI3lMO7Rt3rBZ8FXVpf4JFEGpQ6cB3hy6U/wMLXnOu0KAkY4jLgbejTyLpTd+D027sKYA2DoH6xkMmcpCoubLZNHj5vBe94R8exfXaT3T+uamBEfDX0KaROWJ3wVeJrwPfq8MVeguNRl+EEHeBqy944YvS2HAS5Tw27uitaH9IegN6FkWKNxmNAOyNH4pPFsDf3C4pn3pZameqfh9rM14eAyjS0bs7LPyTa2IHGD/AFFjRuGVSEorMH4RmUzJ5Dd5a+s+6TrwPI2K0+Zr4dgXhQh0MbeKP+AKoY1I+xCVthiY7dGbQ3tDjh7el9iycfuuchkVFpoNDff+8A2f+b0R2/MfZtpfxuyNfSLUCLs0ag0jtrQMkmd3eE989dwFocy3xu0aW7YRKaXwFyphgIFQwjop1B+wiZwOIHWGqoOqGNF94/0rBrNBZehRHP7yeQE8Te7AmnSp4+2xo5wGGSDo7VOgIaGUTfxnYB5DjZl+lJCEKqDyyAhw4q9FRvqNLsf+pb1cB0P7EXgZSMbvza23kwUzAFOlcI4y9hPBqB6AZv/7+WL6ATUCVQqei6k5gazIbj53/i9V52jb0q7Uc3rHt72kr1PNBTxHYf5HbxPdMR/Af2SQINNgRTNAAAAAElFTkSuQmCC)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{min-width:0;min-height:0;position:relative}body{all:initial;color:var(--color-zinc-950);letter-spacing:normal!important;font-family:Inter,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important;font-weight:400!important;line-height:normal!important}@supports (font-variation-settings:normal){body{font-optical-sizing:auto!important;font-family:InterVariable,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important}}*{scrollbar-color:initial;scrollbar-width:initial}}@layer components{.chat-loading-gradient{background:linear-gradient(#f8fafccc,#f8fafccc) padding-box padding-box,linear-gradient(45deg,#8b5cf6,#06b6d4,#8b5cf6) 0 0/400% 400% border-box;border:2px solid #0000;animation:2s infinite gradient-animation}.chat-success-border{animation:2s ease-out blink-green-fade}.chat-error-border{animation:1s ease-out blink-red-fade}@keyframes blink-green-fade{0%,50%{box-shadow:0 0 0 2px #22c55eb3}to{box-shadow:0 0 0 2px #22c55e00}}@keyframes blink-red-fade{0%,50%{box-shadow:0 0 0 2px #ef4444}to{box-shadow:0 0 0 2px #ef444400}}@property --chat-grad-bg-bg-color{syntax: "<color>"; inherits: true; initial-value: #0d253f;}@property --chat-grad-bg-c1{syntax: "<color>"; inherits: true; initial-value: #1e40af;}@property --chat-grad-bg-c2{syntax: "<color>"; inherits: true; initial-value: #2563eb;}@property --chat-grad-bg-c3{syntax: "<color>"; inherits: true; initial-value: #3b82f6;}@property --chat-grad-bg-c4{syntax: "<color>"; inherits: true; initial-value: #60a5fa;}@property --chat-grad-bg-opacity-slow{syntax: "<number>"; inherits: true; initial-value: 1;}@property --chat-grad-bg-opacity-medium{syntax: "<number>"; inherits: true; initial-value: 0;}@property --chat-grad-bg-opacity-fast{syntax: "<number>"; inherits: true; initial-value: 0;}@property --chat-grad-bg-overall-opacity{syntax: "<number>"; inherits: true; initial-value: 1;}@keyframes chat-grad-bg-move{0%{transform:translate(0)}20%{transform:translate(15vw,-10vh)scale(1.1)}40%{transform:translate(-10vw,15vh)scale(.9)}60%{transform:translate(10vw,10vh)scale(1.2)}80%{transform:translate(5vw,-15vh)scale(1)}to{transform:translate(0)}}.shape-anim{transition:fill 1s ease-in-out;animation-name:chat-grad-bg-move;animation-timing-function:ease-in-out;animation-iteration-count:infinite}.g-slow{opacity:var(--chat-grad-bg-opacity-slow);transition:opacity 1s ease-in-out}.g-medium{opacity:var(--chat-grad-bg-opacity-medium);transition:opacity 1s ease-in-out}.g-fast{opacity:var(--chat-grad-bg-opacity-fast);transition:opacity 1s ease-in-out}}@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.-inset-\\\\[25\\\\%\\\\]{top:-25%;right:-25%;bottom:-25%;left:-25%}.inset-0{inset:calc(var(--spacing)*0)}.inset-4{inset:calc(var(--spacing)*4)}.top-0{top:calc(var(--spacing)*0)}.top-0\\\\.5{top:calc(var(--spacing)*.5)}.top-\\\\[25\\\\%\\\\]{top:25%}.right-0{right:calc(var(--spacing)*0)}.right-12{right:calc(var(--spacing)*12)}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-3{bottom:calc(var(--spacing)*3)}.left-0{left:calc(var(--spacing)*0)}.left-0\\\\.5{left:calc(var(--spacing)*.5)}.left-3{left:calc(var(--spacing)*3)}.left-12{left:calc(var(--spacing)*12)}.left-\\\\[25\\\\%\\\\]{left:25%}.-z-10{z-index:-10}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.m-1{margin:calc(var(--spacing)*1)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-px{margin-right:1px}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-1\\\\.5{margin-bottom:calc(var(--spacing)*1.5)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-px{margin-bottom:1px}.ml-2{margin-left:calc(var(--spacing)*2)}.scrollbar-thin::-webkit-scrollbar-track{background-color:var(--scrollbar-track);border-radius:var(--scrollbar-track-radius)}.scrollbar-thin::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:var(--scrollbar-thumb-radius)}.scrollbar-thin::-webkit-scrollbar-corner{background-color:var(--scrollbar-corner);border-radius:var(--scrollbar-corner-radius)}.scrollbar-thin{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb,initial)var(--scrollbar-track,initial)}.scrollbar-thin::-webkit-scrollbar{width:8px;height:8px;display:block}.block{display:block}.contents{display:contents}.flex{display:flex}.hidden{display:none}.inline{display:inline}.aspect-square{aspect-ratio:1}.size-0{width:calc(var(--spacing)*0);height:calc(var(--spacing)*0)}.size-1\\\\.5{width:calc(var(--spacing)*1.5);height:calc(var(--spacing)*1.5)}.size-1\\\\/2{width:50%;height:50%}.size-2\\\\/3{width:66.6667%;height:66.6667%}.size-3{width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.size-12{width:calc(var(--spacing)*12);height:calc(var(--spacing)*12)}.size-auto{width:auto;height:auto}.size-full{width:100%;height:100%}.\\\\!h-\\\\[calc-size\\\\(auto\\\\,size\\\\)\\\\]{height:calc-size(auto,size)!important}.h-0{height:calc(var(--spacing)*0)}.h-3{height:calc(var(--spacing)*3)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-12{height:calc(var(--spacing)*12)}.h-16{height:calc(var(--spacing)*16)}.h-24{height:calc(var(--spacing)*24)}.h-36{height:calc(var(--spacing)*36)}.h-\\\\[1\\\\.2em\\\\]{height:1.2em}.h-\\\\[35vh\\\\]{height:35vh}.h-\\\\[50\\\\%\\\\]{height:50%}.h-\\\\[150\\\\%\\\\]{height:150%}.h-\\\\[calc-size\\\\(auto\\\\,size\\\\)\\\\]{height:calc-size(auto,size)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.max-h-\\\\[50vh\\\\]{max-height:50vh}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing)*0)}.min-h-48{min-height:calc(var(--spacing)*48)}.min-h-\\\\[20vh\\\\]{min-height:20vh}.w-96{width:calc(var(--spacing)*96)}.w-\\\\[50\\\\%\\\\]{width:50%}.w-\\\\[150\\\\%\\\\]{width:150%}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-screen{width:100vw}.max-w-8{max-width:calc(var(--spacing)*8)}.max-w-24{max-width:calc(var(--spacing)*24)}.max-w-90{max-width:calc(var(--spacing)*90)}.max-w-\\\\[calc\\\\(100\\\\%-48px\\\\)\\\\]{max-width:calc(100% - 48px)}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-3{min-width:calc(var(--spacing)*3)}.min-w-24{min-width:calc(var(--spacing)*24)}.min-w-48{min-width:calc(var(--spacing)*48)}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.flex-1{flex:1}.shrink-0{flex-shrink:0}.basis-\\\\[initial\\\\]{flex-basis:initial}.origin-bottom{transform-origin:bottom}.origin-center{transform-origin:50%}.origin-left{transform-origin:0}.origin-right{transform-origin:100%}.origin-top{transform-origin:top}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-2{--tw-translate-y:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-0{--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-25{--tw-scale-x:25%;--tw-scale-y:25%;--tw-scale-z:25%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-50{--tw-scale-x:50%;--tw-scale-y:50%;--tw-scale-z:50%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-110{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-x-75{--tw-scale-x:75%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-y-0{--tw-scale-y:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-copy{cursor:copy}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.snap-start{scroll-snap-align:start}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}:where(.divide-border\\\\/20>:not(:last-child)){border-color:#71717b33}@supports (color:color-mix(in lab,red,red)){:where(.divide-border\\\\/20>:not(:last-child)){border-color:color-mix(in oklab,var(--color-border)20%,transparent)}}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-y-scroll{overflow-y:scroll}.overscroll-contain{overscroll-behavior:contain}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-\\\\[inherit\\\\]{border-radius:inherit}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-3xl{border-top-left-radius:var(--radius-3xl);border-top-right-radius:var(--radius-3xl)}.rounded-t-\\\\[inherit\\\\]{border-top-left-radius:inherit;border-top-right-radius:inherit}.rounded-t-lg{border-top-left-radius:var(--radius-lg);border-top-right-radius:var(--radius-lg)}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-b-3xl{border-bottom-right-radius:var(--radius-3xl);border-bottom-left-radius:var(--radius-3xl)}.rounded-b-\\\\[inherit\\\\]{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.rounded-b-lg{border-bottom-right-radius:var(--radius-lg);border-bottom-left-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-black\\\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-black\\\\/15{border-color:#00000026}@supports (color:color-mix(in lab,red,red)){.border-black\\\\/15{border-color:color-mix(in oklab,var(--color-black)15%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-600\\\\/70{border-color:#155dfcb3}@supports (color:color-mix(in lab,red,red)){.border-blue-600\\\\/70{border-color:color-mix(in oklab,var(--color-blue-600)70%,transparent)}}.border-border\\\\/20{border-color:#71717b33}@supports (color:color-mix(in lab,red,red)){.border-border\\\\/20{border-color:color-mix(in oklab,var(--color-border)20%,transparent)}}.border-green-500{border-color:var(--color-green-500)}.border-orange-500{border-color:var(--color-orange-500)}.border-pink-500{border-color:var(--color-pink-500)}.border-purple-500{border-color:var(--color-purple-500)}.border-red-500{border-color:var(--color-red-500)}.border-transparent{border-color:#0000}.border-yellow-500{border-color:var(--color-yellow-500)}.border-zinc-500{border-color:var(--color-zinc-500)}.border-zinc-500\\\\/15{border-color:#71717b26}@supports (color:color-mix(in lab,red,red)){.border-zinc-500\\\\/15{border-color:color-mix(in oklab,var(--color-zinc-500)15%,transparent)}}.border-zinc-500\\\\/20{border-color:#71717b33}@supports (color:color-mix(in lab,red,red)){.border-zinc-500\\\\/20{border-color:color-mix(in oklab,var(--color-zinc-500)20%,transparent)}}.border-zinc-600\\\\/70{border-color:#52525cb3}@supports (color:color-mix(in lab,red,red)){.border-zinc-600\\\\/70{border-color:color-mix(in oklab,var(--color-zinc-600)70%,transparent)}}.border-zinc-950\\\\/10{border-color:#09090b1a}@supports (color:color-mix(in lab,red,red)){.border-zinc-950\\\\/10{border-color:color-mix(in oklab,var(--color-zinc-950)10%,transparent)}}.bg-black\\\\/5{background-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.bg-black\\\\/5{background-color:color-mix(in oklab,var(--color-black)5%,transparent)}}.bg-blue-400\\\\/10{background-color:#54a2ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-400\\\\/10{background-color:color-mix(in oklab,var(--color-blue-400)10%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\\\/5{background-color:#155dfc0d}@supports (color:color-mix(in lab,red,red)){.bg-blue-600\\\\/5{background-color:color-mix(in oklab,var(--color-blue-600)5%,transparent)}}.bg-blue-950\\\\/80{background-color:#162456cc}@supports (color:color-mix(in lab,red,red)){.bg-blue-950\\\\/80{background-color:color-mix(in oklab,var(--color-blue-950)80%,transparent)}}.bg-green-500{background-color:var(--color-green-500)}.bg-orange-200\\\\/50{background-color:#ffd7a880}@supports (color:color-mix(in lab,red,red)){.bg-orange-200\\\\/50{background-color:color-mix(in oklab,var(--color-orange-200)50%,transparent)}}.bg-orange-500{background-color:var(--color-orange-500)}.bg-pink-500{background-color:var(--color-pink-500)}.bg-purple-500{background-color:var(--color-purple-500)}.bg-red-500{background-color:var(--color-red-500)}.bg-rose-600{background-color:var(--color-rose-600)}.bg-sky-100\\\\/60{background-color:#dff2fe99}@supports (color:color-mix(in lab,red,red)){.bg-sky-100\\\\/60{background-color:color-mix(in oklab,var(--color-sky-100)60%,transparent)}}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\\\/5{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.bg-white\\\\/5{background-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.bg-white\\\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.bg-white\\\\/10{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-zinc-500{background-color:var(--color-zinc-500)}.bg-zinc-500\\\\/10{background-color:#71717b1a}@supports (color:color-mix(in lab,red,red)){.bg-zinc-500\\\\/10{background-color:color-mix(in oklab,var(--color-zinc-500)10%,transparent)}}.bg-zinc-700\\\\/80{background-color:#3f3f46cc}@supports (color:color-mix(in lab,red,red)){.bg-zinc-700\\\\/80{background-color:color-mix(in oklab,var(--color-zinc-700)80%,transparent)}}.bg-zinc-950\\\\/5{background-color:#09090b0d}@supports (color:color-mix(in lab,red,red)){.bg-zinc-950\\\\/5{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)}}.bg-gradient-to-b{--tw-gradient-position:to bottom in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-radial{--tw-gradient-position:in oklab;background-image:radial-gradient(var(--tw-gradient-stops))}.bg-\\\\[image\\\\:var\\\\(--glass-texture\\\\)\\\\]{background-image:var(--glass-texture)}.bg-\\\\[image\\\\:var\\\\(--gradient\\\\)\\\\]{background-image:var(--gradient)}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-white\\\\/10{--tw-gradient-from:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.from-white\\\\/10{--tw-gradient-from:color-mix(in oklab,var(--color-white)10%,transparent)}}.from-white\\\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-zinc-100\\\\/10{--tw-gradient-from:#f4f4f51a}@supports (color:color-mix(in lab,red,red)){.from-zinc-100\\\\/10{--tw-gradient-from:color-mix(in oklab,var(--color-zinc-100)10%,transparent)}}.from-zinc-100\\\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-zinc-100\\\\/60{--tw-gradient-from:#f4f4f599}@supports (color:color-mix(in lab,red,red)){.from-zinc-100\\\\/60{--tw-gradient-from:color-mix(in oklab,var(--color-zinc-100)60%,transparent)}}.from-zinc-100\\\\/60{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-30\\\\%{--tw-gradient-from-position:30%}.via-transparent{--tw-gradient-via:transparent;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.via-white\\\\/30{--tw-gradient-via:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.via-white\\\\/30{--tw-gradient-via:color-mix(in oklab,var(--color-white)30%,transparent)}}.via-white\\\\/30{--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.via-zinc-100\\\\/30{--tw-gradient-via:#f4f4f54d}@supports (color:color-mix(in lab,red,red)){.via-zinc-100\\\\/30{--tw-gradient-via:color-mix(in oklab,var(--color-zinc-100)30%,transparent)}}.via-zinc-100\\\\/30{--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-white\\\\/5{--tw-gradient-to:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.to-white\\\\/5{--tw-gradient-to:color-mix(in oklab,var(--color-white)5%,transparent)}}.to-white\\\\/5{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-white\\\\/10{--tw-gradient-to:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.to-white\\\\/10{--tw-gradient-to:color-mix(in oklab,var(--color-white)10%,transparent)}}.to-white\\\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-zinc-100\\\\/0{--tw-gradient-to:#0000}@supports (color:color-mix(in lab,red,red)){.to-zinc-100\\\\/0{--tw-gradient-to:color-mix(in oklab,var(--color-zinc-100)0%,transparent)}}.to-zinc-100\\\\/0{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-zinc-100\\\\/10{--tw-gradient-to:#f4f4f51a}@supports (color:color-mix(in lab,red,red)){.to-zinc-100\\\\/10{--tw-gradient-to:color-mix(in oklab,var(--color-zinc-100)10%,transparent)}}.to-zinc-100\\\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-75\\\\%{--tw-gradient-to-position:75%}.mask-\\\\[linear-gradient\\\\(to_bottom\\\\,transparent_0\\\\%\\\\,black_5\\\\%\\\\,black_95\\\\%\\\\,transparent_100\\\\%\\\\)\\\\]{-webkit-mask-image:linear-gradient(#0000 0%,#000 5% 95%,#0000 100%);mask-image:linear-gradient(#0000,#000 5%,#000 95%,#0000)}.bg-cover{background-size:cover}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.mask-alpha{-webkit-mask-source-type:alpha;mask-mode:alpha}.fill-\\\\[var\\\\(--active\\\\)\\\\]{fill:var(--active)}.fill-current{fill:currentColor}.fill-white{fill:var(--color-white)}.fill-zinc-500\\\\/50{fill:#71717b80}@supports (color:color-mix(in lab,red,red)){.fill-zinc-500\\\\/50{fill:color-mix(in oklab,var(--color-zinc-500)50%,transparent)}}.fill-zinc-950{fill:var(--color-zinc-950)}.stroke-\\\\[var\\\\(--active\\\\)\\\\]{stroke:var(--active)}.stroke-\\\\[var\\\\(--primary\\\\)\\\\]{stroke:var(--primary)}.stroke-black\\\\/30{stroke:#0000004d}@supports (color:color-mix(in lab,red,red)){.stroke-black\\\\/30{stroke:color-mix(in oklab,var(--color-black)30%,transparent)}}.stroke-blue-600{stroke:var(--color-blue-600)}.stroke-fuchsia-700{stroke:var(--color-fuchsia-700)}.stroke-green-600{stroke:var(--color-green-600)}.stroke-none{stroke:none}.stroke-rose-600{stroke:var(--color-rose-600)}.stroke-violet-600{stroke:var(--color-violet-600)}.stroke-white{stroke:var(--color-white)}.stroke-1{stroke-width:1px}.stroke-3{stroke-width:3px}.p-0{padding:calc(var(--spacing)*0)}.p-0\\\\.5{padding:calc(var(--spacing)*.5)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.px-0\\\\.5{padding-inline:calc(var(--spacing)*.5)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-4{padding-block:calc(var(--spacing)*4)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-3{padding-top:calc(var(--spacing)*3)}.pr-3{padding-right:calc(var(--spacing)*3)}.pr-6{padding-right:calc(var(--spacing)*6)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pl-2{padding-left:calc(var(--spacing)*2)}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\\\[0\\\\.5em\\\\]{font-size:.5em}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-pre-wrap{white-space:pre-wrap}.text-\\\\[var\\\\(--active\\\\)\\\\]{color:var(--active)}.text-\\\\[var\\\\(--primary\\\\)\\\\]{color:var(--primary)}.text-blue-500{color:var(--color-blue-500)}.text-current{color:currentColor}.text-foreground{color:var(--color-foreground)}.text-foreground\\\\/40{color:#09090b66}@supports (color:color-mix(in lab,red,red)){.text-foreground\\\\/40{color:color-mix(in oklab,var(--color-foreground)40%,transparent)}}.text-foreground\\\\/70{color:#09090bb3}@supports (color:color-mix(in lab,red,red)){.text-foreground\\\\/70{color:color-mix(in oklab,var(--color-foreground)70%,transparent)}}.text-foreground\\\\/80{color:#09090bcc}@supports (color:color-mix(in lab,red,red)){.text-foreground\\\\/80{color:color-mix(in oklab,var(--color-foreground)80%,transparent)}}.text-muted-foreground{color:var(--color-muted-foreground)}.text-white{color:var(--color-white)}.text-zinc-950{color:var(--color-zinc-950)}.text-zinc-950\\\\/70{color:#09090bb3}@supports (color:color-mix(in lab,red,red)){.text-zinc-950\\\\/70{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)}}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-80{opacity:.8}.opacity-100{opacity:1}.shadow-2xs{--tw-shadow:0 1px var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-black\\\\/50{--tw-shadow-color:#00000080}@supports (color:color-mix(in lab,red,red)){.shadow-black\\\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-black)50%,transparent)var(--tw-shadow-alpha),transparent)}}.shadow-sky-500\\\\/10{--tw-shadow-color:#00a5ef1a}@supports (color:color-mix(in lab,red,red)){.shadow-sky-500\\\\/10{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-sky-500)10%,transparent)var(--tw-shadow-alpha),transparent)}}.ring-white\\\\/20{--tw-ring-color:#fff3}@supports (color:color-mix(in lab,red,red)){.ring-white\\\\/20{--tw-ring-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur-\\\\[0\\\\.2px\\\\]{--tw-blur:blur(.2px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur-md{--tw-blur:blur(var(--blur-md));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur-none{--tw-blur: ;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.blur-sm{--tw-blur:blur(var(--blur-sm));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.brightness-75{--tw-brightness:brightness(75%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.brightness-90{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a));--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-saturate-150{--tw-backdrop-saturate:saturate(150%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-1000{--tw-duration:1s;transition-duration:1s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.ease-spring{--tw-ease:var(--ease-spring);transition-timing-function:var(--ease-spring)}.ease-spring-soft{--tw-ease:var(--ease-spring-soft);transition-timing-function:var(--ease-spring-soft)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.\\\\[--active-secondary\\\\:var\\\\(--color-blue-100\\\\)\\\\]{--active-secondary:var(--color-blue-100)}.\\\\[--active-secondary\\\\:var\\\\(--color-orange-100\\\\)\\\\]{--active-secondary:var(--color-orange-100)}.\\\\[--active\\\\:var\\\\(--color-blue-600\\\\)\\\\]{--active:var(--color-blue-600)}.\\\\[--active\\\\:var\\\\(--color-orange-600\\\\)\\\\]{--active:var(--color-orange-600)}.\\\\[--color-foreground\\\\:var\\\\(--color-orange-700\\\\)\\\\]{--color-foreground:var(--color-orange-700)}.\\\\[--color-muted-foreground\\\\:var\\\\(--color-orange-600\\\\)\\\\]{--color-muted-foreground:var(--color-orange-600)}.\\\\[--primary\\\\:var\\\\(--color-orange-900\\\\)\\\\]{--primary:var(--color-orange-900)}.\\\\[--primary\\\\:var\\\\(--color-zinc-950\\\\)\\\\]{--primary:var(--color-zinc-950)}.\\\\[--secondary\\\\:var\\\\(--color-orange-100\\\\)\\\\]{--secondary:var(--color-orange-100)}.\\\\[--secondary\\\\:var\\\\(--color-zinc-400\\\\)\\\\]{--secondary:var(--color-zinc-400)}:is(.\\\\*\\\\:size-full>*){width:100%;height:100%}.before\\\\:absolute:before{content:var(--tw-content);position:absolute}.before\\\\:inset-0:before{content:var(--tw-content);inset:calc(var(--spacing)*0)}.before\\\\:-z-20:before{content:var(--tw-content);z-index:-20}.before\\\\:size-full:before{content:var(--tw-content);width:100%;height:100%}.before\\\\:content-normal:before{content:var(--tw-content);align-content:normal}.before\\\\:rounded-\\\\[inherit\\\\]:before{content:var(--tw-content);border-radius:inherit}.before\\\\:border:before{content:var(--tw-content);border-style:var(--tw-border-style);border-width:1px}.before\\\\:border-zinc-950\\\\/20:before{content:var(--tw-content);border-color:#09090b33}@supports (color:color-mix(in lab,red,red)){.before\\\\:border-zinc-950\\\\/20:before{border-color:color-mix(in oklab,var(--color-zinc-950)20%,transparent)}}.before\\\\:bg-orange-50\\\\/80:before{content:var(--tw-content);background-color:#fff7edcc}@supports (color:color-mix(in lab,red,red)){.before\\\\:bg-orange-50\\\\/80:before{background-color:color-mix(in oklab,var(--color-orange-50)80%,transparent)}}.before\\\\:bg-white\\\\/85:before{content:var(--tw-content);background-color:#ffffffd9}@supports (color:color-mix(in lab,red,red)){.before\\\\:bg-white\\\\/85:before{background-color:color-mix(in oklab,var(--color-white)85%,transparent)}}.before\\\\:ring-\\\\[1\\\\.5px\\\\]:before{content:var(--tw-content);--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1.5px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.before\\\\:ring-white\\\\/30:before{content:var(--tw-content);--tw-ring-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.before\\\\:ring-white\\\\/30:before{--tw-ring-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.before\\\\:backdrop-blur-sm:before{content:var(--tw-content);--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.before\\\\:ring-inset:before{content:var(--tw-content);--tw-ring-inset:inset}.after\\\\:pointer-events-none:after{content:var(--tw-content);pointer-events:none}.after\\\\:absolute:after{content:var(--tw-content);position:absolute}.after\\\\:inset-0:after{content:var(--tw-content);inset:calc(var(--spacing)*0)}.after\\\\:block:after{content:var(--tw-content);display:block}.after\\\\:size-full:after{content:var(--tw-content);width:100%;height:100%}.after\\\\:content-normal:after{content:var(--tw-content);align-content:normal}.after\\\\:rounded-\\\\[inherit\\\\]:after{content:var(--tw-content);border-radius:inherit}.after\\\\:bg-gradient-to-b:after{content:var(--tw-content);--tw-gradient-position:to bottom in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.after\\\\:from-white\\\\/5:after{content:var(--tw-content);--tw-gradient-from:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.after\\\\:from-white\\\\/5:after{--tw-gradient-from:color-mix(in oklab,var(--color-white)5%,transparent)}}.after\\\\:from-white\\\\/5:after{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.after\\\\:to-white\\\\/0:after{content:var(--tw-content);--tw-gradient-to:#0000}@supports (color:color-mix(in lab,red,red)){.after\\\\:to-white\\\\/0:after{--tw-gradient-to:color-mix(in oklab,var(--color-white)0%,transparent)}}.after\\\\:to-white\\\\/0:after{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.after\\\\:shadow-glass:after{content:var(--tw-content);--tw-shadow:var(--shadow-lg),0px -48px 48px -48px var(--tw-shadow-color,#0000000d)inset,0 5px 42px -5px var(--tw-shadow-color,#ffffff40)inset;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.after\\\\:transition-colors:after{content:var(--tw-content);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.after\\\\:duration-150:after{content:var(--tw-content);--tw-duration:.15s;transition-duration:.15s}.after\\\\:ease-out:after{content:var(--tw-content);--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.focus-within\\\\:outline-none:focus-within{--tw-outline-style:none;outline-style:none}@media (hover:hover){.hover\\\\:border-black\\\\/5:hover{border-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.hover\\\\:border-black\\\\/5:hover{border-color:color-mix(in oklab,var(--color-black)5%,transparent)}}.hover\\\\:border-border\\\\/40:hover{border-color:#71717b66}@supports (color:color-mix(in lab,red,red)){.hover\\\\:border-border\\\\/40:hover{border-color:color-mix(in oklab,var(--color-border)40%,transparent)}}.hover\\\\:border-rose-600\\\\/70:hover{border-color:#e70044b3}@supports (color:color-mix(in lab,red,red)){.hover\\\\:border-rose-600\\\\/70:hover{border-color:color-mix(in oklab,var(--color-rose-600)70%,transparent)}}.hover\\\\:bg-rose-600\\\\/5:hover{background-color:#e700440d}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-rose-600\\\\/5:hover{background-color:color-mix(in oklab,var(--color-rose-600)5%,transparent)}}.hover\\\\:bg-white\\\\/0:hover{background-color:#0000}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-white\\\\/0:hover{background-color:color-mix(in oklab,var(--color-white)0%,transparent)}}.hover\\\\:bg-white\\\\/20:hover{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-white\\\\/20:hover{background-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.hover\\\\:bg-zinc-950\\\\/10:hover{background-color:#09090b1a}@supports (color:color-mix(in lab,red,red)){.hover\\\\:bg-zinc-950\\\\/10:hover{background-color:color-mix(in oklab,var(--color-zinc-950)10%,transparent)}}.hover\\\\:from-zinc-100\\\\/40:hover{--tw-gradient-from:#f4f4f566}@supports (color:color-mix(in lab,red,red)){.hover\\\\:from-zinc-100\\\\/40:hover{--tw-gradient-from:color-mix(in oklab,var(--color-zinc-100)40%,transparent)}}.hover\\\\:from-zinc-100\\\\/40:hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\\\:from-20\\\\%:hover{--tw-gradient-from-position:20%}.hover\\\\:to-zinc-100\\\\/0:hover{--tw-gradient-to:#0000}@supports (color:color-mix(in lab,red,red)){.hover\\\\:to-zinc-100\\\\/0:hover{--tw-gradient-to:color-mix(in oklab,var(--color-zinc-100)0%,transparent)}}.hover\\\\:to-zinc-100\\\\/0:hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\\\:to-75\\\\%:hover{--tw-gradient-to-position:75%}.hover\\\\:text-red-500:hover{color:var(--color-red-500)}.hover\\\\:opacity-90:hover{opacity:.9}.hover\\\\:opacity-100:hover{opacity:1}.hover\\\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\\\:shadow-xs:hover{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\\\:after\\\\:from-blue-50\\\\/20:hover:after{content:var(--tw-content);--tw-gradient-from:#eff6ff33}@supports (color:color-mix(in lab,red,red)){.hover\\\\:after\\\\:from-blue-50\\\\/20:hover:after{--tw-gradient-from:color-mix(in oklab,var(--color-blue-50)20%,transparent)}}.hover\\\\:after\\\\:from-blue-50\\\\/20:hover:after{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\\\:after\\\\:to-blue-50\\\\/15:hover:after{content:var(--tw-content);--tw-gradient-to:#eff6ff26}@supports (color:color-mix(in lab,red,red)){.hover\\\\:after\\\\:to-blue-50\\\\/15:hover:after{--tw-gradient-to:color-mix(in oklab,var(--color-blue-50)15%,transparent)}}.hover\\\\:after\\\\:to-blue-50\\\\/15:hover:after{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}}.focus\\\\:border-zinc-500:focus{border-color:var(--color-zinc-500)}.focus\\\\:text-zinc-900:focus{color:var(--color-zinc-900)}.focus\\\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\\\:scale-\\\\[98\\\\%\\\\]:active{scale:98%}.active\\\\:border-black\\\\/15:active{border-color:#00000026}@supports (color:color-mix(in lab,red,red)){.active\\\\:border-black\\\\/15:active{border-color:color-mix(in oklab,var(--color-black)15%,transparent)}}.active\\\\:after\\\\:from-transparent:active:after{content:var(--tw-content);--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.active\\\\:after\\\\:to-transparent:active:after{content:var(--tw-content);--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.disabled\\\\:pointer-events-none:disabled{pointer-events:none}.disabled\\\\:bg-black\\\\/5:disabled{background-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.disabled\\\\:bg-black\\\\/5:disabled{background-color:color-mix(in oklab,var(--color-black)5%,transparent)}}.disabled\\\\:text-foreground\\\\/60:disabled{color:#09090b99}@supports (color:color-mix(in lab,red,red)){.disabled\\\\:text-foreground\\\\/60:disabled{color:color-mix(in oklab,var(--color-foreground)60%,transparent)}}.disabled\\\\:opacity-30:disabled{opacity:.3}.data-focus\\\\:outline-none[data-focus]{--tw-outline-style:none;outline-style:none}.animate-shake{animation:.5s ease-in-out 2 shake}}:root{color-scheme:normal;font-feature-settings:"liga" 1,"calt" 1;background-color:#0000}body{background-color:#0000}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-2px)}20%,40%,60%,80%{transform:translate(2px)}}@keyframes gradient-animation{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}#headlessui-portal-root{z-index:50;width:100vw;height:100vh;position:fixed}#headlessui-portal-root>*{pointer-events:auto}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}', fallbackState = {
  state: AgentStateType.IDLE
}, agentStateContext = createContext(fallbackState);
function AgentStateProvider({ children }) {
  const agent = useAgents().connected, [state, setState] = useState(fallbackState);
  return useEffect(() => {
    if (agent !== null) {
      const subscription = agent.agent.state.getState.subscribe(void 0, {
        onData: (value) => {
          setState(value);
        },
        onError: () => {
          setState(fallbackState);
        }
      });
      return () => {
        try {
          subscription.unsubscribe();
        } catch (error2) {
          console.debug(
            "[AgentStateProvider] Error unsubscribing from agent state:",
            error2
          );
        }
      };
    } else
      setState(fallbackState);
  }, [agent]), /* @__PURE__ */ jsx(agentStateContext.Provider, { value: state, children });
}
const useAgentState = () => useContext(agentStateContext), ChatContext = createContext({
  chatInput: "",
  setChatInput: () => {
  },
  domContextElements: [],
  addChatDomContext: () => {
  },
  removeChatDomContext: () => {
  },
  sendMessage: () => {
  },
  isPromptCreationActive: !1,
  startPromptCreation: () => {
  },
  stopPromptCreation: () => {
  },
  isSending: !1
}), ChatStateProvider = ({ children }) => {
  const [chatInput, setChatInput] = useState(""), [isPromptCreationMode, setIsPromptCreationMode] = useState(!1), [isSending, setIsSending] = useState(!1), [domContextElements, setDomContextElements] = useState([]), { minimized } = useAppState(), { plugins } = usePlugins(), { sendMessage: sendAgentMessage } = useAgentMessaging(), { isChatOpen } = usePanels(), agentState = useAgentState(), startPromptCreation = useCallback(() => {
    setIsPromptCreationMode(!0), plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingStart) == null || _a.call(plugin);
    });
  }, [plugins]), stopPromptCreation = useCallback(() => {
    setIsPromptCreationMode(!1), setDomContextElements([]), plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingAbort) == null || _a.call(plugin);
    });
  }, [plugins]);
  useEffect(() => {
    isChatOpen || stopPromptCreation();
  }, [isChatOpen, stopPromptCreation]), useEffect(() => {
    minimized && stopPromptCreation();
  }, [minimized]), useEffect(() => {
    const allowedStates = [
      AgentStateType.IDLE,
      AgentStateType.WAITING_FOR_USER_RESPONSE
    ];
    isPromptCreationMode && agentState.state && !allowedStates.includes(agentState.state) && stopPromptCreation();
  }, [agentState.state, isPromptCreationMode, stopPromptCreation]);
  const addChatDomContext = useCallback(
    (element) => {
      const pluginsWithContextGetters = plugins.filter(
        (plugin) => plugin.onContextElementSelect
      );
      setDomContextElements((prev) => [
        ...prev,
        {
          element,
          pluginContext: pluginsWithContextGetters.map((plugin) => {
            var _a;
            return {
              pluginName: plugin.pluginName,
              context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, element)
            };
          })
        }
      ]);
    },
    [plugins]
  ), removeChatDomContext = useCallback((element) => {
    setDomContextElements(
      (prev) => prev.filter((item) => item.element !== element)
    );
  }, []), sendMessage = useCallback(async () => {
    if (chatInput.trim()) {
      setIsSending(!0);
      try {
        const baseUserMessage = {
          id: generateId(),
          createdAt: /* @__PURE__ */ new Date(),
          contentItems: [
            {
              type: "text",
              text: chatInput
            }
          ],
          metadata: collectUserMessageMetadata(
            domContextElements.map(
              (item) => getSelectedElementInfo(item.element)
            )
          ),
          pluginContent: {},
          sentByPlugin: !1
        }, pluginProcessingPromises = plugins.map(async (plugin) => {
          var _a;
          const handlerResult = await ((_a = plugin.onPromptSend) == null ? void 0 : _a.call(plugin, baseUserMessage));
          if (!handlerResult || !handlerResult.contextSnippets || handlerResult.contextSnippets.length === 0)
            return null;
          const snippetPromises = handlerResult.contextSnippets.map(
            async (snippet) => {
              const resolvedContent = typeof snippet.content == "string" ? snippet.content : await snippet.content();
              return {
                promptContextName: snippet.promptContextName,
                content: resolvedContent
              };
            }
          ), resolvedSnippets = await Promise.all(snippetPromises);
          return resolvedSnippets.length > 0 ? {
            pluginName: plugin.pluginName,
            contextSnippets: resolvedSnippets
          } : null;
        }), allPluginContexts = await Promise.all(pluginProcessingPromises), pluginContent = {};
        allPluginContexts.forEach((context) => {
          context && (pluginContent[context.pluginName] = {}, context.contextSnippets.forEach((snippet) => {
            pluginContent[context.pluginName][snippet.promptContextName] = {
              type: "text",
              text: \`\${snippet.content}\`
            };
          }));
        });
        const userMessageInput = {
          ...baseUserMessage,
          pluginContent
        };
        sendAgentMessage(userMessageInput), setChatInput(""), setDomContextElements([]), setIsPromptCreationMode(!1);
      } finally {
        setIsSending(!1);
      }
    }
  }, [chatInput, domContextElements, plugins, sendAgentMessage]), value = {
    chatInput,
    setChatInput,
    domContextElements,
    addChatDomContext,
    removeChatDomContext,
    sendMessage,
    isPromptCreationActive: isPromptCreationMode,
    startPromptCreation,
    stopPromptCreation,
    isSending
  };
  return /* @__PURE__ */ jsx(ChatContext.Provider, { value, children });
};
function useChatState() {
  const context = useContext(ChatContext);
  if (!context)
    throw new Error("useChatState must be used within a ChatStateProvider");
  return context;
}
function ContextProviders({
  children,
  config: config2
}) {
  return /* @__PURE__ */ jsx(ConfigProvider, { config: config2, children: /* @__PURE__ */ jsx(AgentProvider, { children: /* @__PURE__ */ jsx(AgentAvailabilityProvider, { children: /* @__PURE__ */ jsx(AgentStateProvider, { children: /* @__PURE__ */ jsx(AgentMessagingProvider, { children: /* @__PURE__ */ jsx(PanelsProvider, { children: /* @__PURE__ */ jsx(PluginProvider, { children: /* @__PURE__ */ jsx(ChatStateProvider, { children }) }) }) }) }) }) }) });
}
function useEventListener(eventName, handler, options, element = window) {
  useEffect(() => {
    if (!(typeof window > "u") && element)
      return element.addEventListener(eventName, handler, options), () => element.removeEventListener(eventName, handler, options);
  }, [eventName, handler, element, options]);
}
function HotkeyListener() {
  const { startPromptCreation, stopPromptCreation, isPromptCreationActive } = useChatState(), { isChatOpen, closeChat } = usePanels(), hotKeyHandlerMap = useMemo(
    () => ({
      // Functions that return true will prevent further propagation of the event.
      [HotkeyActions.CTRL_ALT_C]: () => isPromptCreationActive ? !1 : (startPromptCreation(), !0),
      [HotkeyActions.ESC]: () => isPromptCreationActive ? (stopPromptCreation(), !0) : isChatOpen ? (closeChat(), !0) : !1
    }),
    [
      startPromptCreation,
      stopPromptCreation,
      isPromptCreationActive,
      isChatOpen,
      closeChat
    ]
  ), hotKeyListener = useCallback(
    (ev) => {
      for (const [action, definition] of Object.entries(
        hotkeyActionDefinitions
      ))
        if (definition.isEventMatching(ev)) {
          hotKeyHandlerMap[action]() && (ev.preventDefault(), ev.stopPropagation());
          break;
        }
    },
    [hotKeyHandlerMap]
  );
  return useEventListener("keydown", hotKeyListener, {
    capture: !0
  }), null;
}
function useWindowSize() {
  const [size2, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  }), handleResize = useCallback(
    () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    []
  );
  return useEventListener("resize", handleResize), size2;
}
function useCyclicUpdate(func, frameRate) {
  const animationFrameHandle = useRef(void 0), timeBetweenFrames = useMemo(
    () => 1e3 / frameRate,
    [frameRate]
  ), lastCallFrameTime = useRef(0), update = useCallback(
    (frameTime) => {
      frameTime - lastCallFrameTime.current >= timeBetweenFrames && (func(), lastCallFrameTime.current = frameTime), animationFrameHandle.current = requestAnimationFrame(update);
    },
    [func, timeBetweenFrames]
  );
  useEffect(() => (animationFrameHandle.current = requestAnimationFrame(update), () => {
    animationFrameHandle.current && (cancelAnimationFrame(animationFrameHandle.current), animationFrameHandle.current = void 0);
  }), [frameRate, update]);
}
function HoveredItem({ refElement, ...props }) {
  const boxRef = useRef(null), windowSize = useWindowSize(), { plugins } = usePlugins(), hoveredElementPluginContext = useMemo(() => refElement ? plugins.filter(
    (plugin) => plugin.onContextElementSelect
  ).map((plugin) => {
    var _a;
    return {
      pluginName: plugin.pluginName,
      context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, refElement)
    };
  }) : [], [refElement]), updateBoxPosition = useCallback(() => {
    if (boxRef.current && refElement) {
      const referenceRect = refElement.getBoundingClientRect();
      boxRef.current.style.top = \`\${referenceRect.top - 2}px\`, boxRef.current.style.left = \`\${referenceRect.left - 2}px\`, boxRef.current.style.width = \`\${referenceRect.width + 4}px\`, boxRef.current.style.height = \`\${referenceRect.height + 4}px\`, boxRef.current.style.display = void 0;
    } else
      boxRef.current.style.height = "0px", boxRef.current.style.width = "0px", boxRef.current.style.top = \`\${windowSize.height / 2}px\`, boxRef.current.style.left = \`\${windowSize.width / 2}px\`, boxRef.current.style.display = "none";
  }, [refElement, windowSize.height, windowSize.width]);
  return useCyclicUpdate(updateBoxPosition, 30), /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: cn(
        "fixed z-10 flex items-center justify-center rounded-sm border-2 border-blue-600/70 border-dotted bg-blue-600/5 text-white transition-all duration-100"
      ),
      ref: boxRef,
      children: /* @__PURE__ */ jsxs("div", { className: "absolute top-0.5 left-0.5 flex w-full flex-row items-start justify-start gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: refElement.tagName.toLowerCase() }) }),
        hoveredElementPluginContext.filter((plugin) => plugin.context.annotation).map((plugin) => {
          var _a;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs",
              children: [
                /* @__PURE__ */ jsx("span", { className: "size-3 shrink-0 stroke-white text-white *:size-full", children: (_a = plugins.find((p2) => p2.pluginName === plugin.pluginName)) == null ? void 0 : _a.iconSvg }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: plugin.context.annotation })
              ]
            },
            plugin.pluginName
          );
        })
      ] })
    }
  );
}
const ContextChipHoverContext = createContext(void 0);
function ContextChipHoverProvider({
  children
}) {
  const [hoveredElement, setHoveredElement] = useState(
    null
  ), { domContextElements } = useChatState();
  return useEffect(() => {
    hoveredElement && (domContextElements.some(
      (contextEl) => contextEl.element === hoveredElement
    ) || setHoveredElement(null));
  }, [hoveredElement, domContextElements]), /* @__PURE__ */ jsx(
    ContextChipHoverContext.Provider,
    {
      value: { hoveredElement, setHoveredElement },
      children
    }
  );
}
function useContextChipHover() {
  const context = useContext(ContextChipHoverContext);
  if (context === void 0)
    throw new Error(
      "useContextChipHover must be used within a ContextChipHoverProvider"
    );
  return context;
}
function SelectedItem({
  refElement,
  isChipHovered,
  ...props
}) {
  const boxRef = useRef(null), windowSize = useWindowSize(), updateBoxPosition = useCallback(() => {
    if (boxRef.current)
      if (refElement) {
        const referenceRect = refElement.getBoundingClientRect();
        boxRef.current.style.top = \`\${referenceRect.top - 2}px\`, boxRef.current.style.left = \`\${referenceRect.left - 2}px\`, boxRef.current.style.width = \`\${referenceRect.width + 4}px\`, boxRef.current.style.height = \`\${referenceRect.height + 4}px\`, boxRef.current.style.display = void 0;
      } else
        boxRef.current.style.height = "0px", boxRef.current.style.width = "0px", boxRef.current.style.top = \`\${windowSize.height / 2}px\`, boxRef.current.style.left = \`\${windowSize.width / 2}px\`, boxRef.current.style.opacity = "none";
  }, [refElement, windowSize.height, windowSize.width]);
  return useCyclicUpdate(updateBoxPosition, 30), /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: cn(
        "pointer-events-auto fixed flex cursor-not-allowed items-center justify-center rounded-sm border-2 border-zinc-600/70 border-dotted transition-all duration-100 hover:border-rose-600/70 hover:bg-rose-600/5",
        isChipHovered && "border-blue-600/70 bg-blue-600/5"
      ),
      onClick: props.onRemoveClick,
      ref: boxRef
    }
  );
}
function DOMContextSelector() {
  const {
    domContextElements,
    addChatDomContext,
    isPromptCreationActive,
    removeChatDomContext
  } = useChatState(), shouldShow = isPromptCreationActive, [hoveredElement, setHoveredElement] = useState(
    null
  ), { hoveredElement: chipHoveredElement } = useContextChipHover(), handleElementSelected = useCallback(
    (el) => {
      domContextElements.find(
        (contextEl) => contextEl.element === el
      ) || addChatDomContext(el);
    },
    [addChatDomContext, domContextElements]
  ), hoveredSelectedElement = hoveredElement ? domContextElements.find((el) => el.element === hoveredElement) : null, selectedItems = useMemo(() => domContextElements.map((el) => el.element), [domContextElements]), lastHoveredElement = useRef(null), mouseState = useRef(null), nextUpdateTimeout = useRef(null), [hoversAddable, setHoversAddable] = useState(!1), updateHoveredElement = useCallback(() => {
    if (!mouseState.current) return;
    const refElement = getElementAtPoint(
      mouseState.current.lastX,
      mouseState.current.lastY
    );
    if (selectedItems.includes(refElement)) {
      setHoversAddable(!1), lastHoveredElement.current = null, setHoveredElement(null);
      return;
    }
    lastHoveredElement.current !== refElement && (lastHoveredElement.current = refElement, setHoveredElement(refElement), setHoversAddable(!0));
  }, [selectedItems]);
  useEffect(() => {
    updateHoveredElement();
  }, [updateHoveredElement]);
  const handleMouseMove = useCallback(
    (event) => {
      var _a, _b, _c, _d, _e, _f;
      const currentTimestamp = performance.now(), deltaX = event.clientX - (((_a = mouseState.current) == null ? void 0 : _a.lastX) ?? event.clientX), deltaY = event.clientY - (((_b = mouseState.current) == null ? void 0 : _b.lastY) ?? event.clientY), deltaTime = currentTimestamp - (((_c = mouseState.current) == null ? void 0 : _c.lastTimestamp) ?? currentTimestamp), distance = Math.hypot(deltaX, deltaY);
      mouseState.current = {
        lastX: deltaTime > 0 ? event.clientX : (_d = mouseState.current) == null ? void 0 : _d.lastX,
        lastY: deltaTime > 0 ? event.clientY : (_e = mouseState.current) == null ? void 0 : _e.lastY,
        velocity: deltaTime > 0 ? distance / deltaTime * 1e3 : 0,
        lastTimestamp: currentTimestamp
      }, ((_f = mouseState.current) == null ? void 0 : _f.velocity) > 30 ? (nextUpdateTimeout.current && clearTimeout(nextUpdateTimeout.current), nextUpdateTimeout.current = setTimeout(updateHoveredElement, 1e3 / 28)) : nextUpdateTimeout.current || (nextUpdateTimeout.current = setTimeout(updateHoveredElement, 1e3 / 28));
    },
    [updateHoveredElement]
  ), handleMouseLeave = useCallback(() => {
    clearTimeout(nextUpdateTimeout.current), lastHoveredElement.current = null, setHoveredElement(null);
  }, []), handleMouseClick = useCallback(
    (event) => {
      event.preventDefault(), event.stopPropagation(), lastHoveredElement.current && (selectedItems.includes(lastHoveredElement.current) || handleElementSelected(lastHoveredElement.current));
    },
    [handleElementSelected, selectedItems]
  );
  return shouldShow ? /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "pointer-events-auto fixed inset-0 h-screen w-screen",
        hoversAddable ? "cursor-copy" : "cursor-default"
      ),
      id: "element-selector",
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: handleMouseClick,
      role: "button",
      tabIndex: 0,
      children: [
        hoveredElement && !hoveredSelectedElement && /* @__PURE__ */ jsx(HoveredItem, { refElement: hoveredElement }),
        domContextElements.map((el) => /* @__PURE__ */ jsx(
          SelectedItem,
          {
            refElement: el.element,
            isChipHovered: chipHoveredElement === el.element,
            onRemoveClick: () => removeChatDomContext(el.element)
          },
          getXPathForElement(el.element, !0)
        ))
      ]
    }
  ) : null;
}
const DraggableContext = createContext(
  null
), DraggableProvider = ({
  containerRef,
  children,
  snapAreas,
  onDragStart,
  onDragEnd
}) => {
  const [borderLocation, setBorderLocation] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  useEffect(() => {
    if (!containerRef.current) return;
    const updateBorderLocation = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBorderLocation({
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom
        });
      }
    };
    updateBorderLocation();
    const resizeObserver = new ResizeObserver(updateBorderLocation);
    return resizeObserver.observe(containerRef.current), window.addEventListener("resize", updateBorderLocation), () => {
      containerRef.current && resizeObserver.unobserve(containerRef.current), resizeObserver.disconnect(), window.removeEventListener("resize", updateBorderLocation);
    };
  }, [containerRef]);
  const dragStartListeners = useRef(/* @__PURE__ */ new Set()), dragEndListeners = useRef(/* @__PURE__ */ new Set()), registerDragStart = useCallback((cb) => (dragStartListeners.current.add(cb), () => dragStartListeners.current.delete(cb)), []), registerDragEnd = useCallback((cb) => (dragEndListeners.current.add(cb), () => dragEndListeners.current.delete(cb)), []), emitDragStart = useCallback(() => {
    onDragStart && onDragStart(), dragStartListeners.current.forEach((cb) => cb());
  }, [onDragStart]), emitDragEnd = useCallback(() => {
    onDragEnd && onDragEnd(), dragEndListeners.current.forEach((cb) => cb());
  }, [onDragEnd]), contextValue = {
    borderLocation,
    snapAreas,
    registerDragStart,
    registerDragEnd,
    emitDragStart,
    emitDragEnd
  };
  return /* @__PURE__ */ jsx(DraggableContext.Provider, { value: contextValue, children: contextValue.borderLocation.right - contextValue.borderLocation.left > 0 && contextValue.borderLocation.bottom - contextValue.borderLocation.top > 0 && children });
};
function useDraggable(config2) {
  const providerData = useContext(DraggableContext), latestProviderDataRef = useRef(providerData);
  useEffect(() => {
    latestProviderDataRef.current = providerData;
  }, [providerData]);
  const movingElementRef = useRef(null), dragInitiatorRef = useRef(null), [movingElementNode, setMovingElementNode] = useState(null), [dragInitiatorNode, setDragInitiatorNode] = useState(null), mouseToDraggableCenterOffsetRef = useRef(null), mouseDownPosRef = useRef(null), currentMousePosRef = useRef(null), isDraggingRef = useRef(!1), [isDragging, setIsDragging] = useState(!1), persistedRelativeCenterRef = useRef(config2.initialRelativeCenter), [currentSnapArea, setCurrentSnapArea] = useState(null), {
    startThreshold = 3,
    areaSnapThreshold = 60,
    // px, default threshold for snapping
    onDragStart,
    onDragEnd,
    initialSnapArea,
    springStiffness = 0.2,
    // Default spring stiffness
    springDampness = 0.55
    // Default spring dampness
    // initialRelativeCenter is used to initialize persistedRelativeCenterRef
  } = config2, animatedPositionRef = useRef(null), velocityRef = useRef({ x: 0, y: 0 }), hasAnimatedOnceRef = useRef(!1);
  useEffect(() => {
    if (initialSnapArea && providerData && providerData.borderLocation && providerData.snapAreas && providerData.snapAreas[initialSnapArea] && !isDraggingRef.current) {
      const { top, left, right, bottom } = providerData.borderLocation, width = right - left, height = bottom - top, center = {
        topLeft: { x: left, y: top },
        topRight: { x: right, y: top },
        bottomLeft: { x: left, y: bottom },
        bottomRight: { x: right, y: bottom }
      }[initialSnapArea];
      if (center && width > 0 && height > 0) {
        const relX = (center.x - left) / width, relY = (center.y - top) / height;
        persistedRelativeCenterRef.current = { x: relX, y: relY };
      } else center && console.warn(
        "useDraggable: Container for initialSnapArea has zero width or height. Cannot calculate relative center from snap area. Falling back to initialRelativeCenter or undefined."
      );
    }
  }, [initialSnapArea, providerData]);
  function getSnapAreaCenters(borderLocation) {
    const { top, left, right, bottom } = borderLocation, centerX = (left + right) / 2;
    return {
      topLeft: { x: left, y: top },
      topCenter: { x: centerX, y: top },
      topRight: { x: right, y: top },
      bottomLeft: { x: left, y: bottom },
      bottomCenter: { x: centerX, y: bottom },
      bottomRight: { x: right, y: bottom }
    };
  }
  const updateDraggablePosition = useCallback(() => {
    var _a, _b;
    const draggableEl = movingElementRef.current;
    if (!draggableEl) return;
    const draggableWidth = draggableEl.offsetWidth, draggableHeight = draggableEl.offsetHeight, offsetParent = draggableEl.offsetParent;
    let parentViewportLeft = 0, parentViewportTop = 0, parentWidth = window.innerWidth, parentHeight = window.innerHeight;
    if (offsetParent) {
      const opRect = offsetParent.getBoundingClientRect();
      parentViewportLeft = opRect.left, parentViewportTop = opRect.top, parentWidth = offsetParent.offsetWidth || window.innerWidth, parentHeight = offsetParent.offsetHeight || window.innerHeight;
    }
    let targetViewportCenterX = null, targetViewportCenterY = null;
    const currentDesiredRelativeCenter = persistedRelativeCenterRef.current;
    let snapArea = null, snapTarget = null;
    const provider = latestProviderDataRef.current;
    let isTopHalf = !0, isLeftHalf = !0;
    if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current && provider && provider.borderLocation && provider.snapAreas) {
      const dragCenter = {
        x: currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x,
        y: currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y
      }, areaCenters = getSnapAreaCenters(provider.borderLocation);
      let minDist = Number.POSITIVE_INFINITY, closestArea = null, closestCenter = null;
      for (const area in provider.snapAreas)
        if (provider.snapAreas[area]) {
          const center = areaCenters[area];
          if (!center) continue;
          const dist = Math.hypot(
            center.x - dragCenter.x,
            center.y - dragCenter.y
          );
          dist < minDist && (minDist = dist, closestArea = area, closestCenter = center);
        }
      closestArea && closestCenter && minDist <= areaSnapThreshold && (snapArea = closestArea, snapTarget = closestCenter), isLeftHalf = (dragCenter.x - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (dragCenter.y - parentViewportTop) / parentHeight <= 0.5;
    }
    if (isDraggingRef.current && snapTarget)
      targetViewportCenterX = snapTarget.x, targetViewportCenterY = snapTarget.y, setCurrentSnapArea(snapArea), isLeftHalf = (snapTarget.x - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (snapTarget.y - parentViewportTop) / parentHeight <= 0.5;
    else if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current)
      targetViewportCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x, targetViewportCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y, setCurrentSnapArea(null), isLeftHalf = (targetViewportCenterX - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (targetViewportCenterY - parentViewportTop) / parentHeight <= 0.5;
    else {
      if (currentDesiredRelativeCenter && parentWidth > 0 && parentHeight > 0) {
        if (isTopHalf = currentDesiredRelativeCenter.y <= 0.5, isLeftHalf = currentDesiredRelativeCenter.x <= 0.5, isLeftHalf) {
          const targetCenterXInParent = parentWidth * currentDesiredRelativeCenter.x;
          targetViewportCenterX = parentViewportLeft + targetCenterXInParent;
        } else {
          const targetCenterXInParent = parentWidth * (1 - currentDesiredRelativeCenter.x);
          targetViewportCenterX = parentViewportLeft + parentWidth - targetCenterXInParent;
        }
        if (isTopHalf) {
          const targetCenterYInParent = parentHeight * currentDesiredRelativeCenter.y;
          targetViewportCenterY = parentViewportTop + targetCenterYInParent;
        } else {
          const targetCenterYInParent = parentHeight * (1 - currentDesiredRelativeCenter.y);
          targetViewportCenterY = parentViewportTop + parentHeight - targetCenterYInParent;
        }
      } else {
        !((_a = movingElementRef.current) != null && _a.style.left) && !((_b = movingElementRef.current) != null && _b.style.top) && console.warn(
          "useDraggable: Cannot determine position. Parent has no dimensions or initialRelativeCenter was not effectively set."
        );
        return;
      }
      setCurrentSnapArea(null);
    }
    if (targetViewportCenterX === null || targetViewportCenterY === null)
      return;
    const { borderLocation } = latestProviderDataRef.current || {
      borderLocation: void 0
    };
    if (borderLocation && draggableWidth > 0 && draggableHeight > 0) {
      const providerRectWidth = borderLocation.right - borderLocation.left, providerRectHeight = borderLocation.bottom - borderLocation.top;
      let clampedCenterX = targetViewportCenterX, clampedCenterY = targetViewportCenterY;
      if (draggableWidth >= providerRectWidth)
        clampedCenterX = borderLocation.left + providerRectWidth / 2;
      else {
        const minX = borderLocation.left + draggableWidth / 2, maxX = borderLocation.right - draggableWidth / 2;
        clampedCenterX = Math.max(minX, Math.min(clampedCenterX, maxX));
      }
      if (draggableHeight >= providerRectHeight)
        clampedCenterY = borderLocation.top + providerRectHeight / 2;
      else {
        const minY = borderLocation.top + draggableHeight / 2, maxY = borderLocation.bottom - draggableHeight / 2;
        clampedCenterY = Math.max(minY, Math.min(clampedCenterY, maxY));
      }
      targetViewportCenterX = clampedCenterX, targetViewportCenterY = clampedCenterY;
    }
    if (!animatedPositionRef.current) {
      animatedPositionRef.current = {
        x: targetViewportCenterX,
        y: targetViewportCenterY
      }, velocityRef.current = { x: 0, y: 0 };
      const targetElementStyleX2 = targetViewportCenterX - draggableWidth / 2, targetElementStyleY2 = targetViewportCenterY - draggableHeight / 2, elStyle2 = draggableEl.style;
      if (elStyle2.right = "", elStyle2.bottom = "", elStyle2.left = "", elStyle2.top = "", isLeftHalf) {
        const styleLeftPx = targetElementStyleX2 - parentViewportLeft;
        elStyle2.left = parentWidth > 0 ? \`\${(styleLeftPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle2.right = "";
      } else {
        const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX2 + draggableWidth);
        elStyle2.right = parentWidth > 0 ? \`\${(styleRightPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle2.left = "";
      }
      if (isTopHalf) {
        const styleTopPx = targetElementStyleY2 - parentViewportTop;
        elStyle2.top = parentHeight > 0 ? \`\${(styleTopPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle2.bottom = "";
      } else {
        const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY2 + draggableHeight);
        elStyle2.bottom = parentHeight > 0 ? \`\${(styleBottomPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle2.top = "";
      }
      hasAnimatedOnceRef.current = !0;
      return;
    }
    if (!hasAnimatedOnceRef.current) {
      hasAnimatedOnceRef.current = !0;
      return;
    }
    const pos = animatedPositionRef.current, vel = velocityRef.current, dx = targetViewportCenterX - pos.x, dy = targetViewportCenterY - pos.y, ax = springStiffness * dx - springDampness * vel.x, ay = springStiffness * dy - springDampness * vel.y;
    vel.x += ax, vel.y += ay, pos.x += vel.x, pos.y += vel.y;
    const threshold = 0.5;
    Math.abs(dx) < threshold && Math.abs(dy) < threshold && Math.abs(vel.x) < threshold && Math.abs(vel.y) < threshold && (pos.x = targetViewportCenterX, pos.y = targetViewportCenterY, vel.x = 0, vel.y = 0), animatedPositionRef.current = { ...pos }, velocityRef.current = { ...vel };
    const targetElementStyleX = pos.x - draggableWidth / 2, targetElementStyleY = pos.y - draggableHeight / 2, elStyle = draggableEl.style;
    if (elStyle.right = "", elStyle.bottom = "", elStyle.left = "", elStyle.top = "", isLeftHalf) {
      const styleLeftPx = targetElementStyleX - parentViewportLeft;
      elStyle.left = parentWidth > 0 ? \`\${(styleLeftPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle.right = "";
    } else {
      const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX + draggableWidth);
      elStyle.right = parentWidth > 0 ? \`\${(styleRightPx / parentWidth * 100).toFixed(2)}%\` : "0px", elStyle.left = "";
    }
    if (isTopHalf) {
      const styleTopPx = targetElementStyleY - parentViewportTop;
      elStyle.top = parentHeight > 0 ? \`\${(styleTopPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle.bottom = "";
    } else {
      const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY + draggableHeight);
      elStyle.bottom = parentHeight > 0 ? \`\${(styleBottomPx / parentHeight * 100).toFixed(2)}%\` : "0px", elStyle.top = "";
    }
    (Math.abs(pos.x - targetViewportCenterX) > threshold || Math.abs(pos.y - targetViewportCenterY) > threshold || Math.abs(vel.x) > threshold || Math.abs(vel.y) > threshold || isDraggingRef.current) && requestAnimationFrame(updateDraggablePosition);
  }, [areaSnapThreshold, springStiffness, springDampness]), [wasDragged, setWasDragged] = useState(!1), mouseUpHandler = useCallback(
    (_e) => {
      var _a;
      let finalSnapArea = null;
      if (isDraggingRef.current) {
        setWasDragged(!0), setTimeout(() => setWasDragged(!1), 20);
        const draggableEl = movingElementRef.current, provider = latestProviderDataRef.current;
        if (draggableEl && provider && provider.borderLocation) {
          const draggableWidth = draggableEl.offsetWidth, draggableHeight = draggableEl.offsetHeight, offsetParent = draggableEl.offsetParent;
          let parentViewportLeft = 0, parentViewportTop = 0, parentWidth = window.innerWidth, parentHeight = window.innerHeight;
          if (offsetParent) {
            const opRect = offsetParent.getBoundingClientRect();
            parentViewportLeft = opRect.left, parentViewportTop = opRect.top, parentWidth = offsetParent.offsetWidth || window.innerWidth, parentHeight = offsetParent.offsetHeight || window.innerHeight;
          }
          let releasedCenterX = 0, releasedCenterY = 0;
          currentMousePosRef.current && mouseToDraggableCenterOffsetRef.current ? (releasedCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x, releasedCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y) : animatedPositionRef.current && (releasedCenterX = animatedPositionRef.current.x, releasedCenterY = animatedPositionRef.current.y);
          const borderLocation = provider.borderLocation, minX = borderLocation.left + draggableWidth / 2, maxX = borderLocation.right - draggableWidth / 2, minY = borderLocation.top + draggableHeight / 2, maxY = borderLocation.bottom - draggableHeight / 2;
          releasedCenterX = Math.max(minX, Math.min(releasedCenterX, maxX)), releasedCenterY = Math.max(minY, Math.min(releasedCenterY, maxY));
          const areaCenters = getSnapAreaCenters(borderLocation);
          let minDist = Number.POSITIVE_INFINITY, closestArea = null, closestCenter = null;
          for (const area in provider.snapAreas)
            if (provider.snapAreas[area]) {
              const center = areaCenters[area];
              if (!center) continue;
              const dist = Math.hypot(
                center.x - releasedCenterX,
                center.y - releasedCenterY
              );
              dist < minDist && (minDist = dist, closestArea = area, closestCenter = center);
            }
          if (closestArea && closestCenter) {
            finalSnapArea = closestArea, setCurrentSnapArea(closestArea);
            const relX = (closestCenter.x - parentViewportLeft) / parentWidth, relY = (closestCenter.y - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          } else {
            finalSnapArea = null, setCurrentSnapArea(null);
            const relX = (releasedCenterX - parentViewportLeft) / parentWidth, relY = (releasedCenterY - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          }
        }
        onDragEnd && onDragEnd(finalSnapArea), (_a = latestProviderDataRef.current) != null && _a.emitDragEnd && latestProviderDataRef.current.emitDragEnd();
      }
      mouseDownPosRef.current = null, isDraggingRef.current = !1, setIsDragging(!1), window.removeEventListener("mousemove", mouseMoveHandler, {
        capture: !0
      }), window.removeEventListener("mouseup", mouseUpHandler, {
        capture: !0
      }), movingElementRef.current && (movingElementRef.current.style.userSelect = ""), document.body.style.userSelect = "", document.body.style.cursor = "";
    },
    [onDragEnd]
  ), mouseMoveHandler = useCallback(
    (e2) => {
      var _a;
      if (!mouseDownPosRef.current) return;
      Math.hypot(
        e2.clientX - mouseDownPosRef.current.x,
        e2.clientY - mouseDownPosRef.current.y
      ) > startThreshold && !isDraggingRef.current && (isDraggingRef.current = !0, setIsDragging(!0), movingElementRef.current && (movingElementRef.current.style.userSelect = "none"), document.body.style.userSelect = "none", document.body.style.cursor = "grabbing", onDragStart && onDragStart(), (_a = latestProviderDataRef.current) != null && _a.emitDragStart && latestProviderDataRef.current.emitDragStart(), requestAnimationFrame(updateDraggablePosition)), currentMousePosRef.current = { x: e2.clientX, y: e2.clientY };
    },
    [startThreshold, onDragStart, updateDraggablePosition]
  ), mouseDownHandler = useCallback(
    (e2) => {
      if (e2.button !== 0)
        return;
      const handleNode = dragInitiatorRef.current, draggableItemNode = movingElementRef.current;
      if (handleNode) {
        if (!handleNode.contains(e2.target) && e2.target !== handleNode)
          return;
      } else if (draggableItemNode) {
        if (!draggableItemNode.contains(e2.target) && e2.target !== draggableItemNode)
          return;
      } else {
        console.error(
          "Draggable element or handle ref not set in mouseDownHandler"
        );
        return;
      }
      if (mouseDownPosRef.current = { x: e2.clientX, y: e2.clientY }, !movingElementRef.current) {
        console.error("Draggable element ref not set in mouseDownHandler");
        return;
      }
      const rect = movingElementRef.current.getBoundingClientRect(), currentDraggableCenterX = rect.left + rect.width / 2, currentDraggableCenterY = rect.top + rect.height / 2;
      mouseToDraggableCenterOffsetRef.current = {
        x: e2.clientX - currentDraggableCenterX,
        y: e2.clientY - currentDraggableCenterY
      }, window.addEventListener("mousemove", mouseMoveHandler, {
        capture: !0
      }), window.addEventListener("mouseup", mouseUpHandler, {
        capture: !0
      });
    },
    [mouseMoveHandler, mouseUpHandler]
  );
  useEffect(() => {
    const elementToListenOn = dragInitiatorNode || movingElementNode;
    return elementToListenOn && elementToListenOn.addEventListener("mousedown", mouseDownHandler), () => {
      elementToListenOn && elementToListenOn.removeEventListener("mousedown", mouseDownHandler), isDraggingRef.current && (onDragEnd && onDragEnd(currentSnapArea), isDraggingRef.current = !1, setIsDragging(!1), movingElementNode && (movingElementNode.style.userSelect = ""), document.body.style.userSelect = "", document.body.style.cursor = "");
    };
  }, [
    movingElementNode,
    dragInitiatorNode,
    mouseDownHandler,
    onDragEnd,
    mouseMoveHandler,
    mouseUpHandler,
    currentSnapArea
  ]), useEffect(() => {
    movingElementRef.current && providerData && providerData.borderLocation && // Needed for calculations within updateDraggablePosition
    persistedRelativeCenterRef.current && // Ensure we have a center to position to
    !isDraggingRef.current && // Not currently dragging
    !hasAnimatedOnceRef.current && requestAnimationFrame(() => {
      movingElementRef.current && updateDraggablePosition();
    });
  }, [
    movingElementNode,
    // Run when element is available/changes
    providerData,
    // Run if provider context changes (for borderLocation)
    config2.initialRelativeCenter,
    // If this changes, persistedRelativeCenterRef might be re-initialized
    initialSnapArea,
    // If this changes, an effect updates persistedRelativeCenterRef
    updateDraggablePosition
    // Memoized callback for positioning
    // hasAnimatedOnceRef is intentionally not a dep, its current value is checked inside.
  ]);
  const draggableRefCallback = useCallback((node) => {
    setMovingElementNode(node), movingElementRef.current = node;
  }, []), handleRefCallback = useCallback((node) => {
    setDragInitiatorNode(node), dragInitiatorRef.current = node;
  }, []);
  return {
    draggableRef: draggableRefCallback,
    handleRef: handleRefCallback,
    position: {
      snapArea: currentSnapArea,
      isTopHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.y <= 0.5 : !0,
      isLeftHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.x <= 0.5 : !0
    },
    wasDragged,
    isDragging
  };
}
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document < "u" ? React__default.useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = useRef(null);
  return $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    ref.current = fn;
  }, [
    fn
  ]), useCallback((...args) => {
    const f2 = ref.current;
    return f2 == null ? void 0 : f2(...args);
  }, []);
}
const $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el == null ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
}, $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => el && "window" in el && el.window === el ? el : $431fbd86ca7dc216$export$b204af158042fbac(el).defaultView || window;
function $431fbd86ca7dc216$var$isNode(value) {
  return value !== null && typeof value == "object" && "nodeType" in value && typeof value.nodeType == "number";
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
  return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}
let $f4e2df6bd15f8569$var$_shadowDOM = !1;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
  return $f4e2df6bd15f8569$var$_shadowDOM;
}
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
  if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : !1;
  if (!node || !otherNode) return !1;
  let currentNode = otherNode;
  for (; currentNode !== null; ) {
    if (currentNode === node) return !0;
    currentNode.tagName === "SLOT" && currentNode.assignedSlot ? currentNode = currentNode.assignedSlot.parentNode : $431fbd86ca7dc216$export$af51f0f06c0f328a(currentNode) ? currentNode = currentNode.host : currentNode = currentNode.parentNode;
  }
  return !1;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
  var _activeElement_shadowRoot;
  if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return doc.activeElement;
  let activeElement = doc.activeElement;
  for (; activeElement && "shadowRoot" in activeElement && (!((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0) && _activeElement_shadowRoot.activeElement); ) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
  return $f4e2df6bd15f8569$export$98658e8c59125e6a() && event.target.shadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
}
var define_process_env_default$4 = {};
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  return typeof window > "u" || window.navigator == null ? !1 : ((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window < "u" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : !1;
}
function $c87311424ea30a05$var$cached(fn) {
  if (define_process_env_default$4.NODE_ENV === "test") return fn;
  let res = null;
  return () => (res == null && (res = fn()), res);
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}), $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = useRef(/* @__PURE__ */ new Map()), addGlobalListener = useCallback((eventTarget, type, listener, options) => {
    let fn = options != null && options.once ? (...args) => {
      globalListeners.current.delete(listener), listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    }), eventTarget.addEventListener(type, fn, options);
  }, []), removeGlobalListener = useCallback((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options), globalListeners.current.delete(listener);
  }, []), removeAllGlobalListeners = useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  return useEffect(() => removeAllGlobalListeners, [
    removeAllGlobalListeners
  ]), {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function $6a7db85432448f7f$export$60278871457622de(event) {
  return event.mozInputSource === 0 && event.isTrusted ? !0 : $c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType ? event.type === "click" && event.buttons === 1 : event.detail === 0 && !event.pointerType;
}
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  return event.nativeEvent = nativeEvent, event.isDefaultPrevented = () => event.defaultPrevented, event.isPropagationStopped = () => event.cancelBubble, event.persist = () => {
  }, event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  }), Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = useRef({
    isFocused: !1,
    observer: null
  });
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      state.observer && (state.observer.disconnect(), state.observer = null);
    };
  }, []);
  let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e2) => {
    onBlur == null || onBlur(e2);
  });
  return useCallback((e2) => {
    if (e2.target instanceof HTMLButtonElement || e2.target instanceof HTMLInputElement || e2.target instanceof HTMLTextAreaElement || e2.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = !0;
      let target = e2.target, onBlurHandler = (e3) => {
        if (stateRef.current.isFocused = !1, target.disabled) {
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e3);
          dispatchBlur(event);
        }
        stateRef.current.observer && (stateRef.current.observer.disconnect(), stateRef.current.observer = null);
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: !0
      }), stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 || _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          })), target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: relatedTargetEl
          }));
        }
      }), stateRef.current.observer.observe(target, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = !1;
var define_process_env_default$3 = {};
let $507fabe10e71c6fb$var$currentModality = null, $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set(), $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map(), $507fabe10e71c6fb$var$hasEventBeforeFocus = !1, $507fabe10e71c6fb$var$hasBlurredWindowRecently = !1;
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: !0,
  Escape: !0
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e2);
}
function $507fabe10e71c6fb$var$isValidKey(e2) {
  return !(e2.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e2) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = !0, $507fabe10e71c6fb$var$isValidKey(e2) && ($507fabe10e71c6fb$var$currentModality = "keyboard", $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e2));
}
function $507fabe10e71c6fb$var$handlePointerEvent(e2) {
  $507fabe10e71c6fb$var$currentModality = "pointer", (e2.type === "mousedown" || e2.type === "pointerdown") && ($507fabe10e71c6fb$var$hasEventBeforeFocus = !0, $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e2));
}
function $507fabe10e71c6fb$var$handleClickEvent(e2) {
  $6a7db85432448f7f$export$60278871457622de(e2) && ($507fabe10e71c6fb$var$hasEventBeforeFocus = !0, $507fabe10e71c6fb$var$currentModality = "virtual");
}
function $507fabe10e71c6fb$var$handleFocusEvent(e2) {
  e2.target === window || e2.target === document || $8a9cb279dc87e130$export$fda7da73ab5d4c48 || !e2.isTrusted || (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently && ($507fabe10e71c6fb$var$currentModality = "virtual", $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e2)), $507fabe10e71c6fb$var$hasEventBeforeFocus = !1, $507fabe10e71c6fb$var$hasBlurredWindowRecently = !1);
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = !1, $507fabe10e71c6fb$var$hasBlurredWindowRecently = !0;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window > "u" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element), documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = !0, focus.apply(this, arguments);
  }, documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, !0), windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, !0), windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, !1), typeof PointerEvent < "u" ? (documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, !0)) : define_process_env_default$3.NODE_ENV === "test" && (documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, !0)), windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: !0
  }), $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element), documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  loadListener && documentObject.removeEventListener("DOMContentLoaded", loadListener), $507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject) && (windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus, documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, !0), windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, !0), windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, !1), typeof PointerEvent < "u" ? (documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, !0)) : define_process_env_default$3.NODE_ENV === "test" && (documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, !0), documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, !0)), $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject));
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let loadListener;
  return documentObject.readyState !== "loading" ? $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) : (loadListener = () => {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  }, documentObject.addEventListener("DOMContentLoaded", loadListener)), () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
typeof document < "u" && $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
const $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
  let document1 = $431fbd86ca7dc216$export$b204af158042fbac(e2 == null ? void 0 : e2.target);
  const IHTMLInputElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLInputElement : HTMLInputElement, IHTMLTextAreaElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLTextAreaElement : HTMLTextAreaElement, IHTMLElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLElement : HTMLElement, IKeyboardEvent = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).KeyboardEvent : KeyboardEvent;
  return isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable, !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents(), useEffect(() => {
    let handler = (modality, e2) => {
      $507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts != null && opts.isTextInput), modality, e2) && fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    return $507fabe10e71c6fb$var$changeHandlers.add(handler), () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = useCallback((e2) => {
    if (e2.target === e2.currentTarget)
      return onBlurProp && onBlurProp(e2), onFocusChange && onFocusChange(!1), !0;
  }, [
    onBlurProp,
    onFocusChange
  ]), onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur), onFocus = useCallback((e2) => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target), activeElement = ownerDocument ? $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
    e2.target === e2.currentTarget && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent) && (onFocusProp && onFocusProp(e2), onFocusChange && onFocusChange(!0), onSyntheticFocus(e2));
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props, state = useRef({
    isFocusWithin: !1
  }), { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), onBlur = useCallback((e2) => {
    e2.currentTarget.contains(e2.target) && state.current.isFocusWithin && !e2.currentTarget.contains(e2.relatedTarget) && (state.current.isFocusWithin = !1, removeAllGlobalListeners(), onBlurWithin && onBlurWithin(e2), onFocusWithinChange && onFocusWithinChange(!1));
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]), onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur), onFocus = useCallback((e2) => {
    if (!e2.currentTarget.contains(e2.target)) return;
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target), activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent)) {
      onFocusWithin && onFocusWithin(e2), onFocusWithinChange && onFocusWithinChange(!0), state.current.isFocusWithin = !0, onSyntheticFocus(e2);
      let currentTarget = e2.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e3) => {
        if (state.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(currentTarget, e3.target)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: e3.target
          });
          $8a9cb279dc87e130$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: !0
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  return isDisabled ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
var define_process_env_default$2 = {};
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = !1, $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = !0, setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = !1;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e2) {
  e2.pointerType === "touch" && $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent) : define_process_env_default$2.NODE_ENV === "test" && document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents), $6179b936705e76d3$var$hoverCount++, () => {
      $6179b936705e76d3$var$hoverCount--, !($6179b936705e76d3$var$hoverCount > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent) : define_process_env_default$2.NODE_ENV === "test" && document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents));
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props, [isHovered, setHovered] = useState(!1), state = useRef({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  useEffect($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), { hoverProps, triggerHoverEnd } = useMemo(() => {
    let triggerHoverStart = (event, pointerType) => {
      if (state.pointerType = pointerType, isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = !0;
      let target = event.currentTarget;
      state.target = target, addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(event.target), "pointerover", (e2) => {
        state.isHovered && state.target && !$d4ee10de306f2510$export$4282f70798064fe0(state.target, e2.target) && triggerHoverEnd2(e2, e2.pointerType);
      }, {
        capture: !0
      }), onHoverStart && onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      }), onHoverChange && onHoverChange(!0), setHovered(!0);
    }, triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "", state.target = null, !(pointerType === "touch" || !state.isHovered || !target) && (state.isHovered = !1, removeAllGlobalListeners(), onHoverEnd && onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      }), onHoverChange && onHoverChange(!1), setHovered(!1));
    }, hoverProps2 = {};
    return typeof PointerEvent < "u" ? (hoverProps2.onPointerEnter = (e2) => {
      $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse" || triggerHoverStart(e2, e2.pointerType);
    }, hoverProps2.onPointerLeave = (e2) => {
      !isDisabled && e2.currentTarget.contains(e2.target) && triggerHoverEnd2(e2, e2.pointerType);
    }) : define_process_env_default$2.NODE_ENV === "test" && (hoverProps2.onTouchStart = () => {
      state.ignoreEmulatedMouseEvents = !0;
    }, hoverProps2.onMouseEnter = (e2) => {
      !state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && triggerHoverStart(e2, "mouse"), state.ignoreEmulatedMouseEvents = !1;
    }, hoverProps2.onMouseLeave = (e2) => {
      !isDisabled && e2.currentTarget.contains(e2.target) && triggerHoverEnd2(e2, "mouse");
    }), {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  return useEffect(() => {
    isDisabled && triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]), {
    hoverProps,
    isHovered
  };
}
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = !1, isTextInput, within } = props, state = useRef({
    isFocused: !1,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  }), [isFocused, setFocused] = useState(!1), [isFocusVisibleState, setFocusVisible] = useState(() => state.current.isFocused && state.current.isFocusVisible), updateState = useCallback(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []), onFocusChange = useCallback((isFocused2) => {
    state.current.isFocused = isFocused2, setFocused(isFocused2), updateState();
  }, [
    updateState
  ]);
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible, updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  }), { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
var i$6 = Object.defineProperty, d$3 = (t2, e2, n2) => e2 in t2 ? i$6(t2, e2, { enumerable: !0, configurable: !0, writable: !0, value: n2 }) : t2[e2] = n2, r$2 = (t2, e2, n2) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$7 = class {
  constructor() {
    r$2(this, "current", this.detect()), r$2(this, "handoffState", "pending"), r$2(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, s$7 = new o$7();
function o$6(n2) {
  var e2, r2;
  return s$7.isServer ? null : n2 ? "ownerDocument" in n2 ? n2.ownerDocument : "current" in n2 ? (r2 = (e2 = n2.current) == null ? void 0 : e2.ownerDocument) != null ? r2 : document : null : document;
}
function t$3(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$5() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a3) {
    return e2.addEventListener(t2, s2, a3), r2.add(() => e2.removeEventListener(t2, s2, a3));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: !0 };
    return t$3(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = !1;
    });
  }, style(e2, t2, s2) {
    let a3 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a3 });
    });
  }, group(e2) {
    let t2 = o$5();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.includes(e2) || n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0) for (let s2 of n2.splice(t2, 1)) s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0)) e2();
  } };
  return r2;
}
function p$2() {
  let [e2] = useState(o$5);
  return useEffect(() => () => e2.dispose(), [e2]), e2;
}
let n$3 = (e2, t2) => {
  s$7.isServer ? useEffect(e2, t2) : useLayoutEffect(e2, t2);
};
function s$6(e2) {
  let r2 = useRef(e2);
  return n$3(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let o$4 = function(t2) {
  let e2 = s$6(t2);
  return React__default.useCallback((...r2) => e2.current(...r2), [e2]);
};
function E$1(e2) {
  let t2 = e2.width / 2, n2 = e2.height / 2;
  return { top: e2.clientY - n2, right: e2.clientX + t2, bottom: e2.clientY + n2, left: e2.clientX - t2 };
}
function P$3(e2, t2) {
  return !(!e2 || !t2 || e2.right < t2.left || e2.left > t2.right || e2.bottom < t2.top || e2.top > t2.bottom);
}
function w$2({ disabled: e2 = !1 } = {}) {
  let t2 = useRef(null), [n2, l2] = useState(!1), r2 = p$2(), o3 = o$4(() => {
    t2.current = null, l2(!1), r2.dispose();
  }), f2 = o$4((s2) => {
    if (r2.dispose(), t2.current === null) {
      t2.current = s2.currentTarget, l2(!0);
      {
        let i2 = o$6(s2.currentTarget);
        r2.addEventListener(i2, "pointerup", o3, !1), r2.addEventListener(i2, "pointermove", (c2) => {
          if (t2.current) {
            let p2 = E$1(c2);
            l2(P$3(p2, t2.current.getBoundingClientRect()));
          }
        }, !1), r2.addEventListener(i2, "pointercancel", o3, !1);
      }
    }
  });
  return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o3, onClick: o3 } };
}
let e$3 = createContext(void 0);
function a$9() {
  return useContext(e$3);
}
function t$2(...r2) {
  return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}
function u$7(r2, n2, ...a3) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a3) : e2;
  }
  let t2 = new Error(\`Tried to handle "\${r2}" but there is no handler defined. Only defined handlers are: \${Object.keys(n2).map((e2) => \`"\${e2}"\`).join(", ")}.\`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$7), t2;
}
var O$1 = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(O$1 || {}), A$1 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(A$1 || {});
function L$2() {
  let n2 = U$2();
  return useCallback((r2) => C$2({ mergeRefs: n2, ...r2 }), [n2]);
}
function C$2({ ourProps: n2, theirProps: r2, slot: e2, defaultTag: a3, features: s2, visible: t2 = !0, name: l2, mergeRefs: i2 }) {
  i2 = i2 ?? $;
  let o3 = P$2(r2, n2);
  if (t2) return F$3(o3, e2, a3, l2, i2);
  let y2 = s2 ?? 0;
  if (y2 & 2) {
    let { static: f2 = !1, ...u2 } = o3;
    if (f2) return F$3(u2, e2, a3, l2, i2);
  }
  if (y2 & 1) {
    let { unmount: f2 = !0, ...u2 } = o3;
    return u$7(f2 ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return F$3({ ...u2, hidden: !0, style: { display: "none" } }, e2, a3, l2, i2);
    } });
  }
  return F$3(o3, e2, a3, l2, i2);
}
function F$3(n2, r2 = {}, e2, a3, s2) {
  let { as: t2 = e2, children: l2, refName: i2 = "ref", ...o3 } = h$4(n2, ["unmount", "static"]), y2 = n2.ref !== void 0 ? { [i2]: n2.ref } : {}, f2 = typeof l2 == "function" ? l2(r2) : l2;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(r2)), o3["aria-labelledby"] && o3["aria-labelledby"] === o3.id && (o3["aria-labelledby"] = void 0);
  let u2 = {};
  if (r2) {
    let d2 = !1, p2 = [];
    for (let [c2, T2] of Object.entries(r2)) typeof T2 == "boolean" && (d2 = !0), T2 === !0 && p2.push(c2.replace(/([A-Z])/g, (g2) => \`-\${g2.toLowerCase()}\`));
    if (d2) {
      u2["data-headlessui-state"] = p2.join(" ");
      for (let c2 of p2) u2[\`data-\${c2}\`] = "";
    }
  }
  if (t2 === Fragment && (Object.keys(m$4(o3)).length > 0 || Object.keys(m$4(u2)).length > 0)) if (!isValidElement(f2) || Array.isArray(f2) && f2.length > 1) {
    if (Object.keys(m$4(o3)).length > 0) throw new Error(['Passing props on "Fragment"!', "", \`The current component <\${a3} /> is rendering a "Fragment".\`, "However we need to passthrough the following props:", Object.keys(m$4(o3)).concat(Object.keys(m$4(u2))).map((d2) => \`  - \${d2}\`).join(\`
\`), "", "You can apply a few solutions:", ['Add an \`as="..."\` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => \`  - \${d2}\`).join(\`
\`)].join(\`
\`));
  } else {
    let d2 = f2.props, p2 = d2 == null ? void 0 : d2.className, c2 = typeof p2 == "function" ? (...R2) => t$2(p2(...R2), o3.className) : t$2(p2, o3.className), T2 = c2 ? { className: c2 } : {}, g2 = P$2(f2.props, m$4(h$4(o3, ["ref"])));
    for (let R2 in u2) R2 in g2 && delete u2[R2];
    return cloneElement(f2, Object.assign({}, g2, u2, y2, { ref: s2(H$5(f2), y2.ref) }, T2));
  }
  return createElement(t2, Object.assign({}, h$4(o3, ["ref"]), t2 !== Fragment && y2, t2 !== Fragment && u2), f2);
}
function U$2() {
  let n2 = useRef([]), r2 = useCallback((e2) => {
    for (let a3 of n2.current) a3 != null && (typeof a3 == "function" ? a3(e2) : a3.current = e2);
  }, []);
  return (...e2) => {
    if (!e2.every((a3) => a3 == null)) return n2.current = e2, r2;
  };
}
function $(...n2) {
  return n2.every((r2) => r2 == null) ? void 0 : (r2) => {
    for (let e2 of n2) e2 != null && (typeof e2 == "function" ? e2(r2) : e2.current = r2);
  };
}
function P$2(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  if (r2.disabled || r2["aria-disabled"]) for (let s2 in e2) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s2) && (e2[s2] = [(t2) => {
    var l2;
    return (l2 = t2 == null ? void 0 : t2.preventDefault) == null ? void 0 : l2.call(t2);
  }]);
  for (let s2 in e2) Object.assign(r2, { [s2](t2, ...l2) {
    let i2 = e2[s2];
    for (let o3 of i2) {
      if ((t2 instanceof Event || (t2 == null ? void 0 : t2.nativeEvent) instanceof Event) && t2.defaultPrevented) return;
      o3(t2, ...l2);
    }
  } });
  return r2;
}
function _$2(...n2) {
  if (n2.length === 0) return {};
  if (n2.length === 1) return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  for (let s2 in e2) Object.assign(r2, { [s2](...t2) {
    let l2 = e2[s2];
    for (let i2 of l2) i2 == null || i2(...t2);
  } });
  return r2;
}
function K$1(n2) {
  var r2;
  return Object.assign(forwardRef(n2), { displayName: (r2 = n2.displayName) != null ? r2 : n2.name });
}
function m$4(n2) {
  let r2 = Object.assign({}, n2);
  for (let e2 in r2) r2[e2] === void 0 && delete r2[e2];
  return r2;
}
function h$4(n2, r2 = []) {
  let e2 = Object.assign({}, n2);
  for (let a3 of r2) a3 in e2 && delete e2[a3];
  return e2;
}
function H$5(n2) {
  return React__default.version.split(".")[0] >= "19" ? n2.props.ref : n2.ref;
}
let R$2 = "button";
function v$1(a3, u2) {
  var p2;
  let l2 = a$9(), { disabled: e2 = l2 || !1, autoFocus: t2 = !1, ...o3 } = a3, { isFocusVisible: r2, focusProps: i2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t2 }), { isHovered: s2, hoverProps: T2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), { pressed: n2, pressProps: d2 } = w$2({ disabled: e2 }), f2 = _$2({ ref: u2, type: (p2 = o3.type) != null ? p2 : "button", disabled: e2 || void 0, autoFocus: t2 }, i2, T2, d2), m2 = useMemo(() => ({ disabled: e2, hover: s2, focus: r2, active: n2, autofocus: t2 }), [e2, s2, r2, n2, t2]);
  return L$2()({ ourProps: f2, theirProps: o3, slot: m2, defaultTag: R$2, name: "Button" });
}
let H$4 = K$1(v$1), e$2 = createContext(void 0);
function u$6() {
  return useContext(e$2);
}
function r$1(n2) {
  let e2 = n2.parentElement, l2 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); ) e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
  let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t2 && i$5(l2) ? !1 : t2;
}
function i$5(n2) {
  if (!n2) return !1;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement) return !1;
    e2 = e2.previousElementSibling;
  }
  return !0;
}
let u$5 = Symbol();
function T$3(t2, n2 = !0) {
  return Object.assign(t2, { [u$5]: n2 });
}
function y$4(...t2) {
  let n2 = useRef(t2);
  useEffect(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o$4((e2) => {
    for (let o3 of n2.current) o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$5])) ? void 0 : c2;
}
let a$8 = createContext(null);
a$8.displayName = "DescriptionContext";
function f$6() {
  let r2 = useContext(a$8);
  if (r2 === null) {
    let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e2, f$6), e2;
  }
  return r2;
}
function U$1() {
  var r2, e2;
  return (e2 = (r2 = useContext(a$8)) == null ? void 0 : r2.value) != null ? e2 : void 0;
}
function w$1() {
  let [r2, e2] = useState([]);
  return [r2.length > 0 ? r2.join(" ") : void 0, useMemo(() => function(t2) {
    let i2 = o$4((n2) => (e2((s2) => [...s2, n2]), () => e2((s2) => {
      let o3 = s2.slice(), p2 = o3.indexOf(n2);
      return p2 !== -1 && o3.splice(p2, 1), o3;
    }))), l2 = useMemo(() => ({ register: i2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [i2, t2.slot, t2.name, t2.props, t2.value]);
    return React__default.createElement(a$8.Provider, { value: l2 }, t2.children);
  }, [e2])];
}
let S$4 = "p";
function C$1(r2, e2) {
  let d2 = useId$1(), t2 = a$9(), { id: i2 = \`headlessui-description-\${d2}\`, ...l2 } = r2, n2 = f$6(), s2 = y$4(e2);
  n$3(() => n2.register(i2), [i2, n2.register]);
  let o3 = t2 || !1, p2 = useMemo(() => ({ ...n2.slot, disabled: o3 }), [n2.slot, o3]), D2 = { ref: s2, ...n2.props, id: i2 };
  return L$2()({ ourProps: D2, theirProps: l2, slot: p2, defaultTag: S$4, name: n2.name || "Description" });
}
let _$1 = K$1(C$1);
Object.assign(_$1, {});
var o$3 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$3 || {});
let c$5 = createContext(null);
c$5.displayName = "LabelContext";
function P$1() {
  let r2 = useContext(c$5);
  if (r2 === null) {
    let l2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l2, P$1), l2;
  }
  return r2;
}
function I$2(r2) {
  var a3, e2, o3;
  let l2 = (e2 = (a3 = useContext(c$5)) == null ? void 0 : a3.value) != null ? e2 : void 0;
  return ((o3 = void 0) != null ? o3 : 0) > 0 ? [l2, ...r2].filter(Boolean).join(" ") : l2;
}
function K({ inherit: r2 = !1 } = {}) {
  let l2 = I$2(), [a3, e2] = useState([]), o3 = r2 ? [l2, ...a3].filter(Boolean) : a3;
  return [o3.length > 0 ? o3.join(" ") : void 0, useMemo(() => function(t2) {
    let s2 = o$4((i2) => (e2((p2) => [...p2, i2]), () => e2((p2) => {
      let u2 = p2.slice(), d2 = u2.indexOf(i2);
      return d2 !== -1 && u2.splice(d2, 1), u2;
    }))), m2 = useMemo(() => ({ register: s2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [s2, t2.slot, t2.name, t2.props, t2.value]);
    return React__default.createElement(c$5.Provider, { value: m2 }, t2.children);
  }, [e2])];
}
let N = "label";
function G$1(r2, l2) {
  var y2;
  let a3 = useId$1(), e2 = P$1(), o3 = u$6(), g2 = a$9(), { id: t2 = \`headlessui-label-\${a3}\`, htmlFor: s2 = o3 ?? ((y2 = e2.props) == null ? void 0 : y2.htmlFor), passive: m2 = !1, ...i2 } = r2, p2 = y$4(l2);
  n$3(() => e2.register(t2), [t2, e2.register]);
  let u2 = o$4((L2) => {
    let b2 = L2.currentTarget;
    if (b2 instanceof HTMLLabelElement && L2.preventDefault(), e2.props && "onClick" in e2.props && typeof e2.props.onClick == "function" && e2.props.onClick(L2), b2 instanceof HTMLLabelElement) {
      let n2 = document.getElementById(b2.htmlFor);
      if (n2) {
        let E2 = n2.getAttribute("disabled");
        if (E2 === "true" || E2 === "") return;
        let x2 = n2.getAttribute("aria-disabled");
        if (x2 === "true" || x2 === "") return;
        (n2 instanceof HTMLInputElement && (n2.type === "radio" || n2.type === "checkbox") || n2.role === "radio" || n2.role === "checkbox" || n2.role === "switch") && n2.click(), n2.focus({ preventScroll: !0 });
      }
    }
  }), d2 = g2 || !1, C2 = useMemo(() => ({ ...e2.slot, disabled: d2 }), [e2.slot, d2]), f2 = { ref: p2, ...e2.props, id: t2, htmlFor: s2, onClick: u2 };
  return m2 && ("onClick" in f2 && (delete f2.htmlFor, delete f2.onClick), "onClick" in i2 && delete i2.onClick), L$2()({ ourProps: f2, theirProps: i2, slot: C2, defaultTag: s2 ? N : "div", name: e2.name || "Label" });
}
let U = K$1(G$1);
Object.assign(U, {});
function f$5(e2) {
  if (e2 === null) return { width: 0, height: 0 };
  let { width: t2, height: r2 } = e2.getBoundingClientRect();
  return { width: t2, height: r2 };
}
function d$2(e2, t2 = !1) {
  let [r2, u2] = useReducer(() => ({}), {}), i2 = useMemo(() => f$5(e2), [e2, r2]);
  return n$3(() => {
    if (!e2) return;
    let n2 = new ResizeObserver(u2);
    return n2.observe(e2), () => {
      n2.disconnect();
    };
  }, [e2]), t2 ? { width: \`\${i2.width}px\`, height: \`\${i2.height}px\` } : i2;
}
let a$7 = class extends Map {
  constructor(t2) {
    super(), this.factory = t2;
  }
  get(t2) {
    let e2 = super.get(t2);
    return e2 === void 0 && (e2 = this.factory(t2), this.set(t2, e2)), e2;
  }
};
function a$6(o3, r2) {
  let t2 = o3(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r2[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function o$2(t2) {
  return useSyncExternalStore(t2.subscribe, t2.getSnapshot, t2.getSnapshot);
}
let p$1 = new a$7(() => a$6(() => [], { ADD(r2) {
  return this.includes(r2) ? this : [...this, r2];
}, REMOVE(r2) {
  let e2 = this.indexOf(r2);
  if (e2 === -1) return this;
  let t2 = this.slice();
  return t2.splice(e2, 1), t2;
} }));
function x$2(r2, e2) {
  let t2 = p$1.get(e2), i2 = useId$1(), h2 = o$2(t2);
  if (n$3(() => {
    if (r2) return t2.dispatch("ADD", i2), () => t2.dispatch("REMOVE", i2);
  }, [t2, r2]), !r2) return !1;
  let s2 = h2.indexOf(i2), o3 = h2.length;
  return s2 === -1 && (s2 = o3, o3 += 1), s2 === o3 - 1;
}
let f$4 = /* @__PURE__ */ new Map(), u$4 = /* @__PURE__ */ new Map();
function h$3(t2) {
  var e2;
  let r2 = (e2 = u$4.get(t2)) != null ? e2 : 0;
  return u$4.set(t2, r2 + 1), r2 !== 0 ? () => m$3(t2) : (f$4.set(t2, { "aria-hidden": t2.getAttribute("aria-hidden"), inert: t2.inert }), t2.setAttribute("aria-hidden", "true"), t2.inert = !0, () => m$3(t2));
}
function m$3(t2) {
  var i2;
  let r2 = (i2 = u$4.get(t2)) != null ? i2 : 1;
  if (r2 === 1 ? u$4.delete(t2) : u$4.set(t2, r2 - 1), r2 !== 1) return;
  let e2 = f$4.get(t2);
  e2 && (e2["aria-hidden"] === null ? t2.removeAttribute("aria-hidden") : t2.setAttribute("aria-hidden", e2["aria-hidden"]), t2.inert = e2.inert, f$4.delete(t2));
}
function y$3(t2, { allowed: r2, disallowed: e2 } = {}) {
  let i2 = x$2(t2, "inert-others");
  n$3(() => {
    var d2, c2;
    if (!i2) return;
    let a3 = o$5();
    for (let n2 of (d2 = e2 == null ? void 0 : e2()) != null ? d2 : []) n2 && a3.add(h$3(n2));
    let s2 = (c2 = r2 == null ? void 0 : r2()) != null ? c2 : [];
    for (let n2 of s2) {
      if (!n2) continue;
      let l2 = o$6(n2);
      if (!l2) continue;
      let o3 = n2.parentElement;
      for (; o3 && o3 !== l2.body; ) {
        for (let p2 of o3.children) s2.some((E2) => p2.contains(E2)) || a3.add(h$3(p2));
        o3 = o3.parentElement;
      }
    }
    return a3.dispose;
  }, [i2, r2, e2]);
}
function m$2(s2, n2, l2) {
  let i2 = s$6((t2) => {
    let e2 = t2.getBoundingClientRect();
    e2.x === 0 && e2.y === 0 && e2.width === 0 && e2.height === 0 && l2();
  });
  useEffect(() => {
    if (!s2) return;
    let t2 = n2 === null ? null : n2 instanceof HTMLElement ? n2 : n2.current;
    if (!t2) return;
    let e2 = o$5();
    if (typeof ResizeObserver < "u") {
      let r2 = new ResizeObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let r2 = new IntersectionObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    return () => e2.dispose();
  }, [n2, i2, s2]);
}
let f$3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => \`\${e2}:not([tabindex='-1'])\`).join(","), p = ["[data-autofocus]"].map((e2) => \`\${e2}:not([tabindex='-1'])\`).join(",");
var F$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2[n2.AutoFocus = 64] = "AutoFocus", n2))(F$2 || {}), T$2 = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(T$2 || {}), y$2 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(y$2 || {});
function b$2(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(f$3)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S$3(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(p)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h$2 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h$2 || {});
function A(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = o$6(e2)) == null ? void 0 : t2.body) ? !1 : u$7(r2, { 0() {
    return e2.matches(f$3);
  }, 1() {
    let u2 = e2;
    for (; u2 !== null; ) {
      if (u2.matches(f$3)) return !0;
      u2 = u2.parentElement;
    }
    return !1;
  } });
}
function G(e2) {
  let r2 = o$6(e2);
  o$5().nextFrame(() => {
    r2 && !A(r2.activeElement, 0) && I$1(e2);
  });
}
var H$3 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(H$3 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function I$1(e2) {
  e2 == null || e2.focus({ preventScroll: !0 });
}
let w = ["textarea", "input"].join(",");
function O(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, w)) != null ? t2 : !1;
}
function _(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, u2) => {
    let o3 = r2(t2), c2 = r2(u2);
    if (o3 === null || c2 === null) return 0;
    let l2 = o3.compareDocumentPosition(c2);
    return l2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function j$2(e2, r2) {
  return P(b$2(), r2, { relativeTo: e2 });
}
function P(e2, r2, { sorted: t2 = !0, relativeTo: u2 = null, skipElements: o3 = [] } = {}) {
  let c2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, l2 = Array.isArray(e2) ? t2 ? _(e2) : e2 : r2 & 64 ? S$3(e2) : b$2(e2);
  o3.length > 0 && l2.length > 1 && (l2 = l2.filter((s2) => !o3.some((a3) => a3 != null && "current" in a3 ? (a3 == null ? void 0 : a3.current) === s2 : a3 === s2))), u2 = u2 ?? c2.activeElement;
  let n2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, l2.indexOf(u2)) - 1;
    if (r2 & 4) return Math.max(0, l2.indexOf(u2)) + 1;
    if (r2 & 8) return l2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M2 = r2 & 32 ? { preventScroll: !0 } : {}, m2 = 0, d2 = l2.length, i2;
  do {
    if (m2 >= d2 || m2 + d2 <= 0) return 0;
    let s2 = x2 + m2;
    if (r2 & 16) s2 = (s2 + d2) % d2;
    else {
      if (s2 < 0) return 3;
      if (s2 >= d2) return 1;
    }
    i2 = l2[s2], i2 == null || i2.focus(M2), m2 += n2;
  } while (i2 !== c2.activeElement);
  return r2 & 6 && O(i2) && i2.select(), 2;
}
function t$1() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i$4() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n$2() {
  return t$1() || i$4();
}
function i$3(t2, e2, o3, n2) {
  let u2 = s$6(o3);
  useEffect(() => {
    if (!t2) return;
    function r2(m2) {
      u2.current(m2);
    }
    return document.addEventListener(e2, r2, n2), () => document.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
function s$5(t2, e2, o3, n2) {
  let i2 = s$6(o3);
  useEffect(() => {
    if (!t2) return;
    function r2(d2) {
      i2.current(d2);
    }
    return window.addEventListener(e2, r2, n2), () => window.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
const E = 30;
function R$1(p2, f2, C2) {
  let u2 = x$2(p2, "outside-click"), m2 = s$6(C2), s2 = useCallback(function(e2, n2) {
    if (e2.defaultPrevented) return;
    let r2 = n2(e2);
    if (r2 === null || !r2.getRootNode().contains(r2) || !r2.isConnected) return;
    let h2 = function l2(o3) {
      return typeof o3 == "function" ? l2(o3()) : Array.isArray(o3) || o3 instanceof Set ? o3 : [o3];
    }(f2);
    for (let l2 of h2) if (l2 !== null && (l2.contains(r2) || e2.composed && e2.composedPath().includes(l2))) return;
    return !A(r2, h$2.Loose) && r2.tabIndex !== -1 && e2.preventDefault(), m2.current(e2, r2);
  }, [m2, f2]), i2 = useRef(null);
  i$3(u2, "pointerdown", (t2) => {
    var e2, n2;
    i2.current = ((n2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : n2[0]) || t2.target;
  }, !0), i$3(u2, "mousedown", (t2) => {
    var e2, n2;
    i2.current = ((n2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : n2[0]) || t2.target;
  }, !0), i$3(u2, "click", (t2) => {
    n$2() || i2.current && (s2(t2, () => i2.current), i2.current = null);
  }, !0);
  let a3 = useRef({ x: 0, y: 0 });
  i$3(u2, "touchstart", (t2) => {
    a3.current.x = t2.touches[0].clientX, a3.current.y = t2.touches[0].clientY;
  }, !0), i$3(u2, "touchend", (t2) => {
    let e2 = { x: t2.changedTouches[0].clientX, y: t2.changedTouches[0].clientY };
    if (!(Math.abs(e2.x - a3.current.x) >= E || Math.abs(e2.y - a3.current.y) >= E)) return s2(t2, () => t2.target instanceof HTMLElement ? t2.target : null);
  }, !0), s$5(u2, "blur", (t2) => s2(t2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function n$1(...e2) {
  return useMemo(() => o$6(...e2), [...e2]);
}
function e$1(t2, u2) {
  return useMemo(() => {
    var n2;
    if (t2.type) return t2.type;
    let r2 = (n2 = t2.as) != null ? n2 : "button";
    if (typeof r2 == "string" && r2.toLowerCase() === "button" || (u2 == null ? void 0 : u2.tagName) === "BUTTON" && !u2.hasAttribute("type")) return "button";
  }, [t2.type, t2.as, u2]);
}
function d$1() {
  let r2;
  return { before({ doc: e2 }) {
    var l2;
    let o3 = e2.documentElement, t2 = (l2 = e2.defaultView) != null ? l2 : window;
    r2 = Math.max(0, t2.innerWidth - o3.clientWidth);
  }, after({ doc: e2, d: o3 }) {
    let t2 = e2.documentElement, l2 = Math.max(0, t2.clientWidth - t2.offsetWidth), n2 = Math.max(0, r2 - l2);
    o3.style(t2, "paddingRight", \`\${n2}px\`);
  } };
}
function d() {
  return t$1() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function o3(a3) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a3));
    }
    n2.microTask(() => {
      var s2;
      if (window.getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$5();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let a3 = (s2 = window.scrollY) != null ? s2 : window.pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !o3(i2) && (l2 = i2);
        } catch {
        }
      }, !0), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (o3(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && o3(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (o3(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: !1 }), n2.add(() => {
        var e2;
        let t2 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
        a3 !== t2 && window.scrollTo(0, a3), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function r() {
  return { before({ doc: e2, d: o3 }) {
    o3.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a$5 = a$6(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o3;
  let t2 = (o3 = this.get(e2)) != null ? o3 : { doc: e2, count: 0, d: o$5(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o3 = { doc: e2, d: n2, meta: m$1(t2) }, c2 = [d(), d$1(), r()];
  c2.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o3)), c2.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o3));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a$5.subscribe(() => {
  let e2 = a$5.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o3 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o3 || !c2 && o3) && a$5.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$5.dispatch("TEARDOWN", t2);
  }
});
function a$4(r2, e2, n2 = () => ({ containers: [] })) {
  let f2 = o$2(a$5), o3 = e2 ? f2.get(e2) : void 0, i2 = o3 ? o3.count > 0 : !1;
  return n$3(() => {
    if (!(!e2 || !r2)) return a$5.dispatch("PUSH", e2, n2), () => a$5.dispatch("POP", e2, n2);
  }, [r2, e2]), i2;
}
function f$2(e2, c2, n2 = () => [document.body]) {
  let r2 = x$2(e2, "scroll-lock");
  a$4(r2, c2, (t2) => {
    var o3;
    return { containers: [...(o3 = t2.containers) != null ? o3 : [], n2] };
  });
}
function t(e2) {
  return [e2.screenX, e2.screenY];
}
function u$3() {
  let e2 = useRef([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t(r2);
    return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? !1 : (e2.current = n2, !0);
  }, update(r2) {
    e2.current = t(r2);
  } };
}
function c$4(u2 = 0) {
  let [t2, l2] = useState(u2), g2 = useCallback((e2) => l2(e2), [t2]), s2 = useCallback((e2) => l2((a3) => a3 | e2), [t2]), m2 = useCallback((e2) => (t2 & e2) === e2, [t2]), n2 = useCallback((e2) => l2((a3) => a3 & ~e2), [l2]), F2 = useCallback((e2) => l2((a3) => a3 ^ e2), [l2]);
  return { flags: t2, setFlag: g2, addFlag: s2, hasFlag: m2, removeFlag: n2, toggleFlag: F2 };
}
var define_process_env_default$1 = {}, T$1, b$1;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((T$1 = process == null ? void 0 : define_process_env_default$1) == null ? void 0 : T$1.NODE_ENV) === "test" && typeof ((b$1 = Element == null ? void 0 : Element.prototype) == null ? void 0 : b$1.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled \`Element.prototype.getAnimations\` for your tests.", "Please install a proper polyfill e.g. \`jsdom-testing-mocks\`, to silence these warnings.", "", "Example usage:", "\`\`\`js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "\`\`\`"].join(\`
\`)), [];
});
var L$1 = ((r2) => (r2[r2.None = 0] = "None", r2[r2.Closed = 1] = "Closed", r2[r2.Enter = 2] = "Enter", r2[r2.Leave = 4] = "Leave", r2))(L$1 || {});
function R(t2) {
  let n2 = {};
  for (let e2 in t2) t2[e2] === !0 && (n2[\`data-\${e2}\`] = "");
  return n2;
}
function x$1(t2, n2, e2, i2) {
  let [r2, o3] = useState(e2), { hasFlag: s2, addFlag: a3, removeFlag: l2 } = c$4(t2 && r2 ? 3 : 0), u2 = useRef(!1), f2 = useRef(!1), E2 = p$2();
  return n$3(() => {
    var d2;
    if (t2) {
      if (e2 && o3(!0), !n2) {
        e2 && a3(3);
        return;
      }
      return (d2 = void 0) == null || d2.call(i2, e2), C(n2, { inFlight: u2, prepare() {
        f2.current ? f2.current = !1 : f2.current = u2.current, u2.current = !0, !f2.current && (e2 ? (a3(3), l2(4)) : (a3(4), l2(2)));
      }, run() {
        f2.current ? e2 ? (l2(3), a3(4)) : (l2(4), a3(3)) : e2 ? l2(1) : a3(1);
      }, done() {
        var p2;
        f2.current && typeof n2.getAnimations == "function" && n2.getAnimations().length > 0 || (u2.current = !1, l2(7), e2 || o3(!1), (p2 = void 0) == null || p2.call(i2, e2));
      } });
    }
  }, [t2, e2, n2, E2]), t2 ? [r2, { closed: s2(1), enter: s2(2), leave: s2(4), transition: s2(2) || s2(4) }] : [e2, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C(t2, { prepare: n2, run: e2, done: i2, inFlight: r2 }) {
  let o3 = o$5();
  return j$1(t2, { prepare: n2, inFlight: r2 }), o3.nextFrame(() => {
    e2(), o3.requestAnimationFrame(() => {
      o3.add(M$2(t2, i2));
    });
  }), o3.dispose;
}
function M$2(t2, n2) {
  var o3, s2;
  let e2 = o$5();
  if (!t2) return e2.dispose;
  let i2 = !1;
  e2.add(() => {
    i2 = !0;
  });
  let r2 = (s2 = (o3 = t2.getAnimations) == null ? void 0 : o3.call(t2).filter((a3) => a3 instanceof CSSTransition)) != null ? s2 : [];
  return r2.length === 0 ? (n2(), e2.dispose) : (Promise.allSettled(r2.map((a3) => a3.finished)).then(() => {
    i2 || n2();
  }), e2.dispose);
}
function j$1(t2, { inFlight: n2, prepare: e2 }) {
  if (n2 != null && n2.current) {
    e2();
    return;
  }
  let i2 = t2.style.transition;
  t2.style.transition = "none", e2(), t2.offsetHeight, t2.style.transition = i2;
}
function F$1(c2, { container: e2, accept: t2, walk: r2 }) {
  let o3 = useRef(t2), l2 = useRef(r2);
  useEffect(() => {
    o3.current = t2, l2.current = r2;
  }, [t2, r2]), n$3(() => {
    if (!e2 || !c2) return;
    let n2 = o$6(e2);
    if (!n2) return;
    let f2 = o3.current, p2 = l2.current, i2 = Object.assign((m2) => f2(m2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, i2, !1);
    for (; u2.nextNode(); ) p2(u2.currentNode);
  }, [e2, c2, o3, l2]);
}
function hasWindow$1() {
  return typeof window < "u";
}
function getWindow$1(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function isElement$1(value) {
  return hasWindow$1() ? value instanceof Element || value instanceof getWindow$1(value).Element : !1;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  return uaData && Array.isArray(uaData.brands) ? uaData.brands.map((_ref) => {
    let {
      brand,
      version
    } = _ref;
    return brand + "/" + version;
  }).join(" ") : navigator.userAgent;
}
const min$1 = Math.min, max$1 = Math.max, round$1 = Math.round;
function evaluate$1(value, param) {
  return typeof value == "function" ? value(param) : value;
}
const min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (v2) => ({
  x: v2,
  y: v2
}), oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value == "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
const yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  rtl === void 0 && (rtl = !1);
  const alignment = getAlignment(placement), alignmentAxis = getAlignmentAxis(placement), length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  return rects.reference[length] > rects.floating[length] && (mainAlignmentSide = getOppositePlacement(mainAlignmentSide)), [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      return rtl ? isStart ? rlPlacement : lrPlacement : isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  return alignment && (list = list.map((side) => side + "-" + alignment), flipAlignment && (list = list.concat(list.map(getOppositeAlignmentPlacement)))), list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding != "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x2,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x2,
    right: x2 + width,
    bottom: y2 + height,
    x: x2,
    y: y2
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement), alignmentAxis = getAlignmentAxis(placement), alignLength = getAxisLength(alignmentAxis), side = getSide(placement), isVertical = sideAxis === "y", commonX = reference.x + reference.width / 2 - floating.width / 2, commonY = reference.y + reference.height / 2 - floating.height / 2, commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config2) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config2, validMiddleware = middleware.filter(Boolean), rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  }), {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl), statefulPlacement = placement, middlewareData = {}, resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2], {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX ?? x2, y2 = nextY ?? y2, middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    }, reset && resetCount <= 50 && (resetCount++, typeof reset == "object" && (reset.placement && (statefulPlacement = reset.placement), reset.rects && (rects = reset.rects === !0 ? await platform2.getElementRects({
      reference,
      floating,
      strategy
    }) : reset.rects), {
      x: x2,
      y: y2
    } = computeCoordsFromPlacement(rects, statefulPlacement, rtl)), i2 = -1);
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow$1(state, options) {
  var _await$platform$isEle;
  options === void 0 && (options = {});
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state, {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = !1,
    padding = 0
  } = evaluate(options, state), paddingObject = getPaddingObject(padding), element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext], clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: (_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) == null || _await$platform$isEle ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  })), rect = elementContext === "floating" ? {
    x: x2,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference, offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)), offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const flip$2 = function(options) {
  return options === void 0 && (options = {}), {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state, {
        mainAxis: checkMainAxis = !0,
        crossAxis: checkCrossAxis = !0,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = !0,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset)
        return {};
      const side = getSide(placement), initialSideAxis = getSideAxis(initialPlacement), isBasePlacement = getSide(initialPlacement) === initialPlacement, rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)), fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement)), hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      !specifiedFallbackPlacements && hasFallbackAxisSideDirection && fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      const placements = [initialPlacement, ...fallbackPlacements], overflow = await detectOverflow$1(state, detectOverflowOptions), overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis && overflows.push(overflow[side]), checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      if (overflowsData = [...overflowsData, {
        placement,
        overflows
      }], !overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1, nextPlacement = placements[nextIndex];
        if (nextPlacement && (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        overflowsData.every((d2) => d2.overflows[0] > 0 && getSideAxis(d2.placement) === initialSideAxis)))
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a3, b2) => a3.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement)
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d2.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the \`y\` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return !0;
              }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a3, b2) => a3[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              placement2 && (resetPlacement = placement2);
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        if (placement !== resetPlacement)
          return {
            reset: {
              placement: resetPlacement
            }
          };
      }
      return {};
    }
  };
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state, rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)), side = getSide(placement), alignment = getAlignment(placement), isVertical = getSideAxis(placement) === "y", mainAxisMulti = originSides.has(side) ? -1 : 1, crossAxisMulti = rtl && isVertical ? -1 : 1, rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue == "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  return alignment && typeof alignmentAxis == "number" && (crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis), isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$2 = function(options) {
  return options === void 0 && (options = 0), {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x2,
        y: y2,
        placement,
        middlewareData
      } = state, diffCoords = await convertValueToCoords(state, options);
      return placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset ? {} : {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
}, shift$2 = function(options) {
  return options === void 0 && (options = {}), {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement
      } = state, {
        mainAxis: checkMainAxis = !0,
        crossAxis: checkCrossAxis = !1,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state), coords = {
        x: x2,
        y: y2
      }, overflow = await detectOverflow$1(state, detectOverflowOptions), crossAxis = getSideAxis(getSide(placement)), mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis], crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left", maxSide = mainAxis === "y" ? "bottom" : "right", min2 = mainAxisCoord + overflow[minSide], max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left", maxSide = crossAxis === "y" ? "bottom" : "right", min2 = crossAxisCoord + overflow[minSide], max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
}, size$2 = function(options) {
  return options === void 0 && (options = {}), {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state, {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state), overflow = await detectOverflow$1(state, detectOverflowOptions), side = getSide(placement), alignment = getAlignment(placement), isYAxis = getSideAxis(placement) === "y", {
        width,
        height
      } = rects.floating;
      let heightSide, widthSide;
      side === "top" || side === "bottom" ? (heightSide = side, widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right") : (widthSide = side, heightSide = alignment === "end" ? "top" : "bottom");
      const maximumClippingHeight = height - overflow.top - overflow.bottom, maximumClippingWidth = width - overflow.left - overflow.right, overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight), overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth), noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight, availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x && (availableWidth = maximumClippingWidth), (_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y && (availableHeight = maximumClippingHeight), noShift && !alignment) {
        const xMin = max(overflow.left, 0), xMax = max(overflow.right, 0), yMin = max(overflow.top, 0), yMax = max(overflow.bottom, 0);
        isYAxis ? availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      return width !== nextDimensions.width || height !== nextDimensions.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function hasWindow() {
  return typeof window < "u";
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return hasWindow() ? value instanceof Node || value instanceof getWindow(value).Node : !1;
}
function isElement(value) {
  return hasWindow() ? value instanceof Element || value instanceof getWindow(value).Element : !1;
}
function isHTMLElement(value) {
  return hasWindow() ? value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement : !1;
}
function isShadowRoot(value) {
  return !hasWindow() || typeof ShadowRoot > "u" ? !1 : value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch {
      return !1;
    }
  });
}
const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"], willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"], containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit(), css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : !1) || (css.containerType ? css.containerType !== "normal" : !1) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : !1) || !webkit && (css.filter ? css.filter !== "none" : !1) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  for (; isHTMLElement(currentNode) && !isLastTraversableNode(currentNode); ) {
    if (isContainingBlock(currentNode))
      return currentNode;
    if (isTopLayer(currentNode))
      return null;
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  return isElement(element) ? {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  } : {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html")
    return node;
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  return isLastTraversableNode(parentNode) ? node.ownerDocument ? node.ownerDocument.body : node.body : isHTMLElement(parentNode) && isOverflowElement(parentNode) ? parentNode : getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  list === void 0 && (list = []), traverseIframes === void 0 && (traverseIframes = !0);
  const scrollableAncestor = getNearestOverflowAncestor(node), isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body), win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0, height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element), offsetWidth = hasOffset ? element.offsetWidth : width, offsetHeight = hasOffset ? element.offsetHeight : height, shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  return shouldFallback && (width = offsetWidth, height = offsetHeight), {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return isElement(element) ? element : element.contextElement;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement))
    return createCoords(1);
  const rect = domElement.getBoundingClientRect(), {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x2 = ($2 ? round(rect.width) : rect.width) / width, y2 = ($2 ? round(rect.height) : rect.height) / height;
  return (!x2 || !Number.isFinite(x2)) && (x2 = 1), (!y2 || !Number.isFinite(y2)) && (y2 = 1), {
    x: x2,
    y: y2
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  return !isWebKit() || !win.visualViewport ? noOffsets : {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  return isFixed === void 0 && (isFixed = !1), !floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element) ? !1 : isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  includeScale === void 0 && (includeScale = !1), isFixedStrategy === void 0 && (isFixedStrategy = !1);
  const clientRect = element.getBoundingClientRect(), domElement = unwrapElement(element);
  let scale = createCoords(1);
  includeScale && (offsetParent ? isElement(offsetParent) && (scale = getScale(offsetParent)) : scale = getScale(element));
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x, y2 = (clientRect.top + visualOffsets.y) / scale.y, width = clientRect.width / scale.x, height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement), offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win, currentIFrame = getFrameElement(currentWin);
    for (; currentIFrame && offsetParent && offsetWin !== currentWin; ) {
      const iframeScale = getScale(currentIFrame), iframeRect = currentIFrame.getBoundingClientRect(), css = getComputedStyle$1(currentIFrame), left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x, top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x, y2 *= iframeScale.y, width *= iframeScale.x, height *= iframeScale.y, x2 += left, y2 += top, currentWin = getWindow(currentIFrame), currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  return rect ? rect.left + leftScroll : getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  ignoreScrollbarX === void 0 && (ignoreScrollbarX = !1);
  const htmlRect = documentElement.getBoundingClientRect(), x2 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  )), y2 = htmlRect.top + scroll.scrollTop;
  return {
    x: x2,
    y: y2
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed", documentElement = getDocumentElement(offsetParent), topLayer = elements ? isTopLayer(elements.floating) : !1;
  if (offsetParent === documentElement || topLayer && isFixed)
    return rect;
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  }, scale = createCoords(1);
  const offsets = createCoords(0), isOffsetParentAnElement = isHTMLElement(offsetParent);
  if ((isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) && ((getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) && (scroll = getNodeScroll(offsetParent)), isHTMLElement(offsetParent))) {
    const offsetRect = getBoundingClientRect(offsetParent);
    scale = getScale(offsetParent), offsets.x = offsetRect.x + offsetParent.clientLeft, offsets.y = offsetRect.y + offsetParent.clientTop;
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, !0) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element), scroll = getNodeScroll(element), body = element.ownerDocument.body, width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth), height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  return getComputedStyle$1(body).direction === "rtl" && (x2 += max(html.clientWidth, body.clientWidth) - width), {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element), html = getDocumentElement(element), visualViewport = win.visualViewport;
  let width = html.clientWidth, height = html.clientHeight, x2 = 0, y2 = 0;
  if (visualViewport) {
    width = visualViewport.width, height = visualViewport.height;
    const visualViewportBased = isWebKit();
    (!visualViewportBased || visualViewportBased && strategy === "fixed") && (x2 = visualViewport.offsetLeft, y2 = visualViewport.offsetTop);
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
const absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, !0, strategy === "fixed"), top = clientRect.top + element.clientTop, left = clientRect.left + element.clientLeft, scale = isHTMLElement(element) ? getScale(element) : createCoords(1), width = element.clientWidth * scale.x, height = element.clientHeight * scale.y, x2 = left * scale.x, y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport")
    rect = getViewportRect(element, strategy);
  else if (clippingAncestor === "document")
    rect = getDocumentRect(getDocumentElement(element));
  else if (isElement(clippingAncestor))
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  return parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode) ? !1 : getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult)
    return cachedResult;
  let result = getOverflowAncestors(element, [], !1).filter((el) => isElement(el) && getNodeName(el) !== "body"), currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  for (; isElement(currentNode) && !isLastTraversableNode(currentNode); ) {
    const computedStyle = getComputedStyle$1(currentNode), currentNodeIsContaining = isContainingBlock(currentNode);
    !currentNodeIsContaining && computedStyle.position === "fixed" && (currentContainingBlockComputedStyle = null), (elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode)) ? result = result.filter((ancestor) => ancestor !== currentNode) : currentContainingBlockComputedStyle = computedStyle, currentNode = getParentNode(currentNode);
  }
  return cache.set(element, result), result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary], firstClippingAncestor = clippingAncestors[0], clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    return accRect.top = max(rect.top, accRect.top), accRect.right = min(rect.right, accRect.right), accRect.bottom = min(rect.bottom, accRect.bottom), accRect.left = max(rect.left, accRect.left), accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent), documentElement = getDocumentElement(offsetParent), isFixed = strategy === "fixed", rect = getBoundingClientRect(element, !0, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed)
    if ((getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) && (scroll = getNodeScroll(offsetParent)), isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, !0, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft, offsets.y = offsetRect.y + offsetParent.clientTop;
    } else documentElement && setLeftRTLScrollbarOffset();
  isFixed && !isOffsetParentAnElement && documentElement && setLeftRTLScrollbarOffset();
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0), x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x, y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x2,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed")
    return null;
  if (polyfill)
    return polyfill(element);
  let rawOffsetParent = element.offsetParent;
  return getDocumentElement(element) === rawOffsetParent && (rawOffsetParent = rawOffsetParent.ownerDocument.body), rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element))
    return win;
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    for (; svgOffsetParent && !isLastTraversableNode(svgOffsetParent); ) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent))
        return svgOffsetParent;
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  for (; offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent); )
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  return offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent) ? win : offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent, getDimensionsFn = this.getDimensions, floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a3, b2) {
  return a3.x === b2.x && a3.y === b2.y && a3.width === b2.width && a3.height === b2.height;
}
function observeMove(element, onMove) {
  let io = null, timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId), (_io = io) == null || _io.disconnect(), io = null;
  }
  function refresh(skip, threshold) {
    skip === void 0 && (skip = !1), threshold === void 0 && (threshold = 1), cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect(), {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (skip || onMove(), !width || !height)
      return;
    const insetTop = floor(top), insetRight = floor(root.clientWidth - (left + width)), insetBottom = floor(root.clientHeight - (top + height)), insetLeft = floor(left), options = {
      rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = !0;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate)
          return refresh();
        ratio ? refresh(!1, ratio) : timeoutId = setTimeout(() => {
          refresh(!1, 1e-7);
        }, 1e3);
      }
      ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect()) && refresh(), isFirstUpdate = !1;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  return refresh(!0), cleanup;
}
function autoUpdate(reference, floating, update, options) {
  options === void 0 && (options = {});
  const {
    ancestorScroll = !0,
    ancestorResize = !0,
    elementResize = typeof ResizeObserver == "function",
    layoutShift = typeof IntersectionObserver == "function",
    animationFrame = !1
  } = options, referenceEl = unwrapElement(reference), ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: !0
    }), ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1, resizeObserver = null;
  elementResize && (resizeObserver = new ResizeObserver((_ref) => {
    let [firstEntry] = _ref;
    firstEntry && firstEntry.target === referenceEl && resizeObserver && (resizeObserver.unobserve(floating), cancelAnimationFrame(reobserveFrame), reobserveFrame = requestAnimationFrame(() => {
      var _resizeObserver;
      (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
    })), update();
  }), referenceEl && !animationFrame && resizeObserver.observe(referenceEl), resizeObserver.observe(floating));
  let frameId, prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  animationFrame && frameLoop();
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect) && update(), prevRefRect = nextRefRect, frameId = requestAnimationFrame(frameLoop);
  }
  return update(), () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update), ancestorResize && ancestor.removeEventListener("resize", update);
    }), cleanupIo == null || cleanupIo(), (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect(), resizeObserver = null, animationFrame && cancelAnimationFrame(frameId);
  };
}
const detectOverflow = detectOverflow$1, offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map(), mergedOptions = {
    platform,
    ...options
  }, platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
var isClient = typeof document < "u", noop = function() {
}, index$1 = isClient ? useLayoutEffect : noop;
function deepEqual(a3, b2) {
  if (a3 === b2)
    return !0;
  if (typeof a3 != typeof b2)
    return !1;
  if (typeof a3 == "function" && a3.toString() === b2.toString())
    return !0;
  let length, i2, keys;
  if (a3 && b2 && typeof a3 == "object") {
    if (Array.isArray(a3)) {
      if (length = a3.length, length !== b2.length) return !1;
      for (i2 = length; i2-- !== 0; )
        if (!deepEqual(a3[i2], b2[i2]))
          return !1;
      return !0;
    }
    if (keys = Object.keys(a3), length = keys.length, length !== Object.keys(b2).length)
      return !1;
    for (i2 = length; i2-- !== 0; )
      if (!{}.hasOwnProperty.call(b2, keys[i2]))
        return !1;
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (!(key === "_owner" && a3.$$typeof) && !deepEqual(a3[key], b2[key]))
        return !1;
    }
    return !0;
  }
  return a3 !== a3 && b2 !== b2;
}
function getDPR(element) {
  return typeof window > "u" ? 1 : (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  return index$1(() => {
    ref.current = value;
  }), ref;
}
function useFloating$1(options) {
  options === void 0 && (options = {});
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = !0,
    whileElementsMounted,
    open
  } = options, [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: !1
  }), [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  deepEqual(latestMiddleware, middleware) || setLatestMiddleware(middleware);
  const [_reference, _setReference] = React.useState(null), [_floating, _setFloating] = React.useState(null), setReference = React.useCallback((node) => {
    node !== referenceRef.current && (referenceRef.current = node, _setReference(node));
  }, []), setFloating = React.useCallback((node) => {
    node !== floatingRef.current && (floatingRef.current = node, _setFloating(node));
  }, []), referenceEl = externalReference || _reference, floatingEl = externalFloating || _floating, referenceRef = React.useRef(null), floatingRef = React.useRef(null), dataRef = React.useRef(data), hasWhileElementsMounted = whileElementsMounted != null, whileElementsMountedRef = useLatestRef(whileElementsMounted), platformRef = useLatestRef(platform2), openRef = useLatestRef(open), update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current)
      return;
    const config2 = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    platformRef.current && (config2.platform = platformRef.current), computePosition(referenceRef.current, floatingRef.current, config2).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // \`isPositioned\` will be \`false\` initially on the next open, avoid
        // setting it to \`true\` when \`open === false\` (must be specified).
        isPositioned: openRef.current !== !1
      };
      isMountedRef.current && !deepEqual(dataRef.current, fullData) && (dataRef.current = fullData, ReactDOM.flushSync(() => {
        setData(fullData);
      }));
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index$1(() => {
    open === !1 && dataRef.current.isPositioned && (dataRef.current.isPositioned = !1, setData((data2) => ({
      ...data2,
      isPositioned: !1
    })));
  }, [open]);
  const isMountedRef = React.useRef(!1);
  index$1(() => (isMountedRef.current = !0, () => {
    isMountedRef.current = !1;
  }), []), index$1(() => {
    if (referenceEl && (referenceRef.current = referenceEl), floatingEl && (floatingRef.current = floatingEl), referenceEl && floatingEl) {
      if (whileElementsMountedRef.current)
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]), elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]), floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating)
      return initialStyles;
    const x2 = roundByDPR(elements.floating, data.x), y2 = roundByDPR(elements.floating, data.y);
    return transform ? {
      ...initialStyles,
      transform: "translate(" + x2 + "px, " + y2 + "px)",
      ...getDPR(elements.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: strategy,
      left: x2,
      top: y2
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
}), shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
}), flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
}), size = (options, deps) => ({
  ...size$1(options),
  options: [options, deps]
});
var define_process_env_default = {};
const SafeReact = {
  ...React
}, useInsertionEffect = SafeReact.useInsertionEffect, useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React.useRef(() => {
    if (define_process_env_default.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return useSafeInsertionEffect(() => {
    ref.current = callback;
  }), React.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var index = typeof document < "u" ? useLayoutEffect : useEffect;
let serverHandoffComplete = !1, count = 0;
const genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React.useState(() => serverHandoffComplete ? genId() : void 0);
  return index(() => {
    id == null && setId(genId());
  }, []), React.useEffect(() => {
    serverHandoffComplete = !0;
  }, []), id;
}
const useReactId = SafeReact.useId, useId = useReactId || useFloatingId;
let devMessageSet;
define_process_env_default.NODE_ENV !== "production" && (devMessageSet = /* @__PURE__ */ new Set());
function warn() {
  for (var _devMessageSet, _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++)
    messages[_key] = arguments[_key];
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message), console.warn(message);
  }
}
function error() {
  for (var _devMessageSet3, _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
    messages[_key2] = arguments[_key2];
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message), console.error(message);
  }
}
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l2) => l2 !== listener)) || []);
    }
  };
}
const FloatingNodeContext = /* @__PURE__ */ React.createContext(null), FloatingTreeContext = /* @__PURE__ */ React.createContext(null), useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
}, useFloatingTree = () => React.useContext(FloatingTreeContext), FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
function useFloatingRootContext(options) {
  const {
    open = !1,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options, floatingId = useId(), dataRef = React.useRef({}), [events] = React.useState(() => createPubSub()), nested = useFloatingParentNodeId() != null;
  if (define_process_env_default.NODE_ENV !== "production") {
    const optionDomReference = elementsProp.reference;
    optionDomReference && !isElement$1(optionDomReference) && error("Cannot pass a virtual element to the \`elements.reference\` option,", "as it must be a real DOM element. Use \`refs.setPositionReference()\`", "instead.");
  }
  const [positionReference, setPositionReference] = React.useState(elementsProp.reference), onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0, events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    }), onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  }), refs = React.useMemo(() => ({
    setPositionReference
  }), []), elements = React.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating(options) {
  options === void 0 && (options = {});
  const {
    nodeId
  } = options, internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  }), rootContext = options.rootContext || internalRootContext, computedElements = rootContext.elements, [_domReference, setDomReference] = React.useState(null), [positionReference, _setPositionReference] = React.useState(null), domReference = (computedElements == null ? void 0 : computedElements.domReference) || _domReference, domReferenceRef = React.useRef(null), tree = useFloatingTree();
  index(() => {
    domReference && (domReferenceRef.current = domReference);
  }, [domReference]);
  const position = useFloating$1({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  }), setPositionReference = React.useCallback((node) => {
    const computedPositionReference = isElement$1(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference), position.refs.setReference(computedPositionReference);
  }, [position.refs]), setReference = React.useCallback((node) => {
    (isElement$1(node) || node === null) && (domReferenceRef.current = node, setDomReference(node)), (isElement$1(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // \`null\` to support \`positionReference\` + an unstable \`reference\`
    // callback ref.
    node !== null && !isElement$1(node)) && position.refs.setReference(node);
  }, [position.refs]), refs = React.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]), elements = React.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]), context = React.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  return index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    node && (node.context = context);
  }), React.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
const ACTIVE_KEY = "active", SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map(), isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _2,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      return typeof propsOrGetProps == "function" ? userProps ? propsOrGetProps(userProps) : null : propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => (props && Object.entries(props).forEach((_ref) => {
      let [key, value] = _ref;
      if (!(isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)))
        if (key.indexOf("on") === 0) {
          if (map.has(key) || map.set(key, []), typeof value == "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value), acc[key] = function() {
              for (var _map$get2, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
                args[_key] = arguments[_key];
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else
          acc[key] = value;
    }), acc), {})
  };
}
function useInteractions(propsList) {
  propsList === void 0 && (propsList = []);
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference), floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating), itemDeps = propsList.map((key) => key == null ? void 0 : key.item), getReferenceProps = React.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  ), getFloatingProps = React.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  ), getItemProps = React.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return React.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
const inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index2 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate$1(props, state), {
      rects,
      elements: {
        floating
      }
    } = state, item = listRef.current[index2], scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating, clientTop = floating.clientTop || scrollEl.clientTop, floatingIsBordered = floating.clientTop !== 0, scrollElIsBordered = scrollEl.clientTop !== 0, floatingIsScrollEl = floating === scrollEl;
    if (define_process_env_default.NODE_ENV !== "production" && (state.placement.startsWith("bottom") || warn('\`placement\` side must be "bottom" when using the \`inner\`', "middleware.")), !item)
      return {};
    const nextArgs = {
      ...state,
      ...await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    }, overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions), refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    }), diffY = max$1(0, overflow.top), nextY = nextArgs.y + diffY, maxHeight = (scrollEl.scrollHeight > scrollEl.clientHeight ? (v2) => v2 : round$1)(max$1(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max$1(0, overflow.bottom)));
    if (scrollEl.style.maxHeight = maxHeight + "px", scrollEl.scrollTop = diffY, onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min$1(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM.flushSync(() => onFallbackChange(shouldFallback));
    }
    return overflowRef && (overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
      ...nextArgs,
      y: nextY
    }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions)), {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context, {
    enabled = !0,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props, onChange = useEffectEvent(unstable_onChange), controlledScrollingRef = React.useRef(!1), prevScrollTopRef = React.useRef(null), initialOverflowRef = React.useRef(null);
  React.useEffect(() => {
    if (!enabled) return;
    function onWheel(e2) {
      if (e2.ctrlKey || !el || overflowRef.current == null)
        return;
      const dY = e2.deltaY, isAtTop = overflowRef.current.top >= -0.5, isAtBottom = overflowRef.current.bottom >= -0.5, remainingScroll = el.scrollHeight - el.clientHeight, sign = dY < 0 ? -1 : 1, method = dY < 0 ? "max" : "min";
      el.scrollHeight <= el.clientHeight || (!isAtTop && dY > 0 || !isAtBottom && dY < 0 ? (e2.preventDefault(), ReactDOM.flushSync(() => {
        onChange((d2) => d2 + Math[method](dY, remainingScroll * sign));
      })) : /firefox/i.test(getUserAgent()) && (el.scrollTop += dY));
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el)
      return el.addEventListener("wheel", onWheel), requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop, overflowRef.current != null && (initialOverflowRef.current = {
          ...overflowRef.current
        });
      }), () => {
        prevScrollTopRef.current = null, initialOverflowRef.current = null, el.removeEventListener("wheel", onWheel);
      };
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = !0;
    },
    onWheel() {
      controlledScrollingRef.current = !1;
    },
    onPointerMove() {
      controlledScrollingRef.current = !1;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!(!overflowRef.current || !el || !controlledScrollingRef.current)) {
        if (prevScrollTopRef.current !== null) {
          const scrollDiff = el.scrollTop - prevScrollTopRef.current;
          (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) && ReactDOM.flushSync(() => onChange((d2) => d2 + scrollDiff));
        }
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
        });
      }
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}
let y$1 = createContext({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y$1.displayName = "FloatingContext";
let H$2 = createContext(null);
H$2.displayName = "PlacementContext";
function xe(e2) {
  return useMemo(() => e2 ? typeof e2 == "string" ? { to: e2 } : e2 : null, [e2]);
}
function ye() {
  return useContext(y$1).setReference;
}
function Fe() {
  return useContext(y$1).getReferenceProps;
}
function be() {
  let { getFloatingProps: e2, slot: t2 } = useContext(y$1);
  return useCallback((...n2) => Object.assign({}, e2(...n2), { "data-anchor": t2.anchor }), [e2, t2]);
}
function Re(e2 = null) {
  e2 === !1 && (e2 = null), typeof e2 == "string" && (e2 = { to: e2 });
  let t2 = useContext(H$2), n2 = useMemo(() => e2, [JSON.stringify(e2, (r2, o3) => {
    var u2;
    return (u2 = o3 == null ? void 0 : o3.outerHTML) != null ? u2 : o3;
  })]);
  n$3(() => {
    t2 == null || t2(n2 ?? null);
  }, [t2, n2]);
  let l2 = useContext(y$1);
  return useMemo(() => [l2.setFloating, e2 ? l2.styles : {}], [l2.setFloating, e2, l2.styles]);
}
let q = 4;
function Me({ children: e2, enabled: t2 = !0 }) {
  let [n2, l2] = useState(null), [r2, o3] = useState(0), u2 = useRef(null), [f2, s2] = useState(null);
  pe(f2);
  let i2 = t2 && n2 !== null && f2 !== null, { to: F2 = "bottom", gap: E2 = 0, offset: v2 = 0, padding: c2 = 0, inner: P2 } = ce(n2, f2), [a3, p2 = "center"] = F2.split(" ");
  n$3(() => {
    i2 && o3(0);
  }, [i2]);
  let { refs: b2, floatingStyles: w2, context: g2 } = useFloating({ open: i2, placement: a3 === "selection" ? p2 === "center" ? "bottom" : \`bottom-\${p2}\` : p2 === "center" ? \`\${a3}\` : \`\${a3}-\${p2}\`, strategy: "absolute", transform: !1, middleware: [offset({ mainAxis: a3 === "selection" ? 0 : E2, crossAxis: v2 }), shift({ padding: c2 }), a3 !== "selection" && flip({ padding: c2 }), a3 === "selection" && P2 ? inner({ ...P2, padding: c2, overflowRef: u2, offset: r2, minItemsVisible: q, referenceOverflowThreshold: c2, onFallbackChange(h2) {
    var O2, W;
    if (!h2) return;
    let d2 = g2.elements.floating;
    if (!d2) return;
    let T2 = parseFloat(getComputedStyle(d2).scrollPaddingBottom) || 0, $2 = Math.min(q, d2.childElementCount), L2 = 0, N2 = 0;
    for (let m2 of (W = (O2 = g2.elements.floating) == null ? void 0 : O2.childNodes) != null ? W : []) if (m2 instanceof HTMLElement) {
      let x2 = m2.offsetTop, k2 = x2 + m2.clientHeight + T2, S2 = d2.scrollTop, U2 = S2 + d2.clientHeight;
      if (x2 >= S2 && k2 <= U2) $2--;
      else {
        N2 = Math.max(0, Math.min(k2, U2) - Math.max(x2, S2)), L2 = m2.clientHeight;
        break;
      }
    }
    $2 >= 1 && o3((m2) => {
      let x2 = L2 * $2 - N2 + T2;
      return m2 >= x2 ? m2 : x2;
    });
  } }) : null, size({ padding: c2, apply({ availableWidth: h2, availableHeight: d2, elements: T2 }) {
    Object.assign(T2.floating.style, { overflow: "auto", maxWidth: \`\${h2}px\`, maxHeight: \`min(var(--anchor-max-height, 100vh), \${d2}px)\` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I2 = a3, B2 = p2] = g2.placement.split("-");
  a3 === "selection" && (I2 = "selection");
  let G2 = useMemo(() => ({ anchor: [I2, B2].filter(Boolean).join(" ") }), [I2, B2]), K2 = useInnerOffset(g2, { overflowRef: u2, onChange: o3 }), { getReferenceProps: Q, getFloatingProps: X2 } = useInteractions([K2]), Y = o$4((h2) => {
    s2(h2), b2.setFloating(h2);
  });
  return React.createElement(H$2.Provider, { value: l2 }, React.createElement(y$1.Provider, { value: { setFloating: Y, setReference: b2.setReference, styles: w2, getReferenceProps: Q, getFloatingProps: X2, slot: G2 } }, e2));
}
function pe(e2) {
  n$3(() => {
    if (!e2) return;
    let t2 = new MutationObserver(() => {
      let n2 = window.getComputedStyle(e2).maxHeight, l2 = parseFloat(n2);
      if (isNaN(l2)) return;
      let r2 = parseInt(n2);
      isNaN(r2) || l2 !== r2 && (e2.style.maxHeight = \`\${Math.ceil(l2)}px\`);
    });
    return t2.observe(e2, { attributes: !0, attributeFilter: ["style"] }), () => {
      t2.disconnect();
    };
  }, [e2]);
}
function ce(e2, t2) {
  var o3, u2, f2;
  let n2 = V((o3 = e2 == null ? void 0 : e2.gap) != null ? o3 : "var(--anchor-gap, 0)", t2), l2 = V((u2 = e2 == null ? void 0 : e2.offset) != null ? u2 : "var(--anchor-offset, 0)", t2), r2 = V((f2 = e2 == null ? void 0 : e2.padding) != null ? f2 : "var(--anchor-padding, 0)", t2);
  return { ...e2, gap: n2, offset: l2, padding: r2 };
}
function V(e2, t2, n2 = void 0) {
  let l2 = p$2(), r2 = o$4((s2, i2) => {
    if (s2 == null) return [n2, null];
    if (typeof s2 == "number") return [s2, null];
    if (typeof s2 == "string") {
      if (!i2) return [n2, null];
      let F2 = J$2(s2, i2);
      return [F2, (E2) => {
        let v2 = D$1(s2);
        {
          let c2 = v2.map((P2) => window.getComputedStyle(i2).getPropertyValue(P2));
          l2.requestAnimationFrame(function P2() {
            l2.nextFrame(P2);
            let a3 = !1;
            for (let [b2, w2] of v2.entries()) {
              let g2 = window.getComputedStyle(i2).getPropertyValue(w2);
              if (c2[b2] !== g2) {
                c2[b2] = g2, a3 = !0;
                break;
              }
            }
            if (!a3) return;
            let p2 = J$2(s2, i2);
            F2 !== p2 && (E2(p2), F2 = p2);
          });
        }
        return l2.dispose;
      }];
    }
    return [n2, null];
  }), o3 = useMemo(() => r2(e2, t2)[0], [e2, t2]), [u2 = o3, f2] = useState();
  return n$3(() => {
    let [s2, i2] = r2(e2, t2);
    if (f2(s2), !!i2) return i2(f2);
  }, [e2, t2]), u2;
}
function D$1(e2) {
  let t2 = /var\\((.*)\\)/.exec(e2);
  if (t2) {
    let n2 = t2[1].indexOf(",");
    if (n2 === -1) return [t2[1]];
    let l2 = t2[1].slice(0, n2).trim(), r2 = t2[1].slice(n2 + 1).trim();
    return r2 ? [l2, ...D$1(r2)] : [l2];
  }
  return [];
}
function J$2(e2, t2) {
  let n2 = document.createElement("div");
  t2.appendChild(n2), n2.style.setProperty("margin-top", "0px", "important"), n2.style.setProperty("margin-top", e2, "important");
  let l2 = parseFloat(window.getComputedStyle(n2).marginTop) || 0;
  return t2.removeChild(n2), l2;
}
let n = createContext(null);
n.displayName = "OpenClosedContext";
var i$2 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$2 || {});
function u$2() {
  return useContext(n);
}
function c$3({ value: o3, children: t2 }) {
  return React__default.createElement(n.Provider, { value: o3 }, t2);
}
var withSelector = { exports: {} }, useSyncExternalStoreWithSelector_production = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreWithSelector_production;
function requireUseSyncExternalStoreWithSelector_production() {
  if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
  hasRequiredUseSyncExternalStoreWithSelector_production = 1;
  var React2 = React__default;
  function is(x2, y2) {
    return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs = typeof Object.is == "function" ? Object.is : is, useSyncExternalStore2 = React2.useSyncExternalStore, useRef2 = React2.useRef, useEffect2 = React2.useEffect, useMemo2 = React2.useMemo, useDebugValue = React2.useDebugValue;
  return useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef2(null);
    if (instRef.current === null) {
      var inst = { hasValue: !1, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo2(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            if (hasMemo = !0, memoizedSnapshot = nextSnapshot, nextSnapshot = selector(nextSnapshot), isEqual !== void 0 && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          if (currentSelection = memoizedSelection, objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          return isEqual !== void 0 && isEqual(currentSelection, nextSelection) ? (memoizedSnapshot = nextSnapshot, currentSelection) : (memoizedSnapshot = nextSnapshot, memoizedSelection = nextSelection);
        }
        var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          maybeGetServerSnapshot === null ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
    return useEffect2(
      function() {
        inst.hasValue = !0, inst.value = value;
      },
      [value]
    ), useDebugValue(value), value;
  }, useSyncExternalStoreWithSelector_production;
}
var useSyncExternalStoreWithSelector_development = {}, hasRequiredUseSyncExternalStoreWithSelector_development;
function requireUseSyncExternalStoreWithSelector_development() {
  if (hasRequiredUseSyncExternalStoreWithSelector_development) return useSyncExternalStoreWithSelector_development;
  hasRequiredUseSyncExternalStoreWithSelector_development = 1;
  var define_process_env_default2 = {};
  /**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return define_process_env_default2.NODE_ENV !== "production" && function() {
    function is(x2, y2) {
      return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React2 = React__default, objectIs = typeof Object.is == "function" ? Object.is : is, useSyncExternalStore2 = React2.useSyncExternalStore, useRef2 = React2.useRef, useEffect2 = React2.useEffect, useMemo2 = React2.useMemo, useDebugValue = React2.useDebugValue;
    useSyncExternalStoreWithSelector_development.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef2(null);
      if (instRef.current === null) {
        var inst = { hasValue: !1, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo2(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              if (hasMemo = !0, memoizedSnapshot = nextSnapshot, nextSnapshot = selector(nextSnapshot), isEqual !== void 0 && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            if (currentSelection = memoizedSelection, objectIs(memoizedSnapshot, nextSnapshot))
              return currentSelection;
            var nextSelection = selector(nextSnapshot);
            return isEqual !== void 0 && isEqual(currentSelection, nextSelection) ? (memoizedSnapshot = nextSnapshot, currentSelection) : (memoizedSnapshot = nextSnapshot, memoizedSelection = nextSelection);
          }
          var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
      return useEffect2(
        function() {
          inst.hasValue = !0, inst.value = value;
        },
        [value]
      ), useDebugValue(value), value;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), useSyncExternalStoreWithSelector_development;
}
var hasRequiredWithSelector;
function requireWithSelector() {
  if (hasRequiredWithSelector) return withSelector.exports;
  hasRequiredWithSelector = 1;
  var define_process_env_default2 = {};
  return define_process_env_default2.NODE_ENV === "production" ? withSelector.exports = requireUseSyncExternalStoreWithSelector_production() : withSelector.exports = requireUseSyncExternalStoreWithSelector_development(), withSelector.exports;
}
var withSelectorExports = requireWithSelector(), f$1 = (t2, e2, r2) => {
  if (!e2.has(t2)) throw TypeError("Cannot " + r2);
}, a$3 = (t2, e2, r2) => (f$1(t2, e2, "read from private field"), r2 ? r2.call(t2) : e2.get(t2)), l$2 = (t2, e2, r2) => {
  if (e2.has(t2)) throw TypeError("Cannot add the same private member more than once");
  e2 instanceof WeakSet ? e2.add(t2) : e2.set(t2, r2);
}, c$2 = (t2, e2, r2, n2) => (f$1(t2, e2, "write to private field"), e2.set(t2, r2), r2), i$1, s$4, o$1;
class m {
  constructor(e2) {
    l$2(this, i$1, {}), l$2(this, s$4, new a$7(() => /* @__PURE__ */ new Set())), l$2(this, o$1, /* @__PURE__ */ new Set()), c$2(this, i$1, e2);
  }
  get state() {
    return a$3(this, i$1);
  }
  subscribe(e2, r2) {
    let n2 = { selector: e2, callback: r2, current: e2(a$3(this, i$1)) };
    return a$3(this, o$1).add(n2), () => {
      a$3(this, o$1).delete(n2);
    };
  }
  on(e2, r2) {
    return a$3(this, s$4).get(e2).add(r2), () => {
      a$3(this, s$4).get(e2).delete(r2);
    };
  }
  send(e2) {
    c$2(this, i$1, this.reduce(a$3(this, i$1), e2));
    for (let r2 of a$3(this, o$1)) {
      let n2 = r2.selector(a$3(this, i$1));
      h$1(r2.current, n2) || (r2.current = n2, r2.callback(n2));
    }
    for (let r2 of a$3(this, s$4).get(e2.type)) r2(a$3(this, i$1), e2);
  }
}
i$1 = /* @__PURE__ */ new WeakMap(), s$4 = /* @__PURE__ */ new WeakMap(), o$1 = /* @__PURE__ */ new WeakMap();
function h$1(t2, e2) {
  return Object.is(t2, e2) ? !0 : typeof t2 != "object" || t2 === null || typeof e2 != "object" || e2 === null ? !1 : Array.isArray(t2) && Array.isArray(e2) ? t2.length !== e2.length ? !1 : u$1(t2[Symbol.iterator](), e2[Symbol.iterator]()) : t2 instanceof Map && e2 instanceof Map || t2 instanceof Set && e2 instanceof Set ? t2.size !== e2.size ? !1 : u$1(t2.entries(), e2.entries()) : S$2(t2) && S$2(e2) ? u$1(Object.entries(t2)[Symbol.iterator](), Object.entries(e2)[Symbol.iterator]()) : !1;
}
function u$1(t2, e2) {
  do {
    let r2 = t2.next(), n2 = e2.next();
    if (r2.done && n2.done) return !0;
    if (r2.done || n2.done || !Object.is(r2.value, n2.value)) return !1;
  } while (!0);
}
function S$2(t2) {
  if (Object.prototype.toString.call(t2) !== "[object Object]") return !1;
  let e2 = Object.getPrototypeOf(t2);
  return e2 === null || Object.getPrototypeOf(e2) === null;
}
function g$2(t2) {
  let [e2, r2] = t2(), n2 = o$5();
  return (...b2) => {
    e2(...b2), n2.dispose(), n2.microTask(r2);
  };
}
function S$1(e2, n2, r2 = h$1) {
  return withSelectorExports.useSyncExternalStoreWithSelector(o$4((i2) => e2.subscribe(s$3, i2)), o$4(() => e2.state), o$4(() => e2.state), o$4(n2), r2);
}
function s$3(e2) {
  return e2;
}
function u(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0) return null;
  let r2 = n2.resolveActiveIndex(), s2 = r2 ?? -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 1: {
      s2 === -1 && (s2 = t2.length);
      for (let e2 = s2 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s2 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u(l2);
  }
}
function c(t2) {
  let r2 = o$4(t2), e2 = useRef(!1);
  useEffect(() => (e2.current = !1, () => {
    e2.current = !0, t$3(() => {
      e2.current && r2();
    });
  }), [r2]);
}
function s$2() {
  let r2 = typeof document > "u";
  return "useSyncExternalStore" in React ? ((o3) => o3.useSyncExternalStore)(React)(() => () => {
  }, () => !1, () => !r2) : !1;
}
function l$1() {
  let r2 = s$2(), [e2, n2] = React.useState(s$7.isHandoffComplete);
  return e2 && s$7.isHandoffComplete === !1 && n2(!1), React.useEffect(() => {
    e2 !== !0 && n2(!0);
  }, [e2]), React.useEffect(() => s$7.handoff(), []), r2 ? !1 : e2;
}
let e = createContext(!1);
function a$2() {
  return useContext(e);
}
function j(e2) {
  let l2 = a$2(), o3 = useContext(H$1), [r2, u2] = useState(() => {
    var i2;
    if (!l2 && o3 !== null) return (i2 = o3.current) != null ? i2 : null;
    if (s$7.isServer) return null;
    let t2 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
    if (t2) return t2;
    if (e2 === null) return null;
    let a3 = e2.createElement("div");
    return a3.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(a3);
  });
  return useEffect(() => {
    r2 !== null && (e2 != null && e2.body.contains(r2) || e2 == null || e2.body.appendChild(r2));
  }, [r2, e2]), useEffect(() => {
    l2 || o3 !== null && u2(o3.current);
  }, [o3, u2, l2]), r2;
}
let M$1 = Fragment, I = K$1(function(l2, o3) {
  let { ownerDocument: r2 = null, ...u2 } = l2, t2 = useRef(null), a3 = y$4(T$3((s2) => {
    t2.current = s2;
  }), o3), i2 = n$1(t2), f2 = r2 ?? i2, p2 = j(f2), [n2] = useState(() => {
    var s2;
    return s$7.isServer ? null : (s2 = f2 == null ? void 0 : f2.createElement("div")) != null ? s2 : null;
  }), P2 = useContext(g$1), b2 = l$1();
  n$3(() => {
    !p2 || !n2 || p2.contains(n2) || (n2.setAttribute("data-headlessui-portal", ""), p2.appendChild(n2));
  }, [p2, n2]), n$3(() => {
    if (n2 && P2) return P2.register(n2);
  }, [P2, n2]), c(() => {
    var s2;
    !p2 || !n2 || (n2 instanceof Node && p2.contains(n2) && p2.removeChild(n2), p2.childNodes.length <= 0 && ((s2 = p2.parentElement) == null || s2.removeChild(p2)));
  });
  let h2 = L$2();
  return b2 ? !p2 || !n2 ? null : createPortal(h2({ ourProps: { ref: a3 }, theirProps: u2, slot: {}, defaultTag: M$1, name: "Portal" }), n2) : null;
});
function J$1(e2, l2) {
  let o3 = y$4(l2), { enabled: r2 = !0, ownerDocument: u2, ...t2 } = e2, a3 = L$2();
  return r2 ? React__default.createElement(I, { ...t2, ownerDocument: u2, ref: o3 }) : a3({ ourProps: { ref: o3 }, theirProps: t2, slot: {}, defaultTag: M$1, name: "Portal" });
}
let X$1 = Fragment, H$1 = createContext(null);
function k(e2, l2) {
  let { target: o3, ...r2 } = e2, t2 = { ref: y$4(l2) }, a3 = L$2();
  return React__default.createElement(H$1.Provider, { value: o3 }, a3({ ourProps: t2, theirProps: r2, defaultTag: X$1, name: "Popover.Group" }));
}
let g$1 = createContext(null), B = K$1(J$1), D = K$1(k), oe = Object.assign(B, { Group: D });
function s$1(n2, t2) {
  let e2 = useRef({ left: 0, top: 0 });
  if (n$3(() => {
    if (!t2) return;
    let r2 = t2.getBoundingClientRect();
    r2 && (e2.current = r2);
  }, [n2, t2]), t2 == null || !n2 || t2 === document.activeElement) return !1;
  let o3 = t2.getBoundingClientRect();
  return o3.top !== e2.current.top || o3.left !== e2.current.left;
}
let a$1 = /([\\u2700-\\u27BF]|[\\uE000-\\uF8FF]|\\uD83C[\\uDC00-\\uDFFF]|\\uD83D[\\uDC00-\\uDFFF]|[\\u2011-\\u26FF]|\\uD83E[\\uDD10-\\uDDFF])/g;
function o2(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(!0);
  if (!(t2 instanceof HTMLElement)) return n2;
  let u2 = !1;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = !0;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a$1.test(l2) && (l2 = l2.replace(a$1, "")), l2;
}
function g(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string") return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = document.getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o2(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0) return u2.join(", ");
  }
  return o2(e2).trim();
}
function s(c2) {
  let t2 = useRef(""), r2 = useRef("");
  return o$4(() => {
    let e2 = c2.current;
    if (!e2) return "";
    let u2 = e2.innerText;
    if (t2.current === u2) return r2.current;
    let n2 = g(e2).trim().toLowerCase();
    return t2.current = u2, r2.current = n2, n2;
  });
}
var h = Object.defineProperty, y = (e2, n2, t2) => n2 in e2 ? h(e2, n2, { enumerable: !0, configurable: !0, writable: !0, value: t2 }) : e2[n2] = t2, v = (e2, n2, t2) => (y(e2, typeof n2 != "symbol" ? n2 + "" : n2, t2), t2), M = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(M || {}), T = ((t2) => (t2[t2.Pointer = 0] = "Pointer", t2[t2.Other = 1] = "Other", t2))(T || {}), b = ((i2) => (i2[i2.OpenMenu = 0] = "OpenMenu", i2[i2.CloseMenu = 1] = "CloseMenu", i2[i2.GoToItem = 2] = "GoToItem", i2[i2.Search = 3] = "Search", i2[i2.ClearSearch = 4] = "ClearSearch", i2[i2.RegisterItems = 5] = "RegisterItems", i2[i2.UnregisterItems = 6] = "UnregisterItems", i2[i2.SetButtonElement = 7] = "SetButtonElement", i2[i2.SetItemsElement = 8] = "SetItemsElement", i2[i2.SortItems = 9] = "SortItems", i2))(b || {});
function S(e2, n2 = (t2) => t2) {
  let t2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, r2 = _(n2(e2.items.slice()), (u2) => u2.dataRef.current.domRef.current), l2 = t2 ? r2.indexOf(t2) : null;
  return l2 === -1 && (l2 = null), { items: r2, activeItemIndex: l2 };
}
let F = { 1(e2) {
  return e2.menuState === 1 ? e2 : { ...e2, activeItemIndex: null, pendingFocus: { focus: c$1.Nothing }, menuState: 1 };
}, 0(e2, n2) {
  return e2.menuState === 0 ? e2 : { ...e2, __demoMode: !1, pendingFocus: n2.focus, menuState: 0 };
}, 2: (e2, n2) => {
  var u2, m2, d2, a3, I2;
  if (e2.menuState === 1) return e2;
  let t2 = { ...e2, searchQuery: "", activationTrigger: (u2 = n2.trigger) != null ? u2 : 1, __demoMode: !1 };
  if (n2.focus === c$1.Nothing) return { ...t2, activeItemIndex: null };
  if (n2.focus === c$1.Specific) return { ...t2, activeItemIndex: e2.items.findIndex((i2) => i2.id === n2.id) };
  if (n2.focus === c$1.Previous) {
    let i2 = e2.activeItemIndex;
    if (i2 !== null) {
      let g2 = e2.items[i2].dataRef.current.domRef, o3 = f(n2, { resolveItems: () => e2.items, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (s2) => s2.id, resolveDisabled: (s2) => s2.dataRef.current.disabled });
      if (o3 !== null) {
        let s2 = e2.items[o3].dataRef.current.domRef;
        if (((m2 = g2.current) == null ? void 0 : m2.previousElementSibling) === s2.current || ((d2 = s2.current) == null ? void 0 : d2.previousElementSibling) === null) return { ...t2, activeItemIndex: o3 };
      }
    }
  } else if (n2.focus === c$1.Next) {
    let i2 = e2.activeItemIndex;
    if (i2 !== null) {
      let g2 = e2.items[i2].dataRef.current.domRef, o3 = f(n2, { resolveItems: () => e2.items, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (s2) => s2.id, resolveDisabled: (s2) => s2.dataRef.current.disabled });
      if (o3 !== null) {
        let s2 = e2.items[o3].dataRef.current.domRef;
        if (((a3 = g2.current) == null ? void 0 : a3.nextElementSibling) === s2.current || ((I2 = s2.current) == null ? void 0 : I2.nextElementSibling) === null) return { ...t2, activeItemIndex: o3 };
      }
    }
  }
  let r2 = S(e2), l2 = f(n2, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (i2) => i2.id, resolveDisabled: (i2) => i2.dataRef.current.disabled });
  return { ...t2, ...r2, activeItemIndex: l2 };
}, 3: (e2, n2) => {
  let r2 = e2.searchQuery !== "" ? 0 : 1, l2 = e2.searchQuery + n2.value.toLowerCase(), m2 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + r2).concat(e2.items.slice(0, e2.activeItemIndex + r2)) : e2.items).find((a3) => {
    var I2;
    return ((I2 = a3.dataRef.current.textValue) == null ? void 0 : I2.startsWith(l2)) && !a3.dataRef.current.disabled;
  }), d2 = m2 ? e2.items.indexOf(m2) : -1;
  return d2 === -1 || d2 === e2.activeItemIndex ? { ...e2, searchQuery: l2 } : { ...e2, searchQuery: l2, activeItemIndex: d2, activationTrigger: 1 };
}, 4(e2) {
  return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e2, n2) => {
  let t2 = e2.items.concat(n2.items.map((l2) => l2)), r2 = e2.activeItemIndex;
  return e2.pendingFocus.focus !== c$1.Nothing && (r2 = f(e2.pendingFocus, { resolveItems: () => t2, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (l2) => l2.id, resolveDisabled: (l2) => l2.dataRef.current.disabled })), { ...e2, items: t2, activeItemIndex: r2, pendingFocus: { focus: c$1.Nothing }, pendingShouldSort: !0 };
}, 6: (e2, n2) => {
  let t2 = e2.items, r2 = [], l2 = new Set(n2.items);
  for (let [u2, m2] of t2.entries()) if (l2.has(m2.id) && (r2.push(u2), l2.delete(m2.id), l2.size === 0)) break;
  if (r2.length > 0) {
    t2 = t2.slice();
    for (let u2 of r2.reverse()) t2.splice(u2, 1);
  }
  return { ...e2, items: t2, activationTrigger: 1 };
}, 7: (e2, n2) => e2.buttonElement === n2.element ? e2 : { ...e2, buttonElement: n2.element }, 8: (e2, n2) => e2.itemsElement === n2.element ? e2 : { ...e2, itemsElement: n2.element }, 9: (e2) => e2.pendingShouldSort ? { ...e2, ...S(e2), pendingShouldSort: !1 } : e2 };
class x extends m {
  constructor(t2) {
    super(t2), v(this, "actions", { registerItem: g$2(() => {
      let t3 = [], r2 = /* @__PURE__ */ new Set();
      return [(l2, u2) => {
        r2.has(u2) || (r2.add(u2), t3.push({ id: l2, dataRef: u2 }));
      }, () => (r2.clear(), this.send({ type: 5, items: t3.splice(0) }))];
    }), unregisterItem: g$2(() => {
      let t3 = [];
      return [(r2) => t3.push(r2), () => this.send({ type: 6, items: t3.splice(0) })];
    }) }), v(this, "selectors", { activeDescendantId(t3) {
      var u2;
      let r2 = t3.activeItemIndex, l2 = t3.items;
      return r2 === null || (u2 = l2[r2]) == null ? void 0 : u2.id;
    }, isActive(t3, r2) {
      var m2;
      let l2 = t3.activeItemIndex, u2 = t3.items;
      return l2 !== null ? ((m2 = u2[l2]) == null ? void 0 : m2.id) === r2 : !1;
    }, shouldScrollIntoView(t3, r2) {
      return t3.__demoMode || t3.menuState !== 0 || t3.activationTrigger === 0 ? !1 : this.isActive(t3, r2);
    } }), this.on(5, () => {
      requestAnimationFrame(() => {
        this.send({ type: 9 });
      });
    });
  }
  static new({ __demoMode: t2 = !1 } = {}) {
    return new x({ __demoMode: t2, menuState: t2 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1, pendingShouldSort: !1, pendingFocus: { focus: c$1.Nothing } });
  }
  reduce(t2, r2) {
    return u$7(r2.type, F, t2, r2);
  }
}
const a2 = createContext(null);
function l(e2) {
  let n2 = useContext(a2);
  if (n2 === null) {
    let t2 = new Error(\`<\${e2} /> is missing a parent <Menu /> component.\`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, i), t2;
  }
  return n2;
}
function i({ __demoMode: e2 = !1 } = {}) {
  return useMemo(() => x.new({ __demoMode: e2 }), []);
}
let ze = Fragment;
function Qe(T2, E2) {
  let { __demoMode: i$12 = !1, ...a$12 } = T2, n2 = i({ __demoMode: i$12 }), [s2, o3, P2] = S$1(n2, (p2) => [p2.menuState, p2.itemsElement, p2.buttonElement]), c2 = y$4(E2), _2 = s2 === M.Open;
  R$1(_2, [P2, o3], (p2, F2) => {
    var A$12;
    n2.send({ type: b.CloseMenu }), A(F2, h$2.Loose) || (p2.preventDefault(), (A$12 = n2.state.buttonElement) == null || A$12.focus());
  });
  let t2 = o$4(() => {
    n2.send({ type: b.CloseMenu });
  }), R2 = useMemo(() => ({ open: s2 === M.Open, close: t2 }), [s2, t2]), I2 = { ref: c2 }, g2 = L$2();
  return React__default.createElement(Me, null, React__default.createElement(a2.Provider, { value: n2 }, React__default.createElement(c$3, { value: u$7(s2, { [M.Open]: i$2.Open, [M.Closed]: i$2.Closed }) }, g2({ ourProps: I2, theirProps: a$12, slot: R2, defaultTag: ze, name: "Menu" }))));
}
let Ye = "button";
function Ze(T$12, E2) {
  let i2 = l("Menu.Button"), a3 = useId$1(), { id: n2 = \`headlessui-menu-button-\${a3}\`, disabled: s2 = !1, autoFocus: o3 = !1, ...P2 } = T$12, c2 = useRef(null), _2 = Fe(), t2 = y$4(E2, c2, ye(), o$4((l2) => i2.send({ type: b.SetButtonElement, element: l2 }))), R2 = o$4((l2) => {
    switch (l2.key) {
      case o$3.Space:
      case o$3.Enter:
      case o$3.ArrowDown:
        l2.preventDefault(), l2.stopPropagation(), i2.send({ type: b.OpenMenu, focus: { focus: c$1.First } });
        break;
      case o$3.ArrowUp:
        l2.preventDefault(), l2.stopPropagation(), i2.send({ type: b.OpenMenu, focus: { focus: c$1.Last } });
        break;
    }
  }), I2 = o$4((l2) => {
    switch (l2.key) {
      case o$3.Space:
        l2.preventDefault();
        break;
    }
  }), [g2, p2] = S$1(i2, (l2) => [l2.menuState, l2.itemsElement]), F2 = o$4((l2) => {
    var H2;
    if (l2.button === 0) {
      if (r$1(l2.currentTarget)) return l2.preventDefault();
      s2 || (g2 === M.Open ? (flushSync(() => i2.send({ type: b.CloseMenu })), (H2 = c2.current) == null || H2.focus({ preventScroll: !0 })) : (l2.preventDefault(), i2.send({ type: b.OpenMenu, focus: { focus: c$1.Nothing }, trigger: T.Pointer })));
    }
  }), { isFocusVisible: A2, focusProps: f2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o3 }), { isHovered: M$12, hoverProps: L2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: s2 }), { pressed: S2, pressProps: O2 } = w$2({ disabled: s2 }), x2 = useMemo(() => ({ open: g2 === M.Open, active: S2 || g2 === M.Open, disabled: s2, hover: M$12, focus: A2, autofocus: o3 }), [g2, M$12, A2, S2, s2, o3]), U2 = _$2(_2(), { ref: t2, id: n2, type: e$1(T$12, c2.current), "aria-haspopup": "menu", "aria-controls": p2 == null ? void 0 : p2.id, "aria-expanded": g2 === M.Open, disabled: s2 || void 0, autoFocus: o3, onKeyDown: R2, onKeyUp: I2, onMouseDown: F2 }, f2, L2, O2);
  return L$2()({ ourProps: U2, theirProps: P2, slot: x2, defaultTag: Ye, name: "Menu.Button" });
}
let et = "div", tt = O$1.RenderStrategy | O$1.Static;
function ot(T2, E2) {
  let i2 = useId$1(), { id: a3 = \`headlessui-menu-items-\${i2}\`, anchor: n2, portal: s2 = !1, modal: o3 = !0, transition: P2 = !1, ...c2 } = T2, _2 = xe(n2), t2 = l("Menu.Items"), [R$12, I2] = Re(_2), g2 = be(), [p2, F2] = useState(null), A2 = y$4(E2, _2 ? R$12 : null, o$4((e2) => t2.send({ type: b.SetItemsElement, element: e2 })), F2), [f2, M$12] = S$1(t2, (e2) => [e2.menuState, e2.buttonElement]), L2 = n$1(M$12), S2 = n$1(p2);
  _2 && (s2 = !0);
  let O2 = u$2(), [x2, U2] = x$1(P2, p2, O2 !== null ? (O2 & i$2.Open) === i$2.Open : f2 === M.Open);
  m$2(x2, M$12, () => {
    t2.send({ type: b.CloseMenu });
  });
  let G$12 = S$1(t2, (e2) => e2.__demoMode), l$12 = G$12 ? !1 : o3 && f2 === M.Open;
  f$2(l$12, S2);
  let H2 = G$12 ? !1 : o3 && f2 === M.Open;
  y$3(H2, { allowed: useCallback(() => [M$12, p2], [M$12, p2]) });
  let u2 = f2 !== M.Open, ae = s$1(u2, M$12) ? !1 : x2;
  useEffect(() => {
    let e2 = p2;
    e2 && f2 === M.Open && e2 !== (S2 == null ? void 0 : S2.activeElement) && e2.focus({ preventScroll: !0 });
  }, [f2, p2, S2]), F$1(f2 === M.Open, { container: p2, accept(e2) {
    return e2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : e2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e2) {
    e2.setAttribute("role", "none");
  } });
  let q2 = p$2(), se = o$4((e2) => {
    var N2, z, Q;
    switch (q2.dispose(), e2.key) {
      case o$3.Space:
        if (t2.state.searchQuery !== "") return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.Search, value: e2.key });
      case o$3.Enter:
        if (e2.preventDefault(), e2.stopPropagation(), t2.state.activeItemIndex !== null) {
          let { dataRef: de } = t2.state.items[t2.state.activeItemIndex];
          (z = (N2 = de.current) == null ? void 0 : N2.domRef.current) == null || z.click();
        }
        t2.send({ type: b.CloseMenu }), G(t2.state.buttonElement);
        break;
      case o$3.ArrowDown:
        return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.Next });
      case o$3.ArrowUp:
        return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.Previous });
      case o$3.Home:
      case o$3.PageUp:
        return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.First });
      case o$3.End:
      case o$3.PageDown:
        return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.Last });
      case o$3.Escape:
        e2.preventDefault(), e2.stopPropagation(), flushSync(() => t2.send({ type: b.CloseMenu })), (Q = t2.state.buttonElement) == null || Q.focus({ preventScroll: !0 });
        break;
      case o$3.Tab:
        e2.preventDefault(), e2.stopPropagation(), flushSync(() => t2.send({ type: b.CloseMenu })), j$2(t2.state.buttonElement, e2.shiftKey ? F$2.Previous : F$2.Next);
        break;
      default:
        e2.key.length === 1 && (t2.send({ type: b.Search, value: e2.key }), q2.setTimeout(() => t2.send({ type: b.ClearSearch }), 350));
        break;
    }
  }), le = o$4((e2) => {
    switch (e2.key) {
      case o$3.Space:
        e2.preventDefault();
        break;
    }
  }), pe2 = useMemo(() => ({ open: f2 === M.Open }), [f2]), ie = _$2(_2 ? g2() : {}, { "aria-activedescendant": S$1(t2, t2.selectors.activeDescendantId), "aria-labelledby": S$1(t2, (e2) => {
    var N2;
    return (N2 = e2.buttonElement) == null ? void 0 : N2.id;
  }), id: a3, onKeyDown: se, onKeyUp: le, role: "menu", tabIndex: f2 === M.Open ? 0 : void 0, ref: A2, style: { ...c2.style, ...I2, "--button-width": d$2(M$12, !0).width }, ...R(U2) }), ue = L$2();
  return React__default.createElement(oe, { enabled: s2 ? T2.static || x2 : !1, ownerDocument: L2 }, ue({ ourProps: ie, theirProps: c2, slot: pe2, defaultTag: et, features: tt, visible: ae, name: "Menu.Items" }));
}
let nt = Fragment;
function rt(T$12, E2) {
  let i2 = useId$1(), { id: a3 = \`headlessui-menu-item-\${i2}\`, disabled: n2 = !1, ...s$12 } = T$12, o3 = l("Menu.Item"), P2 = S$1(o3, (u2) => o3.selectors.isActive(u2, a3)), c2 = useRef(null), _2 = y$4(E2, c2), t2 = S$1(o3, (u2) => o3.selectors.shouldScrollIntoView(u2, a3));
  n$3(() => {
    if (t2) return o$5().requestAnimationFrame(() => {
      var u2, J2;
      (J2 = (u2 = c2.current) == null ? void 0 : u2.scrollIntoView) == null || J2.call(u2, { block: "nearest" });
    });
  }, [t2, c2]);
  let R2 = s(c2), I2 = useRef({ disabled: n2, domRef: c2, get textValue() {
    return R2();
  } });
  n$3(() => {
    I2.current.disabled = n2;
  }, [I2, n2]), n$3(() => (o3.actions.registerItem(a3, I2), () => o3.actions.unregisterItem(a3)), [I2, a3]);
  let g2 = o$4(() => {
    o3.send({ type: b.CloseMenu });
  }), p2 = o$4((u2) => {
    if (n2) return u2.preventDefault();
    o3.send({ type: b.CloseMenu }), G(o3.state.buttonElement);
  }), F2 = o$4(() => {
    if (n2) return o3.send({ type: b.GoToItem, focus: c$1.Nothing });
    o3.send({ type: b.GoToItem, focus: c$1.Specific, id: a3 });
  }), A2 = u$3(), f2 = o$4((u2) => {
    A2.update(u2), !n2 && (P2 || o3.send({ type: b.GoToItem, focus: c$1.Specific, id: a3, trigger: T.Pointer }));
  }), M2 = o$4((u2) => {
    A2.wasMoved(u2) && (n2 || P2 || o3.send({ type: b.GoToItem, focus: c$1.Specific, id: a3, trigger: T.Pointer }));
  }), L2 = o$4((u2) => {
    A2.wasMoved(u2) && (n2 || P2 && o3.send({ type: b.GoToItem, focus: c$1.Nothing }));
  }), [S2, O2] = K(), [x2, U2] = w$1(), G$12 = useMemo(() => ({ active: P2, focus: P2, disabled: n2, close: g2 }), [P2, n2, g2]), l$12 = { id: a3, ref: _2, role: "menuitem", tabIndex: n2 === !0 ? void 0 : -1, "aria-disabled": n2 === !0 ? !0 : void 0, "aria-labelledby": S2, "aria-describedby": x2, disabled: void 0, onClick: p2, onFocus: F2, onPointerEnter: f2, onMouseEnter: f2, onPointerMove: M2, onMouseMove: M2, onPointerLeave: L2, onMouseLeave: L2 }, H2 = L$2();
  return React__default.createElement(O2, null, React__default.createElement(U2, null, H2({ ourProps: l$12, theirProps: s$12, slot: G$12, defaultTag: nt, name: "Menu.Item" })));
}
let at = "div";
function st(T2, E2) {
  let [i2, a3] = K(), n2 = T2, s2 = { ref: E2, "aria-labelledby": i2, role: "group" }, o3 = L$2();
  return React__default.createElement(a3, null, o3({ ourProps: s2, theirProps: n2, slot: {}, defaultTag: at, name: "Menu.Section" }));
}
let lt = "header";
function pt(T2, E2) {
  let i2 = useId$1(), { id: a3 = \`headlessui-menu-heading-\${i2}\`, ...n2 } = T2, s2 = P$1();
  n$3(() => s2.register(a3), [a3, s2.register]);
  let o3 = { id: a3, ref: E2, role: "presentation", ...s2.props };
  return L$2()({ ourProps: o3, theirProps: n2, slot: {}, defaultTag: lt, name: "Menu.Heading" });
}
let it = "div";
function ut(T2, E2) {
  let i2 = T2, a3 = { ref: E2, role: "separator" };
  return L$2()({ ourProps: a3, theirProps: i2, slot: {}, defaultTag: it, name: "Menu.Separator" });
}
let dt = K$1(Qe), mt = K$1(Ze), Tt = K$1(ot), ft = K$1(rt), ct = K$1(st), yt = K$1(pt), Et = K$1(ut), to = Object.assign(dt, { Button: mt, Items: Tt, Item: ft, Section: ct, Heading: yt, Separator: Et }), L = "textarea";
function H(s2, l2) {
  let i2 = useId$1(), d2 = u$6(), n2 = a$9(), { id: p2 = d2 || \`headlessui-textarea-\${i2}\`, disabled: e2 = n2 || !1, autoFocus: r2 = !1, invalid: a3 = !1, ...T2 } = s2, f2 = I$2(), m2 = U$1(), { isFocused: o3, focusProps: u2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r2 }), { isHovered: t2, hoverProps: b2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), y2 = _$2({ ref: l2, id: p2, "aria-labelledby": f2, "aria-describedby": m2, "aria-invalid": a3 ? "true" : void 0, disabled: e2 || void 0, autoFocus: r2 }, u2, b2), x2 = useMemo(() => ({ disabled: e2, invalid: a3, hover: t2, focus: o3, autofocus: r2 }), [e2, a3, t2, o3, r2]);
  return L$2()({ ourProps: y2, theirProps: T2, slot: x2, defaultTag: L, name: "Textarea" });
}
let J = K$1(H);
function ToolbarItem(props) {
  return /* @__PURE__ */ jsxs("div", { className: "relative flex w-full shrink-0 items-center justify-center", children: [
    props.children,
    props.badgeContent && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "bg-blue-600 text-white",
          props.badgeClassName,
          "pointer-events-none absolute right-0 bottom-0 flex h-3 w-max min-w-3 max-w-8 select-none items-center justify-center truncate rounded-full px-0.5 font-semibold text-[0.5em]"
        ),
        children: props.badgeContent
      }
    ),
    props.statusDot && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "bg-rose-600 text-white",
          props.statusDotClassName,
          "pointer-events-none absolute top-0 right-0 size-1.5 rounded-full"
        )
      }
    )
  ] });
}
const ToolbarButton = forwardRef(
  ({
    badgeContent,
    badgeClassName,
    statusDot,
    statusDotClassName,
    tooltipHint,
    variant = "default",
    active,
    ...props
  }, ref) => {
    const button = /* @__PURE__ */ jsx(
      H$4,
      {
        ref,
        ...props,
        className: cn(
          "flex cursor-pointer items-center justify-center rounded-full bg-radial from-transparent to-transparent p-1 text-current transition-all duration-150 hover:from-20% hover:from-zinc-100/40 hover:to-75% hover:to-zinc-100/0",
          variant === "default" ? "size-8" : "h-8 rounded-full",
          active && "from-30% from-zinc-100/60 to-75% to-zinc-100/0 fill-[var(--active)] stroke-[var(--active)] text-[var(--active)]",
          props.className
        )
      }
    );
    return /* @__PURE__ */ jsx(
      ToolbarItem,
      {
        badgeContent,
        badgeClassName,
        statusDot,
        statusDotClassName,
        children: button
      }
    );
  }
);
ToolbarButton.displayName = "ToolbarButton";
function ToolbarSection({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "fade-in slide-in-from-right-2 flex max-h-sm max-w-full animate-in snap-start flex-col items-center justify-between gap-1 py-0.5", children });
}
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), toCamelCase = (string) => string.replace(
  /^([A-Z])|[\\s-_]+(\\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
), toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}, mergeClasses = (...classes) => classes.filter((className, index2, array) => !!className && className.trim() !== "" && array.indexOf(className) === index2).join(" ").trim(), hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title")
      return !0;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = forwardRef(
  ({
    color = "currentColor",
    size: size2 = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size2,
      height: size2,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        \`lucide-\${toKebabCase(toPascalCase(iconName))}\`,
        \`lucide-\${iconName}\`,
        className
      ),
      ...props
    })
  );
  return Component.displayName = toPascalCase(iconName), Component;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$e = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ArrowUp = createLucideIcon("arrow-up", __iconNode$e);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$d = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Check = createLucideIcon("check", __iconNode$d);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$c = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ChevronDown = createLucideIcon("chevron-down", __iconNode$c);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$b = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ChevronUp = createLucideIcon("chevron-up", __iconNode$b);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$a = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], CircleX = createLucideIcon("circle-x", __iconNode$a);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [
  ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
  ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
], Cog = createLucideIcon("cog", __iconNode$9);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], LoaderCircle = createLucideIcon("loader-circle", __iconNode$8);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], MessageCircleQuestionMark = createLucideIcon("message-circle-question-mark", __iconNode$7);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], MessageCircle = createLucideIcon("message-circle", __iconNode$6);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
      key: "w46dr5"
    }
  ]
], Puzzle = createLucideIcon("puzzle", __iconNode$5);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], RefreshCw = createLucideIcon("refresh-cw", __iconNode$4);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Settings = createLucideIcon("settings", __iconNode$3);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], TriangleAlert = createLucideIcon("triangle-alert", __iconNode$2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], WifiOff = createLucideIcon("wifi-off", __iconNode$1);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], X = createLucideIcon("x", __iconNode);
function RegularContent() {
  const {
    isSettingsOpen,
    openSettings,
    closeSettings,
    isChatOpen,
    openChat,
    closeChat,
    openPluginName,
    closePlugin,
    openPlugin
  } = usePanels(), { startPromptCreation } = useChatState(), pluginsWithActions = usePlugins().plugins.filter(
    (plugin) => plugin.onActionClick
  );
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(
      ToolbarButton,
      {
        onClick: isSettingsOpen ? closeSettings : openSettings,
        active: isSettingsOpen,
        children: /* @__PURE__ */ jsx(Settings, { className: "size-4" })
      }
    ) }),
    pluginsWithActions.length > 0 && /* @__PURE__ */ jsx(ToolbarSection, { children: pluginsWithActions.map((plugin) => /* @__PURE__ */ jsx(
      ToolbarButton,
      {
        onClick: openPluginName === plugin.pluginName ? closePlugin : () => openPlugin(plugin.pluginName),
        active: openPluginName === plugin.pluginName,
        children: plugin.iconSvg ? /* @__PURE__ */ jsx("span", { className: "size-4 *:size-full", children: plugin.iconSvg }) : /* @__PURE__ */ jsx(Puzzle, { className: "size-4" })
      },
      plugin.pluginName
    )) }),
    /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(
      ToolbarButton,
      {
        onClick: isChatOpen ? closeChat : () => {
          openChat(), startPromptCreation();
        },
        active: isChatOpen,
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" })
      }
    ) })
  ] });
}
function DisconnectedContent() {
  const { refreshAgentList, isRefreshing } = useAgents();
  return /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(
    ToolbarButton,
    {
      onClick: isRefreshing ? void 0 : () => refreshAgentList(),
      children: /* @__PURE__ */ jsx(
        RefreshCw,
        {
          className: cn("size-4", isRefreshing && "animate-spin")
        }
      )
    }
  ) });
}
const Logo = ({
  color = "default",
  loading = !1,
  loadingSpeed = "slow",
  ...props
}) => {
  const colorStyle = {
    default: "fill-stagewise-700 stroke-none",
    black: "fill-zinc-950 stroke-none",
    white: "fill-white stroke-none",
    zinc: "fill-zinc-500/50 stroke-none",
    current: "fill-current stroke-none",
    gradient: "fill-white stroke-black/30 stroke-1"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: \`relative \${color === "gradient" ? "rounded-full bg-[image:var(--gradient)] bg-cover bg-no-repeat" : ""} \${props.className || ""} \${loading ? "drop-shadow-xl" : ""} aspect-square overflow-visible\`,
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: \`absolute overflow-visible \${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%]" : "top-0 left-0 h-full w-full"}\`,
            viewBox: "0 0 2048 2048",
            children: [
              /* @__PURE__ */ jsx("title", { children: "stagewise" }),
              /* @__PURE__ */ jsx(
                "ellipse",
                {
                  className: colorStyle[color] + (loading ? " animate-pulse" : ""),
                  id: "path3",
                  ry: "624",
                  rx: "624",
                  cy: "1024",
                  cx: "1024"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: \`absolute overflow-visible \${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%]" : "top-0 left-0 h-full w-full"}\`,
            viewBox: "0 0 2048 2048",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                id: "path4",
                className: "origin-center " + colorStyle[color] + (loading ? loadingSpeed === "fast" ? " animate-spin-fast" : " animate-spin-slow" : ""),
                d: "M 1024 0 A 1024 1024 0 0 0 0 1024 A 1024 1024 0 0 0 1024 2048 L 1736 2048 L 1848 2048 C 1958.7998 2048 2048 1958.7998 2048 1848 L 2048 1736 L 2048 1024 A 1024 1024 0 0 0 1024 0 z M 1024.9414 200 A 824 824 0 0 1 1848.9414 1024 A 824 824 0 0 1 1024.9414 1848 A 824 824 0 0 1 200.94141 1024 A 824 824 0 0 1 1024.9414 200 z "
              }
            )
          }
        )
      ]
    }
  );
}, AnimatedGradientBackground = ({
  className
}) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 800 800",
    preserveAspectRatio: "xMidYMid slice",
    className,
    children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("filter", { id: "blur", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "80" }) }) }),
      /* @__PURE__ */ jsx("rect", { width: "800", height: "800", fill: "#000f68" }),
      /* @__PURE__ */ jsxs("g", { filter: "url(#blur)", children: [
        /* @__PURE__ */ jsxs("circle", { cx: "100", cy: "400", r: "260", fill: "#1e90ff", children: [
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "cx",
              dur: "15s",
              begin: "0s",
              values: "100; 700; 100",
              repeatCount: "indefinite",
              calcMode: "spline",
              keyTimes: "0; 0.5; 1",
              keySplines: "0.42 0 0.58 1; 0.42 0 0.58 1"
            }
          ),
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "cy",
              dur: "20s",
              begin: "0.1s",
              values: "400; 100; 400",
              repeatCount: "indefinite",
              calcMode: "spline",
              keyTimes: "0; 0.5; 1",
              keySplines: "0.42 0 0.58 1; 0.42 0 0.58 1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("circle", { cx: "700", cy: "100", r: "220", fill: "#c300ff", children: [
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "cx",
              dur: "12s",
              begin: "0.2s",
              values: "700; 100; 700",
              repeatCount: "indefinite",
              calcMode: "spline",
              keyTimes: "0; 0.5; 1",
              keySplines: "0.42 0 0.58 1; 0.42 0 0.58 1"
            }
          ),
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "cy",
              dur: "10s",
              begin: "0.3s",
              values: "100; 700; 100",
              repeatCount: "indefinite",
              calcMode: "spline",
              keyTimes: "0; 0.5; 1",
              keySplines: "0.42 0 0.58 1; 0.42 0 0.58 1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("circle", { cx: "400", cy: "700", r: "240", fill: "#0055ff", children: [
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "cx",
              dur: "18s",
              begin: "0.4s",
              values: "400; 500; 200; 400",
              repeatCount: "indefinite",
              calcMode: "spline",
              keyTimes: "0; 0.33; 0.67; 1",
              keySplines: "0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            }
          ),
          /* @__PURE__ */ jsx(
            "animate",
            {
              attributeName: "cy",
              dur: "22s",
              begin: "0.5s",
              values: "700; 400; 700",
              repeatCount: "indefinite",
              calcMode: "spline",
              keyTimes: "0; 0.5; 1",
              keySplines: "0.42 0 0.58 1; 0.42 0 0.58 1"
            }
          )
        ] })
      ] })
    ]
  }
);
function Toolbar({
  draggableHandleRef,
  position,
  isDragged
}) {
  const { minimized, minimize, expand } = useAppState(), { requiresUserAttention, isInitialLoad } = useAgents(), { isAvailable } = useAgentAvailability();
  return /* @__PURE__ */ jsxs(
    Glassy,
    {
      as: "div",
      className: cn(
        "pointer-events-auto absolute z-10 origin-center rounded-full p-0.5 shadow-md transition-transform duration-500 ease-spring",
        minimized || isInitialLoad ? "size-10 bg-blue-950/80" : "size-auto",
        isDragged && "scale-110 bg-sky-100/60 shadow-lg shadow-sky-500/10 blur-[0.2px]",
        !requiresUserAttention && isAvailable ? "[--active-secondary:var(--color-blue-100)] [--active:var(--color-blue-600)] [--primary:var(--color-zinc-950)] [--secondary:var(--color-zinc-400)]" : "bg-orange-200/50 [--active-secondary:var(--color-orange-100)] [--active:var(--color-orange-600)] [--primary:var(--color-orange-900)] [--secondary:var(--color-orange-100)]",
        "stroke-[var(--primary)] text-[var(--primary)]"
      ),
      ref: draggableHandleRef,
      children: [
        /* @__PURE__ */ jsxs(
          H$4,
          {
            onClick: () => expand(),
            className: cn(
              "absolute left-0 z-50 flex size-10 origin-center cursor-pointer items-center justify-center overflow-hidden rounded-full border border-zinc-500/20 transition-all duration-500 ease-spring hover:opacity-90",
              minimized || isInitialLoad ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none scale-25 opacity-0 blur-md",
              position.isTopHalf ? "top-0" : "bottom-0",
              (requiresUserAttention || !isAvailable) && "bg-orange-500"
            ),
            children: [
              !requiresUserAttention && isAvailable && /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx(AnimatedGradientBackground, { className: "-z-10 absolute inset-0 size-full" }),
                /* @__PURE__ */ jsx(Logo, { color: "white", className: "mr-px mb-px size-1/2 shadow-2xs" })
              ] }),
              requiresUserAttention && /* @__PURE__ */ jsx(WifiOff, { className: "size-5 stroke-white" }),
              !requiresUserAttention && !isAvailable && /* @__PURE__ */ jsx(TriangleAlert, { className: "size-5 stroke-white" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "flex h-[calc-size(auto,size)] scale-100 items-center justify-center divide-y divide-border/20 transition-all duration-500 ease-spring",
              position.isTopHalf ? "origin-top flex-col-reverse divide-y-reverse" : "origin-bottom flex-col",
              minimized && "pointer-events-none h-0 scale-50 opacity-0 blur-md"
            ),
            children: [
              !requiresUserAttention && isAvailable ? /* @__PURE__ */ jsx(RegularContent, {}) : /* @__PURE__ */ jsx(DisconnectedContent, {}),
              /* @__PURE__ */ jsx(ToolbarSection, { children: /* @__PURE__ */ jsx(
                ToolbarButton,
                {
                  onClick: minimize,
                  className: cn(
                    "h-5",
                    position.isTopHalf ? "rounded-t-3xl rounded-b-lg" : "rounded-t-lg rounded-b-3xl"
                  ),
                  children: position.isTopHalf ? /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
function AgentSelection({
  showConnectedDetails = !1
}) {
  const {
    connected,
    refreshAgentList,
    isRefreshing,
    availableAgents,
    connectAgent
  } = useAgents(), handleAgentChange = (e2) => {
    const port = Number.parseInt(e2.target.value);
    port && connectAgent(port);
  }, placeholderText = availableAgents.length > 0 ? "Select an agent..." : "No agents available";
  return isRefreshing ? availableAgents.length > 0 ? "Scanning for additional agents..." : "Scanning for available agents..." : availableAgents.length === 0 ? "No agents found. Make sure the stagewise extension is installed and running." : null, /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "agent-select",
          className: "mb-2 block font-medium text-foreground text-sm",
          children: [
            "Agent",
            isRefreshing && /* @__PURE__ */ jsx(RefreshCw, { className: "ml-2 inline size-3 animate-spin text-muted-foreground" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex w-full items-center space-x-2", children: /* @__PURE__ */ jsxs(
        "select",
        {
          id: "agent-select",
          value: (connected == null ? void 0 : connected.port) || "",
          onChange: handleAgentChange,
          className: "h-8 min-w-0 flex-1 rounded-lg border border-zinc-950/10 bg-zinc-500/10 px-3 text-sm ring-1 ring-white/20 focus:border-zinc-500 focus:outline-none",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: !0, children: placeholderText }),
            availableAgents.map((agent) => /* @__PURE__ */ jsxs("option", { value: agent.port, children: [
              agent.name,
              " - ",
              agent.description,
              " - Port ",
              agent.port
            ] }, agent.port))
          ]
        }
      ) })
    ] }),
    connected && showConnectedDetails && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-zinc-950/5 p-3", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground text-sm", children: "Active Agent" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 font-semibold text-base text-foreground", children: connected.name }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: connected.description }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-xs", children: [
        "Port ",
        connected.port
      ] })
    ] })
  ] });
}
const DropdownMenu = to, DropdownMenuButton = forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(mt, { as: Fragment, ref, ...props })
), DropdownMenuContent = forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(
    Tt,
    {
      ref,
      anchor: "bottom",
      transition: !0,
      portal: !0,
      ...props,
      className: cn(
        glassyBoxClassName,
        "z-50 flex w-fit min-w-24 max-w-90 flex-col items-stretch justify-start gap-1 rounded-xl p-1 shadow-black/50 shadow-lg outline-none data-focus:outline-none",
        props.className
      )
    }
  )
), DropdownMenuItemStyles = "w-full flex flex-row select-none items-center justify-start gap-2 py-1.5 pl-2 pr-6 truncate overflow-hidden rounded-lg hover:bg-zinc-950/10 focus:text-zinc-900 cursor-pointer transition-color duration-150 text-sm font-normal text-foreground";
forwardRef(
  (props, ref) => {
    const { className, ...buttonProps } = props;
    return /* @__PURE__ */ jsx(ft, { ref, children: /* @__PURE__ */ jsx(
      H$4,
      {
        as: "button",
        ...buttonProps,
        className: cn(DropdownMenuItemStyles, className)
      }
    ) });
  }
);
const DropdownMenuLinkItem = forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(ft, { ref, children: /* @__PURE__ */ jsx("a", { ...props, className: cn(DropdownMenuItemStyles, props.className) }) })
);
function SettingsPanel() {
  return /* @__PURE__ */ jsxs(Panel, { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Settings" }),
    /* @__PURE__ */ jsx(PanelContent, { children: /* @__PURE__ */ jsx(AgentSelection, { showConnectedDetails: !0 }) }),
    /* @__PURE__ */ jsx(PanelFooter, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuButton, { children: /* @__PURE__ */ jsxs(Button, { glassy: !0, size: "sm", variant: "secondary", children: [
        /* @__PURE__ */ jsx(MessageCircleQuestionMark, { className: "mr-2 size-4" }),
        "Need help?"
      ] }) }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
        /* @__PURE__ */ jsx(
          DropdownMenuLinkItem,
          {
            href: "https://stagewise.io/docs",
            target: "_blank",
            children: "Read the docs"
          }
        ),
        /* @__PURE__ */ jsx(
          DropdownMenuLinkItem,
          {
            href: "https://discord.gg/y8gdNb4D",
            target: "_blank",
            children: "Join the community"
          }
        )
      ] })
    ] }) })
  ] });
}
function ContextElementsChips() {
  const { domContextElements, removeChatDomContext } = useChatState(), { setHoveredElement } = useContextChipHover();
  return domContextElements.length === 0 ? null : /* @__PURE__ */ jsx("div", { className: "mb-1.5", children: /* @__PURE__ */ jsx("div", { className: "scrollbar-thin flex gap-2 overflow-x-auto pb-1", children: domContextElements.map((contextElement, index2) => /* @__PURE__ */ jsx(
    ContextElementChip,
    {
      element: contextElement.element,
      pluginContext: contextElement.pluginContext,
      onDelete: () => removeChatDomContext(contextElement.element),
      onHover: setHoveredElement,
      onUnhover: () => setHoveredElement(null)
    },
    \`\${contextElement.element.tagName}-\${index2}\`
  )) }) });
}
function ContextElementChip({
  element,
  pluginContext,
  onDelete,
  onHover,
  onUnhover
}) {
  const chipLabel = useMemo(() => {
    var _a, _b;
    const firstAnnotation = (_b = (_a = pluginContext.find(
      (plugin) => {
        var _a2;
        return (_a2 = plugin.context) == null ? void 0 : _a2.annotation;
      }
    )) == null ? void 0 : _a.context) == null ? void 0 : _b.annotation;
    if (firstAnnotation)
      return firstAnnotation;
    const tagName = element.tagName.toLowerCase(), id = element.id ? \`#\${element.id}\` : "";
    return \`\${tagName}\${id}\`;
  }, [element, pluginContext]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex min-w-fit shrink-0 items-center gap-1 rounded-lg border border-border/20 bg-white/10 px-2 py-1 text-xs transition-all hover:border-border/40 hover:bg-white/20"
      ),
      onMouseEnter: () => onHover(element),
      onMouseLeave: () => onUnhover(),
      children: [
        /* @__PURE__ */ jsx("span", { className: "max-w-24 truncate font-medium text-foreground/80", children: chipLabel }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: (e2) => {
              e2.stopPropagation(), onDelete();
            },
            className: "text-muted-foreground transition-colors hover:text-red-500",
            children: /* @__PURE__ */ jsx(X, { className: "size-3" })
          }
        )
      ]
    }
  );
}
function AgentMessageDisplay() {
  var _a, _b, _c, _d, _e;
  const messaging = useAgentMessaging(), agentState = useAgentState(), scrollContainerRef = useRef(null), wasAtBottomRef = useRef(!0), scrollToBottom = () => {
    const container = scrollContainerRef.current;
    container && setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 0);
  }, checkIfAtBottom = () => {
    const container = scrollContainerRef.current;
    return container ? container.scrollTop + container.clientHeight >= container.scrollHeight - 10 : !0;
  }, handleScroll = () => {
    const isAtBottom = checkIfAtBottom();
    wasAtBottomRef.current = isAtBottom;
  };
  return useEffect(() => {
    scrollContainerRef.current && wasAtBottomRef.current && scrollToBottom();
  }, [(_a = messaging.agentMessage) == null ? void 0 : _a.contentItems, agentState.state]), useEffect(() => {
    const container = scrollContainerRef.current;
    if (container)
      return container.addEventListener("scroll", handleScroll), scrollToBottom(), wasAtBottomRef.current = !0, () => {
        container.removeEventListener("scroll", handleScroll);
      };
  }, []), ((_c = (_b = messaging.agentMessage) == null ? void 0 : _b.contentItems) == null ? void 0 : _c.length) > 0 || agentState.state === AgentStateType.IDLE ? /* @__PURE__ */ jsx(
    "div",
    {
      ref: scrollContainerRef,
      className: "scrollbar-thin pointer-events-auto space-y-2 overflow-y-scroll overscroll-contain px-3 py-4 text-foreground text-sm focus-within:outline-none hover:bg-white/0 focus:outline-none",
      onScroll: handleScroll,
      onMouseEnter: () => {
        var _a2;
        (_a2 = scrollContainerRef.current) == null || _a2.focus();
      },
      children: (_e = (_d = messaging.agentMessage) == null ? void 0 : _d.contentItems) == null ? void 0 : _e.map((item, index2) => item.type === "text" ? /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap", children: item.text }, \`item_\${index2 + 1}\`) : item.type === "image" ? /* @__PURE__ */ jsx("div", { className: "text-sm", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: item.data,
          alt: "Agent message attachment",
          className: "max-w-full rounded-lg border border-black/15 ring-1 ring-white/20"
        }
      ) }, \`item_\${index2 + 1}\`) : null)
    }
  ) : null;
}
const DEFAULT_VARIANTS = {
  blue: {
    activeSpeed: "slow",
    backgroundColor: "#0d253f",
    colors: ["#1e40af", "#2563eb", "#3b82f6", "#60a5fa"]
  },
  green: {
    activeSpeed: "fast",
    backgroundColor: "#062a22",
    colors: ["#059669", "#10b981", "#34d399", "#6ee7b7"]
  },
  transparent: {
    activeSpeed: "slow",
    backgroundColor: "transparent",
    colors: ["transparent", "transparent", "transparent", "transparent"]
  }
}, SHAPE_DEFAULTS = [
  // This is now just a template for generating shapes for each speed group
  { type: "circle", cx: "15%", cy: "20%", r: "30%", color: 1 },
  {
    type: "rect",
    x: "50%",
    y: "0%",
    width: "40%",
    height: "40%",
    color: 2
  },
  { type: "circle", cx: "75%", cy: "60%", r: "25%", color: 3 },
  {
    type: "rect",
    x: "10%",
    y: "55%",
    width: "35%",
    height: "35%",
    color: 4
  },
  { type: "circle", cx: "40%", cy: "80%", r: "20%", color: 1 }
], random = (min2, max2) => Math.random() * (max2 - min2) + min2, ShapeGroup = ({
  shapes,
  speed,
  speedClass
}) => {
  const animationMultipliers = useMemo(() => shapes.map((_2, i2) => ({
    duration: random(0.8, 1.2),
    delay: random(0, -1),
    direction: i2 % 2 === 0 ? "alternate" : "alternate-reverse"
  })), [shapes]), shapesWithColorVar = shapes.map((shape, i2) => ({
    ...shape,
    colorVar: \`--chat-grad-bg-c\${shape.color}\`,
    id: \`\${shape.type}-\${shape.color}-\${i2}\`,
    // Better key for React
    animationMultipliers: animationMultipliers[i2]
  }));
  return /* @__PURE__ */ jsx("g", { className: speedClass, children: shapesWithColorVar.map((shape) => {
    const multipliers = shape.animationMultipliers, animationProps = {
      animationDuration: \`calc(\${speed}s * \${multipliers.duration})\`,
      animationDelay: \`calc(\${speed}s * \${multipliers.delay})\`,
      animationDirection: multipliers.direction
    };
    return shape.type === "circle" ? /* @__PURE__ */ jsx(
      "circle",
      {
        cx: shape.cx,
        cy: shape.cy,
        r: shape.r,
        fill: \`var(\${shape.colorVar})\`,
        className: "shape-anim",
        style: animationProps
      },
      shape.id
    ) : /* @__PURE__ */ jsx(
      "rect",
      {
        x: shape.x,
        y: shape.y,
        width: shape.width,
        height: shape.height,
        fill: \`var(\${shape.colorVar})\`,
        className: "shape-anim",
        style: animationProps
      },
      shape.id
    );
  }) });
}, GradientBackgroundChat = ({
  currentVariant,
  variants = DEFAULT_VARIANTS,
  className,
  blurAmount = 80,
  shapes = SHAPE_DEFAULTS,
  transparent = !1
}) => {
  const [style, setStyle] = useState({});
  return useEffect(() => {
    const activeVariant = variants[currentVariant];
    if (!activeVariant) {
      console.warn(
        \`Variant "\${currentVariant}" not found, falling back to default\`
      );
      return;
    }
    const shouldBeTransparent = transparent || currentVariant === "transparent";
    setStyle({
      "--chat-grad-bg-bg-color": activeVariant.backgroundColor,
      backgroundColor: "var(--chat-grad-bg-bg-color)",
      "--chat-grad-bg-c1": activeVariant.colors[0],
      "--chat-grad-bg-c2": activeVariant.colors[1],
      "--chat-grad-bg-c3": activeVariant.colors[2],
      "--chat-grad-bg-c4": activeVariant.colors[3],
      "--chat-grad-bg-opacity-slow": activeVariant.activeSpeed === "slow" ? 1 : 0,
      "--chat-grad-bg-opacity-medium": activeVariant.activeSpeed === "medium" ? 1 : 0,
      "--chat-grad-bg-opacity-fast": activeVariant.activeSpeed === "fast" ? 1 : 0,
      "--chat-grad-bg-overall-opacity": shouldBeTransparent ? 0 : 1,
      opacity: "var(--chat-grad-bg-overall-opacity)"
    });
  }, [currentVariant, variants, transparent]), /* @__PURE__ */ jsx(
    "div",
    {
      className: \`absolute inset-0 overflow-hidden transition-all duration-1000 \${className}\`,
      style,
      children: /* @__PURE__ */ jsxs(
        "svg",
        {
          className: "-inset-[25%] absolute h-[150%] w-[150%]",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          role: "presentation",
          children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("filter", { id: "blur-filter", children: /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: blurAmount }) }) }),
            /* @__PURE__ */ jsxs("g", { filter: "url(#blur-filter)", children: [
              /* @__PURE__ */ jsx(ShapeGroup, { shapes, speed: 40, speedClass: "g-slow" }),
              /* @__PURE__ */ jsx(ShapeGroup, { shapes, speed: 20, speedClass: "g-medium" }),
              /* @__PURE__ */ jsx(ShapeGroup, { shapes, speed: 5, speedClass: "g-fast" })
            ] })
          ]
        }
      )
    }
  );
}, textSlideshowVariants = cva(
  "relative block h-[1.2em] h-full overflow-hidden"
);
function TextSlideshow({
  className,
  texts,
  changeEveryMs = 3e3,
  ...props
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0), [isAnimating, setIsAnimating] = React.useState(!1);
  return React.useEffect(() => {
    if (texts.length <= 1) return;
    const interval = setInterval(() => {
      setIsAnimating(!0), setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length), setIsAnimating(!1);
      }, 300);
    }, changeEveryMs);
    return () => clearInterval(interval);
  }, [texts.length, changeEveryMs]), texts.length === 0 ? null : /* @__PURE__ */ jsxs(
    "span",
    {
      "data-slot": "text-slideshow",
      className: cn(textSlideshowVariants(), className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "absolute inset-0 transition-all duration-300 ease-in-out",
              isAnimating ? "-translate-y-2 transform opacity-0 blur-sm" : "translate-y-0 transform opacity-100"
            ),
            children: texts[currentIndex]
          },
          \`current-\${currentIndex}\`
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "absolute inset-0 transition-all duration-300 ease-in-out",
              isAnimating ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 blur-sm"
            ),
            children: texts[(currentIndex + 1) % texts.length]
          },
          \`next-\${(currentIndex + 1) % texts.length}\`
        )
      ]
    }
  );
}
const agentStateToText = {
  [AgentStateType.WAITING_FOR_USER_RESPONSE]: "Waiting for user response",
  [AgentStateType.IDLE]: "",
  [AgentStateType.THINKING]: "Thinking",
  [AgentStateType.FAILED]: "Failed",
  [AgentStateType.COMPLETED]: "Completed",
  [AgentStateType.WORKING]: "Working",
  [AgentStateType.CALLING_TOOL]: "Calling tool"
}, agentStateToIcon = {
  [AgentStateType.WAITING_FOR_USER_RESPONSE]: /* @__PURE__ */ jsx(MessageCircleQuestionMark, { className: "size-6" }),
  [AgentStateType.IDLE]: /* @__PURE__ */ jsx(Fragment$1, {}),
  [AgentStateType.THINKING]: /* @__PURE__ */ jsx(LoaderCircle, { className: "size-6 animate-spin stroke-violet-600" }),
  [AgentStateType.FAILED]: /* @__PURE__ */ jsx(CircleX, { className: "size-6 stroke-rose-600" }),
  [AgentStateType.COMPLETED]: /* @__PURE__ */ jsx(Check, { className: "size-6 stroke-green-600" }),
  [AgentStateType.WORKING]: /* @__PURE__ */ jsx(LoaderCircle, { className: "size-6 animate-spin stroke-blue-600" }),
  [AgentStateType.CALLING_TOOL]: /* @__PURE__ */ jsx(Cog, { className: "size-6 animate-spin stroke-fuchsia-700" })
};
function ChatPanel() {
  var _a;
  const agentState = useAgentState(), chatState = useChatState(), chatMessaging = useAgentMessaging(), [isComposing, setIsComposing] = useState(!1), enableInputField = useMemo(() => agentState.state === AgentStateType.WAITING_FOR_USER_RESPONSE || agentState.state === AgentStateType.IDLE, [agentState.state]), canSendMessage = useMemo(() => enableInputField && chatState.chatInput.trim().length > 2 && chatState.isPromptCreationActive, [enableInputField, chatState]), anyMessageInChat = useMemo(() => {
    var _a2, _b;
    return ((_b = (_a2 = chatMessaging.agentMessage) == null ? void 0 : _a2.contentItems) == null ? void 0 : _b.length) > 0;
  }, [(_a = chatMessaging.agentMessage) == null ? void 0 : _a.contentItems]), handleSubmit = useCallback(() => {
    chatState.sendMessage(), chatState.stopPromptCreation();
  }, [chatState]), handleKeyDown = useCallback(
    (e2) => {
      e2.key === "Enter" && !e2.shiftKey && !isComposing && (e2.preventDefault(), handleSubmit());
    },
    [handleSubmit, isComposing]
  ), handleCompositionStart = useCallback(() => {
    setIsComposing(!0);
  }, []), handleCompositionEnd = useCallback(() => {
    setIsComposing(!1);
  }, []), inputRef = useRef(null), isIntentionallyStoppingRef = useRef(!1);
  return useEffect(() => {
    var _a2, _b, _c;
    const blurHandler = () => {
      var _a3;
      if (isIntentionallyStoppingRef.current) {
        isIntentionallyStoppingRef.current = !1;
        return;
      }
      (_a3 = inputRef.current) == null || _a3.focus();
    };
    return chatState.isPromptCreationActive && enableInputField ? ((_a2 = inputRef.current) == null || _a2.focus(), (_b = inputRef.current) == null || _b.addEventListener("blur", blurHandler), isIntentionallyStoppingRef.current = !1) : (inputRef.current === document.activeElement && (isIntentionallyStoppingRef.current = !0), (_c = inputRef.current) == null || _c.blur()), () => {
      var _a3;
      (_a3 = inputRef.current) == null || _a3.removeEventListener("blur", blurHandler);
    };
  }, [chatState.isPromptCreationActive, enableInputField]), /* @__PURE__ */ jsxs(
    Panel,
    {
      className: cn(
        anyMessageInChat ? "h-[35vh] max-h-[50vh] min-h-[20vh]" : "!h-[calc-size(auto,size)] h-auto min-h-0"
      ),
      children: [
        /* @__PURE__ */ jsx(
          PanelHeader,
          {
            className: cn(
              "mb-0 origin-bottom transition-all duration-300 ease-out",
              agentState.state !== AgentStateType.IDLE ? "!h-[calc-size(auto,size)] h-auto" : "h-0 scale-x-75 scale-y-0 p-0 opacity-0 blur-md"
            ),
            title: /* @__PURE__ */ jsx("span", { className: "text-base", children: agentStateToText[agentState.state] }),
            description: agentState.description && /* @__PURE__ */ jsx("span", { className: "text-sm", children: agentState.description }),
            iconArea: /* @__PURE__ */ jsx("div", { className: "flex size-8 items-center justify-center", children: Object.values(AgentStateType).map((state) => /* @__PURE__ */ jsx(StateIcon, { shouldRender: agentState.state === state, children: agentStateToIcon[state] }, state)) }),
            actionArea: /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("div", { className: "-z-10 pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] opacity-50", children: /* @__PURE__ */ jsx(
              GradientBackgroundChat,
              {
                className: "size-full",
                currentVariant: agentState.state,
                variants: GradientBackgroundVariants,
                transparent: agentState.state === AgentStateType.IDLE
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ jsx(
          PanelContent,
          {
            className: cn(
              "flex basis-[initial] flex-col gap-0 px-1 py-0",
              anyMessageInChat ? "!h-[calc-size(auto,size)] h-auto flex-1" : "h-0",
              agentState.state === AgentStateType.IDLE ? "rounded-t-[inherit]" : "rounded-t-none",
              "mask-alpha mask-[linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]",
              "overflow-hidden"
            ),
            children: /* @__PURE__ */ jsx(AgentMessageDisplay, {})
          }
        ),
        /* @__PURE__ */ jsxs(
          PanelFooter,
          {
            className: cn(
              "mt-0 flex origin-top flex-col items-stretch gap-0 px-2 pt-1 pb-2 duration-150 ease-out",
              !enableInputField && "pointer-events-none opacity-80 brightness-75",
              chatState.isPromptCreationActive && "bg-blue-400/10",
              anyMessageInChat ? "h-24" : "h-36",
              !anyMessageInChat && agentState.state === AgentStateType.IDLE && "rounded-t-[inherit] border-transparent border-t-none pt-3 pl-3"
            ),
            children: [
              /* @__PURE__ */ jsx(ContextElementsChips, {}),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-row items-end justify-between gap-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "h-full flex-1", children: [
                  /* @__PURE__ */ jsx(
                    J,
                    {
                      ref: inputRef,
                      value: chatState.chatInput,
                      onChange: (e2) => {
                        chatState.setChatInput(e2.target.value);
                      },
                      onFocus: () => {
                        chatState.startPromptCreation();
                      },
                      onKeyDown: handleKeyDown,
                      onCompositionStart: handleCompositionStart,
                      onCompositionEnd: handleCompositionEnd,
                      disabled: !enableInputField,
                      className: "m-1 h-full w-full resize-none focus:outline-none"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 z-10 p-1", children: /* @__PURE__ */ jsx(
                    TextSlideshow,
                    {
                      className: cn(
                        "text-foreground/40 text-sm",
                        chatState.chatInput.length !== 0 && "opacity-0"
                      ),
                      texts: [
                        "Try: Add a new button into the top right corner",
                        "Try: Convert these cards into accordions",
                        "Try: Add a gradient to the background"
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    disabled: !canSendMessage,
                    onClick: handleSubmit,
                    glassy: !0,
                    variant: "primary",
                    className: "size-8 cursor-pointer rounded-full p-1",
                    children: /* @__PURE__ */ jsx(ArrowUp, { className: "size-4 stroke-3" })
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
const StateIcon = ({
  children,
  shouldRender
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "absolute origin-center transition-all duration-500 ease-spring-soft",
      shouldRender ? "scale-100" : "scale-0 opacity-0 blur-md"
    ),
    children
  }
), GradientBackgroundVariants = {
  [AgentStateType.WAITING_FOR_USER_RESPONSE]: {
    activeSpeed: "slow",
    backgroundColor: "var(--color-blue-200)",
    colors: [
      "var(--color-blue-200)",
      "var(--color-indigo-400)",
      "var(--color-sky-100)",
      "var(--color-cyan-200)"
    ]
  },
  [AgentStateType.IDLE]: {
    activeSpeed: "slow",
    backgroundColor: "var(--color-white/0)",
    colors: [
      "var(--color-white/0)",
      "var(--color-white/0)",
      "var(--color-white/0)",
      "var(--color-white/0)"
    ]
  },
  [AgentStateType.THINKING]: {
    activeSpeed: "medium",
    backgroundColor: "var(--color-blue-400)",
    colors: [
      "var(--color-orange-300)",
      "var(--color-teal-300)",
      "var(--color-fuchsia-400)",
      "var(--color-indigo-200)"
    ]
  },
  [AgentStateType.WORKING]: {
    activeSpeed: "medium",
    backgroundColor: "var(--color-indigo-400)",
    colors: [
      "var(--color-sky-300)",
      "var(--color-teal-500)",
      "var(--color-violet-400)",
      "var(--color-indigo-200)"
    ]
  },
  [AgentStateType.CALLING_TOOL]: {
    activeSpeed: "fast",
    backgroundColor: "var(--color-fuchsia-400)",
    colors: [
      "var(--color-fuchsia-400)",
      "var(--color-violet-400)",
      "var(--color-indigo-500)",
      "var(--color-purple-200)"
    ]
  },
  [AgentStateType.FAILED]: {
    activeSpeed: "slow",
    backgroundColor: "var(--color-red-200)",
    colors: [
      "var(--color-red-100)",
      "var(--color-rose-300)",
      "var(--color-fuchsia-400)",
      "var(--color-indigo-300)"
    ]
  },
  [AgentStateType.COMPLETED]: {
    activeSpeed: "slow",
    backgroundColor: "var(--color-green-400)",
    colors: [
      "var(--color-green-300)",
      "var(--color-teal-400)",
      "var(--color-emerald-500)",
      "var(--color-lime-200)"
    ]
  }
};
function SelectAgent() {
  return /* @__PURE__ */ jsx(AgentSelection, {});
}
function NoAgentFound() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-foreground text-sm", children: [
    /* @__PURE__ */ jsx("p", { className: "font-medium", children: "To connect:" }),
    /* @__PURE__ */ jsxs("ol", { className: "list-inside list-decimal space-y-1 pl-2 text-sm", children: [
      /* @__PURE__ */ jsx("li", { children: "Open your IDE (Cursor, Windsurf, etc.)" }),
      /* @__PURE__ */ jsx("li", { children: "Install the stagewise extension" }),
      /* @__PURE__ */ jsx("li", { children: "Make sure the extension is active" }),
      /* @__PURE__ */ jsx("li", { children: "Click refresh in the toolbar" })
    ] })
  ] });
}
function AgentDisconnected() {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("span", { className: "text-foreground text-sm", children: [
      "The previously connected agent is not available anymore.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Try to wait a second or restart the agent."
    ] }),
    /* @__PURE__ */ jsx(AgentSelection, {})
  ] });
}
const availabilityErrorMessages = {
  [AgentAvailabilityError.NO_CONNECTION]: "The agent has no connection to it's service.",
  [AgentAvailabilityError.INCOMPATIBLE_VERSION]: "The agent is running an incompatible version.",
  [AgentAvailabilityError.NO_AUTHENTICATION]: "You're not authenticated to the agent.",
  [AgentAvailabilityError.OTHER]: ""
};
function BadAgentAvailability() {
  const availabilityStatus = useAgentAvailability();
  return availabilityStatus.isAvailable ? null : /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("span", { className: "text-foreground text-sm", children: [
      "The agent is connected to the toolbar, but not ready to use.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "error" in availabilityStatus && availabilityErrorMessages[availabilityStatus.error].length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Reason" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-foreground/80", children: availabilityStatus.errorMessage || availabilityErrorMessages[availabilityStatus.error] }),
        /* @__PURE__ */ jsx("br", {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(AgentSelection, {})
  ] });
}
function AgentConnectivityPanel() {
  const { availableAgents, connectedUnavailable, connected } = useAgents(), availabilityStatus = useAgentAvailability(), shouldRenderAsWarning = useMemo(() => availableAgents.length === 0 || connectedUnavailable || !availabilityStatus.isAvailable, [availableAgents, connectedUnavailable, availabilityStatus]), title = useMemo(() => availableAgents.length === 0 ? "No agents available" : connectedUnavailable ? "Agent disconnected" : connected && !availabilityStatus.isAvailable ? "Agent not ready to use" : "Select an agent to connect to", [availableAgents, connectedUnavailable, availabilityStatus]), renderedIcon = useMemo(() => shouldRenderAsWarning ? connectedUnavailable || connected && "error" in availabilityStatus && availabilityStatus.error === AgentAvailabilityError.NO_CONNECTION ? /* @__PURE__ */ jsx(WifiOff, { className: "size-6" }) : /* @__PURE__ */ jsx(TriangleAlert, { className: "size-6" }) : null, [connectedUnavailable, connected, availabilityStatus]);
  return /* @__PURE__ */ jsxs(
    Panel,
    {
      className: cn(
        shouldRenderAsWarning && "[--color-foreground:var(--color-orange-700)] [--color-muted-foreground:var(--color-orange-600)] before:bg-orange-50/80"
      ),
      children: [
        /* @__PURE__ */ jsx(
          PanelHeader,
          {
            title,
            actionArea: shouldRenderAsWarning && renderedIcon
          }
        ),
        /* @__PURE__ */ jsxs(PanelContent, { children: [
          availableAgents.length > 0 && !connectedUnavailable && !connected && /* @__PURE__ */ jsx(SelectAgent, {}),
          connectedUnavailable && /* @__PURE__ */ jsx(AgentDisconnected, {}),
          availableAgents.length === 0 && !connectedUnavailable && /* @__PURE__ */ jsx(NoAgentFound, {}),
          !connectedUnavailable && connected && !availabilityStatus.isAvailable && /* @__PURE__ */ jsx(BadAgentAvailability, {})
        ] }),
        /* @__PURE__ */ jsx(PanelFooter, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuButton, { children: /* @__PURE__ */ jsxs(Button, { glassy: !0, size: "sm", variant: "secondary", children: [
            /* @__PURE__ */ jsx(MessageCircleQuestionMark, { className: "mr-2 size-4" }),
            "Need help?"
          ] }) }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
            /* @__PURE__ */ jsx(
              DropdownMenuLinkItem,
              {
                href: "https://stagewise.io/docs",
                target: "_blank",
                children: "Read the docs"
              }
            ),
            /* @__PURE__ */ jsx(
              DropdownMenuLinkItem,
              {
                href: "https://discord.gg/y8gdNb4D",
                target: "_blank",
                children: "Join the community"
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
const TOOLBAR_POSITION_KEY = "stagewise_toolbar_toolbar_position";
function getStoredToolbarPosition() {
  try {
    const stored = localStorage.getItem(TOOLBAR_POSITION_KEY);
    if (stored)
      return stored;
  } catch (error2) {
    console.warn("Failed to load toolbar position from localStorage:", error2);
  }
  return null;
}
function saveToolbarPosition(position) {
  try {
    position && localStorage.setItem(TOOLBAR_POSITION_KEY, position);
  } catch (error2) {
    console.warn("Failed to save toolbar position to localStorage:", error2);
  }
}
function DefaultLayout() {
  return /* @__PURE__ */ jsx(ContextChipHoverProvider, { children: /* @__PURE__ */ jsxs("div", { className: cn("fixed inset-0 h-screen w-screen"), children: [
    /* @__PURE__ */ jsx(DOMContextSelector, {}),
    /* @__PURE__ */ jsx(DraggingArea, {})
  ] }) });
}
function DraggingArea() {
  const containerRef = useRef(null);
  return /* @__PURE__ */ jsx("div", { className: "absolute z-50 size-full", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-4", ref: containerRef, children: /* @__PURE__ */ jsx(
    DraggableProvider,
    {
      containerRef,
      snapAreas: {
        topLeft: !0,
        topRight: !0,
        bottomLeft: !0,
        bottomRight: !0,
        topCenter: !1,
        bottomCenter: !1
      },
      children: /* @__PURE__ */ jsx(ToolbarAndPanelArea, {})
    }
  ) }) });
}
function ToolbarAndPanelArea() {
  const onNewSnapArea = useCallback(
    (snapArea) => {
      saveToolbarPosition(snapArea);
    },
    []
  ), initialSnapArea = useMemo(() => getStoredToolbarPosition() || "bottomRight", []), draggable = useDraggable({
    startThreshold: 5,
    initialSnapArea,
    onDragEnd: onNewSnapArea
  }), clickHandleRef = useRef(null);
  return useEffect(() => {
    const listener = (e2) => {
      if (draggable.wasDragged) {
        e2.preventDefault(), e2.stopPropagation();
        return;
      }
    };
    return window.addEventListener("click", listener, { capture: !0 }), () => {
      window.removeEventListener("click", listener, { capture: !0 });
    };
  }, [draggable]), /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-50 size-full", children: [
    /* @__PURE__ */ jsx(
      Toolbar,
      {
        draggableHandleRef: (ref) => {
          draggable.handleRef(ref), draggable.draggableRef(ref), clickHandleRef.current = ref;
        },
        isDragged: draggable.isDragging,
        position: draggable.position
      }
    ),
    /* @__PURE__ */ jsx(
      PanelsArea,
      {
        position: draggable.position,
        isToolbarDragged: draggable.isDragging
      }
    )
  ] });
}
function PanelsArea({
  position,
  isToolbarDragged
}) {
  const {
    isChatOpen,
    isSettingsOpen,
    isAgentConnectivityOpen,
    openPluginName
  } = usePanels(), plugins = usePlugins(), pluginPanel = useMemo(() => {
    if (!openPluginName)
      return null;
    const plugin = plugins.plugins.find(
      (plugin2) => plugin2.pluginName === openPluginName
    );
    if (!plugin)
      return null;
    const panelResult = plugin.onActionClick();
    return panelResult || null;
  }, [openPluginName, plugins]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "absolute z-0 flex h-full w-96 max-w-[calc(100%-48px)] transition-all duration-500 ease-spring",
        position.isLeftHalf ? "left-12" : "right-12",
        position.isTopHalf ? "top-0 flex-col" : "bottom-0 flex-col-reverse",
        isToolbarDragged ? "scale-95 opacity-50 blur-md brightness-90" : "opacity-100"
      ),
      children: [
        /* @__PURE__ */ jsx(PanelWrapper, { position, isOpen: isChatOpen, children: /* @__PURE__ */ jsx(ChatPanel, {}) }),
        /* @__PURE__ */ jsx(PanelWrapper, { position, isOpen: isSettingsOpen, children: /* @__PURE__ */ jsx(SettingsPanel, {}) }),
        /* @__PURE__ */ jsx(PanelWrapper, { position, isOpen: isAgentConnectivityOpen, children: /* @__PURE__ */ jsx(AgentConnectivityPanel, {}) }),
        /* @__PURE__ */ jsx(PanelWrapper, { position, isOpen: !!pluginPanel, children: pluginPanel })
      ]
    }
  );
}
function PanelWrapper({
  children,
  position,
  isOpen
}) {
  const [shouldRender, setShouldRender] = useState(isOpen), stopRenderTimeoutRef = useRef(null), isAgentPanel = children && typeof children == "object" && "type" in children && typeof children.type == "function" && children.type.name === "AgentConnectivityPanel";
  return useEffect(() => {
    isAgentPanel && console.debug("[PanelWrapper] AgentConnectivityPanel isOpen changed:", {
      isOpen,
      shouldRender,
      hasTimeout: !!stopRenderTimeoutRef.current
    }), isOpen ? (isAgentPanel && console.debug(
      "[PanelWrapper] AgentConnectivityPanel setting shouldRender to true immediately"
    ), setShouldRender(!0), stopRenderTimeoutRef.current && (clearTimeout(stopRenderTimeoutRef.current), stopRenderTimeoutRef.current = null)) : stopRenderTimeoutRef.current = setTimeout(() => {
      isAgentPanel && console.debug(
        "[PanelWrapper] AgentConnectivityPanel setting shouldRender to false after timeout"
      ), setShouldRender(!1);
    }, 500);
  }, [isOpen, isAgentPanel]), useEffect(() => () => {
    stopRenderTimeoutRef.current && clearTimeout(stopRenderTimeoutRef.current);
  }, []), /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "h-[calc-size(auto,size)] transition-all duration-150 ease-out",
        position.isTopHalf ? "mb-3" : "mt-3",
        position.isLeftHalf ? "origin-left" : "origin-right",
        isOpen ? "" : "mt-0 mb-0 h-0 scale-0 opacity-0 blur-md"
      ),
      children: shouldRender && children
    }
  );
}
function MainAppBlocker() {
  const { isMainAppBlocked } = useAppState();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "fixed inset-0 h-screen w-screen",
        isMainAppBlocked ? "pointer-events-auto" : "pointer-events-none"
      ),
      role: "button",
      tabIndex: 0
    }
  );
}
function App(config2) {
  return /* @__PURE__ */ jsxs(AppStateProvider, { children: [
    /* @__PURE__ */ jsx(MainAppBlocker, {}),
    /* @__PURE__ */ jsxs(ContextProviders, { config: config2, children: [
      /* @__PURE__ */ jsx(HotkeyListener, {}),
      /* @__PURE__ */ jsx(DefaultLayout, {})
    ] })
  ] });
}
const styleNode = document.createElement("style");
styleNode.textContent = appStyle;
document.head.appendChild(styleNode);
createRoot(document.body).render(
  createElement(StrictMode, null, createElement(App, config))
);
`,"plugin-ui.js":`import { m as cn, w as cva, b as usePlugins } from "index-DsC5zpes.js";
import { B, r, t, v, s } from "index-DsC5zpes.js";
import { jsx } from "react/jsx-runtime";
const badgeVariants = cva("rounded-md p-2", {
  variants: {
    color: {
      blue: "",
      green: "",
      red: "",
      yellow: "",
      purple: "",
      orange: "",
      pink: ""
    },
    style: {
      default: "text-white",
      outline: "border text-zinc-950"
    }
  },
  compoundVariants: [
    {
      style: "default",
      color: "blue",
      className: "bg-blue-500"
    },
    {
      style: "default",
      color: "green",
      className: "bg-green-500"
    },
    {
      style: "default",
      color: "red",
      className: "bg-red-500"
    },
    {
      style: "default",
      color: "yellow",
      className: "bg-yellow-500"
    },
    {
      style: "default",
      color: "purple",
      className: "bg-purple-500"
    },
    {
      style: "default",
      color: "orange",
      className: "bg-orange-500"
    },
    {
      style: "default",
      color: "pink",
      className: "bg-pink-500"
    },
    {
      style: "outline",
      color: "blue",
      className: "border-blue-500"
    },
    {
      style: "outline",
      color: "green",
      className: "border-green-500"
    },
    {
      style: "outline",
      color: "red",
      className: "border-red-500"
    },
    {
      style: "outline",
      color: "yellow",
      className: "border-yellow-500"
    },
    {
      style: "outline",
      color: "purple",
      className: "border-purple-500"
    },
    {
      style: "outline",
      color: "orange",
      className: "border-orange-500"
    },
    {
      style: "outline",
      color: "pink",
      className: "border-pink-500"
    }
  ],
  defaultVariants: {
    color: "blue",
    style: "default"
  }
});
function Badge({ children, color, style, className }) {
  return /* @__PURE__ */ jsx("span", { className: cn(badgeVariants({ color, style }), className), children });
}
const useToolbar = () => usePlugins().toolbarContext;
export {
  Badge,
  B as Button,
  r as Panel,
  t as PanelContent,
  v as PanelFooter,
  s as PanelHeader,
  useToolbar
};
`};function initToolbar(config={}){if(!(typeof window<"u")){console.warn("Stagewise Toolbar is not supported in non-browser environments.");return}if(document.querySelector("stagewise-toolbar")){console.warn("Stagewise Toolbar is already loaded - aborting init.");return}const wrapper=document.createElement("stagewise-toolbar");wrapper.style.display="block",wrapper.style.position="fixed",wrapper.style.top="0",wrapper.style.left="0",wrapper.style.right="0",wrapper.style.bottom="0",wrapper.style.width="100vw",wrapper.style.height="100vh",wrapper.style.zIndex="2147483647",wrapper.style.pointerEvents="none";const iframe=document.createElement("iframe");iframe.style.display="block",iframe.style.border="none",iframe.style.overflow="hidden",iframe.style.margin="0",iframe.style.padding="0",iframe.style.width="100vw",iframe.style.height="100vh",iframe.style.backgroundColor="transparent",iframe.style.pointerEvents="none",iframe.style.colorScheme="normal",iframe.sandbox.add("allow-same-origin"),iframe.sandbox.add("allow-scripts"),iframe.sandbox.add("allow-presentation"),iframe.sandbox.add("allow-pointer-lock"),iframe.sandbox.add("allow-popups"),iframe.setAttribute("allowtransparency","true"),iframe.srcdoc='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css"></head><body style="pointer-events: none;"></body></html>',iframe.addEventListener("load",()=>{let lastMouseOverInteractiveAreaState=!1;const handleMouseMove=e=>{const elementAtPoint=iframe.contentDocument.elementFromPoint(e.clientX,e.clientY),isInteractive=elementAtPoint&&elementAtPoint!==document.body&&elementAtPoint.tagName!=="HTML";isInteractive!==lastMouseOverInteractiveAreaState&&(iframe.style.pointerEvents=isInteractive?"auto":"none",lastMouseOverInteractiveAreaState=isInteractive)};window.addEventListener("mousemove",handleMouseMove,{capture:!0}),iframe.contentWindow.addEventListener("mousemove",handleMouseMove,{capture:!0});const devSuffix="",main_modules=Object.fromEntries(Object.entries(define_MAIN_MODULES_default).map(([key,value])=>[key,URL.createObjectURL(new Blob([value],{type:"text/javascript"}))]));if(main_modules["@stagewise/toolbar/plugin-ui"]=URL.createObjectURL(new Blob(["export * from 'plugin-ui.js'"],{type:"text/javascript"})),config.plugins)for(const[index,plugin]of config.plugins.entries()){const plugin_module=URL.createObjectURL(new Blob([plugin.mainPlugin],{type:"text/javascript"}));main_modules[`plugin-entry-${index}`]=plugin_module}const config_module=URL.createObjectURL(new Blob([getConfigModuleContent(config)],{type:"text/javascript"}));main_modules["@stagewise/toolbar/config"]=config_module;const imports={react:`https://esm.sh/react@19.1.0${devSuffix}`,"react-dom":`https://esm.sh/react-dom@19.1.0${devSuffix}`,"react-dom/client":`https://esm.sh/react-dom@19.1.0/client${devSuffix}`,"react/jsx-runtime":`https://esm.sh/react@19.1.0/jsx-runtime${devSuffix}`,...main_modules},importmapScript=iframe.contentDocument.createElement("script");importmapScript.type="importmap",importmapScript.textContent=`{"imports":${JSON.stringify(imports)}}`,iframe.contentDocument.head.appendChild(importmapScript);const script=iframe.contentDocument.createElement("script");script.type="module",script.textContent="import('index.js');",iframe.contentDocument.head.appendChild(script)}),wrapper.appendChild(iframe),document.body.appendChild(wrapper)}function getConfigModuleContent(config){var _a,_b;const pluginImports=((_a=config.plugins)==null?void 0:_a.map((_,index)=>`import plugin${index} from 'plugin-entry-${index}'`).join(`
`))??"",convertedPluginArray=`[${((_b=config.plugins)==null?void 0:_b.map((_,index)=>`plugin${index}`).join(","))??""}]`,convertedConfig={...config,plugins:"__PLUGIN_PLACEHOLDER__"};let configString=JSON.stringify(convertedConfig);return configString=configString.replace('"__PLUGIN_PLACEHOLDER__"',convertedPluginArray),`${pluginImports}

const config = ${configString};

export default config;
`}exports.initToolbar=initToolbar;
