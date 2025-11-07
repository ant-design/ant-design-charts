function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import { decomposeTSR } from 'transformation-matrix';
import { getGroupLayout } from "../../utils/layout";
import { transformStrToMatrix } from "../../utils/matrix";
import BaseLayer from "../Base/BaseLayer";
import { defaultExportOptions } from "../utils";
var Group = /*#__PURE__*/function (_BaseLayer) {
  _inherits(Group, _BaseLayer);
  var _super = _createSuper(Group);
  function Group(params) {
    var _this;
    _classCallCheck(this, Group);
    _this = _super.call(this, SketchFormat.ClassValue.Group, params);
    _defineProperty(_assertThisInitialized(_this), "groupLayout", {
      _class: 'MSImmutableFreeformGroupLayout'
    });
    _defineProperty(_assertThisInitialized(_this), "toSketchJSON", function () {
      var groupJSON = {
        _class: 'group',
        do_objectID: _this.id,
        booleanOperation: SketchFormat.BooleanOperation.None,
        isTemplate: false,
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isVisible: true,
        isLocked: _this.locked,
        layerListExpandedType: 0,
        name: _this.name || _this.class,
        nameIsFixed: false,
        resizingConstraint: _this.resizingConstraint,
        resizingType: SketchFormat.ResizeType.Stretch,
        rotation: _this.rotation,
        shouldBreakMaskChain: false,
        exportOptions: defaultExportOptions,
        frame: _this.frame.toSketchJSON(),
        clippingMaskMode: 0,
        hasClippingMask: _this.hasClippingMask,
        style: _this.style.toSketchJSON(),
        hasClickThrough: false,
        groupLayout: _this.groupLayout,
        layers: _this.layers.map(function (layer) {
          return layer.toSketchJSON();
        })
      };
      if (_this.userInfo) {
        groupJSON.userInfo = _this.userInfo;
      }
      return groupJSON;
    });
    return _this;
  }

  /**
   * 添加图层
   * @param layer
   */
  _createClass(Group, [{
    key: "addLayer",
    value: function addLayer(layer) {
      // 在组里面的位置是相对位置关系
      // 因此在添加图层的时候需要减掉父级的位置,得到算出相对位置
      layer.x -= this.x;
      layer.y -= this.y;
      _get(_getPrototypeOf(Group.prototype), "addLayer", this).call(this, layer);
    }

    /**
     * Symbol 布局
     */
  }, {
    key: "setGroupLayout",
    value:
    // 自由布局

    /**
     * 设置布局参数
     * @param layoutType
     */
    function setGroupLayout(layoutType) {
      this.groupLayout = getGroupLayout(layoutType);
    }

    /**
     * 获取 group 子级的尺寸
     */
  }, {
    key: "getSize",
    value: function getSize() {
      var width = this.width,
        height = this.height;
      if (width === 0 || height === 0) {
        this.layers.forEach(function (layer) {
          var layerWidth = layer.x + layer.width;
          var layerHeight = layer.y + layer.height;
          if (width < layerWidth) {
            width = layerWidth;
          }
          if (height < layerHeight) {
            height = layerHeight;
          }
        });
      }
      return {
        width: width,
        height: height
      };
    }

    /**
     * 转换为 Sketch JSON 对象
     */
  }, {
    key: "applyTransformRotate",
    value: function applyTransformRotate(transformStr) {
      var matrix = transformStrToMatrix(transformStr);
      matrix.e = 0;
      matrix.f = 0;
      var _decomposeTSR = decomposeTSR(matrix),
        rotation = _decomposeTSR.rotation;

      // 旋转
      this.rotation = -(rotation.angle * 180.0) / Math.PI;
    }
  }]);
  return Group;
}(BaseLayer);
export default Group;