import { Rectangle, Style } from '..';
export var createOverflowMask = function createOverflowMask(node, options) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  var rect = new Rectangle({
    width: width,
    height: height,
    x: 0,
    y: 0
  });
  rect.name = 'Overflow 蒙层';
  var nodeStyles = getComputedStyle(node);
  rect.cornerRadius = {
    topLeft: Style.parseBorderRadius(nodeStyles.borderTopLeftRadius, width, height),
    topRight: Style.parseBorderRadius(nodeStyles.borderTopRightRadius, width, height),
    bottomLeft: Style.parseBorderRadius(nodeStyles.borderBottomLeftRadius, width, height),
    bottomRight: Style.parseBorderRadius(nodeStyles.borderBottomRightRadius, width, height)
  };
  if (options !== null && options !== void 0 && options.isInput) {
    // 输入框需要计算 padding
    var paddingLeft = parseFloat(nodeStyles.getPropertyValue('padding-left'));
    var paddingTop = parseFloat(nodeStyles.getPropertyValue('padding-top'));
    var paddingRight = parseFloat(nodeStyles.getPropertyValue('padding-right'));
    var paddingBottom = parseFloat(nodeStyles.getPropertyValue('padding-bottom'));
    rect.width = width - paddingLeft - paddingRight;
    rect.height = height - paddingTop - paddingBottom;
    rect.x = paddingLeft;
    rect.y = paddingTop;
  }
  rect.hasClippingMask = true;
  return rect;
};