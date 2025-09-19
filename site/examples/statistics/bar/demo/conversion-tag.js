import { Bar } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoBar = () => {
  const config = {
    data: [
      { action: '浏览网站', pv: 50000 },
      { action: '放入购物车', pv: 35000 },
      { action: '生成订单', pv: 25000 },
      { action: '支付订单', pv: 15000 },
      { action: '完成交易', pv: 8500 },
    ],
    xField: 'action',
    yField: 'pv',
    label: {
      text: 'pv',
    },
    style: {
      maxWidth: 20,
    },
    conversionTag: {
      size: 40,
      spacing: 4,
      text: {
        formatter: (prev, next) => `${((next / prev) * 100).toFixed(1)}%`,
      },
    },
  };
  return <Bar {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoBar />);
