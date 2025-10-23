"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _types = require("../../types");
var _layout = require("../../utils/layout");
var _utils = require("../../utils/utils");
var _Style = _interopRequireDefault(require("../Style/Style"));
var _Frame = _interopRequireDefault(require("./Frame"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DEFAULT_USER_INFO_SCOPE = 'html2sketch';
class BaseLayer {
  constructor(type, params) {
    this.id = (0, _utils.uuid)();
    this.userInfo = null;
    this.class = type;
    this.style = new _Style.default();

    // 默认锁定左边和顶部
    this.setResizingConstraint(_types.ResizingConstraint.Left, _types.ResizingConstraint.Top);
    this.frame = new _Frame.default(params);
    this.name = params?.name || '';
  }
  frame;
  class;

  /**
   * 节点名称
   * 来自 HTML 的节点类型
   */
  nodeType;

  /**
   * 来自节点的 ID
   */
  nodeId;

  /**
   * 来自样式的名称
   */
  className;
  style;
  layers = [];
  userInfo;
  id;
  name;
  resizingConstraint = _types.ResizingConstraint.None;
  resizingConstraints = [];

  /**
   * 上锁状态
   */
  locked = false;
  isVisible = true;
  isFixedToViewport = false;
  isFlippedHorizontal = false;
  isFlippedVertical = false;

  /**
   * 是否存在剪贴蒙版
   */
  hasClippingMask = false;
  LayerListExpanded = _types.SketchFormat.LayerListExpanded.Undecided;

  /**
   * 锁定图层名称
   * */
  nameIsFixed = false;

  /**
   * 是否忽略遮罩链
   */
  shouldBreakMaskChain = false;
  get x() {
    return this.frame.x;
  }
  set x(x) {
    this.frame.x = x;
  }
  get y() {
    return this.frame.y;
  }
  set y(y) {
    this.frame.y = y;
  }
  get centerX() {
    return this.x + this.width / 2;
  }
  set centerX(centerX) {
    this.x = centerX - this.width / 2;
  }
  get centerY() {
    return this.y + this.height / 2;
  }
  set centerY(centerY) {
    this.y = centerY - this.height / 2;
  }
  get width() {
    return this.frame.width;
  }
  set width(width) {
    this.frame.width = width;
  }
  get height() {
    return this.frame.height;
  }
  set height(height) {
    this.frame.height = height;
  }
  get right() {
    return this.frame.right;
  }
  set right(right) {
    this.frame.right = right;
  }
  get top() {
    return this.frame.top;
  }
  set top(top) {
    this.frame.top = top;
  }
  get bottom() {
    return this.frame.bottom;
  }
  set bottom(bottom) {
    this.frame.bottom = bottom;
  }
  get left() {
    return this.frame.left;
  }
  set left(left) {
    this.frame.left = left;
  }
  get rotation() {
    return this.frame.rotation;
  }
  set rotation(deg) {
    this.frame.rotation = deg;
  }

  /**
   * 将 resize 设为固定宽高
   */
  setFixedWidthAndHeight() {
    this.setResizingConstraint(_types.ResizingConstraint.Width, _types.ResizingConstraint.Height);
  }

  /**
   *  resize 添加固定宽高
   */
  addFixedWidthAndHeight() {
    this.addResizingConstraints(_types.ResizingConstraint.Width, _types.ResizingConstraint.Height);
  }

  /**
   * 设置调整尺寸的相关参数
   * @param constraints
   */
  setResizingConstraint(...constraints) {
    this.resizingConstraints = constraints;
    this.resizingConstraint = (0, _layout.calcResizingConstraint)(...constraints);
  }

  /**
   * 添加调整尺寸的相关参数
   * @param constraints
   */
  addResizingConstraints(...constraints) {
    // 判断一下是否包含新变量， 如果不包含则加入数组
    constraints.forEach(c => {
      if (!this.resizingConstraints.includes(c)) {
        this.resizingConstraints.push(c);
      }
    });
    this.resizingConstraint = (0, _layout.calcResizingConstraint)(...this.resizingConstraints);
  }

  // scope defines which Sketch plugin will have access to provided data via Settings.setLayerSettingForKey
  // you should set it to the plugin ID e.g. "com.bohemiancoding.sketch.testplugin"
  setUserInfo(key, value, scope = DEFAULT_USER_INFO_SCOPE) {
    this.userInfo = this.userInfo || {};
    this.userInfo[scope] = this.userInfo[scope] || {};
    this.userInfo[scope][key] = value;
  }
  getUserInfo(key, scope = DEFAULT_USER_INFO_SCOPE) {
    return this.userInfo && this.userInfo[scope] && this.userInfo[scope][key];
  }
  addLayer(layer) {
    this.layers.push(layer);
  }
  addLayers(layers) {
    this.layers = this.layers.concat(layers);
  }

  /**
   * 将对象转为 JSON
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      layers: this.layers.map(l => l.toJSON()),
      locked: this.locked,
      resizingConstraint: this.resizingConstraint
    };
  }

  /**
   * 设置位置
   * @param x X轴
   * @param y Y轴
   */
  setPosition({
    x,
    y
  }) {
    this.frame.x = x;
    this.frame.y = y;
  }

  /**
   * 将基础的节点信息映射到对象中
   * @param node
   */
  mapBasicInfo(node) {
    this.nodeType = node.nodeName.toLowerCase();
    this.className = node.className;
    this.nodeId = node.id;
  }

  /**
   * 将自己的的样式转成 Sketch 的共享样式
   * @param id
   */
  toSketchSharedStyle = id => {
    return {
      _class: 'sharedStyle',
      do_objectID: id || (0, _utils.uuid)(),
      name: this.name,
      value: this.style?.toSketchJSON()
    };
  };

  /**
   * 获取所有子图层的尺寸
   */
  get childLayersSize() {
    let width = 0;
    let height = 0;
    this.layers.forEach(layer => {
      const layerWidth = layer.width;
      const layerHeight = layer.height;
      if (width < layerWidth) {
        width = layerWidth;
      }
      if (height < layerHeight) {
        height = layerHeight;
      }
    });
    return {
      width,
      height
    };
  }

  /**
   * 获取节点的子级的定界框
   * @param nodes
   */
  static getChildNodesFrame = nodes => {
    // TODO: should probably also take into account children of each node

    const groupBCR = nodes.reduce((result, node) => {
      const bcr = node.getBoundingClientRect();
      const {
        left,
        top,
        right,
        bottom
      } = bcr;
      const width = bcr.right - bcr.left;
      const height = bcr.bottom - bcr.top;
      if (width === 0 && height === 0) {
        return result;
      }
      if (!result) {
        return {
          left,
          top,
          right,
          bottom
        };
      }
      if (left < result.left) {
        result.left = left;
      }
      if (top < result.top) {
        result.top = top;
      }
      if (right > result.right) {
        result.right = right;
      }
      if (bottom > result.bottom) {
        result.bottom = bottom;
      }
      return result;
    }, null);
    if (groupBCR === null) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      };
    }
    return {
      left: groupBCR.left,
      top: groupBCR.top,
      right: groupBCR.right,
      bottom: groupBCR.bottom,
      width: groupBCR.right - groupBCR.left,
      height: groupBCR.bottom - groupBCR.top
    };
  };
}
var _default = BaseLayer;
exports.default = _default;