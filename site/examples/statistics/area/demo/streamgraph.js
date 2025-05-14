import { Area } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/unemployment-by-industry.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'unemployed',
    colorField: 'industry',
    stack: true,
    symmetry: true,
  };
  return <Area {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoArea />);
