// 默认布局配置
export const DEFAULT_LAYOUT_OPTIONS = {
  rankdir: 'TB',
  align: undefined, // 节点居中对齐
  // align: 'UL', // 节点居中对齐在设置layer的情况下有bug，暂时使用这个
  nodesep: 20,
  ranksep: 75,
};

// 默认节点配置
export const DEFAULT_NODE = {
  type: 'conv-node',
  anchorPoints: [
    [0.5, 0],
    [0.5, 1],
    [0, 0.5],
    [1, 0.5],
  ],
};

// 默认边配置
export const DEFAULT_EDGE = {
  type: 'conv-cubic-vertical',
  sourceAnchor: 1,
  targetAnchor: 0,
  style: {
    stroke: '#B8C3D9',
    lineWidth: 1,
  },
};

// 默认画布mode
export const DEFAULT_MODE = [
  'drag-canvas', // 拖动画布
  'zoom-canvas', // 缩放画布
  'drag-node', // 拖动节点
];
