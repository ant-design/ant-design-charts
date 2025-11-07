'use strict';

var vanilla = require('valtio/vanilla');
var deriveValtio = require('derive-valtio');

function subscribeKey(proxyObject, key, callback, notifyInSync) {
  var prevValue = proxyObject[key];
  return vanilla.subscribe(proxyObject, function () {
    var nextValue = proxyObject[key];
    if (!Object.is(prevValue, nextValue)) {
      callback(prevValue = nextValue);
    }
  }, notifyInSync);
}

function _defineAccessor(e, r, n, t) {
  var c = {
    configurable: !0,
    enumerable: !0
  };
  return c[e] = t, Object.defineProperty(r, n, c);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var currentCleanups;
function watch(callback, options) {
  var alive = true;
  var cleanups = new Set();
  var subscriptions = new Map();
  var cleanup = function cleanup() {
    if (alive) {
      alive = false;
      cleanups.forEach(function (clean) {
        return clean();
      });
      cleanups.clear();
      subscriptions.forEach(function (unsubscribe) {
        return unsubscribe();
      });
      subscriptions.clear();
    }
  };
  var revalidate = function () {
    var _ref = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
      var proxiesToSubscribe, parent, promiseOrPossibleCleanup, couldBeCleanup;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (alive) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            cleanups.forEach(function (clean) {
              return clean();
            });
            cleanups.clear();
            proxiesToSubscribe = new Set();
            parent = currentCleanups;
            currentCleanups = cleanups;
            _context.prev = 7;
            promiseOrPossibleCleanup = callback(function (proxyObject) {
              proxiesToSubscribe.add(proxyObject);
              if (alive && !subscriptions.has(proxyObject)) {
                var unsubscribe = vanilla.subscribe(proxyObject, revalidate, options == null ? void 0 : options.sync);
                subscriptions.set(proxyObject, unsubscribe);
              }
              return proxyObject;
            });
            if (!(promiseOrPossibleCleanup && promiseOrPossibleCleanup instanceof Promise)) {
              _context.next = 15;
              break;
            }
            _context.next = 12;
            return promiseOrPossibleCleanup;
          case 12:
            _context.t0 = _context.sent;
            _context.next = 16;
            break;
          case 15:
            _context.t0 = promiseOrPossibleCleanup;
          case 16:
            couldBeCleanup = _context.t0;
            if (couldBeCleanup) {
              if (alive) {
                cleanups.add(couldBeCleanup);
              } else {
                cleanup();
              }
            }
          case 18:
            _context.prev = 18;
            currentCleanups = parent;
            return _context.finish(18);
          case 21:
            subscriptions.forEach(function (unsubscribe, proxyObject) {
              if (!proxiesToSubscribe.has(proxyObject)) {
                subscriptions.delete(proxyObject);
                unsubscribe();
              }
            });
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7,, 18, 21]]);
    }));
    return function revalidate() {
      return _ref.apply(this, arguments);
    };
  }();
  if (currentCleanups) {
    currentCleanups.add(cleanup);
  }
  revalidate();
  return cleanup;
}

