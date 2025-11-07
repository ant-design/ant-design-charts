"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _BaseStyle = _interopRequireDefault(require("../Base/BaseStyle"));
var _Color = _interopRequireDefault(require("./Color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 渐变对象
 * */
class Gradient extends _BaseStyle.default {
  constructor(props) {
    super();
    if (!props) {
      this.name = 'gradient';
      return;
    }
    const {
      from,
      to,
      stops,
      type,
      name,
      radius
    } = props;
    if (from) {
      this.from = from;
    }
    if (to) {
      this.to = to;
    }
    if (stops) {
      this.stops = stops.map((stopParam, index) => {
        // 判断是对象类型的 stop 参数
        if (typeof stopParam === 'object' && 'color' in stopParam) {
          return {
            color: new _Color.default(stopParam.color),
            offset: stopParam.offset ? stopParam.offset : index / (this.stops.length - 1)
          };
        }

        // 不然就是颜色类型的 stop 参数
        return {
          color: new _Color.default(stopParam)
        };
      });
    }
    if (type) {
      this.type = type;
    }
    if (type === _types.SketchFormat.GradientType.Radial && radius) {
      this.ellipseLength = radius;
    }
    this.name = name || 'gradient';
  }
  class = 'gradient';

  /**
   * 起点
   */
  from = {
    x: 0.5,
    y: 0
  };

  /**
   * 色彩节点
   */
  stops = [];

  /**
   * 终点
   */
  to = {
    x: 0.5,
    y: 1
  };

  /**
   * 渐变类型
   * */
  type = _types.SketchFormat.GradientType.Linear;

  /**
   * 如果是 Radial 渐变,由这个参数控制椭圆长轴
   */
  ellipseLength = 1;

  /**
   * 转为 Sketch JSON 对象
   * @returns {SketchFormat.Gradient}
   */
  toSketchJSON = () => {
    const {
      from,
      to,
      stops
    } = this;
    return {
      _class: _types.SketchFormat.ClassValue.Gradient,
      elipseLength: this.ellipseLength,
      from: `{${from.x}, ${from.y}}`,
      gradientType: this.type,
      to: `{${to.x}, ${to.y}}`,
      stops: stops.map(this.getSketchStop)
    };
  };

  /**
   * 将 stop 数组转换为 Sketch 使用的对象
   * */
  getSketchStop = (colorStop, index) => ({
    _class: 'gradientStop',
    color: colorStop.color.toSketchJSON(),
    position:
    // 如果有 offset 则使用 offset
    colorStop.offset ? colorStop.offset :
    // 否则均分
    index / (this.stops.length - 1)
  });
}
var _default = Gradient;
exports.default = _default;