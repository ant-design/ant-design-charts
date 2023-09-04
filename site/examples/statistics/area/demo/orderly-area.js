import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/e58c9758-0a09-4527-aa90-fbf175b45925.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'unemployed',
    colorField: 'industry',
    shapeField: 'smooth',
    meta: {
      x: { utc: true },
    },
    axis: {
      x: { title: 'Date' },
      y: { labelFormatter: '~s' },
    },
    legend: {
      color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 },
    },
  };
  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
