"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePseudoToShape = void 0;
var _models = require("../models");
var _visibility = require("../utils/visibility");
var _shape = require("./shape");
/**
 * 解析图形类伪类
 */
const parsePseudoToShape = async (node, pseudoElt) => {
  // 判断一下是否有伪类
  const pseudoEl = getComputedStyle(node, `:${pseudoElt}`);
  const bcr = node.getBoundingClientRect();
  const {
    left,
    top,
    height,
    width
  } = bcr;
  let x = left;
  let y = top;
  const isContentBox = pseudoEl.boxSizing === 'content-box';

  // 解析尺寸
  const pseudoW = isContentBox ? parseFloat(pseudoEl.width) + parseFloat(pseudoEl.paddingLeft) + parseFloat(pseudoEl.paddingRight) + parseFloat(pseudoEl.borderLeftWidth) + parseFloat(pseudoEl.borderRightWidth) : parseFloat(pseudoEl.width);
  const pseudoH = isContentBox ? parseFloat(pseudoEl.height) + parseFloat(pseudoEl.paddingTop) + parseFloat(pseudoEl.paddingBottom) + parseFloat(pseudoEl.borderTopWidth) + parseFloat(pseudoEl.borderBottomWidth) : parseFloat(pseudoEl.height);
  const rect = await (0, _shape.parseToShape)(node, pseudoEl);

  // 解析坐标
  // 如果采用绝对定位的话
  if (pseudoEl.position === 'absolute') {
    x += parseFloat(pseudoEl.left);
    y += parseFloat(pseudoEl.top);
    const {
      borderTopWidth,
      borderLeftWidth
    } = getComputedStyle(node);
    x += parseFloat(borderLeftWidth);
    y += parseFloat(borderTopWidth);

    // 解析 margin 值
    const {
      marginTop,
      marginLeft
    } = pseudoEl;
    x += parseFloat(marginLeft);
    y += parseFloat(marginTop);
  }
  rect.frame = new _models.Frame({
    width: pseudoW !== width ? pseudoW : width,
    height: pseudoH !== height ? pseudoH : height,
    x,
    y
  });
  rect.mapBasicInfo(node);

  // 应用 Transform
  const {
    transform
  } = pseudoEl;
  if (transform !== 'none') {
    // transform: rotate(45deg) scale(1) translate(-50%, -50%);
    // ↓↓↓
    // matrix(0.707107, 0.707107, -0.707107, 0.707107, 1.41421, -4.94975)
    // ↓↓↓
    const params = /matrix\((.*)\)/.exec(transform)?.[1].split(',');

    // 将 transform 转换到对象的 frame 上
    if (params) {
      const [a, b, c, d, e, f] = params.map(parseFloat);
      rect.frame.applyMatrix({
        a,
        b,
        c,
        d,
        e,
        f
      });
      // TODO 有待研究
      // 很奇怪 这里需要用负才能转成正的值
      rect.rotation = -rect.rotation;
    }
  }
  if (rect instanceof _models.Group || (0, _visibility.isVisibleShape)(rect)) return rect;
};
exports.parsePseudoToShape = parsePseudoToShape;