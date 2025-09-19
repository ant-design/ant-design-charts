import { Heatmap } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoHeatmap = () => {
  const config = {
    mark: 'heatmap',
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/heatmap.json',
    },
    xField: 'g',
    yField: 'l',
    colorField: 'tmp',
    sizeField: 26,
    style: {
      opacity: 0,
    },
  };

  return <Heatmap {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoHeatmap />);
