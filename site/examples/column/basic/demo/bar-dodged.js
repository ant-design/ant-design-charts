import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/f129b517-158d-41a9-83a3-3294d639b39e.csv',
      format: 'csv',
    },
    xField: 'state',
    yField: 'population',
    colorFiekd: 'age',
    group: {},
    axis: {
      y: { labelFormatter: '~s' },
    },
    interaction: {
      tooltip: { shared: true },
      elementHighlightByColor: { background: true },
    },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
