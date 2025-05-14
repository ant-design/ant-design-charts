import { Liquid } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoLiquid = () => {
  const config = {
    percent: 0.3,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
    },
  };
  return <Liquid {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLiquid />);
