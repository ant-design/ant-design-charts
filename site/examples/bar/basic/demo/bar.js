import { Bar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoBar = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
      format: 'csv',
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
