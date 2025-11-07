/**
 * 判断文本是否可见
 * @param textIndent
 * @param overflowX
 * @param overflowY
 */
export function isTextVisible(_ref) {
  var textIndent = _ref.textIndent,
    overflowX = _ref.overflowX,
    overflowY = _ref.overflowY;
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
export function isNodeVisible(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.getBoundingClientRect(),
    width = _ref2.width,
    height = _ref2.height;
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getComputedStyle(node),
    position = _ref3.position,
    overflowX = _ref3.overflowX,
    overflowY = _ref3.overflowY,
    opacity = _ref3.opacity,
    visibility = _ref3.visibility,
    display = _ref3.display,
    clip = _ref3.clip;
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
  var parent = node.parentElement;
  if (parent && parent.nodeName !== 'HTML' && !isNodeVisible(parent)) {
    return false;
  }
  return true;
}

/**
 * 判断是否是不可见的样式
 * @param shape
 */
export var isVisibleShape = function isVisibleShape(shape) {
  var isInvisible = shape.style.opacity === 0;

  // 透明度为 0 也返回不可见
  if (isInvisible) return false;

  // 没任何样式的话,就返回不可见
  var hasNoStyle = shape.style.fills.length === 0 && shape.style.borders.length === 0 && shape.style.innerShadows.length === 0 && shape.style.shadows.length === 0;
  if (hasNoStyle) return false;
  var isInvalidFills = shape.style.fills.every(function (fill) {
    return fill.opacity.toString() === '0';
  });
  var isInvalidBorders = shape.style.borders.every(function (border) {
    return border.opacity === 0 || border.thickness === 0;
  }) &&
  // TODO 需要用 tab 补一下测试用例
  shape.style.innerShadows.every(function (shadow) {
    return shadow.opacity.toString() === '0' || shadow.color.hex.toLowerCase() === '#fffff';
  });
  return !(isInvalidFills && isInvalidBorders);
};