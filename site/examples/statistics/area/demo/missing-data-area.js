import { Area } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/aapl.json',
    },
    xField: (d) => new Date(d.date),
    yField: (d) => (new Date(d.date).getUTCMonth() <= 3 ? NaN : d.close),
    connectNulls: {
      connect: true,
      connectFill: 'grey',
      connectFillOpacity: 0.15,
    },
  };
  return <Area {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoArea />);
