import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
      format: 'csv',
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
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
