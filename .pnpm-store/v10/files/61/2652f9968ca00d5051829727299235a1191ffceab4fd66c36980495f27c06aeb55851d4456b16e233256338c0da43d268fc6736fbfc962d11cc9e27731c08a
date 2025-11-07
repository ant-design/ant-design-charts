"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isExistPseudoText = exports.isExistPseudoShape = void 0;
var _color = _interopRequireDefault(require("color"));
var _style = require("./style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 判断是否存在伪类文本
 */
const isExistPseudoText = node => {
  const beforePseudoEl = getComputedStyle(node, ':before');
  const afterPseudoEl = getComputedStyle(node, ':after');
  const hasPseudoText = style => {
    const {
      display,
      content,
      color,
      opacity
    } = style;
    const pseudoText = content.replace(/"/g, '');
    const hasContent = content !== 'none' && content !== '""' && pseudoText.trim() !== ''; // 存在文本内容

    const isDisplayVisible = display !== 'none'; // display 属性可见

    const textColor = new _color.default(color); // 颜色不透明度不为 0
    const isColorVisible = textColor.alpha() !== 0;
    const isOpacityVisible = Number(opacity) !== 0; // 图层不透明不为 0
    return (
      // 包含文本 且 不隐藏 且 文本不透明不为 0
      hasContent && isDisplayVisible && isColorVisible && isOpacityVisible
    );
  };
  const hasBeforeText = hasPseudoText(beforePseudoEl);
  const hasAfterText = hasPseudoText(afterPseudoEl);
  return {
    after: hasAfterText,
    before: hasBeforeText,
    exist: hasBeforeText || hasAfterText
  };
};
exports.isExistPseudoText = isExistPseudoText;
/**
 * 判断是否存在图形伪类
 */
const isExistPseudoShape = node => {
  const beforePseudoEl = getComputedStyle(node, ':before');
  const afterPseudoEl = getComputedStyle(node, ':after');
  const hasPseudoShapeStyle = style => {
    const {
      display,
      opacity,
      content
    } = style;
    const hasContent = content !== 'none'; // 必须存在内容
    const isDisplayVisible = display !== 'none'; // display 属性可见

    const isDefaultStyle = (0, _style.isDefaultStyles)(style);
    // Safari 下 opacity 默认是空字符串
    const isOpacityVisible = Number(opacity) !== 0 || opacity === ''; // 图层不透明不为 0
    return (
      // 包含文本 且 不隐藏 且 文本不透明不为 0
      hasContent && isDisplayVisible && isOpacityVisible && !isDefaultStyle
    );
  };
  const hasBefore = hasPseudoShapeStyle(beforePseudoEl);
  const hasAfter = hasPseudoShapeStyle(afterPseudoEl);
  return {
    exist: hasAfter || hasBefore,
    before: hasBefore,
    after: hasAfter
  };
};
exports.isExistPseudoShape = isExistPseudoShape;