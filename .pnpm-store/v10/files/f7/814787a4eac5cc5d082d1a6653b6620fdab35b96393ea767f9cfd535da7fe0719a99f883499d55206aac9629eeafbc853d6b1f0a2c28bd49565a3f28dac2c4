"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _transformationMatrix = require("transformation-matrix");
/**
 * @class
 * Frame 类型
 */
class Frame {
  constructor(params) {
    if (params) {
      const {
        height = 0,
        width = 0,
        x = 0,
        y = 0
      } = params;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  get centerX() {
    return this.x + this.width / 2;
  }
  set centerX(centerX) {
    this.x = centerX - this.width / 2;
  }
  get centerY() {
    return this.y + this.height / 2;
  }
  set centerY(centerY) {
    this.y = centerY - this.height / 2;
  }

  /**
   * 旋转角度
   */
  rotation = 0;
  get right() {
    return this.x + this.width;
  }
  set right(right) {
    this.x = right - this.width;
  }
  get left() {
    return this.x;
  }
  set left(left) {
    this.x = left;
  }
  get bottom() {
    return this.y + this.height;
  }
  set bottom(bottom) {
    this.y = bottom - this.height;
  }
  get top() {
    return this.y;
  }
  set top(top) {
    this.y = top;
  }

  /**
   * 按比例缩放宽高
   * @param ratio
   */
  scale(ratio) {
    this.x *= ratio;
    this.y *= ratio;
    this.width *= ratio;
    this.height *= ratio;
  }

  /**
   * 按比例缩放宽高
   * @param ratio
   */
  scaleByCenter({
    sx,
    sy
  }) {
    // 1. 先记录中心坐标
    const centerX = this.centerX;
    const centerY = this.centerY;

    // 2. 进行值缩放
    this.width *= sx;
    this.height *= sy;
    // 3. 计算新的 x 和 y
    this.x = centerX - this.width / 2;
    this.y = centerY - this.height / 2;
  }

  /**
   * 偏移
   * @param x X坐标
   * @param y Y坐标
   */
  offset(x, y) {
    this.x += x;
    this.y += y;
  }

  /**
   * 应用矩阵
   * @param matrix
   */
  applyMatrix(matrix) {
    const {
      rotation,
      scale,
      translate
    } = (0, _transformationMatrix.decomposeTSR)(matrix);

    // 缩放
    this.scaleByCenter(scale);

    // 平移
    this.x += translate.tx;
    this.y += translate.ty;

    // 旋转
    this.rotation = rotation.angle * 180.0 / Math.PI;
  }

  /**
   * 转换为 JSON 对象
   */
  toJSON = () => ({
    height: this.height,
    width: this.width,
    x: this.x,
    y: this.y
  });

  /**
   * 转为 Sketch JSON 对象
   */
  toSketchJSON = () => {
    return {
      _class: 'rect',
      constrainProportions: false,
      height: this.height,
      width: this.width,
      x: this.x || 0,
      y: this.y || 0
    };
  };
}
var _default = Frame;
exports.default = _default;