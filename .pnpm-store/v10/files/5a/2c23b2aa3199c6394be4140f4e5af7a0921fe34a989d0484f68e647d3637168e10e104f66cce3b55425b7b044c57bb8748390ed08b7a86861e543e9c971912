function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import Color from 'color';
import { createClipPathMask } from "../utils/clipPath";
import { Bitmap, Frame, Group, Rectangle, Shadow, Style, Svg } from "../models";
import { defaultNodeStyle } from "../models/utils";
import { getActualImageSize, parseBackgroundImageType } from "../utils/background";
import { base64ToSvgString, waitForImageLoaded } from "../utils/image";
import { StrToRenderSVG } from "../utils/svg";
import { parseURLToSvg } from "./svg";

/**
 * 将节点转换为 Shape 对象
 * @param node HTML Node
 * @param styles
 */
export var parseToShape = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(node, styles) {
    var bcr, left, top, width, height, rect, style, _styles, overflow, _styles2, backgroundColor, background, _styles3, boxShadow, borderWidth, shadowStrings, _styles4, borderColor, hasMultiColor, _styles5, borderBottomStyle, borderLeftStyle, borderTopStyle, borderRightStyle, isDashed, isDotted, _styles6, borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth, borderTopWidthFloat, borderRightWidthFloat, borderBottomWidthFloat, borderLeftWidthFloat, backgroundImageResult, url, img, actualImgSize, getPositionNum, bitmapX, bitmapY, isSvgBackground, svg, rawString, svgString, group, image, _group, _ref2, angle, stops, mask, _group2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // 解析布局
          bcr = node.getBoundingClientRect();
          left = bcr.left, top = bcr.top;
          width = bcr.right - bcr.left;
          height = bcr.bottom - bcr.top;
          rect = new Rectangle({
            width: width,
            height: height,
            x: left,
            y: top
          }); // 解析基础信息
          rect.name = node.className || 'rect';
          rect.mapBasicInfo(node);

          // 解析样式
          style = new Style();
          if (!styles) {
            styles = getComputedStyle(node);
          }
          _styles = styles, overflow = _styles.overflow;
          if (overflow === 'hidden') {
            rect.hasClippingMask = true;
          }
          _styles2 = styles, backgroundColor = _styles2.backgroundColor; // 解析背景颜色
          background = new Color(backgroundColor);
          if (background.alpha() !== 0) {
            style.addColorFill(backgroundColor);
          }

          // 解析阴影
          _styles3 = styles, boxShadow = _styles3.boxShadow, borderWidth = _styles3.borderWidth;
          if (boxShadow !== defaultNodeStyle.boxShadow) {
            // 拿到阴影样式
            shadowStrings = Shadow.splitShadowString(boxShadow);
            shadowStrings.forEach(function (shadowString) {
              var shadowObject = Shadow.shadowStringToObject(shadowString);

              // 判断是内阴影还是外阴影
              if (shadowObject.inset) {
                // 针对内阴影 如果存在 border 的话
                if (borderWidth.indexOf(' ') === -1) {
                  // 需要给 spread + 1 才能还原相应效果
                  shadowObject.spread += parseFloat(borderWidth);
                }
                style.addInnerShadow(shadowObject);
              } else {
                style.addShadow(shadowObject);
              }
            });
          }
          _styles4 = styles, borderColor = _styles4.borderColor; // 判断是否包含多种描边颜色
          hasMultiColor = Array.from(borderColor.matchAll(/rgb/g)).length > 1; // 处理描边
          if (borderWidth.indexOf(' ') === -1 && !hasMultiColor) {
            _styles5 = styles, borderBottomStyle = _styles5.borderBottomStyle, borderLeftStyle = _styles5.borderLeftStyle, borderTopStyle = _styles5.borderTopStyle, borderRightStyle = _styles5.borderRightStyle;
            style.addBorder({
              color: borderColor,
              thickness: parseFloat(borderWidth)
            });

            // 如果是虚线
            isDashed = borderBottomStyle === 'dashed' && borderLeftStyle === 'dashed' && borderTopStyle === 'dashed' && borderRightStyle === 'dashed';
            if (isDashed) {
              style.setBorderDashed({
                dash: 3 * parseFloat(borderWidth),
                spacing: 3 * parseFloat(borderWidth)
              });
            }
            // 如果是点
            isDotted = borderBottomStyle === 'dotted' && borderLeftStyle === 'dotted' && borderTopStyle === 'dotted' && borderRightStyle === 'dotted';
            if (isDotted) {
              style.setBorderDashed({
                dash: parseFloat(borderWidth),
                spacing: parseFloat(borderWidth)
              });
            }
          } else {
            // 使用内阴影来模拟单边描边
            _styles6 = styles, borderTopWidth = _styles6.borderTopWidth, borderRightWidth = _styles6.borderRightWidth, borderBottomWidth = _styles6.borderBottomWidth, borderLeftWidth = _styles6.borderLeftWidth; // 顶部描边
            borderTopWidthFloat = parseFloat(borderTopWidth);
            if (borderTopWidthFloat !== 0) {
              style.addInnerShadow({
                color: styles.borderTopColor,
                offsetY: borderTopWidthFloat
              });
            }

            // 右侧描边
            borderRightWidthFloat = parseFloat(borderRightWidth);
            if (borderRightWidthFloat !== 0) {
              style.addInnerShadow({
                color: styles.borderRightColor,
                offsetX: -borderRightWidthFloat
              });
            }

            // 底部描边
            borderBottomWidthFloat = parseFloat(borderBottomWidth);
            if (borderBottomWidthFloat !== 0) {
              style.addInnerShadow({
                color: styles.borderBottomColor,
                offsetY: -borderBottomWidthFloat
              });
            }

            // 左侧描边
            borderLeftWidthFloat = parseFloat(borderLeftWidth);
            if (borderLeftWidthFloat !== 0) {
              style.addInnerShadow({
                color: styles.borderLeftColor,
                offsetX: borderLeftWidthFloat
              });
            }
          }
          rect.style = style;

          // TODO borderRadius can be expressed in different formats and use various units -
          // for simplicity we assume "X%"

          rect.cornerRadius = {
            topLeft: Style.parseBorderRadius(styles.borderTopLeftRadius, width, height),
            topRight: Style.parseBorderRadius(styles.borderTopRightRadius, width, height),
            bottomLeft: Style.parseBorderRadius(styles.borderBottomLeftRadius, width, height),
            bottomRight: Style.parseBorderRadius(styles.borderBottomRightRadius, width, height)
          };

          // 解析背景填充
          backgroundImageResult = parseBackgroundImageType(styles.backgroundImage);
          if (!backgroundImageResult) {
            _context.next = 86;
            break;
          }
          _context.t0 = backgroundImageResult.type;
          _context.next = _context.t0 === 'Image' ? 26 : _context.t0 === 'LinearGradient' ? 82 : 85;
          break;
        case 26:
          url = backgroundImageResult.value; // 没有带协议头的话
          if (url.startsWith('//')) {
            url = (location.protocol ? location.protocol : 'https') + url;
          }

          // 获取实际的图片尺寸
          img = new Image();
          img.src = url;
          _context.next = 32;
          return waitForImageLoaded(img);
        case 32:
          // 加载下这个图片来获取真实图片尺寸
          actualImgSize = getActualImageSize(styles.backgroundSize, {
            width: img.width,
            height: img.height
          }, {
            width: width,
            height: height
          }); ///  获取图片真实坐标  ///
          getPositionNum = function getPositionNum(position, type) {
            // 解析百分比值
            // 这个百分比应该是图片中心的百分比值
            if (position.endsWith('%')) {
              var aW = actualImgSize.width,
                aH = actualImgSize.height;
              var unit = type === 'x' ? width : height;
              var size = type === 'x' ? aW : aH;
              if (unit * parseFloat(position) !== 0) {
                return unit * parseFloat(position) / 100 - size / 2;
              }
              return unit * parseFloat(position);
            }
            // 解析实际值
            return parseFloat(position);
          };
          bitmapX = getPositionNum(styles.backgroundPositionX, 'x');
          bitmapY = getPositionNum(styles.backgroundPositionY, 'y'); /// 针对 svg 类型的 background 进行解析 ///
          isSvgBackground = false;
          if (!(url.startsWith('http') && url.endsWith('svg'))) {
            _context.next = 42;
            break;
          }
          _context.next = 40;
          return parseURLToSvg(url, new Frame({
            x: rect.x,
            y: rect.y,
            width: width,
            height: height
          }));
        case 40:
          svg = _context.sent;
          isSvgBackground = true;
        case 42:
          if (!url.startsWith('data:image')) {
            _context.next = 51;
            break;
          }
          // 如果是 svg类型的 data image
          rawString = base64ToSvgString(url);
          if (!rawString) {
            _context.next = 51;
            break;
          }
          _context.next = 47;
          return StrToRenderSVG(rawString, {
            width: width,
            height: height
          });
        case 47:
          svgString = _context.sent;
          svg = new Svg({
            svgString: svgString,
            x: rect.x,
            y: rect.y,
            height: height,
            width: width
          });
          svg.mapBasicInfo(node);
          isSvgBackground = true;
        case 51:
          if (!(isSvgBackground && svg)) {
            _context.next = 65;
            break;
          }
          _context.prev = 52;
          svg.mapBasicInfo(node);
          group = new Group({
            x: left,
            y: top,
            width: width,
            height: height
          });
          group.name = '编组';
          group.addLayer(rect); // 变成相对坐标
          group.addLayer(svg); // 保留自身的位置
          return _context.abrupt("return", group);
        case 61:
          _context.prev = 61;
          _context.t1 = _context["catch"](52);
          console.warn(_context.t1);
          return _context.abrupt("return", rect);
        case 65:
          if (!(bitmapX === 0 && bitmapY === 0 && actualImgSize.width / actualImgSize.height === width / height)) {
            _context.next = 70;
            break;
          }
          _context.next = 68;
          return style.addImageFill(url);
        case 68:
          _context.next = 81;
          break;
        case 70:
          // use a Group(Shape + Bitmap) to correctly represent
          // clipping of the background image
          image = new Bitmap({
            url: url,
            x: bitmapX,
            y: bitmapY,
            width: actualImgSize.width,
            height: actualImgSize.height
          });
          _context.next = 73;
          return image.init();
        case 73:
          image.name = '背景图片';
          rect.hasClippingMask = true;
          _group = new Group({
            x: left,
            y: top,
            width: width,
            height: height
          });
          rect.name = 'Mask';
          _group.name = '编组';
          _group.addLayer(rect); // 变成相对坐标

          _group.layers.push(image); // 保留自身的位置
          return _context.abrupt("return", _group);
        case 81:
          return _context.abrupt("break", 86);
        case 82:
          // eslint-disable-next-line no-case-declarations
          _ref2 = backgroundImageResult.value, angle = _ref2.angle, stops = _ref2.stops;
          style.addGradientFill(angle, stops);
          return _context.abrupt("break", 86);
        case 85:
          return _context.abrupt("break", 86);
        case 86:
          if (!(styles.clipPath !== 'none')) {
            _context.next = 94;
            break;
          }
          mask = createClipPathMask(styles.clipPath);
          if (!mask) {
            _context.next = 94;
            break;
          }
          _group2 = new Group({
            x: left,
            y: top,
            width: width,
            height: height
          });
          _group2.name = '剪切蒙版组';
          _group2.layers.push(mask);
          _group2.addLayer(rect);
          return _context.abrupt("return", _group2);
        case 94:
          return _context.abrupt("return", rect);
        case 95:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[52, 61]]);
  }));
  return function parseToShape(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();