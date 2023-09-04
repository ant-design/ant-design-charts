import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/2c813e2d-2276-40b9-a9af-cf0a0fb7e942.csv',
    },
    transform: [{ type: 'sortX', channel: 'x' }, { type: 'jitterX' }],
    xField: 'Cylinders',
    yField: 'Horsepower',
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
