import Color from 'color';
import { isDefaultStyles } from "./style";

/**
 * 判断是否存在伪类文本
 */
export var isExistPseudoText = function isExistPseudoText(node) {
  var beforePseudoEl = getComputedStyle(node, ':before');
  var afterPseudoEl = getComputedStyle(node, ':after');
  var hasPseudoText = function hasPseudoText(style) {
    var display = style.display,
      content = style.content,
      color = style.color,
      opacity = style.opacity;
    var pseudoText = content.replace(/"/g, '');
    var hasContent = content !== 'none' && content !== '""' && pseudoText.trim() !== ''; // 存在文本内容

    var isDisplayVisible = display !== 'none'; // display 属性可见

    var textColor = new Color(color); // 颜色不透明度不为 0
    var isColorVisible = textColor.alpha() !== 0;
    var isOpacityVisible = Number(opacity) !== 0; // 图层不透明不为 0
    return (
      // 包含文本 且 不隐藏 且 文本不透明不为 0
      hasContent && isDisplayVisible && isColorVisible && isOpacityVisible
    );
  };
  var hasBeforeText = hasPseudoText(beforePseudoEl);
  var hasAfterText = hasPseudoText(afterPseudoEl);
  return {
    after: hasAfterText,
    before: hasBeforeText,
    exist: hasBeforeText || hasAfterText
  };
};
/**
 * 判断是否存在图形伪类
 */
export var isExistPseudoShape = function isExistPseudoShape(node) {
  var beforePseudoEl = getComputedStyle(node, ':before');
  var afterPseudoEl = getComputedStyle(node, ':after');
  var hasPseudoShapeStyle = function hasPseudoShapeStyle(style) {
    var display = style.display,
      opacity = style.opacity,
      content = style.content;
    var hasContent = content !== 'none'; // 必须存在内容
    var isDisplayVisible = display !== 'none'; // display 属性可见

    var isDefaultStyle = isDefaultStyles(style);
    // Safari 下 opacity 默认是空字符串
    var isOpacityVisible = Number(opacity) !== 0 || opacity === ''; // 图层不透明不为 0
    return (
      // 包含文本 且 不隐藏 且 文本不透明不为 0
      hasContent && isDisplayVisible && isOpacityVisible && !isDefaultStyle
    );
  };
  var hasBefore = hasPseudoShapeStyle(beforePseudoEl);
  var hasAfter = hasPseudoShapeStyle(afterPseudoEl);
  return {
    exist: hasAfter || hasBefore,
    before: hasBefore,
    after: hasAfter
  };
};