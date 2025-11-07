"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderNodeList = exports.getChildNodeList = void 0;
var _visibility = require("./visibility");
/**
 * 获得显示顺序的的子级节点列表
 */
const getChildNodeList = node => Array.from(node.children).filter(el => (0, _visibility.isNodeVisible)(el))
// 根据 z-index 排序 将顶上的元素放上面
.sort((a, b) => {
  const computedA = getComputedStyle(a).zIndex;
  const computedB = getComputedStyle(b).zIndex;
  const zIndexA = isNaN(Number(computedA)) ? 0 : +computedA;
  const zIndexB = isNaN(Number(computedB)) ? 0 : +computedB;
  return zIndexA - zIndexB;
});

/**
 * 对 Node 进行排序
 * @param nodes
 */
exports.getChildNodeList = getChildNodeList;
const orderNodeList = nodes => {
  return Array.from(nodes).filter(node => (0, _visibility.isNodeVisible)(node))
  // 根据 z-index 排序 将顶上的元素放上面
  .sort((a, b) => {
    const computedA = getComputedStyle(a).zIndex;
    const computedB = getComputedStyle(b).zIndex;
    const zIndexA = isNaN(Number(computedA)) ? 0 : +computedA;
    const zIndexB = isNaN(Number(computedB)) ? 0 : +computedB;
    return zIndexA - zIndexB;
  });
};
exports.orderNodeList = orderNodeList;