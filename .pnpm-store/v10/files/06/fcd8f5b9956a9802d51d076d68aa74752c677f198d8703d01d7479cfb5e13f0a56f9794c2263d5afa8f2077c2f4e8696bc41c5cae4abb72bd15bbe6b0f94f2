"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = require("../models");
var _hierarchy = require("../utils/hierarchy");
var _name = require("../utils/name");
var _pseudo = require("../utils/pseudo");
var _utils = require("../utils/utils");
var _visibility = require("../utils/visibility");
var _nodeToLayers = _interopRequireDefault(require("./nodeToLayers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-console */

const consoleGroupStyle = `font-weight:bold;color:#666;`;

/**
 * 将一个节点和其包含的所有子级转为 Group 对象
 * @param node
 * @param options
 */
const nodeToGroup = async (node, options) => {
  if (!node) throw Error('解析对象不存在 请检查传入对象');
  const bcr = node.getBoundingClientRect();
  const {
    left,
    top
  } = bcr;
  const width = bcr.right - bcr.left;
  const height = bcr.bottom - bcr.top;
  console.group('%c处理节点:', consoleGroupStyle, node);
  const layers = await (0, _nodeToLayers.default)(node);

  // ---------- 处理父节点 ------ //
  if (node.nodeName !== 'svg') {
    const childNodeList = (0, _hierarchy.getChildNodeList)(node);

    // Recursively collect child groups for child nodes
    for (let i = 0; i < childNodeList.length; i += 1) {
      const childNode = childNodeList[i];
      // eslint-disable-next-line no-await-in-loop
      const l = await nodeToGroup(childNode, options);
      layers.push(l);

      // Traverse the shadow DOM if present
      if (childNode.shadowRoot) {
        const promise = Array.from(childNode.shadowRoot.children).filter(n => (0, _visibility.isNodeVisible)(n)).map(async n => {
          const shadowGroup = await nodeToGroup(n);
          return shadowGroup;
        });
        // eslint-disable-next-line no-await-in-loop
        const shadowChild = await Promise.all(promise);
        shadowChild.forEach(layer => layers.push(layer));
      }
    }
  }

  // Now build a group for all these children

  const styles = getComputedStyle(node);
  const {
    opacity,
    transform
  } = styles;
  const group = new _models.Group({
    x: left,
    y: top,
    width,
    height
  });
  const groupStyle = new _models.Style();
  groupStyle.opacity = opacity;
  group.style = groupStyle;
  layers.filter(l => l).forEach(layer => {
    group.addLayer(layer);
  });
  console.groupEnd();
  (0, _utils.checkNoNull)(group.frame);
  if (transform !== 'none') {
    group.applyTransformRotate(transform);
  }
  if (group.layers.length === 1 && group.rotation === 0 && (group.layers[0].class === 'rectangle' || group.layers[0].class === 'text' || group.layers[0].class === 'bitmap' || group.layers[0].class === 'svg' || group.layers[0].class === 'group')) {
    console.groupCollapsed('%c清理无效层级', consoleGroupStyle);
    const layer = group.layers[0];
    console.log(`该 group 只包含一个子级 [${layer.class}]: ${layer.name} ,丢弃...`);
    console.groupEnd();
    // 将父级的图层关系还给子集
    layer.x += group.x;
    layer.y += group.y;

    // 只有一个形状时不需要裁剪
    layer.hasClippingMask = false;
    return layer;
  }
  if (group.layers.length === 0 && !(0, _pseudo.isExistPseudoText)(node).exist && !(0, _pseudo.isExistPseudoShape)(node).exist) {
    console.groupCollapsed('%c清理无效层级', consoleGroupStyle);
    console.log('该 group 是空的,丢弃...');
    console.groupEnd();
    // @ts-ignore
    // eslint-disable-next-line consistent-return
    return;
  }
  if (options && options.getGroupName) {
    group.name = options.getGroupName(node);
  } else {
    group.name = (0, _name.getName)(node.nodeName);
  }
  group.className = node.className;
  console.info('%c输出 Group 为:', 'font-weight:bold;color:#4590f7;', group);
  return group;
};
var _default = nodeToGroup;
exports.default = _default;