import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/scatter-point-shape.json',
    },
    xField: 'x',
    yField: 'y',
    colorField: 'category',
    sizeField: 5,
    shapeField: 'category',
    meta: {
      shape: { range: ['point', 'plus', 'diamond'] },
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
