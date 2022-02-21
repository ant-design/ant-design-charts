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
    type: 'common',
  },
  {
    name: 'Process',
    type: 'common',
  },
  {
    name: 'Decision',
    type: 'common',
  },
  {
    name: 'Connector',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
    type: 'common',
  },
  {
    name: 'Multi Document',
    type: 'flowchart',
  },
  {
    name: 'DataIO',
    ports: ['top', 'bottom'],
    type: 'common',
  },
  {
    name: 'Database',
    type: 'flowchart',
  },
  {
    name: 'Hard Disk',
    type: 'common',
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
    type: 'common',
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
    type: 'common',
  },
  {
    name: 'Isosceles Trapezoid',
    type: 'common',
  },
  {
    name: 'LeftTrapezoid',
    type: 'common',
  },
  {
    name: 'RightTrapezoid',
    type: 'common',
  },
  {
    name: 'Ellipse',
    type: 'common',
  },
];
// 缩放时保存同比例
export const ASPECTRATIONODE = ['Connector', 'Or'];

//内置节点分类
export const BUILDIN_NODE_TYPES = ['common', 'flowchart'];
