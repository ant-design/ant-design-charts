import Text from "../models/Layer/Text";
import { getLineTextWithWidth, getTextAbsBCR, getTextLinesAndRange } from "../utils/text";
import { parseToGroup } from "./group";

/**
 * 将 Node 转为 Text 对象
 * */
export var parseToText = function parseToText(node) {
  var group = parseToGroup(node);

  // 添加文本
  var styles = getComputedStyle(node);
  var textStyle = Text.getTextStyleFromNode(node);
  // 处理内部Text节点
  var textNode = Array.from(node.childNodes).filter(function (child) {
    return (
      // 提取所有 text 元素 且 text 里有东西
      child.nodeType === Node.TEXT_NODE && child.nodeValue.trim().length > 0
    );
  }).map(function (childNode) {
    // 💩 这里的代码写的有点屎
    // 主要问题在于 text 在不同 display 模式下的位置问题
    // 影响因素:
    // 1. 自身的 display 和 text-align
    // 2. 父级的 display 和 布局参数
    // 上述 4 个要素综合影响文本的 x y 坐标
    // 有待重构

    var _getTextLinesAndRange = getTextLinesAndRange(childNode),
      lines = _getTextLinesAndRange.lines,
      rangeBCR = _getTextLinesAndRange.rangeBCR;
    var absBCR = getTextAbsBCR(node, childNode);
    var textWidth = absBCR.width;

    // 修正 inline 模式下的行高
    if (styles.display === 'inline') {
      textStyle.lineHeight = rangeBCR.height / lines;
    }
    // **** 处理文本带省略的情况 ****** //

    var textValue = Text.fixWhiteSpace(childNode.nodeValue, styles.whiteSpace);
    var originText = textValue;
    // 针对隐藏或者带省略号的
    if (styles.overflow === 'hidden') {
      // 修改宽度
      textWidth = parseFloat(styles.width);
      // 并对比修改后的文本内容
      textValue = getLineTextWithWidth(childNode, textWidth);

      // 如果是 ellipsis 类型且存在省略号
      // 按省略号添加
      if (styles.textOverflow === 'ellipsis' && originText.length !== textValue.length) {
        textValue = textValue.slice(0, textValue.length - 2);
        textValue += '...';
      }
    }
    var text = new Text({
      x: absBCR.x,
      y: absBCR.y,
      width: textWidth,
      height: absBCR.height,
      text: textValue,
      style: textStyle,
      multiline: lines > 1
    });

    // 处理居中的样式
    if (styles.verticalAlign === 'middle') {
      text.centerY = group.centerY;
    }

    // TODO 把方法抽象出来成为一个通用方法
    // 处理 flex 布局的样式
    if (styles.display.includes('flex')) {
      var flexDirection = styles.flexDirection,
        alignItems = styles.alignItems,
        justifyContent = styles.justifyContent;
      switch (flexDirection) {
        case 'row':
        default:
          switch (alignItems) {
            case 'flex-start':
              text.top = group.top;
              break;
            case 'center':
              text.centerY = group.centerY;
              break;
            case 'flex-end':
              text.bottom = group.bottom;
              break;
            default:
          }
          switch (justifyContent) {
            case 'flex-start':
              text.left = group.left;
              break;
            case 'center':
              text.centerX = group.centerX;
              break;
            case 'flex-end':
              text.right = group.right;
              break;
            default:
          }
          break;
        case 'column':
          switch (alignItems) {
            case 'flex-start':
              text.left = group.left;
              break;
            case 'center':
              text.centerX = group.centerX;
              break;
            case 'flex-end':
              text.right = group.right;
              break;
            default:
          }
          switch (justifyContent) {
            case 'flex-start':
              text.top = group.top;
              break;
            case 'center':
              text.centerY = group.centerY;
              break;
            case 'flex-end':
              text.bottom = group.bottom;
              break;
            default:
          }
      }
    }
    text.mapBasicInfo(node);
    return text;
  });
  if (textNode.length === 0) {
    return;
  }
  if (textNode.length === 1) {
    return textNode[0];
  }
  return textNode;
};