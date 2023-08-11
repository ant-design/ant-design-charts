import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: [
      {
        Date: '2010-01',
        scales: 1998,
      },
      {
        Date: '2010-02',
        scales: 1850,
      },
      {
        Date: '2010-03',
        scales: 1720,
      },
      {
        Date: '2010-04',
        scales: 1818,
      },
      {
        Date: '2010-05',
        scales: null,
      },
      {
        Date: '2010-06',
        scales: 1802,
      },
      {
        Date: '2010-07',
        scales: 1945,
      },
      {
        Date: '2010-08',
        scales: 1856,
      },
    ],
    xField: 'Date',
    yField: 'scales',
    shape: 'smooth',
    connectNulls: {
      connect: true,
      connectStroke: 'red',
    },
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
