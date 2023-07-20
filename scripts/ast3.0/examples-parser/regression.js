const imported = {
  '@antv/g2': ['Chart'],
  'd3-regression': ['regressionLog'],
};

const logRegression = regressionLog()
  .x((d) => d.x)
  .y((d) => d.y)
  .domain([0.81, 35]);

const chartConfig = {
  container: 'container',
  theme: 'classic',
  autoFit: true,
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/logarithmic-regression.json',
  },
};

const children = [
  {
    type: 'point',
    axis: {
      y: {
        title: false,
      },
      x: {
        title: false,
      },
    },
    style: {
      fillOpacity: 0.75,
    },
    scale: {
      x: {
        domain: [0, 35],
      },
    },
    encode: {
      shape: 'point',
      y: 'y',
      x: 'x',
    },
  },
  {
    type: 'line',
    tooltip: false,
    labels: [
      {
        text: 'y = 0.881·ln(x) + 4.173\nThe coefficient of determination, or R^22, is 0.958',
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
      transform: [{ type: 'custom', callback: logRegression }],
    },
  },
];
