import { Sunburst } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoSunburst = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json',
    },
    valueField: 'sum',
    colorField: 'label',
  };
  return <Sunburst {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoSunburst />);
