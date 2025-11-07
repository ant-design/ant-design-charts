import { ResizingConstraint } from "../../types";

/**
 * TechUI WelcomeHeader
 */
export var welcomeHeader = {
  symbolName: 'WelcomeHeader',
  symbolLayout: 'NONE',
  selector: {
    type: 'classname',
    value: 'tech-welcomeheader'
  },
  layerParams: [{
    // 左上角的按钮
    selector: {
      type: 'classname',
      value: 'tech-welcomeheader-opacity-button'
    },
    resizing: [ResizingConstraint.Width, ResizingConstraint.Height, ResizingConstraint.Top, ResizingConstraint.Right]
  }, {
    // banner
    selector: {
      type: 'classname',
      value: 'tech-welcomeheader-banner'
    },
    resizing: [ResizingConstraint.Height, ResizingConstraint.Top]
  }, {
    // 标题
    selector: {
      type: 'class',
      value: 'text'
    },
    resizing: [ResizingConstraint.Left, ResizingConstraint.Top, ResizingConstraint.Width]
  }, {
    // 描述
    selector: {
      type: 'text',
      value: '我是一段页面描述'
    },
    resizing: [ResizingConstraint.Left, ResizingConstraint.Top, ResizingConstraint.Width]
  }]
};