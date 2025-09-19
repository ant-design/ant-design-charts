import { Box } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoBox = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/morley.json',
    },
    boxType: 'boxplot',
    xField: 'Expt',
    yField: 'Speed',
  };
  return <Box {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBox />);
