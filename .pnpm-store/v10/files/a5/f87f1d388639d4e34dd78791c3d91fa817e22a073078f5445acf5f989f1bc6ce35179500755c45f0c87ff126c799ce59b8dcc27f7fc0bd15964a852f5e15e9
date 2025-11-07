import { isNodeVisible } from "./visibility";

/**
 * 获得显示顺序的的子级节点列表
 */
export var getChildNodeList = function getChildNodeList(node) {
  return Array.from(node.children).filter(function (el) {
    return isNodeVisible(el);
  })
  // 根据 z-index 排序 将顶上的元素放上面
  .sort(function (a, b) {
    var computedA = getComputedStyle(a).zIndex;
    var computedB = getComputedStyle(b).zIndex;
    var zIndexA = isNaN(Number(computedA)) ? 0 : +computedA;
    var zIndexB = isNaN(Number(computedB)) ? 0 : +computedB;
    return zIndexA - zIndexB;
  });
};

/**
 * 对 Node 进行排序
 * @param nodes
 */
export var orderNodeList = function orderNodeList(nodes) {
  return Array.from(nodes).filter(function (node) {
    return isNodeVisible(node);
  })
  // 根据 z-index 排序 将顶上的元素放上面
  .sort(function (a, b) {
    var computedA = getComputedStyle(a).zIndex;
    var computedB = getComputedStyle(b).zIndex;
    var zIndexA = isNaN(Number(computedA)) ? 0 : +computedA;
    var zIndexB = isNaN(Number(computedB)) ? 0 : +computedB;
    return zIndexA - zIndexB;
  });
};