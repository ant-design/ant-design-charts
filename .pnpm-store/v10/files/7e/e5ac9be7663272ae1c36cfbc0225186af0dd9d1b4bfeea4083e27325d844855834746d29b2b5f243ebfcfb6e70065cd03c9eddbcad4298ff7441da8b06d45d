"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultModal = void 0;
var _types = require("../../types");
/**
 * 默认的 Modal 样式
 */
const defaultModal = {
  symbolName: 'Modal',
  symbolLayout: 'NONE',
  selector: {
    type: 'classname',
    value: 'ant-modal'
  },
  layerParams: [{
    // 内容
    selector: {
      type: 'classname',
      value: 'ant-modal-content'
    },
    resizing: [_types.ResizingConstraint.Top, _types.ResizingConstraint.Bottom]
  }, {
    // svg
    selector: {
      type: 'class',
      value: 'svg'
    },
    resizing: [_types.ResizingConstraint.Height, _types.ResizingConstraint.Width, _types.ResizingConstraint.Top, _types.ResizingConstraint.Right]
  }, {
    // 标题
    selector: {
      type: 'classname',
      value: 'ant-modal-footer'
    },
    resizing: [_types.ResizingConstraint.Bottom, _types.ResizingConstraint.Height, _types.ResizingConstraint.Left, _types.ResizingConstraint.Right],
    layout: 'RIGHT_TO_LEFT'
  }, {
    // Modal 头部
    selector: {
      type: 'classname',
      value: 'ant-modal-header'
    },
    resizing: [_types.ResizingConstraint.Height, _types.ResizingConstraint.Left, _types.ResizingConstraint.Top, _types.ResizingConstraint.Right],
    layout: 'LEFT_TO_RIGHT'
  }, {
    // 按钮 头部
    selector: {
      type: 'classname',
      value: 'ant-btn'
    },
    resizing: [_types.ResizingConstraint.Width, _types.ResizingConstraint.Right],
    layout: 'RIGHT_TO_LEFT'
  }]
};
exports.defaultModal = defaultModal;