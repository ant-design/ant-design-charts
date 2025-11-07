function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import ColorCls from 'color';
import BaseStyle from "../Base/BaseStyle";
/**
 * @class
 * 创建颜色类型
 * @constructor 入参 {ColorParam}
 */
var Color = /*#__PURE__*/function (_BaseStyle) {
  _inherits(Color, _BaseStyle);
  var _super = _createSuper(Color);
  function Color(color) {
    var _this;
    _classCallCheck(this, Color);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "red", void 0);
    _defineProperty(_assertThisInitialized(_this), "green", void 0);
    _defineProperty(_assertThisInitialized(_this), "blue", void 0);
    _defineProperty(_assertThisInitialized(_this), "alpha", void 0);
    _defineProperty(_assertThisInitialized(_this), "method", void 0);
    _defineProperty(_assertThisInitialized(_this), "toSketchJSON", function () {
      return {
        _class: 'color',
        red: _this.red / 255,
        green: _this.green / 255,
        blue: _this.blue / 255,
        alpha: _this.alpha
      };
    });
    if (!color) {
      _this.method = ColorCls();
    }
    if (color instanceof Array) {
      _this.method = ColorCls.rgb(color);
    } else {
      _this.method = ColorCls(color);
    }
    _this.alpha = _this.method.alpha();
    _this.blue = _this.method.blue();
    _this.green = _this.method.green();
    _this.red = _this.method.red();
    _this.name = _this.method.hex();
    return _this;
  }

  /**
   * HEX值
   */
  _createClass(Color, [{
    key: "hex",
    get: function get() {
      return this.method.hex();
    }

    /**
     * 色值
     */
  }, {
    key: "hue",
    get: function get() {
      return this.method.hue();
    }

    /**
     * 默认的饱和度
     */
  }, {
    key: "s",
    get: function get() {
      return this.method.saturationv();
    }

    /**
     * 默认的饱和度
     */
  }, {
    key: "saturation",
    get: function get() {
      return this.method.saturationv();
    }

    /**
     * 明度值下的饱和度
     */
  }, {
    key: "saturationv",
    get: function get() {
      return this.method.saturationv();
    }

    /**
     * 亮度值下的饱和度
     */
  }, {
    key: "saturationl",
    get: function get() {
      return this.method.saturationl();
    }

    /**
     * 亮度值
     */
  }, {
    key: "l",
    get: function get() {
      return this.method.l();
    }

    /**
     * 亮度值
     */
  }, {
    key: "lightness",
    get: function get() {
      return this.method.lightness();
    }

    /**
     * 明度值
     */
  }, {
    key: "b",
    get: function get() {
      return this.method.b();
    }

    /**
     * 明度值
     */
  }, {
    key: "value",
    get: function get() {
      return this.method.value();
    }

    /**
     * 明度值
     */
  }, {
    key: "brightness",
    get: function get() {
      return this.method.value();
    }

    /**
     * RGBA 值
     */
  }, {
    key: "rgba",
    get: function get() {
      var r = this.method.red();
      var b = this.method.blue();
      var g = this.method.green();
      var a = this.method.alpha();
      return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
    }

    /**
     * 转为 Sketch JSON对象
     * @returns {SketchFormat.Color} color json
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        r: this.red,
        g: this.green,
        b: this.blue,
        a: this.alpha
      };
    }
  }]);
  return Color;
}(BaseStyle);
export default Color;