const imported = {
  '@antv/g2': ['Chart', 'register'],
  topojson: ['feature'],
};

register('data.feature', ({ name }) => {
  return (data) => feature(data, data.objects[name]).features;
});

const chartConfig = {
  container: 'container',
  theme: 'classic',
  autoFit: true,
};

const children = [
  {
    type: 'geoPath',
    legend: {
      color: {
        layout: {
          justifyContent: 'center',
        },
      },
    },
    encode: {
      color: 'rate',
    },
    scale: {
      color: {
        palette: 'ylGnBu',
        unknown: '#fff',
      },
    },
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/us-10m.json',
      transform: [
        { type: 'feature', name: 'counties' },
        { type: 'join', join: data, on: ['id', 'id'], select: ['rate'] },
      ],
    },
    coordinate: {
      type: 'albersUsa',
    },
  },
];
