"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parserToColorPalette = exports.parserToColor = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const parserToColor = node => {
  const color = getComputedStyle(node).backgroundColor;
  return {
    name: node.className || node.id || node.nodeName,
    color: new _color.default(color).hex()
  };
};

/**
 * 将一组节点转为面板颜色
 * @param paletteName
 * @param nodes
 */
exports.parserToColor = parserToColor;
const parserToColorPalette = (nodes, paletteName = 'palette') => {
  return nodes.map((node, index) => {
    const color = getComputedStyle(node).backgroundColor;
    return {
      name: `${paletteName}-${index + 1}`,
      color: new _color.default(color).hex()
    };
  });
};
exports.parserToColorPalette = parserToColorPalette;