import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { format } from 'fecha';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
    },
    xField: 'date',
    yField: 'close',
    axis: { x: { title: false, size: 40 }, y: { title: false, size: 36 } },
    slider: {
      x: { labelFormatter: (d) => format(d, 'YYYY/M/D') },
      y: { labelFormatter: '~s' },
    },
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
