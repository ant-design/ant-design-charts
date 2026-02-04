"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextLinesAndRange = exports.getTextAbsBCR = exports.getLineTextWithWidth = void 0;
/**
 * 获取文本定界框与行数
 * @param textNode
 */
const getTextLinesAndRange = textNode => {
  // 创建Range 对象
  const rangeHelper = document.createRange();
  rangeHelper.selectNodeContents(textNode); // 选中文本节点

  const textRanges = Array.from(rangeHelper.getClientRects());
  const lines = textRanges.length;
  const rangeBCR = rangeHelper.getBoundingClientRect();
  rangeHelper.detach();
  return {
    rangeBCR,
    lines
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
exports.getTextLinesAndRange = getTextLinesAndRange;
const getTextAbsBCR = (parentNode, textNode) => {
  const styles = getComputedStyle(parentNode);
  const nodeBCR = parentNode.getBoundingClientRect();
  const {
    lines,
    rangeBCR
  } = getTextLinesAndRange(textNode);
  let {
    y
  } = nodeBCR;
  // 大部分时候可以直接使用 rangeBCR 作为文本的 BCR
  const {
    x
  } = rangeBCR;
  const {
    lineHeight,
    display,
    paddingTop,
    borderTopWidth
  } = styles;
  const textWidth = rangeBCR.width;
  const lineHeightInt = parseInt(lineHeight, 10);
  const textBCRHeight = rangeBCR.height;
  let fixY = 0;

  // center text inside a box
  if (lineHeightInt && textBCRHeight !== lineHeightInt * lines) {
    fixY = (textBCRHeight - lineHeightInt * lines) / 2;
  }
  if (display !== 'inline') {
    // 处理内部高度
    const pt = parseFloat(paddingTop);
    y += pt;

    // 处理顶部 border 宽度
    y += parseFloat(borderTopWidth);
  }
  const textHeight = fixY < 0 ? textBCRHeight - fixY * 2 : textBCRHeight;
  return {
    x,
    y,
    height: textHeight,
    width: textWidth
  };
};

/**
 * 获取一行宽度的文本
 * @param textNode
 * @param width
 */
exports.getTextAbsBCR = getTextAbsBCR;
const getLineTextWithWidth = (textNode, width) => {
  const text = textNode.textContent;
  if (!text) return '';
  let textContent = '';
  for (let i = 0; i < text.length; i += 1) {
    const charNode = textNode.cloneNode(true);
    charNode.textContent = textContent;
    document.body.appendChild(charNode);
    const {
      rangeBCR
    } = getTextLinesAndRange(charNode);
    document.body.removeChild(charNode);
    if (rangeBCR.width < width) {
      textContent += text[i];
    }
  }
  return textContent;
};
exports.getLineTextWithWidth = getLineTextWithWidth;