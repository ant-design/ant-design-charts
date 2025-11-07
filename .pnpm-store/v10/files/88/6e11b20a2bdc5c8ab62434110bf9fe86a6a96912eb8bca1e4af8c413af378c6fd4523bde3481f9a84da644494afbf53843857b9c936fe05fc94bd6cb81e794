"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = require("../models");
var _style = require("../utils/style");
var _parser = require("../parser");
var _nodeType = require("../utils/nodeType");
var _pseudo = require("../utils/pseudo");
var _visibility = require("../utils/visibility");
/* eslint-disable no-console */

/**
 * 将节点转为 Layer 对象
 * @param {HTMLElement} node 节点
 */
const nodeToLayers = async node => {
  const layers = [];
  const styles = getComputedStyle(node);

  // ---------- 处理节点 ---------- //

  // svg 内部节点 直接跳过 ( 已经被转换到 svg 中)
  if ((0, _nodeType.isSVGChildNode)(node)) {
    console.log('SVG 内部节点,跳过...');
    return layers;
  }

  // 图片类型的节点(img)
  if ((0, _nodeType.isImageNode)(node)) {
    const image = await (0, _parser.parseToBitmap)(node);
    console.info('转换为:', image);
    layers.push(image);
    return layers;
  }

  // 画布类型节点(canvas)
  if ((0, _nodeType.isCanvasNode)(node)) {
    const canvas = (0, _parser.parseCanvasToBitmap)(node);
    console.info('转换为:', canvas);
    layers.push(canvas);
    return layers;
  }

  // 转换为 SVG
  if ((0, _nodeType.isSvgNode)(node)) {
    const svg = await (0, _parser.parseToSvg)(node);
    console.info('转换为:', svg);
    layers.push(svg);
    return layers;
  }

  // 图层存在样式(阴影 边框等) 使用 Rect 类
  const hasShape = !(0, _style.isDefaultStyles)(styles);
  const hasPseudoShape = (0, _pseudo.isExistPseudoShape)(node);
  if (hasShape) {
    const shape = await (0, _parser.parseToShape)(node);
    console.info('转换为:', shape);
    layers.push(shape);
  }
  if (hasPseudoShape.before) {
    const beforeEl = await (0, _parser.parsePseudoToShape)(node, 'before');
    console.info('转换为:', beforeEl);
    layers.push(beforeEl);
  }

  // 如果图层存在样式(阴影 边框等 返回 shape 节点
  if (hasPseudoShape.after) {
    const afterEl = await (0, _parser.parsePseudoToShape)(node, 'after');
    console.info('转换为:', afterEl);
    layers.push(afterEl);
  }

  // 输入框节点
  if ((0, _nodeType.isTextInputNode)(node)) {
    const text = (0, _parser.parseInputTextToText)(node);
    if (text) {
      console.info('转换为:', text);
      layers.push(text);
    }
  }

  // 判断一下文本是否可见 不可见直接返回
  if (!(0, _visibility.isTextVisible)(styles)) {
    return layers;
  }

  // 文本类型节点
  const isText = (0, _nodeType.isTextNode)(node); // 本身是文本节点
  const hasPseudoText = (0, _pseudo.isExistPseudoText)(node); // 或者包含文本伪类

  // 转换为文本
  if (isText || hasPseudoText.exist) {
    let text;
    if (isText) {
      text = (0, _parser.parseToText)(node);
      if (text) {
        console.info('转换为:', text);
        if (text instanceof Array) {
          for (let i = 0; i < text.length; i += 1) {
            const textElement = text[i];
            // 在 row-text 测试用例中
            // 不应该有赋值左边的情况
            // ----
            // 但是在某些情况 仍然需要执行这个情况?
            // 下述代码暂时保留 遇到相应的问题时再看
            // if (i !== 0) {
            //   textElement.x = text[i - 1].right;
            // }
            layers.push(textElement);
          }
        } else {
          layers.push(text);
        }
      }
    }

    // 判断一下是否有伪类

    if (hasPseudoText.after) {
      const afterEl = (0, _parser.parsePseudoToText)(node, 'after');
      layers.push(afterEl);
      if (text instanceof _models.Text && afterEl) {
        text.right = afterEl.x;
      }
    }

    // 判断一下是否有伪类
    if (hasPseudoText.before) {
      const beforeEl = (0, _parser.parsePseudoToText)(node, 'before');
      layers.push(beforeEl);
    }

    // 添加后继续执行,不终止
  }

  return layers;
};
var _default = nodeToLayers;
exports.default = _default;