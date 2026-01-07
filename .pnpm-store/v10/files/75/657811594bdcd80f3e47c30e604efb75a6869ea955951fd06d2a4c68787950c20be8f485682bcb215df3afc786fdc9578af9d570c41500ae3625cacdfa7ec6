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
import { SketchFormat } from "../../types";
import BaseStyle from "../Base/BaseStyle";
import Color from "./Color";

/**
 * 渐变对象
 * */
var Gradient = /*#__PURE__*/function (_BaseStyle) {
  _inherits(Gradient, _BaseStyle);
  var _super = _createSuper(Gradient);
  function Gradient(props) {
    var _this;
    _classCallCheck(this, Gradient);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "class", 'gradient');
    _defineProperty(_assertThisInitialized(_this), "from", {
      x: 0.5,
      y: 0
    });
    _defineProperty(_assertThisInitialized(_this), "stops", []);
    _defineProperty(_assertThisInitialized(_this), "to", {
      x: 0.5,
      y: 1
    });
    _defineProperty(_assertThisInitialized(_this), "type", SketchFormat.GradientType.Linear);
    _defineProperty(_assertThisInitialized(_this), "ellipseLength", 1);
    _defineProperty(_assertThisInitialized(_this), "toSketchJSON", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
        from = _assertThisInitialize.from,
        to = _assertThisInitialize.to,
        stops = _assertThisInitialize.stops;
      return {
        _class: SketchFormat.ClassValue.Gradient,
        elipseLength: _this.ellipseLength,
        from: "{".concat(from.x, ", ").concat(from.y, "}"),
        gradientType: _this.type,
        to: "{".concat(to.x, ", ").concat(to.y, "}"),
        stops: stops.map(_this.getSketchStop)
      };
    });
    _defineProperty(_assertThisInitialized(_this), "getSketchStop", function (colorStop, index) {
      return {
        _class: 'gradientStop',
        color: colorStop.color.toSketchJSON(),
        position:
        // 如果有 offset 则使用 offset
        colorStop.offset ? colorStop.offset :
        // 否则均分
        index / (_this.stops.length - 1)
      };
    });
    if (!props) {
      _this.name = 'gradient';
      return _possibleConstructorReturn(_this);
    }
    var _from = props.from,
      _to = props.to,
      _stops = props.stops,
      type = props.type,
      name = props.name,
      radius = props.radius;
    if (_from) {
      _this.from = _from;
    }
    if (_to) {
      _this.to = _to;
    }
    if (_stops) {
      _this.stops = _stops.map(function (stopParam, index) {
        // 判断是对象类型的 stop 参数
        if (_typeof(stopParam) === 'object' && 'color' in stopParam) {
          return {
            color: new Color(stopParam.color),
            offset: stopParam.offset ? stopParam.offset : index / (_this.stops.length - 1)
          };
        }

        // 不然就是颜色类型的 stop 参数
        return {
          color: new Color(stopParam)
        };
      });
    }
    if (type) {
      _this.type = type;
    }
    if (type === SketchFormat.GradientType.Radial && radius) {
      _this.ellipseLength = radius;
    }
    _this.name = name || 'gradient';
    return _this;
  }
  return _createClass(Gradient);
}(BaseStyle);
export default Gradient;