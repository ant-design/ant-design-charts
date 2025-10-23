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
 * 描边对象
 * */
var Border = /*#__PURE__*/function (_BaseStyle) {
  _inherits(Border, _BaseStyle);
  var _super = _createSuper(Border);
  function Border(props) {
    var _this;
    _classCallCheck(this, Border);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "type", void 0);
    _defineProperty(_assertThisInitialized(_this), "color", void 0);
    _defineProperty(_assertThisInitialized(_this), "gradient", void 0);
    _defineProperty(_assertThisInitialized(_this), "image", void 0);
    _defineProperty(_assertThisInitialized(_this), "position", SketchFormat.BorderPosition.Inside);
    _defineProperty(_assertThisInitialized(_this), "thickness", void 0);
    _defineProperty(_assertThisInitialized(_this), "toSketchJSON", function () {
      return {
        _class: SketchFormat.ClassValue.Border,
        isEnabled: true,
        fillType: _this.type,
        color: _this.color.toSketchJSON(),
        contextSettings: defaultContextSettings,
        gradient: _this.gradient.toSketchJSON(),
        position: _this.position,
        thickness: _this.thickness
      };
    });
    var type = props.type,
      color = props.color,
      name = props.name,
      image = props.image,
      gradient = props.gradient,
      position = props.position,
      thickness = props.thickness;
    _this.name = name || 'Border';
    _this.type = type;
    _this.thickness = thickness || 0;
    _this.color = new Color(color);
    _this.gradient = new Gradient(gradient);
    if (position !== null && position !== void 0 && position.toString()) {
      _this.position = position;
    }
    if (image) {
      _this.image = new Image(image);
    }
    return _this;
  }
  _createClass(Border, [{
    key: "opacity",
    get: function get() {
      return this.color.alpha;
    }

    /**
     * 颜色填充类型
     * */
  }]);
  return Border;
}(BaseStyle);
export default Border;