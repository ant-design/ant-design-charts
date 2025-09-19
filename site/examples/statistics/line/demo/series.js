import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-series.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'unemployment',
    colorField: 'steelblue',
    seriesField: 'division',
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLine />);
