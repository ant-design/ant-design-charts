"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sketchFileFormatTs = _interopRequireDefault(require("@sketch-hq/sketch-file-format-ts"));
var _Color = _interopRequireDefault(require("../Style/Color"));
var _BaseStyle = _interopRequireDefault(require("./BaseStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class BaseShadow extends _BaseStyle.default {
  constructor(type, params) {
    super();
    const {
      blurRadius,
      color,
      offsetX,
      offsetY,
      contextSettings,
      spread
    } = params;
    this.color = new _Color.default(color);
    this.class = type;
    this.blurRadius = blurRadius || 0;
    this.offsetX = offsetX || 0;
    this.offsetY = offsetY || 0;
    this.spread = spread || 0;
    this.contextSettings = contextSettings || {
      _class: 'graphicsContextSettings',
      blendMode: _sketchFileFormatTs.default.BlendMode.Normal,
      opacity: 1
    };
    if (blurRadius || offsetX || color || offsetY || spread) {
      this.isEnabled = true;
    }
    this.name = `${this.color.hex} ${this.offsetX}px ${this.offsetY}px ${this.blurRadius}px`;
  }

  /**
   * 类型
   */
  class;

  /**
   * 颜色
   */
  color;

  /**
   * 模糊半径
   */
  blurRadius;

  /**
   * X 轴偏移
   */
  offsetX;

  /**
   * Y 轴偏移
   */
  offsetY;

  /**
   * 扩散效果
   */
  spread;

  /**
   * 渲染上下文
   */
  contextSettings;

  /**
   * 是否启用
   */
  isEnabled = false;

  /**
   * 分割阴影字符串
   * @param boxShadow
   */
  static splitShadowString = boxShadow => {
    return boxShadow.split(/x, |t, /).map((str, i, array) => {
      if (i + 1 < array.length) {
        if (str.match(/inse$/)) {
          return `${str}t`;
        }
        if (str.match(/p$/)) {
          return `${str}x`;
        }
      }
      return str;
    }).filter(shadow => shadow.length > 0);
  };

  /**
   * 将阴影字符串转为对象
   * @param shadowString
   */
  static shadowStringToObject = shadowString => {
    const matches = shadowString.match(/^([a-z0-9#., ()]+) ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ?(inset)?$/i);
    if (matches && matches.length === 7) {
      return {
        color: matches[1],
        offsetX: parseFloat(matches[2]),
        offsetY: parseFloat(matches[3]),
        blur: parseFloat(matches[4]),
        spread: parseFloat(matches[5]),
        inset: matches[6] !== undefined
      };
    }
  };
}
var _default = BaseShadow;
exports.default = _default;