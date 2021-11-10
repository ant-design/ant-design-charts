// 节点配置
const NodeConfig = {
  normal: {
    stroke: '#A2B1C3',
    fill: '#FFFFFF',
    fontFill: '#000',
    fontSize: 12,
  },
};

const EdgeConfig = {
  normal: {
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 1,
      },
      text: {
        fill: '#000',
        fontSize: 12,
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
      },
    },
  },
};

export const LightTheme = {
  NodeConfig,
  EdgeConfig,
};
