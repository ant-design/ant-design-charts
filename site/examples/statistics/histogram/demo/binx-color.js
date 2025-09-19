import { Histogram } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoHistogram = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/athletes.json',
    },
    binField: 'weight',
    colorField: 'sex',
    stack: {
      orderBy: 'series',
    },
    style: {
      inset: 0.5,
    },
  };

  return <Histogram {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoHistogram />);
