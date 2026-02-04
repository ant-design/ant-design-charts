"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 矩形类型
 * */
class Rectangle extends _BaseLayer.default {
  constructor({
    x,
    y,
    width,
    height,
    cornerRadius = {
      topLeft: 0,
      bottomLeft: 0,
      topRight: 0,
      bottomRight: 0
    }
  }) {
    super(_types.SketchFormat.ClassValue.Rectangle, {
      height,
      x,
      y,
      width
    });
    this.cornerRadius = cornerRadius;
  }

  /**
   * 圆角值
   */
  cornerRadius = 0;
  toKonvaRadius = () => {
    if (typeof this.cornerRadius === 'number' || this.cornerRadius instanceof Array) {
      return this.cornerRadius;
    }
    return Object.values(this.cornerRadius);
  };

  /**
   * 转换为 Sketch JSON
   */
  toSketchJSON() {
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
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
      isTemplate: false,
      exportOptions: _utils.defaultExportOptions,
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
  toKonvaJSON() {
    const {
      cornerRadius
    } = this;
    return {
      attrs: {
        ...this.frame.toJSON(),
        id: this.id,
        cornerRadius: typeof cornerRadius === 'number' || cornerRadius instanceof Array ? cornerRadius : [cornerRadius.topLeft, cornerRadius.topRight, cornerRadius.bottomRight, cornerRadius.bottomLeft]
      },
      className: this.name
    };
  }

  /**
   * 获取 SketchPoints
   */
  getSketchPoints = () => {
    const {
      cornerRadius
    } = this;
    let topRight;
    let topLeft;
    let bottomLeft;
    let bottomRight;
    if (typeof cornerRadius === 'number') {
      topLeft = cornerRadius;
      topRight = cornerRadius;
      bottomRight = cornerRadius;
      bottomLeft = cornerRadius;
    } else if (cornerRadius instanceof Array) {
      [topLeft, topRight, bottomRight, bottomLeft] = cornerRadius;
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
      cornerStyle: _types.SketchFormat.CornerStyle.Rounded
    }, {
      _class: 'curvePoint',
      cornerRadius: topRight,
      curveFrom: '{1, 0}',
      curveMode: 1,
      curveTo: '{1, 0}',
      hasCurveFrom: false,
      hasCurveTo: false,
      point: '{1, 0}',
      cornerStyle: _types.SketchFormat.CornerStyle.Rounded
    }, {
      _class: 'curvePoint',
      cornerRadius: bottomRight,
      curveFrom: '{1, 1}',
      curveMode: 1,
      curveTo: '{1, 1}',
      hasCurveFrom: false,
      hasCurveTo: false,
      point: '{1, 1}',
      cornerStyle: _types.SketchFormat.CornerStyle.Rounded
    }, {
      _class: 'curvePoint',
      cornerRadius: bottomLeft,
      curveFrom: '{0, 1}',
      curveMode: 1,
      curveTo: '{0, 1}',
      hasCurveFrom: false,
      hasCurveTo: false,
      point: '{0, 1}',
      cornerStyle: _types.SketchFormat.CornerStyle.Rounded
    }];
  };
}
var _default = Rectangle;
exports.default = _default;