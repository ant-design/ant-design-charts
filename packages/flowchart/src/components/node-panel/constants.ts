// 节点默认尺寸
export const NODE_WIDTH = 60;
export const NODE_HEIGHT = 40;

// svg 绘制起始点，解决边不清晰的问题
export const NODE_PADDING = 1;

//圆角半径
export const ROUNDEDRADIUS = 10;

export const NODEPOOL = [
  {
    name: 'Terminal',
    type: 'official',
  },
  {
    name: 'Process',
    type: 'official',
  },
  {
    name: 'Decision',
    type: 'official',
  },
  {
    name: 'Connector',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
    type: 'official',
  },
  {
    name: 'Multi Document',
    type: 'flowchart',
  },
  {
    name: 'DataIO',
    ports: ['top', 'bottom'],
    type: 'official',
  },
  {
    name: 'Database',
    type: 'flowchart',
  },
  {
    name: 'Hard Disk',
    type: 'official',
  },
  {
    name: 'Stroed Data',
    type: 'flowchart',
  },
  {
    name: 'Document',
    type: 'flowchart',
  },
  {
    name: 'Predefined Process',
    type: 'official',
  },
  {
    name: 'Extract',
    type: 'flowchart',
  },
  {
    name: 'Merge',
    type: 'flowchart',
  },
  {
    name: 'Or',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
    type: 'flowchart',
  },
  {
    name: 'Manual Input',
    type: 'flowchart',
  },
  {
    name: 'Preparation',
    type: 'flowchart',
  },
  {
    name: 'Delay',
    type: 'flowchart',
  },
  {
    name: 'Manual Operation',
    type: 'flowchart',
  },
  {
    name: 'Display',
    type: 'flowchart',
  },
  {
    name: 'Off Page Link',
    type: 'flowchart',
  },
  {
    name: 'Note Left',
    label: '≣',
    type: 'flowchart',
  },
  {
    name: 'Note Right',
    label: '≣',
    type: 'flowchart',
  },
  {
    name: 'Internal Storage',
    type: 'flowchart',
  },
  {
    name: 'Text',
    label: 'text',
    type: 'official',
  },
  {
    name: 'Isosceles Trapezoid',
    type: 'official',
  },
  {
    name: 'LeftTrapezoid',
    type: 'official',
  },
  {
    name: 'RightTrapezoid',
    type: 'official',
  },
  {
    name: 'Ellipse',
    type: 'official',
  },
];
// 缩放时保存同比例
export const ASPECTRATIONODE = ['Connector', 'Or'];
