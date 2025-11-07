"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sketchFileFormatTs = _interopRequireDefault(require("@sketch-hq/sketch-file-format-ts"));
var _BaseShadow = _interopRequireDefault(require("../Base/BaseShadow"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Shadow extends _BaseShadow.default {
  constructor(props) {
    super(_sketchFileFormatTs.default.ClassValue.Shadow, props);
  }

  /**
   * 转为 Sketch JSON 对象
   */
  toSketchJSON = () => {
    const {
      offsetY,
      offsetX,
      blurRadius,
      color,
      spread
    } = this;
    return {
      _class: _sketchFileFormatTs.default.ClassValue.Shadow,
      isEnabled: true,
      blurRadius,
      color: color.toSketchJSON(),
      contextSettings: _utils.defaultContextSettings,
      offsetX,
      offsetY,
      spread
    };
  };
}
var _default = Shadow;
exports.default = _default;