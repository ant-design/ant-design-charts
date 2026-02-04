/**
 * 获取文本定界框与行数
 * @param textNode
 */
export var getTextLinesAndRange = function getTextLinesAndRange(textNode) {
  // 创建Range 对象
  var rangeHelper = document.createRange();
  rangeHelper.selectNodeContents(textNode); // 选中文本节点

  var textRanges = Array.from(rangeHelper.getClientRects());
  var lines = textRanges.length;
  var rangeBCR = rangeHelper.getBoundingClientRect();
  rangeHelper.detach();
  return {
    rangeBCR: rangeBCR,
    lines: lines
  };
};

/**
 * 获取文本的绝对 BCR 定位值
 *
 * 使用场景 : 存在对齐等情况
 *
 * @param parentNode
 * @param textNode
 */
export var getTextAbsBCR = function getTextAbsBCR(parentNode, textNode) {
  var styles = getComputedStyle(parentNode);
  var nodeBCR = parentNode.getBoundingClientRect();
  var _getTextLinesAndRange = getTextLinesAndRange(textNode),
    lines = _getTextLinesAndRange.lines,
    rangeBCR = _getTextLinesAndRange.rangeBCR;
  var y = nodeBCR.y;
  // 大部分时候可以直接使用 rangeBCR 作为文本的 BCR
  var x = rangeBCR.x;
  var lineHeight = styles.lineHeight,
    display = styles.display,
    paddingTop = styles.paddingTop,
    borderTopWidth = styles.borderTopWidth;
  var textWidth = rangeBCR.width;
  var lineHeightInt = parseInt(lineHeight, 10);
  var textBCRHeight = rangeBCR.height;
  var fixY = 0;

  // center text inside a box
  if (lineHeightInt && textBCRHeight !== lineHeightInt * lines) {
    fixY = (textBCRHeight - lineHeightInt * lines) / 2;
  }
  if (display !== 'inline') {
    // 处理内部高度
    var pt = parseFloat(paddingTop);
    y += pt;

    // 处理顶部 border 宽度
    y += parseFloat(borderTopWidth);
  }
  var textHeight = fixY < 0 ? textBCRHeight - fixY * 2 : textBCRHeight;
  return {
    x: x,
    y: y,
    height: textHeight,
    width: textWidth
  };
};

/**
 * 获取一行宽度的文本
 * @param textNode
 * @param width
 */
export var getLineTextWithWidth = function getLineTextWithWidth(textNode, width) {
  var text = textNode.textContent;
  if (!text) return '';
  var textContent = '';
  for (var i = 0; i < text.length; i += 1) {
    var charNode = textNode.cloneNode(true);
    charNode.textContent = textContent;
    document.body.appendChild(charNode);
    var _getTextLinesAndRange2 = getTextLinesAndRange(charNode),
      rangeBCR = _getTextLinesAndRange2.rangeBCR;
    document.body.removeChild(charNode);
    if (rangeBCR.width < width) {
      textContent += text[i];
    }
  }
  return textContent;
};