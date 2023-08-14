import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const EPSILON = 1e-6;

const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
    },
    xField: 'letter',
    yField: 'frequency',
    meta: {
      y: { type: 'log' },
    },
    axis: {
      y: { labelFormatter: (d) => (d === EPSILON ? 0 : d) },
    },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
