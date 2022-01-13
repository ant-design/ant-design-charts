import G6 from '@antv/g6';

export const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12,
  },
};

export const defaultEdgeStyle = {
  stroke: '#91d5ff',
  endArrow: {
    path: G6.Arrow.vee(10, 10),
  },
};

export const defaultNodeAnchorPoints = [
  [0.5, 0],
  [0.5, 1],
];

export const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
};

export const defaultNodeSize = [120, 40];