var _excluded = ["enabled", "name"];
var DEVTOOLS = Symbol();
function devtools(proxyObject, options) {
  if (typeof options === 'string') {
    console.warn('string name option is deprecated, use { name }. https://github.com/pmndrs/valtio/pull/400');
    options = {
      name: options
    };
  }
  var _ref = options || {},
    enabled = _ref.enabled,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? '' : _ref$name,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var extension;
  try {
    extension = (enabled != null ? enabled : process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch (_unused) {}
  if (!extension) {
    if (process.env.NODE_ENV !== 'production' && enabled) {
      console.warn('[Warning] Please install/enable Redux devtools extension');
    }
    return;
  }
  var isTimeTraveling = false;
  var devtools = extension.connect(_extends({
    name: name
  }, rest));
  var unsub1 = vanilla.subscribe(proxyObject, function (ops) {
    var action = ops.filter(function (_ref2) {
      _ref2[0];
        var path = _ref2[1];
      return path[0] !== DEVTOOLS;
    }).map(function (_ref3) {
      var op = _ref3[0],
        path = _ref3[1];
      return op + ":" + path.map(String).join('.');
    }).join(', ');
    if (!action) {
      return;
    }
    if (isTimeTraveling) {
      isTimeTraveling = false;
    } else {
      var snapWithoutDevtools = Object.assign({}, vanilla.snapshot(proxyObject));
      delete snapWithoutDevtools[DEVTOOLS];
      devtools.send({
        type: action,
        updatedAt: new Date().toLocaleString()
      }, snapWithoutDevtools);
    }
  });
  var unsub2 = devtools.subscribe(function (message) {
    var _message$payload3, _message$payload4;
    if (message.type === 'ACTION' && message.payload) {
      try {
        Object.assign(proxyObject, JSON.parse(message.payload));
      } catch (e) {
        console.error('please dispatch a serializable value that JSON.parse() and proxy() support\n', e);
      }
    }
    if (message.type === 'DISPATCH' && message.state) {
      var _message$payload, _message$payload2;
      if (((_message$payload = message.payload) == null ? void 0 : _message$payload.type) === 'JUMP_TO_ACTION' || ((_message$payload2 = message.payload) == null ? void 0 : _message$payload2.type) === 'JUMP_TO_STATE') {
        isTimeTraveling = true;
        var state = JSON.parse(message.state);
        Object.assign(proxyObject, state);
      }
      proxyObject[DEVTOOLS] = message;
    } else if (message.type === 'DISPATCH' && ((_message$payload3 = message.payload) == null ? void 0 : _message$payload3.type) === 'COMMIT') {
      devtools.init(vanilla.snapshot(proxyObject));
    } else if (message.type === 'DISPATCH' && ((_message$payload4 = message.payload) == null ? void 0 : _message$payload4.type) === 'IMPORT_STATE') {
      var _message$payload$next, _message$payload$next2;
      var actions = (_message$payload$next = message.payload.nextLiftedState) == null ? void 0 : _message$payload$next.actionsById;
      var computedStates = ((_message$payload$next2 = message.payload.nextLiftedState) == null ? void 0 : _message$payload$next2.computedStates) || [];
      isTimeTraveling = true;
      computedStates.forEach(function (_ref4, index) {
        var state = _ref4.state;
        var action = actions[index] || 'No action found';
        Object.assign(proxyObject, state);
        if (index === 0) {
          devtools.init(vanilla.snapshot(proxyObject));
        } else {
          devtools.send(action, vanilla.snapshot(proxyObject));
        }
      });
    }
  });
  devtools.init(vanilla.snapshot(proxyObject));
  return function () {
    unsub1();
    unsub2 == null || unsub2();
  };
}

function addComputed_DEPRECATED(proxyObject, computedFns_FAKE, targetObject) {
  if (targetObject === void 0) {
    targetObject = proxyObject;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.warn('addComputed is deprecated. Please consider using `derive`. Falling back to emulation with derive. https://github.com/pmndrs/valtio/pull/201');
  }
  var derivedFns = {};
  Object.keys(computedFns_FAKE).forEach(function (key) {
    derivedFns[key] = function (get) {
      return computedFns_FAKE[key](get(proxyObject));
    };
  });
  return deriveValtio.derive(derivedFns, {
    proxy: targetObject
  });
}

function proxyWithComputed_DEPRECATED(initialObject, computedFns) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('proxyWithComputed is deprecated. Please follow "Computed Properties" guide in docs.');
  }
  Object.keys(computedFns).forEach(function (key) {
    if (Object.getOwnPropertyDescriptor(initialObject, key)) {
      throw new Error('object property already defined');
    }
    var computedFn = computedFns[key];
    var _ref = typeof computedFn === 'function' ? {
        get: computedFn
      } : computedFn,
      get = _ref.get,
      set = _ref.set;
    var desc = {};
    desc.get = function () {
      return get(vanilla.snapshot(proxyObject));
    };
    if (set) {
      desc.set = function (newValue) {
        return set(proxyObject, newValue);
      };
    }
    Object.defineProperty(initialObject, key, desc);
  });
  var proxyObject = vanilla.proxy(initialObject);
  return proxyObject;
}

var isObject = function isObject(x) {
  return typeof x === 'object' && x !== null;
};
var refSet;
var deepClone = function deepClone(obj) {
  if (!refSet) {
    refSet = vanilla.unstable_buildProxyFunction()[2];
  }
  if (!isObject(obj) || refSet.has(obj)) {
    return obj;
  }
  var baseObject = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  Reflect.ownKeys(obj).forEach(function (key) {
    baseObject[key] = deepClone(obj[key]);
  });
  return baseObject;
};
function proxyWithHistory_DEPRECATED(initialValue, skipSubscribe) {
  if (skipSubscribe === void 0) {
    skipSubscribe = false;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.warn('proxyWithHistory is deprecated. Please use the "valtio-history" package; refer to the docs');
  }
  var proxyObject = vanilla.proxy({
    value: initialValue,
    history: vanilla.ref({
      wip: undefined,
      snapshots: [],
      index: -1
    }),
    clone: deepClone,
    canUndo: function canUndo() {
      return proxyObject.history.index > 0;
    },
    undo: function undo() {
      if (proxyObject.canUndo()) {
        proxyObject.value = proxyObject.history.wip = proxyObject.clone(proxyObject.history.snapshots[--proxyObject.history.index]);
      }
    },
    canRedo: function canRedo() {
      return proxyObject.history.index < proxyObject.history.snapshots.length - 1;
    },
    redo: function redo() {
      if (proxyObject.canRedo()) {
        proxyObject.value = proxyObject.history.wip = proxyObject.clone(proxyObject.history.snapshots[++proxyObject.history.index]);
      }
    },
    saveHistory: function saveHistory() {
      proxyObject.history.snapshots.splice(proxyObject.history.index + 1);
      proxyObject.history.snapshots.push(vanilla.snapshot(proxyObject).value);
      ++proxyObject.history.index;
    },
    subscribe: function subscribe() {
      return vanilla.subscribe(proxyObject, function (ops) {
        if (ops.every(function (op) {
          return op[1][0] === 'value' && (op[0] !== 'set' || op[2] !== proxyObject.history.wip);
        })) {
          proxyObject.saveHistory();
        }
      });
    }
  });
  proxyObject.saveHistory();
  if (!skipSubscribe) {
    proxyObject.subscribe();
  }
  return proxyObject;
}

