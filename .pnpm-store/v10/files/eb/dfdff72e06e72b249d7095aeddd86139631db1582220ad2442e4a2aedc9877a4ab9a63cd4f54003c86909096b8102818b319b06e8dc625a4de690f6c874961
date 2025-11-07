"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sketchFileFormatTs = _interopRequireDefault(require("@sketch-hq/sketch-file-format-ts"));
var _transformationMatrix = require("transformation-matrix");
var _layout = require("../../utils/layout");
var _matrix = require("../../utils/matrix");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Group extends _BaseLayer.default {
  constructor(params) {
    super(_sketchFileFormatTs.default.ClassValue.Group, params);
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
   * Symbol 布局
   */
  groupLayout = {
    _class: 'MSImmutableFreeformGroupLayout'
  }; // 自由布局

  /**
   * 设置布局参数
   * @param layoutType
   */
  setGroupLayout(layoutType) {
    this.groupLayout = (0, _layout.getGroupLayout)(layoutType);
  }

  /**
   * 获取 group 子级的尺寸
   */
  getSize() {
    let {
      width,
      height
    } = this;
    if (width === 0 || height === 0) {
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
   * 转换为 Sketch JSON 对象
   */
  toSketchJSON = () => {
    const groupJSON = {
      _class: 'group',
      do_objectID: this.id,
      booleanOperation: _sketchFileFormatTs.default.BooleanOperation.None,
      isTemplate: false,
      isFixedToViewport: false,
      isFlippedHorizontal: false,
      isFlippedVertical: false,
      isVisible: true,
      isLocked: this.locked,
      layerListExpandedType: 0,
      name: this.name || this.class,
      nameIsFixed: false,
      resizingConstraint: this.resizingConstraint,
      resizingType: _sketchFileFormatTs.default.ResizeType.Stretch,
      rotation: this.rotation,
      shouldBreakMaskChain: false,
      exportOptions: _utils.defaultExportOptions,
      frame: this.frame.toSketchJSON(),
      clippingMaskMode: 0,
      hasClippingMask: this.hasClippingMask,
      style: this.style.toSketchJSON(),
      hasClickThrough: false,
      groupLayout: this.groupLayout,
      layers: this.layers.map(layer => layer.toSketchJSON())
    };
    if (this.userInfo) {
      groupJSON.userInfo = this.userInfo;
    }
    return groupJSON;
  };
  applyTransformRotate(transformStr) {
    const matrix = (0, _matrix.transformStrToMatrix)(transformStr);
    matrix.e = 0;
    matrix.f = 0;
    const {
      rotation
    } = (0, _transformationMatrix.decomposeTSR)(matrix);

    // 旋转
    this.rotation = -(rotation.angle * 180.0) / Math.PI;
  }
}
var _default = Group;
exports.default = _default;