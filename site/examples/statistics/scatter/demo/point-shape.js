import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/bd73a175-4417-4749-8b88-bc04d955e899.csv',
    },
    xField: 'x',
    yField: 'y',
    colorField: 'category',
    sizeField: 5,
    shapeField: 'category',
    meta: {
      shapeField: { range: ['point', 'plus', 'diamond'] },
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
