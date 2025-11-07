import Text from "../models/Layer/Text";
import { getTextLinesAndRange } from "../utils/text";

/**
 * 解析伪类
 */
export var parsePseudoToText = function parsePseudoToText(node, pseudoElt) {
  // 判断一下是否有伪类
  var pseudoEl = getComputedStyle(node, ":".concat(pseudoElt));

  /// *** 处理 其他伪类的文本值 *** ///
  var content = pseudoEl.content;
  var pseudoText = content.replace(/"/g, '');
  var pseudoNode = node.cloneNode(true);
  var nodeBCR = node.getBoundingClientRect();
  pseudoNode.textContent = pseudoText;
  document.body.append(pseudoNode); // 插入到 dom 中 用于获取文本宽度

  var _getTextLinesAndRange = getTextLinesAndRange(pseudoNode),
    rangeBCR = _getTextLinesAndRange.rangeBCR;
  var x = nodeBCR.x,
    y = nodeBCR.y;
  if (pseudoElt === 'after') {
    x = nodeBCR.right - parseFloat(pseudoEl.marginRight) - rangeBCR.width;
  }
  var nodeDisplay = getComputedStyle(node).display;
  // 处理垂直居中的样式
  if (nodeDisplay !== 'inline') {
    y += (nodeBCR.height - rangeBCR.height) / 2;
  } else {
    y += (nodeBCR.height - rangeBCR.height) / 2;
  }
  document.body.removeChild(pseudoNode); // 处理完成后移除

  var textStyle = Text.getTextStyleFromNode(node);
  textStyle.lineHeight = rangeBCR.height;
  return new Text({
    x: x,
    y: y,
    width: rangeBCR.width,
    height: nodeBCR.height,
    text: pseudoText,
    style: textStyle,
    multiline: false
  });
};