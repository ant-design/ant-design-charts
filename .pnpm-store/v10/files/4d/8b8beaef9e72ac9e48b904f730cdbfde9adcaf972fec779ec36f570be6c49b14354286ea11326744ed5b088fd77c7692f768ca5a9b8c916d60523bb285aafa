function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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
import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import Color from "../Style/Color";
import BaseStyle from "./BaseStyle";
var BaseShadow = /*#__PURE__*/function (_BaseStyle) {
  _inherits(BaseShadow, _BaseStyle);
  var _super = _createSuper(BaseShadow);
  function BaseShadow(type, params) {
    var _this;
    _classCallCheck(this, BaseShadow);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "class", void 0);
    _defineProperty(_assertThisInitialized(_this), "color", void 0);
    _defineProperty(_assertThisInitialized(_this), "blurRadius", void 0);
    _defineProperty(_assertThisInitialized(_this), "offsetX", void 0);
    _defineProperty(_assertThisInitialized(_this), "offsetY", void 0);
    _defineProperty(_assertThisInitialized(_this), "spread", void 0);
    _defineProperty(_assertThisInitialized(_this), "contextSettings", void 0);
    _defineProperty(_assertThisInitialized(_this), "isEnabled", false);
    var blurRadius = params.blurRadius,
      color = params.color,
      offsetX = params.offsetX,
      offsetY = params.offsetY,
      contextSettings = params.contextSettings,
      spread = params.spread;
    _this.color = new Color(color);
    _this.class = type;
    _this.blurRadius = blurRadius || 0;
    _this.offsetX = offsetX || 0;
    _this.offsetY = offsetY || 0;
    _this.spread = spread || 0;
    _this.contextSettings = contextSettings || {
      _class: 'graphicsContextSettings',
      blendMode: SketchFormat.BlendMode.Normal,
      opacity: 1
    };
    if (blurRadius || offsetX || color || offsetY || spread) {
      _this.isEnabled = true;
    }
    _this.name = "".concat(_this.color.hex, " ").concat(_this.offsetX, "px ").concat(_this.offsetY, "px ").concat(_this.blurRadius, "px");
    return _this;
  }

  /**
   * 类型
   */
  return _createClass(BaseShadow);
}(BaseStyle);
_defineProperty(BaseShadow, "splitShadowString", function (boxShadow) {
  return boxShadow.split(/x, |t, /).map(function (str, i, array) {
    if (i + 1 < array.length) {
      if (str.match(/inse$/)) {
        return "".concat(str, "t");
      }
      if (str.match(/p$/)) {
        return "".concat(str, "x");
      }
    }
    return str;
  }).filter(function (shadow) {
    return shadow.length > 0;
  });
});
_defineProperty(BaseShadow, "shadowStringToObject", function (shadowString) {
  var matches = shadowString.match(/^([a-z0-9#., ()]+) ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ?(inset)?$/i);
  if (matches && matches.length === 7) {
    return {
      color: matches[1],
      offsetX: parseFloat(matches[2]),
      offsetY: parseFloat(matches[3]),
      blur: parseFloat(matches[4]),
      spread: parseFloat(matches[5]),
      inset: matches[6] !== undefined
    };
  }
});
export default BaseShadow;