function proxySet(initialValues) {
  var _proxy;
  var set = vanilla.proxy((_proxy = {
    data: Array.from(new Set(initialValues)),
    has: function has(value) {
      return this.data.indexOf(value) !== -1;
    },
    add: function add(value) {
      var hasProxy = false;
      if (typeof value === 'object' && value !== null) {
        hasProxy = this.data.indexOf(vanilla.proxy(value)) !== -1;
      }
      if (this.data.indexOf(value) === -1 && !hasProxy) {
        this.data.push(value);
      }
      return this;
    },
    delete: function _delete(value) {
      var index = this.data.indexOf(value);
      if (index === -1) {
        return false;
      }
      this.data.splice(index, 1);
      return true;
    },
    clear: function clear() {
      this.data.splice(0);
    },
    get size() {
      return this.data.length;
    },
    forEach: function forEach(cb) {
      var _this = this;
      this.data.forEach(function (value) {
        cb(value, value, _this);
      });
    }
  }, _defineAccessor("get", _proxy, Symbol.toStringTag, function () {
    return 'Set';
  }), _proxy.toJSON = function toJSON() {
    return new Set(this.data);
  }, _proxy[Symbol.iterator] = function () {
    return this.data[Symbol.iterator]();
  }, _proxy.values = function values() {
    return this.data.values();
  }, _proxy.keys = function keys() {
    return this.data.values();
  }, _proxy.entries = function entries() {
    return new Set(this.data).entries();
  }, _proxy));
  Object.defineProperties(set, {
    data: {
      enumerable: false
    },
    size: {
      enumerable: false
    },
    toJSON: {
      enumerable: false
    }
  });
  Object.seal(set);
  return set;
}

function proxyMap(entries) {
  var _proxy;
  var map = vanilla.proxy((_proxy = {
    data: Array.from(entries || []),
    has: function has(key) {
      return this.data.some(function (p) {
        return p[0] === key;
      });
    },
    set: function set(key, value) {
      var record = this.data.find(function (p) {
        return p[0] === key;
      });
      if (record) {
        record[1] = value;
      } else {
        this.data.push([key, value]);
      }
      return this;
    },
    get: function get(key) {
      var _this$data$find;
      return (_this$data$find = this.data.find(function (p) {
        return p[0] === key;
      })) == null ? void 0 : _this$data$find[1];
    },
    delete: function _delete(key) {
      var index = this.data.findIndex(function (p) {
        return p[0] === key;
      });
      if (index === -1) {
        return false;
      }
      this.data.splice(index, 1);
      return true;
    },
    clear: function clear() {
      this.data.splice(0);
    },
    get size() {
      return this.data.length;
    },
    toJSON: function toJSON() {
      return new Map(this.data);
    },
    forEach: function forEach(cb) {
      var _this = this;
      this.data.forEach(function (p) {
        cb(p[1], p[0], _this);
      });
    },
    keys: function keys() {
      return this.data.map(function (p) {
        return p[0];
      }).values();
    },
    values: function values() {
      return this.data.map(function (p) {
        return p[1];
      }).values();
    },
    entries: function entries() {
      return new Map(this.data).entries();
    }
  }, _defineAccessor("get", _proxy, Symbol.toStringTag, function () {
    return 'Map';
  }), _proxy[Symbol.iterator] = function () {
    return this.entries();
  }, _proxy));
  Object.defineProperties(map, {
    data: {
      enumerable: false
    },
    size: {
      enumerable: false
    },
    toJSON: {
      enumerable: false
    }
  });
  Object.seal(map);
  return map;
}

Object.defineProperty(exports, "derive", {
  enumerable: true,
  get: function () { return deriveValtio.derive; }
});
Object.defineProperty(exports, "underive", {
  enumerable: true,
  get: function () { return deriveValtio.underive; }
});
Object.defineProperty(exports, "unstable_deriveSubscriptions", {
  enumerable: true,
  get: function () { return deriveValtio.unstable_deriveSubscriptions; }
});
exports.addComputed = addComputed_DEPRECATED;
exports.devtools = devtools;
exports.proxyMap = proxyMap;
exports.proxySet = proxySet;
exports.proxyWithComputed = proxyWithComputed_DEPRECATED;
exports.proxyWithHistory = proxyWithHistory_DEPRECATED;
exports.subscribeKey = subscribeKey;
exports.watch = watch;
