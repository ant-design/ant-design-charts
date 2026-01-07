function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// @ts-ignore
import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';

/**
 * svg 基本样式
 * defaults taken from Chrome
 * @see https://www.w3.org/TR/SVG2/styling.html
 */
export var SvgStyleProperties = [
// name, default value
['cx', '0px'], ['cy', '0px'], ['height', 'auto'], ['width', 'auto'], ['x', '0px'], ['y', '0px'], ['r', '0px'], ['rx', 'auto'], ['ry', 'auto'], ['d', 'none'], ['fill', 'rgb(0, 0, 0)'], ['transform', 'none'], ['alignment-baseline', 'auto'], ['baseline-shift', '0px'], ['clip', 'auto'], ['clip-path', 'none'], ['clip-rule', 'nonzero'], ['color', 'rgb(0, 0, 0)'], ['color-interpolation', 'srgb'], ['color-interpolation-filters', 'linearrgb'], ['color-rendering', 'auto'], ['cursor', 'auto'], ['direction', 'ltr'], ['display', 'inline'], ['dominant-baseline', 'auto'], ['fill-opacity', '1'], ['fill-rule', 'nonzero'], ['filter', 'none'], ['flood-color', 'rgb(0, 0, 0)'], ['flood-opacity', '1'], ['font-family', 'Times'], ['font-size', '14px'], ['font-size-adjust', 'none'], ['font-stretch', '100%'], ['font-style', 'normal'], ['font-variant', 'normal'], ['font-weight', '400'], ['glyph-orientation-horizontal', undefined], ['glyph-orientation-vertical', undefined], ['image-rendering', 'auto'], ['letter-spacing', 'normal'], ['lighting-color', 'rgb(255, 255, 255)'], ['marker-end', 'none'], ['marker-mid', 'none'], ['marker-start', 'none'], ['mask', 'none'], ['opacity', '1'], ['overflow', 'visible'], ['pointer-events', 'auto'], ['shape-rendering', 'auto'], ['solid-color', undefined], ['solid-opacity', undefined], ['stop-color', 'rgb(0, 0, 0)'], ['stop-opacity', '1'], ['stroke', 'none'], ['stroke-dasharray', 'none'], ['stroke-dashoffset', '0px'], ['stroke-linecap', 'butt'], ['stroke-linejoin', 'miter'], ['stroke-miterlimit', '4'], ['stroke-opacity', '1'], ['stroke-width', '1px'], ['text-anchor', 'start'], ['text-decoration', 'none solid rgb(0, 0, 0)'], ['font-variant', 'tabular-nums'], ['text-overflow', 'clip'], ['text-rendering', 'auto'], ['unicode-bidi', 'normal'], ['vector-effect', 'none'], ['visibility', 'visible'], ['white-space', 'normal'], ['word-spacing', '0px'], ['writing-mode', 'horizontal-tb']];

/**
 * 节点获取原始的 String
 * @param svgNode
 */
export var nodeToRawSVG = function nodeToRawSVG(svgNode) {
  return svgNode.outerHTML;
};

/**
 * 从 URL 请求 SVG 字符串
 * @param url
 */
