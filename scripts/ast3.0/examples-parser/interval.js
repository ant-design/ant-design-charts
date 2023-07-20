const imported = {
  '@antv/g2': ['Chart'],
};

const chartConfig = {
  container: 'container',
  theme: 'classic',
  autoFit: true,
};

const children = [
  {
    type: 'interval',
    axis: {
      y: {
        labelFormatter: '.0%',
      },
    },
    encode: {
      y: 'frequency',
      x: 'letter',
    },
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    },
  },
];
