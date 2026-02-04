"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
const {
  LineJoinStyle,
  LineCapStyle
} = _types.SketchFormat;
/**
 * 描边参数项
 * */
class SketchBorderOptions {
  constructor(dashArr) {
    this.dashPattern = dashArr || [];
  }
  class = 'borderOptions';
  isEnabled = true;
  dashPattern;
  lineCap = LineCapStyle.Butt;
  lineJoin = LineJoinStyle.Miter;

  /**
   * 转为 Sketch JSON 对象
   * @returns {SketchFormat.BorderOptions}
   */
  toSketchJSON = () => {
    return {
      _class: 'borderOptions',
      isEnabled: this.isEnabled,
      dashPattern: this.dashPattern,
      lineCapStyle: this.lineCap,
      lineJoinStyle: this.lineJoin
    };
  };
}
var _default = SketchBorderOptions;
exports.default = _default;