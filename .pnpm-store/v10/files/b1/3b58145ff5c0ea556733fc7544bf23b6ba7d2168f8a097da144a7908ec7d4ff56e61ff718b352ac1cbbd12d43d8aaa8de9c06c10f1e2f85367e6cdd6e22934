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
import { Svgson } from "../../parser";
import BaseLayer from "../Base/BaseLayer";
import { getGroupLayout } from "../../utils/layout";
import { defaultExportOptions } from "../utils";
import { SketchFormat } from "../../types";
/**
 * SVG 对象
 */
var Svg = /*#__PURE__*/function (_BaseLayer) {
  _inherits(Svg, _BaseLayer);
  var _super = _createSuper(Svg);
  function Svg(_ref) {
    var _this;
    var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      svgString = _ref.svgString;
    _classCallCheck(this, Svg);
    _this = _super.call(this, 'svg', {
      height: height,
      width: width,
      y: y,
      x: x
    });
    _defineProperty(_assertThisInitialized(_this), "layers", []);
    _defineProperty(_assertThisInitialized(_this), "defs", []);
    _defineProperty(_assertThisInitialized(_this), "shapes", []);
    _defineProperty(_assertThisInitialized(_this), "rawSVGString", void 0);
    _this.name = 'svg';
    _this.rawSVGString = svgString;
    var svgShape = new Svgson(svgString, {
      width: width,
      height: height
    });
    _this.layers = svgShape.layers;

    // 默认锁定长宽
    _this.setFixedWidthAndHeight();
    return _this;
  }

  /**
   * Svg 包含的图层对象
   * 每一个对象都是 SvgLayer 类型
   */
  _createClass(Svg, [{
    key: "toSketchJSON",
    value:
    /**
     * 转换为 Sketch 对象
     */
    function toSketchJSON() {
      return {
        _class: 'group',
        do_objectID: this.id,
        booleanOperation: SketchFormat.BooleanOperation.None,
        isTemplate: false,
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isVisible: true,
        isLocked: this.locked,
        layerListExpandedType: 0,
        name: this.name,
        nameIsFixed: false,
        resizingConstraint: this.resizingConstraint,
        resizingType: SketchFormat.ResizeType.Stretch,
        rotation: 0,
        shouldBreakMaskChain: false,
        exportOptions: defaultExportOptions,
        frame: this.frame.toSketchJSON(),
        clippingMaskMode: 0,
        hasClippingMask: this.hasClippingMask,
        style: this.style.toSketchJSON(),
        hasClickThrough: false,
        groupLayout: getGroupLayout(),
        layers: this.layers.map(function (layer) {
          return layer.toSketchJSON();
        })
      };
    }
  }]);
  return Svg;
}(BaseLayer);
export default Svg;