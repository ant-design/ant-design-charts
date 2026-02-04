"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _BaseStyle = _interopRequireDefault(require("../Base/BaseStyle"));
var _utils = require("../utils");
var _Color = _interopRequireDefault(require("./Color"));
var _Gradient = _interopRequireDefault(require("./Gradient"));
var _Image = _interopRequireDefault(require("./Image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 渐变对象
 * */
class Fill extends _BaseStyle.default {
  constructor(props) {
    super();
    const {
      type,
      color,
      name,
      image,
      gradient
    } = props;
    this.name = name || 'Fill';
    if (type) {
      this.type = type;
    }
    switch (type) {
      case _types.SketchFormat.FillType.Color:
      default:
        this.color = new _Color.default(color);
        break;
      case _types.SketchFormat.FillType.Gradient:
        this.gradient = new _Gradient.default(gradient);
        break;
      case _types.SketchFormat.FillType.Pattern:
        if (image) {
          this.image = new _Image.default(image);
        }
    }
  }

  /**
   * 填色类型
   * */
  type = _types.SketchFormat.FillType.Color;

  /**
   * 颜色
   */
  color = new _Color.default();

  /**
   * 色彩节点
   */
  stops = [];
  get opacity() {
    return this.color.alpha;
  }

  /**
   * 终点
   */
  to = {
    x: 1,
    y: 0
  };

  /**
   * 渐变类型
   * */
  gradient = new _Gradient.default();

  /**
   * 使用图片进行填充
   * */
  image;

  /**
   * 填充类型
   * */
  patternFillType = _types.SketchFormat.PatternFillType.Fill;
  patternTileScale = 1;

  /**
   * 转为 Sketch JSON 对象
   * @returns {SketchFormat.Fill}
   */
  toSketchJSON = () => {
    const fill = {
      _class: _types.SketchFormat.ClassValue.Fill,
      isEnabled: true,
      fillType: this.type,
      color: this.color.toSketchJSON(),
      contextSettings: _utils.defaultContextSettings,
      gradient: this.gradient.toSketchJSON(),
      noiseIndex: 0,
      // 旧版本似乎可以填充噪点
      noiseIntensity: 0,
      patternFillType: this.patternFillType,
      patternTileScale: this.patternTileScale
    };
    if (this.image) {
      fill.image = this.image.toSketchJSON();
    }
    return fill;
  };

  /**
   * 转为 JSON
   */
  toJSON() {
    return {
      type: this.type,
      color: this.color.toJSON()
    };
  }
}
var _default = Fill;
exports.default = _default;