import { Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoScatter = () => {
  const config = {
    autoFit: false,
    height: 300,
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-strip.json',
    },
    transpose: true, // 开启坐标转置
    xField: 'Cylinders',
    yField: 'Horsepower',
    sizeField: 20,
    shapeField: 'line',
    scale: {
      y: { type: 'linear', zero: true },
      x: { domain: [0, 10] },
    },
  };
  return <Scatter {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoScatter />);
