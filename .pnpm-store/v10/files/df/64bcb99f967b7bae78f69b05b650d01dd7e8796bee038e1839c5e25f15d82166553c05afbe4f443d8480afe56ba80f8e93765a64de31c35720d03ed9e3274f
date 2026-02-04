"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _color = _interopRequireDefault(require("color"));
var _BaseStyle = _interopRequireDefault(require("../Base/BaseStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @class
 * 创建颜色类型
 * @constructor 入参 {ColorParam}
 */
class Color extends _BaseStyle.default {
  red;
  green;
  blue;
  alpha;
  method;
  constructor(color) {
    super();
    if (!color) {
      this.method = (0, _color.default)();
    }
    if (color instanceof Array) {
      this.method = _color.default.rgb(color);
    } else {
      this.method = (0, _color.default)(color);
    }
    this.alpha = this.method.alpha();
    this.blue = this.method.blue();
    this.green = this.method.green();
    this.red = this.method.red();
    this.name = this.method.hex();
  }

  /**
   * HEX值
   */
  get hex() {
    return this.method.hex();
  }

  /**
   * 色值
   */
  get hue() {
    return this.method.hue();
  }

  /**
   * 默认的饱和度
   */
  get s() {
    return this.method.saturationv();
  }

  /**
   * 默认的饱和度
   */
  get saturation() {
    return this.method.saturationv();
  }

  /**
   * 明度值下的饱和度
   */
  get saturationv() {
    return this.method.saturationv();
  }

  /**
   * 亮度值下的饱和度
   */
  get saturationl() {
    return this.method.saturationl();
  }

  /**
   * 亮度值
   */
  get l() {
    return this.method.l();
  }

  /**
   * 亮度值
   */
  get lightness() {
    return this.method.lightness();
  }

  /**
   * 明度值
   */
  get b() {
    return this.method.b();
  }

  /**
   * 明度值
   */
  get value() {
    return this.method.value();
  }

  /**
   * 明度值
   */
  get brightness() {
    return this.method.value();
  }

  /**
   * RGBA 值
   */
  get rgba() {
    const r = this.method.red();
    const b = this.method.blue();
    const g = this.method.green();
    const a = this.method.alpha();
    return `rgba(${r},${g},${b},${a})`;
  }

  /**
   * 转为 Sketch JSON对象
   * @returns {SketchFormat.Color} color json
   */
  toSketchJSON = () => {
    return {
      _class: 'color',
      red: this.red / 255,
      green: this.green / 255,
      blue: this.blue / 255,
      alpha: this.alpha
    };
  };
  toJSON() {
    return {
      r: this.red,
      g: this.green,
      b: this.blue,
      a: this.alpha
    };
  }
}
var _default = Color;
exports.default = _default;