import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-jitter.json',
    },
    transform: [{ type: 'jitterX' }, { type: 'sortX', channel: 'x' }],
    xField: 'Cylinders',
    yField: 'Horsepower',
    colorField: 'Cylinders',
    shapeField: 'hollow',
    scale: {
      x: { type: 'point' },
      y: { domain: [0, 200] },
      color: { type: 'ordinal' },
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
