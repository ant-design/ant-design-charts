import { Histogram } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoHistogram = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/unemployment2.json',
    },
    style: {
      inset: 0.5,
    },
    binField: 'rate',
    // 分箱数量
    binNumber: 10,
  };

  return <Histogram {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoHistogram />);
