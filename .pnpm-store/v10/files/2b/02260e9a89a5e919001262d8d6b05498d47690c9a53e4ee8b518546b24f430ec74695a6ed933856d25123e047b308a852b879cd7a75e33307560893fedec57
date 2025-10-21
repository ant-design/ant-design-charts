"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _BaseStyle = _interopRequireDefault(require("../Base/BaseStyle"));
var _Color = _interopRequireDefault(require("./Color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 颜色资产
 */
class ColorAsset extends _BaseStyle.default {
  color;
  constructor(hex, name) {
    super();
    this.color = new _Color.default(hex);
    this.name = name || hex.toUpperCase();
  }
  toSketchJSON() {
    return {
      _class: 'MSImmutableColorAsset',
      color: this.color.toSketchJSON(),
      do_objectID: this.id,
      name: this.name
    };
  }
}
var _default = ColorAsset;
exports.default = _default;