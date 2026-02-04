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
import { SketchFormat } from "../../types";
import BaseStyle from "../Base/BaseStyle";
import { defaultContextSettings } from "../utils";
import Color from "./Color";
import Gradient from "./Gradient";
import Image from "./Image";
/**
 * 渐变对象
 * */
var Fill = /*#__PURE__*/function (_BaseStyle) {
  _inherits(Fill, _BaseStyle);
  var _super = _createSuper(Fill);
  function Fill(props) {
    var _this;
    _classCallCheck(this, Fill);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "type", SketchFormat.FillType.Color);
    _defineProperty(_assertThisInitialized(_this), "color", new Color());
    _defineProperty(_assertThisInitialized(_this), "stops", []);
    _defineProperty(_assertThisInitialized(_this), "to", {
      x: 1,
      y: 0
    });
    _defineProperty(_assertThisInitialized(_this), "gradient", new Gradient());
    _defineProperty(_assertThisInitialized(_this), "image", void 0);
    _defineProperty(_assertThisInitialized(_this), "patternFillType", SketchFormat.PatternFillType.Fill);
    _defineProperty(_assertThisInitialized(_this), "patternTileScale", 1);
    _defineProperty(_assertThisInitialized(_this), "toSketchJSON", function () {
      var fill = {
        _class: SketchFormat.ClassValue.Fill,
        isEnabled: true,
        fillType: _this.type,
        color: _this.color.toSketchJSON(),
        contextSettings: defaultContextSettings,
        gradient: _this.gradient.toSketchJSON(),
        noiseIndex: 0,
        // 旧版本似乎可以填充噪点
        noiseIntensity: 0,
        patternFillType: _this.patternFillType,
        patternTileScale: _this.patternTileScale
      };
      if (_this.image) {
        fill.image = _this.image.toSketchJSON();
      }
      return fill;
    });
    var type = props.type,
      color = props.color,
      name = props.name,
      image = props.image,
      gradient = props.gradient;
    _this.name = name || 'Fill';
    if (type) {
      _this.type = type;
    }
    switch (type) {
      case SketchFormat.FillType.Color:
      default:
        _this.color = new Color(color);
        break;
      case SketchFormat.FillType.Gradient:
        _this.gradient = new Gradient(gradient);
        break;
      case SketchFormat.FillType.Pattern:
        if (image) {
          _this.image = new Image(image);
        }
    }
    return _this;
  }

  /**
   * 填色类型
   * */
  _createClass(Fill, [{
    key: "opacity",
    get: function get() {
      return this.color.alpha;
    }

    /**
     * 终点
     */
  }, {
    key: "toJSON",
    value:
    /**
     * 转为 JSON
     */
    function toJSON() {
      return {
        type: this.type,
        color: this.color.toJSON()
      };
    }
  }]);
  return Fill;
}(BaseStyle);
export default Fill;