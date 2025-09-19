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
    yField: 'close',
  };

  return <Area {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoArea />);
