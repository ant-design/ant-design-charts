"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ShapeGroup extends _BaseLayer.default {
  constructor(params) {
    super(_types.SketchFormat.ClassValue.ShapeGroup, params);
  }

  /**
   * ShapeGroup 的 layers 必须是 AnyShape 类型
   */
  layers = [];

  /**
   * 填充规则
   * @see https://www.yuque.com/arvinxx/fontend/7ad6671c-d309-40fc-a0a8-55888f508289
   */
  windingRule = _types.SketchFormat.WindingRule.EvenOdd; // 默认采用奇偶环绕规则

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
   * 批量添加图层
   * @param layers
   */
  addLayers(layers) {
    // 在组里面的位置是相对位置关系
    // 因此在添加图层的时候需要减掉父级的位置,得到算出相对位置
    // eslint-disable-next-line no-restricted-syntax
    for (const layer of layers) {
      this.addLayer(layer);
    }
  }

  /**
   * 转换为 Sketch 对象
   */
  toSketchJSON() {
    if (this.layers.length === 1) {
      const layer = this.layers[0];
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
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
      isTemplate: false,
      do_objectID: this.id,
      layers: this.layers.map(l => l.toSketchJSON()),
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
      exportOptions: _utils.defaultExportOptions,
      frame: this.frame.toSketchJSON(),
      name: this.name || this.class,
      style: this.style.toSketchJSON(),
      resizingConstraint: this.resizingConstraint,
      hasClickThrough: false,
      hasClippingMask: this.hasClippingMask
    };
  }
}
var _default = ShapeGroup;
exports.default = _default;