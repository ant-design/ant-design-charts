import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoInteraction = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json',
    },
    xField: 'letter',
    yField: 'frequency',
    state: { selected: { fill: '#f4bb51' }, unselected: { opacity: 0.6 } },
    axis: { y: { labelFormatter: '.0%' } },
    interaction: { elementSelect: true, elementHighlightByColor: false },
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoInteraction />);
