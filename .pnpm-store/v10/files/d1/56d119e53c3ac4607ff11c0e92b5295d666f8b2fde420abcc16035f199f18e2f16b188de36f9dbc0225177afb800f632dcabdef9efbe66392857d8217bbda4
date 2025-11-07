"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOverflowMask = void 0;
var _ = require("..");
const createOverflowMask = (node, options) => {
  const {
    width,
    height
  } = node.getBoundingClientRect();
  const rect = new _.Rectangle({
    width,
    height,
    x: 0,
    y: 0
  });
  rect.name = 'Overflow 蒙层';
  const nodeStyles = getComputedStyle(node);
  rect.cornerRadius = {
    topLeft: _.Style.parseBorderRadius(nodeStyles.borderTopLeftRadius, width, height),
    topRight: _.Style.parseBorderRadius(nodeStyles.borderTopRightRadius, width, height),
    bottomLeft: _.Style.parseBorderRadius(nodeStyles.borderBottomLeftRadius, width, height),
    bottomRight: _.Style.parseBorderRadius(nodeStyles.borderBottomRightRadius, width, height)
  };
  if (options?.isInput) {
    // 输入框需要计算 padding
    const paddingLeft = parseFloat(nodeStyles.getPropertyValue('padding-left'));
    const paddingTop = parseFloat(nodeStyles.getPropertyValue('padding-top'));
    const paddingRight = parseFloat(nodeStyles.getPropertyValue('padding-right'));
    const paddingBottom = parseFloat(nodeStyles.getPropertyValue('padding-bottom'));
    rect.width = width - paddingLeft - paddingRight;
    rect.height = height - paddingTop - paddingBottom;
    rect.x = paddingLeft;
    rect.y = paddingTop;
  }
  rect.hasClippingMask = true;
  return rect;
};
exports.createOverflowMask = createOverflowMask;