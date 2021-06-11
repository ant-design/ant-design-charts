import G6 from '@antv/g6';

// 默认交互状态
export const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
};
// card 默认节点大小
export const defaultNodeSize = [120, 40];
// 默认节点样式
export const defaultNodeStyle = {
  stroke: '#40a9ff',
};
// 默认箭头样式
export const defaultEdgeArrowStyle = {
  endArrow: {
    path: G6.Arrow.vee(10, 10),
    fill: '#ccc',
  },
};
// 默认 anchor 连接点
export const defaultNodeAnchorPoints = [
  [0, 0.5],
  [1, 0.5],
];
// card 内部 padding | margin
export const Margin = 8;
// card title 默认样式
export const defaultTitleLabelCfg = {
  fill: '#fff',
  fontSize: 12,
};
// card body|footer  默认样式
export const defaultLabelCfg = {
  fill: '#000',
  fontSize: 12,
};
export const defaultMinimapCfg = {
  show: false,
  size: [150, 100],
  type: 'keyShape',
};
