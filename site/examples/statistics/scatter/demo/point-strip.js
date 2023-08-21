import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    autoFit: false,
    height: 300,
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/2c813e2d-2276-40b9-a9af-cf0a0fb7e942.csv",
    },
    transform: [{ type: 'sortX', channel: 'x' }],
    coordinate: { transform: [{ type: "transpose" }] },
    xField: 'Cylinders',
    yField: 'Horsepower',
    sizeField: 20,
    meta: {
      x: { type: 'point' },
      y: { zero: true },
      color: { type: 'ordinal' },
    },
    shape: 'line',
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
