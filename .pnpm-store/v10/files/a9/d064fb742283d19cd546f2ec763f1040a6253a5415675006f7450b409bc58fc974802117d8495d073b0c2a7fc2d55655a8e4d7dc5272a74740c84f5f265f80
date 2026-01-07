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
 * 描边对象
 * */
class Border extends _BaseStyle.default {
  constructor(props) {
    super();
    const {
      type,
      color,
      name,
      image,
      gradient,
      position,
      thickness
    } = props;
    this.name = name || 'Border';
    this.type = type;
    this.thickness = thickness || 0;
    this.color = new _Color.default(color);
    this.gradient = new _Gradient.default(gradient);
    if (position?.toString()) {
      this.position = position;
    }
    if (image) {
      this.image = new _Image.default(image);
    }
  }
  get opacity() {
    return this.color.alpha;
  }

  /**
   * 颜色填充类型
   * */
  type;

  /**
   * 颜色
   */
  color;

  /**
   * 渐变类型
   * */
  gradient;

  /**
   * 使用图片进行填充
   * */
  image;

  /**
   * 描边位置, 默认为内部描边
   * */
  position = _types.SketchFormat.BorderPosition.Inside;

  /**
   * 描边宽度 默认为 0
   * */
  thickness;

  /**
   * 转为 Sketch JSON 对象
   * @returns {SketchFormat.Border}
   */
  toSketchJSON = () => {
    return {
      _class: _types.SketchFormat.ClassValue.Border,
      isEnabled: true,
      fillType: this.type,
      color: this.color.toSketchJSON(),
      contextSettings: _utils.defaultContextSettings,
      gradient: this.gradient.toSketchJSON(),
      position: this.position,
      thickness: this.thickness
    };
  };
}
var _default = Border;
exports.default = _default;