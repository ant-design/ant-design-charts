"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNodeVisible = isNodeVisible;
exports.isTextVisible = isTextVisible;
exports.isVisibleShape = void 0;
/**
 * 判断文本是否可见
 * @param textIndent
 * @param overflowX
 * @param overflowY
 */
function isTextVisible({
  textIndent,
  overflowX,
  overflowY
}) {
  // NOTE overflow:hidden is not needed if text-indent is huge
  // , but how to define 'huge'?
  return !(parseFloat(textIndent) < 0 && overflowX === 'hidden' && overflowY === 'hidden');
}

/**
 * 判断节点是否不可见
 * @param node
 * @param width
 * @param height
 * @param position
 * @param overflowX
 * @param overflowY
 * @param opacity
 * @param visibility
 * @param display
 * @param clip
 */
function isNodeVisible(node, {
  width,
  height
} = node.getBoundingClientRect(), {
  position,
  overflowX,
  overflowY,
  opacity,
  visibility,
  display,
  clip
} = getComputedStyle(node)) {
  // skip node when display is set to none for itself or an ancestor
  // helps us catch things such as <noscript>
  // HTMLSlotElement has a null offsetParent, but should still be visible
  if (node.tagName !== 'BODY' &&
  // @ts-ignore
  node.offsetParent === null && position !== 'fixed' && node.tagName.toLowerCase() !== 'slot') {
    return false;
  }
  if ((width === 0 || height === 0) && overflowX === 'hidden' && overflowY === 'hidden') {
    return false;
  }
  if (display === 'none' || visibility === 'hidden' || visibility === 'collapse' || parseFloat(opacity) < 0.1) {
    return false;
  }
  if (clip === 'rect(0px, 0px, 0px, 0px)' && position === 'absolute') {
    return false;
  }

  // node is detached from the DOM
  if (!node.isConnected) {
    return false;
  }
  const parent = node.parentElement;
  if (parent && parent.nodeName !== 'HTML' && !isNodeVisible(parent)) {
    return false;
  }
  return true;
}

/**
 * 判断是否是不可见的样式
 * @param shape
 */
const isVisibleShape = shape => {
  const isInvisible = shape.style.opacity === 0;

  // 透明度为 0 也返回不可见
  if (isInvisible) return false;

  // 没任何样式的话,就返回不可见
  const hasNoStyle = shape.style.fills.length === 0 && shape.style.borders.length === 0 && shape.style.innerShadows.length === 0 && shape.style.shadows.length === 0;
  if (hasNoStyle) return false;
  const isInvalidFills = shape.style.fills.every(fill => fill.opacity.toString() === '0');
  const isInvalidBorders = shape.style.borders.every(border => border.opacity === 0 || border.thickness === 0) &&
  // TODO 需要用 tab 补一下测试用例
  shape.style.innerShadows.every(shadow => {
    return shadow.opacity.toString() === '0' || shadow.color.hex.toLowerCase() === '#fffff';
  });
  return !(isInvalidFills && isInvalidBorders);
};
exports.isVisibleShape = isVisibleShape;