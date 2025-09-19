import { Stock } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoStock = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/stock-03.json',
    },

    xField: 'date',
    yField: ['start', 'end', 'lowest', 'highest'],
    colorField: 'trend',
    scale: {
      color: {
        domain: ['down', 'up'],
        range: ['#4daf4a', '#e41a1c'],
      },
      x: {
        compare: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
      },
      y: {
        domain: [20, 35],
        nice: false,
      },
    },
    line: {
      yField: 'mean',
      colorField: '',
      style: {
        stroke: '#FACC14',
      },
    },
    axis: {
      x: {
        labelFormatter: (d) => new Date(d).toLocaleDateString(),
      },
    },
    tooltip: {
      title: (d) => new Date(d.date).toLocaleDateString(),
      items: [{ field: 'start' }, { field: 'end' }, { field: 'lowest' }, { field: 'highest' }, { field: 'mean' }],
    },
  };

  return <Stock {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoStock />);
