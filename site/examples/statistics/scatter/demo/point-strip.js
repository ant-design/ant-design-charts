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
    transform: [{ type: 'sortX', channel: 'x' }, { type: 'sortY', channel: 'y'}],
    coordinate: { transform: [{ type: 'transpose' }] },
    xField: 'Cylinders',
    yField: 'Horsepower',
    sizeField: 20,
    meta: {
      x: { type: 'point' },
      y: { zero: true },
      color: { type: 'ordinal' },
    },
    shapeField: 'line',
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
