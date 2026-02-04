function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { SHOULD_SKIP_LIVEDEMO_ERROR } from "../../constants";
import { useDemo } from 'dumi';
import throttle from 'lodash.throttle';
import { createElement, useCallback, useRef, useState } from 'react';
import DemoErrorBoundary from "./DumiDemo/DemoErrorBoundary";
import { useRenderer } from "./useRenderer";
import { getAgnosticComponentModule } from "./utils";
var THROTTLE_WAIT = 500;
function evalCommonJS(js, _ref) {
  var module = _ref.module,
    exports = _ref.exports,
    require = _ref.require;
  new Function('module', 'exports', 'require', js)(module, exports, require);
}
export var useLiveDemo = function useLiveDemo(id, opts) {
  var demo = useDemo(id);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var loadingTimer = useRef();
  var taskToken = useRef();
  function resetLoadingStatus() {
    clearTimeout(loadingTimer.current);
    setLoading(false);
  }
  var _demo$context = demo.context,
    context = _demo$context === void 0 ? {} : _demo$context,
    asset = demo.asset,
    renderOpts = demo.renderOpts;
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useRenderer = useRenderer({
      id: id,
      renderOpts: demo.renderOpts,
      onResolved: function onResolved() {
        resetLoadingStatus();
      }
    }),
    ref = _useRenderer.canvasRef,
    setComponent = _useRenderer.setComponent;
  var _useState5 = useState(),
    _useState6 = _slicedToArray(_useState5, 2),
    demoNode = _useState6[0],
    setDemoNode = _useState6[1];
  var setSource = useCallback(throttle( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(source) {
      var _opts$containerRef;
      var iframeWindow, entryFileName, liveRequire, token, entryFileCode, liveExports, liveModule, component, renderToStaticMarkupDeferred, _liveExports, _liveModule, newDemoNode, oError, shouldSkipError;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // set loading status if still compiling after 499ms
            loadingTimer.current = window.setTimeout(function () {
              setLoading(true);
            },
            // make sure timer be fired before next throttle
            THROTTLE_WAIT - 1);
            if (!(opts !== null && opts !== void 0 && opts.iframe && opts !== null && opts !== void 0 && (_opts$containerRef = opts.containerRef) !== null && _opts$containerRef !== void 0 && _opts$containerRef.current)) {
              _context.next = 7;
              break;
            }
            iframeWindow = opts.containerRef.current.querySelector('iframe').contentWindow;
            _context.next = 5;
            return new Promise(function (resolve) {
              var handler = function handler(ev) {
                if (ev.data.type.startsWith('dumi.liveDemo.compileDone')) {
                  iframeWindow.removeEventListener('message', handler);
                  setError(ev.data.value.err);
                  resolve();
                }
              };
              iframeWindow.addEventListener('message', handler);
              iframeWindow.postMessage({
                type: 'dumi.liveDemo.setSource',
                value: source
              });
            });
          case 5:
            _context.next = 74;
            break;
          case 7:
            entryFileName = Object.keys(asset.dependencies).find(function (k) {
              return asset.dependencies[k].type === 'FILE';
            }); // why not require?
            // https://github.com/airbnb/babel-plugin-dynamic-import-node/blob/a68388870de822183218515a1adbb3e8d7fa9486/src/utils.js#L24
            // if just use require, local variable will overwrite __webpack__require__ in the template method
            liveRequire = function liveRequire(v) {
              if (v in context) return context[v];
              throw new Error("Cannot find module: ".concat(v));
            };
            token = taskToken.current = Math.random();
            entryFileCode = source[entryFileName];
            if (!(renderOpts !== null && renderOpts !== void 0 && renderOpts.compile)) {
              _context.next = 23;
              break;
            }
            _context.prev = 12;
            _context.next = 15;
            return renderOpts.compile(entryFileCode, {
              filename: "".concat(id, "-").concat(entryFileName)
            });
          case 15:
            entryFileCode = _context.sent;
            _context.next = 23;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](12);
            setError(_context.t0);
            resetLoadingStatus();
            return _context.abrupt("return");
          case 23:
            if (!(renderOpts !== null && renderOpts !== void 0 && renderOpts.renderer && renderOpts !== null && renderOpts !== void 0 && renderOpts.compile)) {
              _context.next = 44;
              break;
            }
            _context.prev = 24;
            liveExports = {};
            liveModule = {
              exports: liveExports
            };
            evalCommonJS(entryFileCode, {
              exports: liveExports,
              module: liveModule,
              require: liveRequire
            });
            _context.next = 30;
            return getAgnosticComponentModule(liveExports);
          case 30:
            component = _context.sent;
            if (!renderOpts.preflight) {
              _context.next = 34;
              break;
            }
            _context.next = 34;
            return renderOpts.preflight(component);
          case 34:
            setComponent(component);
            setDemoNode( /*#__PURE__*/createElement('div', {
              ref: ref
            }));
            setError(null);
            _context.next = 43;
            break;
          case 39:
            _context.prev = 39;
            _context.t1 = _context["catch"](24);
            setError(_context.t1);
            resetLoadingStatus();
          case 43:
            return _context.abrupt("return");
          case 44:
            _context.prev = 44;
            // load renderToStaticMarkup in async way
            renderToStaticMarkupDeferred = import('react-dom/server').then(function (_ref3) {
              var renderToStaticMarkup = _ref3.renderToStaticMarkup;
              return renderToStaticMarkup;
            }); // skip current task if another task is running
            if (!(token !== taskToken.current)) {
              _context.next = 48;
              break;
            }
            return _context.abrupt("return");
          case 48:
            _liveExports = {};
            _liveModule = {
              exports: _liveExports
            }; // initial component with fake runtime
            evalCommonJS(entryFileCode, {
              exports: _liveExports,
              module: _liveModule,
              require: liveRequire
            });
            newDemoNode = /*#__PURE__*/createElement(DemoErrorBoundary, null, /*#__PURE__*/createElement(_liveExports.default));
            oError = console.error; // hijack console.error to avoid useLayoutEffect error
            console.error = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return !args[0].includes('useLayoutEffect does nothing on the server') && oError.apply(console, args);
            };

            // check component is able to render, to avoid show react overlay error
            _context.prev = 54;
            _context.next = 57;
            return renderToStaticMarkupDeferred;
          case 57:
            _context.t2 = _context.sent;
            (0, _context.t2)(newDemoNode);
            _context.next = 66;
            break;
          case 61:
            _context.prev = 61;
            _context.t3 = _context["catch"](54);
            shouldSkipError = SHOULD_SKIP_LIVEDEMO_ERROR.some(function (e) {
              return _context.t3.message.includes(e);
            });
            if (shouldSkipError) {
              _context.next = 66;
              break;
            }
            throw _context.t3;
          case 66:
            console.error = oError;

            // set new demo node with passing source
            setDemoNode(newDemoNode);
            setError(null);
            _context.next = 74;
            break;
          case 71:
            _context.prev = 71;
            _context.t4 = _context["catch"](44);
            setError(_context.t4);
          case 74:
            resetLoadingStatus();
          case 75:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[12, 18], [24, 39], [44, 71], [54, 61]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), THROTTLE_WAIT, {
    leading: true
  }), [context, asset, renderOpts]);
  return {
    node: demoNode,
    loading: loading,
    error: error,
    setSource: setSource
  };
};