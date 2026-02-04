"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _parser = require("../../parser");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _layout = require("../../utils/layout");
var _utils = require("../utils");
var _types = require("../../types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * SVG 对象
 */
class Svg extends _BaseLayer.default {
  constructor({
    x,
    y,
    width,
    height,
    svgString
  }) {
    super('svg', {
      height,
      width,
      y,
      x
    });
    this.name = 'svg';
    this.rawSVGString = svgString;
    const svgShape = new _parser.Svgson(svgString, {
      width,
      height
    });
    this.layers = svgShape.layers;

    // 默认锁定长宽
    this.setFixedWidthAndHeight();
  }

  /**
   * Svg 包含的图层对象
   * 每一个对象都是 SvgLayer 类型
   */
  layers = [];

  /**
   * 全局描述
   * @private
   */
  defs = [];
  shapes = [];

  /**
   * 原生 Svg 字符串
   */
  rawSVGString;

  /**
   * 转换为 Sketch 对象
   */
  toSketchJSON() {
    return {
      _class: 'group',
      do_objectID: this.id,
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
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
      resizingType: _types.SketchFormat.ResizeType.Stretch,
      rotation: 0,
      shouldBreakMaskChain: false,
      exportOptions: _utils.defaultExportOptions,
      frame: this.frame.toSketchJSON(),
      clippingMaskMode: 0,
      hasClippingMask: this.hasClippingMask,
      style: this.style.toSketchJSON(),
      hasClickThrough: false,
      groupLayout: (0, _layout.getGroupLayout)(),
      layers: this.layers.map(layer => layer.toSketchJSON())
    };
  }
}
var _default = Svg;
exports.default = _default;