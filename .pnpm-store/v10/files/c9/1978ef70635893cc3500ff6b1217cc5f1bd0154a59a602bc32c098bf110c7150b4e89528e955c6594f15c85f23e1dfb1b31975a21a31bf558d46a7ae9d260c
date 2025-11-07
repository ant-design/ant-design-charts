"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _layout = require("../../utils/layout");
var _utils = require("../../utils/utils");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _Color = _interopRequireDefault(require("../Style/Color"));
var _utils2 = require("../utils");
var _SymbolInstance = _interopRequireDefault(require("./SymbolInstance"));
var _types = require("../../types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Sketch 的 Symbol 对象
 * */
class SymbolMaster extends _BaseLayer.default {
  constructor(params) {
    super(_types.SketchFormat.ClassValue.SymbolMaster, params);
    this.symbolID = (0, _utils.uuid)();
    this.groupLayout = (0, _layout.getGroupLayout)();
  }

  /**
   * 背景颜色
   * */
  backgroundColor = new _Color.default('#FFF');
  symbolID;

  /**
   * 覆盖层属性
   */
  overrideProperties = [];

  /**
   * Symbol 布局
   */
  groupLayout; // 自由布局

  /**
   * 生成 Symbol 实例
   * */
  getSymbolInstance({
    x,
    y,
    width,
    height
  }) {
    // if no size will be requested, use the size of the master symbol
    const {
      width: masterWidth,
      height: masterHeight
    } = this.getSize();
    width = width ?? masterWidth;
    height = height ?? masterHeight;
    return new _SymbolInstance.default({
      x,
      y,
      width,
      height,
      symbolID: this.symbolID
    });
  }

  /**
   * 添加图层
   * @param layer
   */
  addLayer(layer) {
    // 在组里面的位置是相对位置关系
    // 因此在添加图层的时候需要减掉父级的位置,得到算出相对位置
    layer.x -= this.x;
    layer.y -= this.y;
    super.addLayer(layer);
  }

  /**
   * 获取 symbol 的尺寸
   */
  getSize() {
    let {
      width
    } = this;
    let {
      height
    } = this;

    // if width and height were not explicitly set,
    // fit symbol size to its contents
    if (width === null || height === null) {
      this.layers.forEach(layer => {
        const layerWidth = layer.x + layer.width;
        const layerHeight = layer.y + layer.height;
        if (width < layerWidth) {
          width = layerWidth;
        }
        if (height < layerHeight) {
          height = layerHeight;
        }
      });
    }
    return {
      width,
      height
    };
  }

  /**
   * 设置布局参数
   * @param layoutType
   */
  setGroupLayout(layoutType) {
    this.groupLayout = (0, _layout.getGroupLayout)(layoutType);
  }

  /**
   * 添加 override 设置
   * @param id
   * @param type 覆盖层的类型
   * @param canOverride 是否允许覆盖
   */
  addOverride = (id, type, canOverride = true) => {
    let str;
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
    const override = {
      _class: 'MSImmutableOverrideProperty',
      canOverride,
      overrideName: `${id}_${str}`
    };
    this.overrideProperties.push(override);
  };
  toSketchJSON = () => {
    const symbolJSON = {
      _class: 'symbolMaster',
      frame: this.frame.toSketchJSON(),
      allowsOverrides: true,
      backgroundColor: this.backgroundColor.toSketchJSON(),
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
      isTemplate: false,
      do_objectID: this.id,
      symbolID: this.symbolID,
      exportOptions: _utils2.defaultExportOptions,
      hasClickThrough: true,
      hasBackgroundColor: false,
      includeBackgroundColorInExport: true,
      resizesContent: false,
      includeBackgroundColorInInstance: false,
      nameIsFixed: this.nameIsFixed,
      shouldBreakMaskChain: this.shouldBreakMaskChain,
      horizontalRulerData: _utils2.defaultRuleData,
      verticalRulerData: _utils2.defaultRuleData,
      resizingConstraint: 1,
      resizingType: 1,
      groupLayout: this.groupLayout,
      isFixedToViewport: false,
      sharedStyleID: '',
      isFlippedHorizontal: false,
      isFlippedVertical: false,
      isLocked: this.locked,
      isFlowHome: false,
      name: this.name,
      rotation: 0,
      layerListExpandedType: _types.SketchFormat.LayerListExpanded.Undecided,
      overrideProperties: this.overrideProperties,
      layers: this.layers.map(l => l.toSketchJSON()),
      isVisible: true
    };
    if (this.userInfo) {
      symbolJSON.userInfo = this.userInfo;
    }
    return symbolJSON;
  };
}
var _default = SymbolMaster;
exports.default = _default;