function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
import BaseLayer from "../Base/BaseLayer";
import { defaultExportOptions } from "../utils";
/**
 * 矩形类型
 * */
var Rectangle = /*#__PURE__*/function (_BaseLayer) {
  _inherits(Rectangle, _BaseLayer);
  var _super = _createSuper(Rectangle);
  function Rectangle(_ref) {
    var _this;
    var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      _ref$cornerRadius = _ref.cornerRadius,
      _cornerRadius = _ref$cornerRadius === void 0 ? {
        topLeft: 0,
        bottomLeft: 0,
        topRight: 0,
        bottomRight: 0
      } : _ref$cornerRadius;
    _classCallCheck(this, Rectangle);
    _this = _super.call(this, SketchFormat.ClassValue.Rectangle, {
      height: height,
      x: x,
      y: y,
      width: width
    });
    _defineProperty(_assertThisInitialized(_this), "cornerRadius", 0);
    _defineProperty(_assertThisInitialized(_this), "toKonvaRadius", function () {
      if (typeof _this.cornerRadius === 'number' || _this.cornerRadius instanceof Array) {
        return _this.cornerRadius;
      }
      return Object.values(_this.cornerRadius);
    });
    _defineProperty(_assertThisInitialized(_this), "getSketchPoints", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
        cornerRadius = _assertThisInitialize.cornerRadius;
      var topRight;
      var topLeft;
      var bottomLeft;
      var bottomRight;
      if (typeof cornerRadius === 'number') {
        topLeft = cornerRadius;
        topRight = cornerRadius;
        bottomRight = cornerRadius;
        bottomLeft = cornerRadius;
      } else if (cornerRadius instanceof Array) {
        var _cornerRadius2 = _slicedToArray(cornerRadius, 4);
        topLeft = _cornerRadius2[0];
        topRight = _cornerRadius2[1];
        bottomRight = _cornerRadius2[2];
        bottomLeft = _cornerRadius2[3];
      } else {
        topLeft = cornerRadius.topLeft;
        topRight = cornerRadius.topRight;
        bottomRight = cornerRadius.bottomRight;
        bottomLeft = cornerRadius.bottomLeft;
      }
      return [{
        _class: 'curvePoint',
        cornerRadius: topLeft,
        curveFrom: '{0, 0}',
        curveMode: 1,
        curveTo: '{0, 0}',
        hasCurveFrom: false,
        hasCurveTo: false,
        point: '{0, 0}',
        cornerStyle: SketchFormat.CornerStyle.Rounded
      }, {
        _class: 'curvePoint',
        cornerRadius: topRight,
        curveFrom: '{1, 0}',
        curveMode: 1,
        curveTo: '{1, 0}',
        hasCurveFrom: false,
        hasCurveTo: false,
        point: '{1, 0}',
        cornerStyle: SketchFormat.CornerStyle.Rounded
      }, {
        _class: 'curvePoint',
        cornerRadius: bottomRight,
        curveFrom: '{1, 1}',
        curveMode: 1,
        curveTo: '{1, 1}',
        hasCurveFrom: false,
        hasCurveTo: false,
        point: '{1, 1}',
        cornerStyle: SketchFormat.CornerStyle.Rounded
      }, {
        _class: 'curvePoint',
        cornerRadius: bottomLeft,
        curveFrom: '{0, 1}',
        curveMode: 1,
        curveTo: '{0, 1}',
        hasCurveFrom: false,
        hasCurveTo: false,
        point: '{0, 1}',
        cornerStyle: SketchFormat.CornerStyle.Rounded
      }];
    });
    _this.cornerRadius = _cornerRadius;
    return _this;
  }

  /**
   * 圆角值
   */
  _createClass(Rectangle, [{
    key: "toSketchJSON",
    value:
    /**
     * 转换为 Sketch JSON
     */
    function toSketchJSON() {
      return {
        _class: 'rectangle',
        name: this.name,
        resizingConstraint: this.resizingConstraint,
        frame: this.frame.toSketchJSON(),
        do_objectID: this.id,
        hasConvertedToNewRoundCorners: true,
        needsConvertionToNewRoundCorners: false,
        fixedRadius: 0,
        style: this.style.toSketchJSON(),
        edited: false,
        pointRadiusBehaviour: 1,
        points: this.getSketchPoints(),
        isClosed: true,
        booleanOperation: SketchFormat.BooleanOperation.None,
        isTemplate: false,
        exportOptions: defaultExportOptions,
        isVisible: true,
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        layerListExpandedType: 0,
        nameIsFixed: false,
        resizingType: 0,
        rotation: this.rotation,
        shouldBreakMaskChain: false,
        clippingMaskMode: 0,
        isLocked: false,
        hasClippingMask: this.hasClippingMask
      };
    }

    /**
     * 转换为 Konva JSON
     */
  }, {
    key: "toKonvaJSON",
    value: function toKonvaJSON() {
      var cornerRadius = this.cornerRadius;
      return {
        attrs: _objectSpread(_objectSpread({}, this.frame.toJSON()), {}, {
          id: this.id,
          cornerRadius: typeof cornerRadius === 'number' || cornerRadius instanceof Array ? cornerRadius : [cornerRadius.topLeft, cornerRadius.topRight, cornerRadius.bottomRight, cornerRadius.bottomLeft]
        }),
        className: this.name
      };
    }

    /**
     * 获取 SketchPoints
     */
  }]);
  return Rectangle;
}(BaseLayer);
export default Rectangle;