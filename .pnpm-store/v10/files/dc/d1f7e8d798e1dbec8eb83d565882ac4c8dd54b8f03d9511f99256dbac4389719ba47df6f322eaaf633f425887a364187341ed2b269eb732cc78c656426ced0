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
import { getGroupLayout } from "../../utils/layout";
import { uuid } from "../../utils/utils";
import BaseLayer from "../Base/BaseLayer";
import Color from "../Style/Color";
import { defaultExportOptions, defaultRuleData } from "../utils";
import SymbolInstance from "./SymbolInstance";
import { SketchFormat } from "../../types";

/**
 * Sketch 的 Symbol 对象
 * */
var SymbolMaster = /*#__PURE__*/function (_BaseLayer) {
  _inherits(SymbolMaster, _BaseLayer);
  var _super = _createSuper(SymbolMaster);
  function SymbolMaster(params) {
    var _this;
    _classCallCheck(this, SymbolMaster);
    _this = _super.call(this, SketchFormat.ClassValue.SymbolMaster, params);
    _defineProperty(_assertThisInitialized(_this), "backgroundColor", new Color('#FFF'));
    _defineProperty(_assertThisInitialized(_this), "symbolID", void 0);
    _defineProperty(_assertThisInitialized(_this), "overrideProperties", []);
    _defineProperty(_assertThisInitialized(_this), "groupLayout", void 0);
    _defineProperty(_assertThisInitialized(_this), "addOverride", function (id, type) {
      var canOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var str;
      switch (type) {
        case 'image':
          str = type;
          break;
        case 'style':
          str = 'layerStyle';
          break;
        case 'text':
        default:
          str = 'stringValue';
      }
      var override = {
        _class: 'MSImmutableOverrideProperty',
        canOverride: canOverride,
        overrideName: "".concat(id, "_").concat(str)
      };
      _this.overrideProperties.push(override);
    });
    _defineProperty(_assertThisInitialized(_this), "toSketchJSON", function () {
      var symbolJSON = {
        _class: 'symbolMaster',
        frame: _this.frame.toSketchJSON(),
        allowsOverrides: true,
        backgroundColor: _this.backgroundColor.toSketchJSON(),
        booleanOperation: SketchFormat.BooleanOperation.None,
        isTemplate: false,
        do_objectID: _this.id,
        symbolID: _this.symbolID,
        exportOptions: defaultExportOptions,
        hasClickThrough: true,
        hasBackgroundColor: false,
        includeBackgroundColorInExport: true,
        resizesContent: false,
        includeBackgroundColorInInstance: false,
        nameIsFixed: _this.nameIsFixed,
        shouldBreakMaskChain: _this.shouldBreakMaskChain,
        horizontalRulerData: defaultRuleData,
        verticalRulerData: defaultRuleData,
        resizingConstraint: 1,
        resizingType: 1,
        groupLayout: _this.groupLayout,
        isFixedToViewport: false,
        sharedStyleID: '',
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isLocked: _this.locked,
        isFlowHome: false,
        name: _this.name,
        rotation: 0,
        layerListExpandedType: SketchFormat.LayerListExpanded.Undecided,
        overrideProperties: _this.overrideProperties,
        layers: _this.layers.map(function (l) {
          return l.toSketchJSON();
        }),
        isVisible: true
      };
      if (_this.userInfo) {
        symbolJSON.userInfo = _this.userInfo;
      }
      return symbolJSON;
    });
    _this.symbolID = uuid();
    _this.groupLayout = getGroupLayout();
    return _this;
  }

  /**
   * 背景颜色
   * */
  _createClass(SymbolMaster, [{
    key: "getSymbolInstance",
    value:
    // 自由布局

    /**
     * 生成 Symbol 实例
     * */
    function getSymbolInstance(_ref) {
      var _width, _height;
      var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;
      // if no size will be requested, use the size of the master symbol
      var _this$getSize = this.getSize(),
        masterWidth = _this$getSize.width,
        masterHeight = _this$getSize.height;
      width = (_width = width) !== null && _width !== void 0 ? _width : masterWidth;
      height = (_height = height) !== null && _height !== void 0 ? _height : masterHeight;
      return new SymbolInstance({
        x: x,
        y: y,
        width: width,
        height: height,
        symbolID: this.symbolID
      });
    }

    /**
     * 添加图层
     * @param layer
     */
  }, {
    key: "addLayer",
    value: function addLayer(layer) {
      // 在组里面的位置是相对位置关系
      // 因此在添加图层的时候需要减掉父级的位置,得到算出相对位置
      layer.x -= this.x;
      layer.y -= this.y;
      _get(_getPrototypeOf(SymbolMaster.prototype), "addLayer", this).call(this, layer);
    }

    /**
     * 获取 symbol 的尺寸
     */
  }, {
    key: "getSize",
    value: function getSize() {
      var width = this.width;
      var height = this.height;

      // if width and height were not explicitly set,
      // fit symbol size to its contents
      if (width === null || height === null) {
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
     * 设置布局参数
     * @param layoutType
     */
  }, {
    key: "setGroupLayout",
    value: function setGroupLayout(layoutType) {
      this.groupLayout = getGroupLayout(layoutType);
    }

    /**
     * 添加 override 设置
     * @param id
     * @param type 覆盖层的类型
     * @param canOverride 是否允许覆盖
     */
  }]);
  return SymbolMaster;
}(BaseLayer);
export default SymbolMaster;