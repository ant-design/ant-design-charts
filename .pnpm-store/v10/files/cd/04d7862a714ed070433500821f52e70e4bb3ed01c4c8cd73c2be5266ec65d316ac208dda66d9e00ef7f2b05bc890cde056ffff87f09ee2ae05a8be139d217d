function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var ShapeGroup = /*#__PURE__*/function (_BaseLayer) {
  _inherits(ShapeGroup, _BaseLayer);
  var _super = _createSuper(ShapeGroup);
  function ShapeGroup(params) {
    var _this;
    _classCallCheck(this, ShapeGroup);
    _this = _super.call(this, SketchFormat.ClassValue.ShapeGroup, params);
    _defineProperty(_assertThisInitialized(_this), "layers", []);
    _defineProperty(_assertThisInitialized(_this), "windingRule", SketchFormat.WindingRule.EvenOdd);
    return _this;
  }

  /**
   * ShapeGroup 的 layers 必须是 AnyShape 类型
   */
  _createClass(ShapeGroup, [{
    key: "addLayer",
    value:
    // 默认采用奇偶环绕规则

    /**
     * 添加图层
     * @param layer
     */
    function addLayer(layer) {
      // 在组里面的位置是相对位置关系
      // 因此在添加图层的时候需要减掉父级的位置,得到算出相对位置
      layer.x -= this.x;
      layer.y -= this.y;
      _get(_getPrototypeOf(ShapeGroup.prototype), "addLayer", this).call(this, layer);
    }

    /**
     * 批量添加图层
     * @param layers
     */
  }, {
    key: "addLayers",
    value: function addLayers(layers) {
      // 在组里面的位置是相对位置关系
      // 因此在添加图层的时候需要减掉父级的位置,得到算出相对位置
      // eslint-disable-next-line no-restricted-syntax
      var _iterator = _createForOfIteratorHelper(layers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var layer = _step.value;
          this.addLayer(layer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * 转换为 Sketch 对象
     */
  }, {
    key: "toSketchJSON",
    value: function toSketchJSON() {
      if (this.layers.length === 1) {
        var layer = this.layers[0];
        // 恢复 layer 的相对坐标关系
        layer.x += this.x;
        layer.y += this.y;
        // 下传 style 样式
        layer.style = this.style;
        layer.resizingConstraint = this.resizingConstraint;
        layer.hasClippingMask = this.hasClippingMask;
        return layer.toSketchJSON();
      }
      return {
        _class: 'shapeGroup',
        booleanOperation: SketchFormat.BooleanOperation.None,
        isTemplate: false,
        do_objectID: this.id,
        layers: this.layers.map(function (l) {
          return l.toSketchJSON();
        }),
        rotation: this.rotation,
        windingRule: this.windingRule,
        isVisible: true,
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        layerListExpandedType: 0,
        nameIsFixed: false,
        resizingType: 0,
        shouldBreakMaskChain: false,
        clippingMaskMode: 0,
        isLocked: this.locked,
        exportOptions: defaultExportOptions,
        frame: this.frame.toSketchJSON(),
        name: this.name || this.class,
        style: this.style.toSketchJSON(),
        resizingConstraint: this.resizingConstraint,
        hasClickThrough: false,
        hasClippingMask: this.hasClippingMask
      };
    }
  }]);
  return ShapeGroup;
}(BaseLayer);
export default ShapeGroup;