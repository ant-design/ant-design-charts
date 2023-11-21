import { Rose } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoRose = () => {
  const config = {
    width: 720,
    height: 720,
    autoFit: false,
    radius: 0.85,
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json',
    },
    xField: 'year',
    yField: 'people',
    colorField: 'year',
    transform: [{ type: 'groupX', y: 'sum' }],
    scale: { y: { type: 'sqrt' }, x: { padding: 0 } },
    axis: false,
    legend: { color: { length: 400, layout: { justifyContent: 'center' } } },
    labels: [
      {
        text: 'people',
        position: 'outside',
        formatter: '~s',
        transform: [{ type: 'overlapDodgeY' }],
      },
    ],
    tooltip: { items: [{ channel: 'y', valueFormatter: '~s' }] },
  };
  return <Rose {...config} />;
};

ReactDOM.render(<DemoRose />, document.getElementById('container'));
