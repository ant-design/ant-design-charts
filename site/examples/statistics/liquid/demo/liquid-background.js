import { Liquid } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoLiquid = () => {
  const config = {
    percent: 0.3,
    style: {
      backgroundFill: 'pink',
    },
  };
  return <Liquid {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLiquid />);
