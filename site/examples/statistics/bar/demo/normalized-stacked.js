import { Bar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoBar = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/bar-normalized-stacked.json',
    },
    xField: 'state',
    yField: 'population',
    colorField: 'age',
    stack: true,
    normalize: true,
    sort: {
      reverse: true,
      by: 'y',
    },
    axis: {
      y: { labelFormatter: '~s' },
      x: {
        labelSpacing: 4,
        style: {
          labelTransform: 'rotate(90)',
        },
      },
    },
    tooltip: { items: [{ channel: 'y0', valueFormatter: '.0%' }] },
  };
  return <Bar {...config} />;
};

ReactDOM.render(<DemoBar />, document.getElementById('container'));
