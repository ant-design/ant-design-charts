import G6 from '@antv/g6';
export const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
};

export const defaultNodeSize = [120, 40];

export const defaultNodeStyle = {
  stroke: '#40a9ff',
};

export const defaultEdgeArrowStyle = {
  endArrow: {
    path: G6.Arrow.vee(10, 10),
    fill: '#ccc',
  },
};

export const defaultLayout = {
  type: 'compactBox',
  direction: 'LR',
  getId: (d: any) => {
    return d.id;
  },
  getHeight: () => {
    return 60;
  },
  getWidth: () => {
    return 16;
  },
  getVGap: () => {
    return 16;
  },
  getHGap: () => {
    return 100;
  },
};

export const defaultNodeAnchorPoints = [
  [0, 0.5],
  [1, 0.5],
];

export const Margin = 8;

export const defaultTitleLabelCfg = {
  fill: '#fff',
  fontSize: 12,
};

export const defaultLabelCfg = {
  fill: '#000',
  fontSize: 12,
};
