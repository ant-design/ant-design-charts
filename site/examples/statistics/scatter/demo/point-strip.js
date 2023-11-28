import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    autoFit: false,
    height: 300,
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-strip.json',
    },
    coordinate: { transform: [{ type: 'transpose' }] },
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

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
