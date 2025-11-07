"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _Color = _interopRequireDefault(require("../Style/Color"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 画板对象
 * */
class Artboard extends _BaseLayer.default {
  constructor(params) {
    super(_types.SketchFormat.ClassValue.Artboard, params);
  }

  /**
   * 背景颜色值
   */
  backgroundColor = new _Color.default('#fff');

  /**
   * 是否包含颜色
   */
  hasBackgroundColor = false;

  /**
   * 导出画板带上背景颜色
   */
  includeBackgroundColorInExport = false;
  isFixedToViewport = false;

  /**
   * 是否横向翻转
   */
  isFlippedHorizontal = false;

  /**
   * 是否是流程图起点
   */
  isFlowHome = false;

  /**
   * 是否纵向翻转
   */
  isFlippedVertical = false;

  /**
   * 内容自适应
   */
  resizesContent = false;
  toSketchJSON = () => {
    return {
      _class: 'artboard',
      frame: this.frame.toSketchJSON(),
      style: this.style.toSketchJSON(),
      backgroundColor: this.backgroundColor.toSketchJSON(),
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
      isTemplate: false,
      do_objectID: this.id,
      exportOptions: _utils.defaultExportOptions,
      hasBackgroundColor: this.hasBackgroundColor,
      includeBackgroundColorInExport: this.includeBackgroundColorInExport,
      isFixedToViewport: this.isFixedToViewport,
      isFlippedHorizontal: this.isFlippedHorizontal,
      userInfo: this.userInfo,
      isFlippedVertical: this.isFlippedVertical,
      isFlowHome: this.isFlowHome,
      isLocked: this.locked,
      isVisible: this.isVisible,
      layerListExpandedType: this.LayerListExpanded,
      layers: this.layers.map(l => l.toSketchJSON()),
      name: this.name,
      nameIsFixed: this.nameIsFixed,
      resizesContent: this.resizesContent,
      shouldBreakMaskChain: this.shouldBreakMaskChain,
      horizontalRulerData: _utils.defaultRuleData,
      verticalRulerData: _utils.defaultRuleData,
      hasClickThrough: true,
      resizingConstraint: 1,
      resizingType: 1,
      rotation: 0
    };
  };
}
var _default = Artboard;
exports.default = _default;