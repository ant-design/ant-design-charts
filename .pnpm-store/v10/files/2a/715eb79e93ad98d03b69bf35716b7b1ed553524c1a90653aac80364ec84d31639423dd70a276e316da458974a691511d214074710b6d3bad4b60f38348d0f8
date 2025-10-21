function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { parse as cssParse } from 'css';
import BaseStyle from "../Base/BaseStyle";
import Border from "./Border";
import Fill from "./Fill";
import InnerShadow from "./InnerShadow";
import Shadow from "./Shadow";
import SketchBorderOptions from "./SketchBorderOptions";
import { uuid } from "../../utils/utils";
import { defaultColorControls } from "../utils";
import { SketchFormat } from "../../types";
var defaultShadowInput = {
  color: '#000',
  blur: 0,
  offsetX: 0,
  offsetY: 0,
  spread: 0
};
/**
 * 样式
 */
var Style = /*#__PURE__*/function (_BaseStyle) {
  _inherits(Style, _BaseStyle);
  var _super = _createSuper(Style);
  function Style() {
    var _this;
    _classCallCheck(this, Style);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "fills", []);
    _defineProperty(_assertThisInitialized(_this), "shadows", []);
    _defineProperty(_assertThisInitialized(_this), "innerShadows", []);
    _defineProperty(_assertThisInitialized(_this), "borders", []);
    _defineProperty(_assertThisInitialized(_this), "sketchBorderOptions", new SketchBorderOptions());
    _defineProperty(_assertThisInitialized(_this), "convertAngleToFromAndTo", function (angle) {
      // default 180deg
      var from = {
        x: 0.5,
        y: 0
      };
      var to = {
        x: 0.5,
        y: 1
      };

      // 处理带 rad 弧度的对象
      if (angle.includes('rad')) {
        var rad = parseFloat(angle.split('rad')[0]);
        from.x = 0;
        from.y = 0;

        // 获取自然数 0 (-0 -> 0)
        var getNaturalZero = function getNaturalZero(num) {
          return Math.abs(num) === 0 ? 0 : num;
        };
        var x = Math.round(Math.cos(rad) * 100) / 100;
        var y = Math.round(Math.sin(rad) * 100) / 100;
        to.x = getNaturalZero(x);
        to.y = getNaturalZero(y);
      }
      // Learn math or find someone smarter to figure this out correctly
      switch (angle) {
        case 'to top':
        case '360deg':
        case '0deg':
          from.y = 1;
          to.y = 0;
          break;
        case 'to right':
        case '90deg':
          from.x = 0;
          from.y = 0.5;
          to.x = 1;
          to.y = 0.5;
          break;
        case 'to left':
        case '270deg':
          from.x = 1;
          from.y = 0.5;
          to.x = 0;
          to.y = 0.5;
          break;
        case 'to bottom':
        case '180deg':
        default:
          break;
      }
      return {
        from: from,
        to: to
      };
    });
    return _this;
  }
  _createClass(Style, [{
    key: "addColorFill",
    value:
    /**
     * 添加颜色填充
     * */
    function addColorFill(color) {
      var fill = new Fill({
        type: SketchFormat.FillType.Color,
        color: color
      });
      this.fills.push(fill);
    }

    /**
     * 添加渐变填充
     * */
  }, {
    key: "addGradientFill",
    value: function addGradientFill(angle, stops) {
      var _this$convertAngleToF = this.convertAngleToFromAndTo(angle),
        from = _this$convertAngleToF.from,
        to = _this$convertAngleToF.to;
      var fill = new Fill({
        type: SketchFormat.FillType.Gradient,
        gradient: {
          from: from,
          to: to,
          stops: stops || [],
          gradientType: SketchFormat.GradientType.Linear
        }
      });
      this.fills.push(fill);
    }

    /**
     * 将角度转为 sketch 中的 from 和 to
     * @param {string} angle 角度
     */
  }, {
    key: "addImageFill",
    value:
    /**
     * 添加图片填充
     * */
    function () {
      var _addImageFill = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(image) {
        var fill;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              fill = new Fill({
                type: SketchFormat.FillType.Pattern,
                image: image
              }); // 将图片资源初始化
              if (!fill.image) {
                _context.next = 4;
                break;
              }
              _context.next = 4;
              return fill.image.init();
            case 4:
              this.fills.push(fill);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function addImageFill(_x) {
        return _addImageFill.apply(this, arguments);
      }
      return addImageFill;
    }()
    /**
     * 添加描边
     * */
  }, {
    key: "addBorder",
    value: function addBorder(_ref) {
      var color = _ref.color,
        thickness = _ref.thickness,
        position = _ref.position;
      var border = new Border({
        type: SketchFormat.FillType.Color,
        color: color,
        thickness: thickness,
        position: position
      });
      this.borders.push(border);
    }

    /**
     * 添加阴影
     * */
  }, {
    key: "addShadow",
    value: function addShadow() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultShadowInput;
      var color = params.color,
        blur = params.blur,
        offsetX = params.offsetX,
        offsetY = params.offsetY,
        spread = params.spread;
      var shadow = new Shadow({
        blurRadius: blur,
        color: color,
        offsetX: offsetX,
        offsetY: offsetY,
        spread: spread
      });
      this.shadows.push(shadow);
    }

    /**
     * 添加内阴影
     * */
  }, {
    key: "addInnerShadow",
    value: function addInnerShadow() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultShadowInput;
      var color = params.color,
        blur = params.blur,
        offsetX = params.offsetX,
        offsetY = params.offsetY,
        spread = params.spread;
      var shadow = new InnerShadow({
        blurRadius: blur,
        color: color,
        offsetX: offsetX,
        offsetY: offsetY,
        spread: spread
      });
      this.innerShadows.push(shadow);
    }

    /**
     * 设置描边属性
     * */
  }, {
    key: "setBorderDashed",
    value: function setBorderDashed() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        lineCapStyle = _ref2.lineCapStyle,
        lineJoinStyle = _ref2.lineJoinStyle,
        dash = _ref2.dash,
        spacing = _ref2.spacing;
      if (lineCapStyle) {
        this.sketchBorderOptions.lineCap = lineCapStyle;
      }
      if (lineJoinStyle) {
        this.sketchBorderOptions.lineJoin = lineJoinStyle;
      }
      if (dash || spacing) {
        this.sketchBorderOptions.dashPattern = [dash || 4, spacing || 4];
      }
    }

    /**
     * 生成 Sketch JSON 对象
     */
  }, {
    key: "toSketchJSON",
    value: function toSketchJSON() {
      return {
        _class: 'style',
        do_objectID: this.id,
        endMarkerType: SketchFormat.MarkerType.OpenArrow,
        miterLimit: 10,
        startMarkerType: SketchFormat.MarkerType.OpenArrow,
        windingRule: SketchFormat.WindingRule.EvenOdd,
        borderOptions: this.sketchBorderOptions.toSketchJSON(),
        colorControls: defaultColorControls,
        fills: this.fills.map(function (fill) {
          return fill.toSketchJSON();
        }),
        borders: this.borders.map(function (b) {
          return b.toSketchJSON();
        }),
        shadows: this.shadows.map(function (shadow) {
          return shadow.toSketchJSON();
        }),
        innerShadows: this.innerShadows.map(function (i) {
          return i.toSketchJSON();
        }),
        contextSettings: this.getContextSettings()
      };
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        fills: this.fills.map(function (f) {
          return f.toJSON();
        })
      };
    }

    /**
     * 获取 style 的 hash
     */
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "hash",
    get: function get() {
      // const { id, name, ...style } = obj; // 去掉 id 和 name 后进行 hash
      // return murmurHash(JSON.stringify(sortObjectKeys(style)));

      return '';
    }

    /**
     * 从样式字符串获得样式的 JSON 对象
     * @param style
     */
  }]);
  return Style;
}(BaseStyle);
_defineProperty(Style, "parseStyleString", function (style) {
  if (!style || style === '') {
    return;
  }
  var Arr = style.replace(/&quot;/g, '"') // 替换引号
  .split(';').filter(function (item) {
    return item !== '';
  });
  var str = '';
  Arr.forEach(function (item) {
    var test = '';
    item.trim().split(':').forEach(function (item2) {
      test += "\"".concat(item2.trim(), "\":");
    });
    str += "".concat(test, ",");
  });
  str = str.replace(/:,/g, ',');
  str = str.substring(0, str.lastIndexOf(','));
  str = "{".concat(str, "}");
  return JSON.parse(str);
});
_defineProperty(Style, "parseClassStyle", function (classStyle) {
  var _cssParse = cssParse(classStyle),
    stylesheet = _cssParse.stylesheet;
  var rules = [];
  stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.rules.forEach(function (rule) {
    var selectors = rule.selectors,
      declarations = rule.declarations;
    var styles = {};
    declarations
    // 过滤出所有的声明类型
    === null || declarations
    // 过滤出所有的声明类型
    === void 0 ? void 0 : declarations
    // 过滤出所有的声明类型
    .filter(function (d) {
      return d.type === 'declaration';
    }).forEach(function (declaration) {
      var property = declaration.property,
        value = declaration.value;
      if (!property) return;

      // 将 key 转为小驼峰模式
      var key = property.replace(/-(\w)/g, function (_, letter) {
        return letter.toUpperCase();
      });
      Object.assign(styles, _defineProperty({}, key, value));
    });

    // 如果 styles 中存在元素
    if (Object.keys(styles).length > 0) {
      selectors === null || selectors === void 0 ? void 0 : selectors.forEach(function (selector) {
        rules.push({
          className: selector,
          styles: styles
        });
      });
    }
  });
  return rules;
});
_defineProperty(Style, "parseBorderRadius", function (borderRadius, width, height) {
  var matches = borderRadius.match(/^([0-9.]+)(.+)$/);

  // Sketch uses 'px' units for border radius, so we need to convert % to px
  if (matches && matches[2] === '%') {
    var baseVal = Math.max(width, height);
    var percentageApplied = baseVal * (parseInt(matches[1], 10) / 100);
    return Math.round(percentageApplied);
  }
  return parseInt(borderRadius, 10);
});
_defineProperty(Style, "layerToSketchSharedStyle", function (layer, id) {
  var _layer$style;
  return {
    _class: 'sharedStyle',
    do_objectID: id || uuid(),
    name: layer.name,
    value: (_layer$style = layer.style) === null || _layer$style === void 0 ? void 0 : _layer$style.toSketchJSON()
  };
});
export default Style;