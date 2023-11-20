import { Bar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoBar = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://site-dataa-s09001742540-site.dev.alipay.net/antd-charts/bar-stacked.json',
    },
    xField: 'state',
    yField: 'population',
    colorField: 'age',
    stack: true,
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
  };
  return <Bar {...config} />;
};

ReactDOM.render(<DemoBar />, document.getElementById('container'));