export var urlToRawSVG = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var data, svg;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(url, {
            mode: 'cors'
          }).catch( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(error) {
              var maybeCorsError, corsPrefix;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    maybeCorsError = error.toString().includes('Failed to fetch');
                    if (!maybeCorsError) {
                      _context.next = 7;
                      break;
                    }
                    corsPrefix = "https://cors-anywhere.herokuapp.com/";
                    console.warn('该图片存在跨域问题! 请在服务器端设置允许图片跨域,以提升解析速度:', url);
                    _context.next = 6;
                    return fetch(corsPrefix + url, {
                      mode: 'cors'
                    }).catch();
                  case 6:
                    return _context.abrupt("return", _context.sent);
                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 2:
          data = _context2.sent;
          if (data) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return");
        case 5:
          _context2.next = 7;
          return data.text();
        case 7:
          svg = _context2.sent;
          if (svg.startsWith('<svg') || svg.startsWith('<?xml')) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return");
        case 10:
          return _context2.abrupt("return", svg);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function urlToRawSVG(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 压缩和优化 Svg
 * TODO 有待优化 svgo 的方法
 * @param svgStr svg 字符串
 */
export var optimizeRawSVG = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(svgStr) {
    var svgo, svg;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          svgo = getSvgoInstance({
            cleanupAttrs: true,
            removeDoctype: true,
            removeXMLProcInst: true,
            removeComments: true,
            removeMetadata: true,
            removeTitle: true,
            removeDesc: true,
            removeUselessDefs: true,
            removeEditorsNSData: true,
            removeEmptyAttrs: true,
            removeHiddenElems: true,
            removeEmptyText: true,
            removeEmptyContainers: true,
            removeViewBox: true,
            cleanupEnableBackground: true,
            convertStyleToAttrs: true,
            convertColors: true,
            convertPathData: true,
            convertTransform: true,
            removeUnknownsAndDefaults: true,
            removeNonInheritableGroupAttrs: true,
            removeUselessStrokeAndFill: true,
            removeUnusedNS: true,
            cleanupIDs: true,
            cleanupNumericValues: true,
            // moveElemsAttrsToGroup: true,
            moveGroupAttrsToElems: true,
            collapseGroups: true,
            removeRasterImages: false,
            mergePaths: true,
            convertShapeToPath: true,
            sortAttrs: true,
            removeDimensions: true
          });
          _context3.next = 3;
          return svgo.optimize(svgStr);
        case 3:
          svg = _context3.sent;
          return _context3.abrupt("return", svg.data);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function optimizeRawSVG(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 将样式直接 inline 到 Style 中
 *
 * TODO: 针对 class 的样式似乎并不生效?
 * @param node
 */
var inlineStyles = function inlineStyles(node) {
  var styles = getComputedStyle(node);
  SvgStyleProperties.forEach(function (prop) {
    var propName = prop[0];
    var propDefaultValue = prop[1];
    var propCurrentValue = styles[propName];
    var propAttributeValue = node.getAttribute(propName);
    if (propCurrentValue !== propDefaultValue && propCurrentValue !== propAttributeValue &&
    // 不用 d 属性
    propName !== 'd' && propName !== 'font-family') {
      node.style[propName] = propCurrentValue;
    }
  });
};

/**
 * 替换 SVG 的 use 和 symbol
 * @param node
 */
var getUseReplacement = function getUseReplacement(node) {
  var href = node.href.baseVal;
  // TODO this will only work for internal references
  var refNode = null;
  var resultNode;
  try {
    refNode = document.querySelector(href);
  } catch (e) {
    // ignore
  }
  if (refNode) {
    if (refNode instanceof SVGSymbolElement) {
      resultNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      Array.from(refNode.attributes).forEach(function (attr) {
        return resultNode.setAttribute(attr.name, attr.value);
      });
      // @ts-ignore
      Array.from(refNode.cloneNode(true).children).forEach(function (child) {
        return resultNode.appendChild(child);
      });
    } else {
      // @ts-ignore
      resultNode = refNode.cloneNode(true);
    }
    return resultNode;
  }
};

/**
 * 根据 Svg String 字符串 渲染出需要的样式
 * @param svgString
 * @param width
 * @param height
 * @param wrapper 需要挂载的节点位置
 */
export var StrToRenderSVG = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(svgString, _ref4, wrapper) {
    var width, height, divNode, svgNode, queue, node, replacement;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          width = _ref4.width, height = _ref4.height;
          divNode = document.createElement('div');
          divNode.innerHTML = svgString;
          svgNode = divNode.children[0];
          svgNode.style.width = "".concat(width, "px");
          svgNode.style.height = "".concat(height, "px");
          if (wrapper) {
            wrapper.append(divNode);
          } else {
            document.body.append(divNode);
          }
          queue = Array.from(svgNode.children);
        case 8:
          if (!queue.length) {
            _context4.next = 19;
            break;
          }
          node = queue.pop();
          if (!(!(node instanceof SVGElement) || node instanceof SVGDefsElement || node instanceof SVGTitleElement)) {
            _context4.next = 12;
            break;
          }
          return _context4.abrupt("continue", 8);
        case 12:
          if (!(node instanceof SVGUseElement)) {
            _context4.next = 16;
            break;
          }
          replacement = getUseReplacement(node);
          if (replacement) {
            node.parentNode.replaceChild(replacement, node);
            queue.push(replacement);
          }
          return _context4.abrupt("continue", 8);
        case 16:
          if (node) {
            inlineStyles(node);
            Array.from(node.children).forEach(function (child) {
              return queue.push(child);
            });
          }
          _context4.next = 8;
          break;
        case 19:
          divNode.remove();
          return _context4.abrupt("return", optimizeRawSVG(svgNode.outerHTML));
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function StrToRenderSVG(_x4, _x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();