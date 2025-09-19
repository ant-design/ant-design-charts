import { Area } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/unemployment-by-industry.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'unemployed',
    colorField: 'industry',
    percent: true,
    stack: true,
    tooltip: { channel: 'y0', valueFormatter: '.0%' },
  };
  return <Area {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoArea />);
