import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {
  const config = {
    interaction: {
      brushFilter: true,
    },
    colorField: 'series',
    yField: 'value',
    xField: (d) => new Date(d['Date']),
    axis: {
      x: {
        labelAutoRotate: false,
      },
    },
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/3PtP0m%26VuK/trend-data.json',
    },
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
