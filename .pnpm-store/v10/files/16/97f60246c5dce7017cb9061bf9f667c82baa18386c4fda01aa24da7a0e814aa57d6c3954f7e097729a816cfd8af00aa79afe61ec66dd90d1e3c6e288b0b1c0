"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToSharedTextStyle = void 0;
var _nodeToLayers = _interopRequireDefault(require("../function/nodeToLayers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 解析文本共享样式
 */
const parseToSharedTextStyle = async node => {
  const styleName = node.innerText;
  const layer = await (0, _nodeToLayers.default)(node);
  return layer.filter(l => l.class === 'text').map(l => {
    return {
      name: styleName,
      style: l.style
    };
  });
};
exports.parseToSharedTextStyle = parseToSharedTextStyle;