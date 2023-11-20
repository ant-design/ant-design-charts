import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-jitter.json',
    },
    transform: [{ type: 'sortX', channel: 'x' }, { type: 'jitterX'}],
    xField: 'Cylinders',
    yField: (d) => {
      console.log(d);
      return String(d.Horsepower);
    },
    colorField: 'Cylinders',
    shapeField: 'hollow',
    meta: {
      x: { type: 'point' },
      color: { type: 'ordinal' },
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
