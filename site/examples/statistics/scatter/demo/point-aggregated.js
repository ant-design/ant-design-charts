import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    autoFit: false,
    height: 240,
    inset: 10,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/commits.json',
    },
    xField: (d) => new Date(d.time).getUTCHours(),
    yField: (d) => new Date(d.time).getUTCDay(),
    sizeField: 'count',
    colorField: 'count',
    shapeField: 'point',
    transform: [{ type: 'group', size: 'sum' }, { type: 'sortY' }],
    scale: { y: { type: 'point' } },
    axis: {
      x: { title: 'time (hours)', tickCount: 24 },
      y: { title: 'time (day)', grid: true },
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
