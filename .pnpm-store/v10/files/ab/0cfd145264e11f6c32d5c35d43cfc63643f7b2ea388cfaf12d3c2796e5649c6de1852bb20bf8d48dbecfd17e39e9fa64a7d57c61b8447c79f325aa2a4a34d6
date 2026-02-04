"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTextNode = exports.isTextInputNode = exports.isSvgNode = exports.isSVGChildNode = exports.isNodeType = exports.isImageNode = exports.isGroupNode = exports.isCanvasNode = void 0;
/**
 * 判断是否是某种节点类型
 * @param node
 * @param type
 */
const isNodeType = (node, type) => {
  if (!node) return false;
  const nodeName = node.nodeName.toLowerCase();
  if (typeof type === 'string') {
    return type === nodeName;
  }
  return type.includes(nodeName);
};

/**
 * 判断是否是 Text 节点
 */
exports.isNodeType = isNodeType;
const isTextNode = node => {
  let textNode = false;
  node.childNodes.forEach(childNode => {
    if (childNode.nodeName.includes('text')) {
      textNode = true;
    }
  });
  return node && node.childNodes.length > 0 && textNode;
};

/**
 * 判断是否是 Group 节点
 */
exports.isTextNode = isTextNode;
const isGroupNode = node => {
  return isNodeType(node, ['div', 'span', 'th']);
};

/**
 * 判断是否是图片节点
 */
exports.isGroupNode = isGroupNode;
const isImageNode = node => {
  return isNodeType(node, 'img');
};

/**
 * 判断是否是带文本的输入框节点
 */
exports.isImageNode = isImageNode;
const isTextInputNode = node => {
  return isNodeType(node, ['input', 'textarea']) && node.type !== 'checkbox' && node.type !== 'radio';
};

/**
 * 判断是否是图片节点
 */
exports.isTextInputNode = isTextInputNode;
const isCanvasNode = node => {
  return isNodeType(node, 'canvas');
};

/**
 * 是否是 SVG 的子级
 */
exports.isCanvasNode = isCanvasNode;
const isSVGChildNode = node => node instanceof SVGElement && node.matches('svg *');

/**
 * 判断是否是Svg节点
 */
exports.isSVGChildNode = isSVGChildNode;
const isSvgNode = node => {
  return isNodeType(node, 'svg');
};
exports.isSvgNode = isSvgNode;