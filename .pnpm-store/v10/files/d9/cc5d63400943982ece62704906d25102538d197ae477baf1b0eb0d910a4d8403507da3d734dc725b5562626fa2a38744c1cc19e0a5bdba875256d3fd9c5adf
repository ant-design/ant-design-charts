import { Group } from "../models";
import Text from "../models/Layer/Text";
import { createOverflowMask } from "../utils/overflow";
import { getTextLinesAndRange } from "../utils/text";

/**
 * 解析输入框文本
 */
export var parseInputTextToText = function parseInputTextToText(node) {
  // 判断一下是否有伪类
  var inputTextStyle = getComputedStyle(node, 'placeholder');
  var pseudoText;

  /// *** 处理 input 的文本值 *** ///

  var value = node.value,
    placeholder = node.placeholder;
  if (!value && !placeholder) return;
  if (value) {
    pseudoText = node.type === 'password' ? value.replace(/./g, '•') : value;
  } else {
    pseudoText = placeholder;
  }
  var pseudoNode = document.createElement('text');
  var paddingLeft = inputTextStyle.paddingLeft,
    paddingRight = inputTextStyle.paddingRight,
    paddingTop = inputTextStyle.paddingTop,
    borderTopWidth = inputTextStyle.borderTopWidth;
  var nodeBCR = node.getBoundingClientRect();
  pseudoNode.textContent = pseudoText;
  document.body.append(pseudoNode); // 插入到 dom 中 用于获取文本宽度

  var _getTextLinesAndRange = getTextLinesAndRange(pseudoNode),
    rangeBCR = _getTextLinesAndRange.rangeBCR;

  // 默认情况下的 y 采用 input 节点的 y 值
  // 特殊情况在下面处理
  var y = nodeBCR.y;
  y = y + parseFloat(paddingTop) + parseFloat(borderTopWidth);
  document.body.removeChild(pseudoNode); // 处理完成后移除

  var textStyle = Text.getTextStyleFromNode(node, value ? undefined : '::placeholder');
  // Chromium seems cannot get correct color from '::placeholder'
  // Ref: https://bugs.chromium.org/p/chromium/issues/detail?id=850744
  // -----
  // 最终解法来源:
  // https://stackoverflow.com/questions/28592895/trying-to-get-style-of-placeholder-attribute-of-element
  // ------
  var textColor = textStyle.color;
  if (!value) {
    // 从样式表中拿到相应的 css 规则
    Array.from(document.styleSheets).forEach(function (styleSheet) {
      var cssRules;
      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {
        console.error(e);
        return;
      }
      // 修正部分情况下（TODO：确认具体是什么情况）
      // 没有cssRules 的解析报错
      if (!cssRules) return;
      Array.from(cssRules).forEach(function (rule) {
        var _ref = rule,
          selectorText = _ref.selectorText,
          style = _ref.style;
        // 针对每条规则进行一次判断
        // 如果包含 placeholder 的样式
        if (selectorText !== null && selectorText !== void 0 && selectorText.includes('::placeholder') && Array.from(node.classList).some(function (cls) {
          return selectorText === null || selectorText === void 0 ? void 0 : selectorText.includes(cls);
        })) {
          textColor = style.color; // 那么把相应的 style 取出来
        }
      });
    });
  }

  textStyle.color = textColor;
  textStyle.lineHeight = rangeBCR.height;

  // 针对line-height 做单独处理:

  // 如果 input 的 line-height 超过 rangeBCR 的 line-height
  // 那么意味着 input 节点会被撑开,然后文本应该处于 input 的垂直居中位置
  // 相关问题: https://github.com/ant-design/html2sketch/issues/50
  // 问题 demo: https://codesandbox.io/s/optimistic-firefly-f7dy8?file=/src/Demo.tsx

  var lineHeight = inputTextStyle.lineHeight;

  // TODO: 还有什么时候需要垂直居中呢?
  if (node.nodeName !== 'TEXTAREA' && parseFloat(lineHeight) > rangeBCR.height) {
    // 需要垂直居中的地方
    console.log(y, nodeBCR.y);
    console.log(nodeBCR.height, rangeBCR.height);
    // 计算公式:
    // 偏差值 = (input 的高度 - text 的高度 )/2 - 目前已有的offsetY
    var offsetY = (nodeBCR.height - rangeBCR.height) / 2 - (y - nodeBCR.y);
    y += offsetY;
  }
  var text = new Text({
    x: 0,
    y: y,
    width: rangeBCR.width,
    height: nodeBCR.height,
    text: pseudoText,
    style: textStyle,
    multiline: false
  });
  switch (inputTextStyle.textAlign) {
    case 'left':
    default:
      text.left = nodeBCR.left + parseFloat(paddingLeft);
      break;
    case 'center':
      text.centerX = (nodeBCR.left + nodeBCR.right) / 2;
      break;
    case 'right':
      text.right = nodeBCR.right - parseFloat(paddingRight);
  }
  var mask = createOverflowMask(node, {
    isInput: true
  });
  var group = new Group({
    x: nodeBCR.left,
    y: nodeBCR.top,
    name: '子元素'
  });
  group.layers.push(mask);
  group.addLayer(text);
  return group;
};