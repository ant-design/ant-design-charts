import { Box } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoBox = () => {
  const config = {
    height: 120,
    autoFit: false,
    inset: 6,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/morley.json',
      transform: [{ type: 'filter', callback: (d) => d.Expt === 1 }],
    },
    boxType: 'boxplot',
    yField: 'Speed',
    coordinate: { transform: [{ type: 'transpose' }] },
    style: { boxFill: '#aaa', pointStroke: '#000' },
  };
  return <Box {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBox />);
