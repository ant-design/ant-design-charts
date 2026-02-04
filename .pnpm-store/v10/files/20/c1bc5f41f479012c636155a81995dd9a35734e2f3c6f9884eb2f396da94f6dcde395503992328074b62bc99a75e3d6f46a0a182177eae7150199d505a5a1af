function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import { SketchFormat } from "../../types";
import BaseLayer from "../Base/BaseLayer";
import { defaultExportOptions } from "../utils";
/**
 * 椭圆图形
 */
var Ellipse = /*#__PURE__*/function (_BaseLayer) {
  _inherits(Ellipse, _BaseLayer);
  var _super = _createSuper(Ellipse);
  function Ellipse(params) {
    var _this;
    _classCallCheck(this, Ellipse);
    _this = _super.call(this, 'ellipse', params);
    _this.name = 'ellipse';
    if (params) {
      var cx = params.cx,
        cy = params.cy,
        rx = params.rx,
        ry = params.ry;
      if (rx) {
        _this.rx = rx;
      }
      if (ry) {
        _this.ry = ry;
      }
      if (cx) {
        _this.cx = cx;
      }
      if (cy) {
        _this.cy = cy;
      }
    }
    return _this;
  }

  /**
   * 获取 x 中点值
   */
  _createClass(Ellipse, [{
    key: "cx",
    get: function get() {
      return (this.left + this.right) / 2;
    },
    set: function set(cx) {
      this.left = cx - this.width / 2;
      this.right = cx + this.width / 2;
    }

    /**
     * 获取 y 中点值
     */
  }, {
    key: "cy",
    get: function get() {
      return (this.top + this.bottom) / 2;
    },
    set: function set(cy) {
      this.top = cy - this.height / 2;
      this.bottom = cy + this.height / 2;
    }
  }, {
    key: "rx",
    get: function get() {
      return this.width / 2;
    },
    set: function set(rx) {
      this.left = this.x + (this.width / 2 - rx);
      this.width = rx * 2;
    }
  }, {
    key: "ry",
    get: function get() {
      return this.height / 2;
    },
    set: function set(ry) {
      this.top = this.x + (this.height / 2 - ry);
      this.height = ry * 2;
    }
  }, {
    key: "toSketchJSON",
    value: function toSketchJSON() {
      return {
        _class: 'oval',
        name: this.name,
        resizingConstraint: this.resizingConstraint,
        frame: this.frame.toSketchJSON(),
        do_objectID: this.id,
        style: this.style.toSketchJSON(),
        edited: false,
        isVisible: true,
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isTemplate: false,
        layerListExpandedType: 0,
        nameIsFixed: false,
        resizingType: 0,
        rotation: 0,
        shouldBreakMaskChain: false,
        clippingMaskMode: 0,
        isLocked: false,
        booleanOperation: SketchFormat.BooleanOperation.None,
        exportOptions: defaultExportOptions,
        isClosed: true,
        points: [{
          _class: 'curvePoint',
          cornerRadius: 0,
          curveFrom: '{0.77614237490000004, 1}',
          curveMode: 2,
          curveTo: '{0.22385762510000001, 1}',
          hasCurveFrom: true,
          hasCurveTo: true,
          point: '{0.5, 1}',
          cornerStyle: SketchFormat.CornerStyle.Rounded
        }, {
          _class: 'curvePoint',
          cornerRadius: 0,
          curveFrom: '{1, 0.22385762510000001}',
          curveMode: 2,
          curveTo: '{1, 0.77614237490000004}',
          hasCurveFrom: true,
          hasCurveTo: true,
          point: '{1, 0.5}',
          cornerStyle: SketchFormat.CornerStyle.Rounded
        }, {
          _class: 'curvePoint',
          cornerRadius: 0,
          curveFrom: '{0.22385762510000001, 0}',
          curveMode: 2,
          curveTo: '{0.77614237490000004, 0}',
          hasCurveFrom: true,
          hasCurveTo: true,
          point: '{0.5, 0}',
          cornerStyle: SketchFormat.CornerStyle.Rounded
        }, {
          _class: 'curvePoint',
          cornerRadius: 0,
          curveFrom: '{0, 0.77614237490000004}',
          curveMode: 2,
          curveTo: '{0, 0.22385762510000001}',
          hasCurveFrom: true,
          hasCurveTo: true,
          point: '{0, 0.5}',
          cornerStyle: SketchFormat.CornerStyle.Rounded
        }],
        pointRadiusBehaviour: 1
      };
    }
  }]);
  return Ellipse;
}(BaseLayer);
export default Ellipse;