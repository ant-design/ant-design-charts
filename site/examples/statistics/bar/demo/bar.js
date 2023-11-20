import { Bar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoBar = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/bar-bar.json',
    },
    xField: 'letter',
    yField: 'frequency',
    sort: {
      reverse: true,
    },
    label: {
      text: 'frequency',
      formatter: '.1%',
      style: {
        textAnchor: (d) => (+d.frequency > 0.008 ? 'right' : 'start'),
        fill: (d) => (+d.frequency > 0.008 ? '#fff' : '#000'),
        dx: (d) => (+d.frequency > 0.008 ? -5 : 5),
      },
    },
    axis: {
      y: {
        labelFormatter: '.0%',
      },
    },
  };
  return <Bar {...config} />;
};

ReactDOM.render(<DemoBar />, document.getElementById('container'));
