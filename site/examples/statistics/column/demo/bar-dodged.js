import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-bar-dodged.json',
    },
    xField: 'state',
    yField: 'population',
    colorField: 'age',
    group: true,
    sort: {
      reverse: true,
      by: 'y',
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    interaction: {
      tooltip: { shared: true },
      elementHighlight: { background: true },
    },
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoColumn />);
