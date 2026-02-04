"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sketchFileFormatTs = _interopRequireDefault(require("@sketch-hq/sketch-file-format-ts"));
var _utils = require("../../utils/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class BaseStyle {
  constructor() {
    this.id = (0, _utils.uuid)();
  }
  id;
  name = '';

  /**
   * 透明度
   * */
  _opacity = 1;
  get opacity() {
    return this._opacity;
  }
  set opacity(opacity) {
    this._opacity = Number(opacity);
  }
  getContextSettings = () => {
    return {
      _class: 'graphicsContextSettings',
      blendMode: _sketchFileFormatTs.default.BlendMode.Normal,
      opacity: this._opacity
    };
  };
}
var _default = BaseStyle;
exports.default = _default;