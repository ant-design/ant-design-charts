const imported = {
  '@antv/g2': ['Chart'],
  'd3-regression': ['regressionExp'],
};

const chartConfig = {
  container: 'container',
  theme: 'classic',
  autoFit: true,
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/exponential-regression.json',
  },
};

const children = [
  {
    type: 'point',
    axis: {
      y: {
        labelFormatter: '~s',
      },
    },
    style: {
      fillOpacity: 0.75,
    },
    scale: {
      y: {
        domain: [0, 100000],
      },
      x: {
        domain: [0, 18],
      },
    },
    encode: {
      shape: 'point',
      y: (d) => d[1],
      x: (d) => d[0],
    },
  },
  {
    type: 'line',
    tooltip: false,
    labels: [
      {
        text: 'y = 3477.32e^(0.18x)\nThe coefficient of determination, or R^2, is 0.998',
        selector: 'last',
        style: {
          textAlign: 'end',
        },
      },
    ],
    style: {
      lineWidth: 2,
      stroke: '#30BF78',
    },
    encode: {
      shape: 'smooth',
      y: (d) => d[1],
      x: (d) => d[0],
    },
    data: {
      transform: [{ type: 'custom', callback: regressionExp() }],
    },
  },
];
