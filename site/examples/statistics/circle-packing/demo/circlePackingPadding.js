import { CirclePacking } from '@ant-design/plots';
import { interpolateHcl } from 'd3-interpolate';
import React from 'react';
import { createRoot } from 'react-dom/client';
const DemoCirclePackingPadding = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/flare.json',
    },
    valueField: 'value',
    scale: {
      color: {
        domain: [0, 5],
        range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
        interpolate: interpolateHcl,
      },
    },
    layout: {
      padding: 10,
    },
  };
  return <CirclePacking {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoCirclePackingPadding />);
