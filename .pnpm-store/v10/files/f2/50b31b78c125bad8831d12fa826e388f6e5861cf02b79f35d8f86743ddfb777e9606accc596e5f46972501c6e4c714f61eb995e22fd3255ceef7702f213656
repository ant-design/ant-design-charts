import { ResizingConstraint } from "../../types";

/**
 * 默认的 Modal 样式
 */
export var defaultModal = {
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
    resizing: [ResizingConstraint.Top, ResizingConstraint.Bottom]
  }, {
    // svg
    selector: {
      type: 'class',
      value: 'svg'
    },
    resizing: [ResizingConstraint.Height, ResizingConstraint.Width, ResizingConstraint.Top, ResizingConstraint.Right]
  }, {
    // 标题
    selector: {
      type: 'classname',
      value: 'ant-modal-footer'
    },
    resizing: [ResizingConstraint.Bottom, ResizingConstraint.Height, ResizingConstraint.Left, ResizingConstraint.Right],
    layout: 'RIGHT_TO_LEFT'
  }, {
    // Modal 头部
    selector: {
      type: 'classname',
      value: 'ant-modal-header'
    },
    resizing: [ResizingConstraint.Height, ResizingConstraint.Left, ResizingConstraint.Top, ResizingConstraint.Right],
    layout: 'LEFT_TO_RIGHT'
  }, {
    // 按钮 头部
    selector: {
      type: 'classname',
      value: 'ant-btn'
    },
    resizing: [ResizingConstraint.Width, ResizingConstraint.Right],
    layout: 'RIGHT_TO_LEFT'
  }]
};