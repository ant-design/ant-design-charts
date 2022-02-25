// 节点默认尺寸
export const NODE_WIDTH = 60;
export const NODE_HEIGHT = 40;

// svg 绘制起始点，解决边不清晰的问题
export const NODE_PADDING = 1;

//圆角半径
export const ROUNDEDRADIUS = 10;

export const NODEPOOL = [
  {
    name: 'Decision',
    type: 'common',
  },
  {
    name: 'Multi Document',
    type: 'common',
  },
  {
    name: 'DataIO',
    ports: ['top', 'bottom'],
    type: 'common',
  },
  {
    name: 'Hard Disk',
    type: 'common',
  },
  {
    name: 'Predefined Process',
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
  {
    name: 'Right Triangle',
    type: 'common',
  },
  {
    name: 'Left Triangle',
    type: 'common',
  },
  {
    name: 'Step',
    type: 'common',
  },
  {
    name: 'Card',
    type: 'common',
  },

  {
    name: 'Callout',
    type: 'common',
  },

  {
    name: 'Message',
    type: 'common',
  },
  {
    name: 'Text',
    label: 'text',
    type: 'common',
  },
  {
    name: 'Terminal',
    type: 'flowchart',
  },
  {
    name: 'Process',
    type: 'flowchart',
  },
  {
    name: 'Connector',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
    type: 'flowchart',
  },

  {
    name: 'Database',
    type: 'flowchart',
  },

  {
    name: 'Stroed Data',
    type: 'flowchart',
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
    name: 'Internal Storage',
    type: 'flowchart',
  },
  {
    name: 'Reference',
    type: 'flowchart',
  },
  {
    name: 'Diagonal Snip Rectangle',
    type: 'flowchart',
  },
  {
    name: 'FiveSides',
    type: 'flowchart',
  },
  {
    name: 'Hexagon',
    type: 'flowchart',
  },
  {
    name: 'Loop',
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
    name: 'Collate',
    type: 'flowchart',
  },

  {
    name: 'Document',
    type: 'flowchart',
  },
];
// 缩放时保存同比例
export const ASPECTRATIONODE = ['Connector', 'Or', 'Ellipse'];

//内置节点分类
export const BUILDIN_NODE_TYPES = ['common', 'flowchart'];
