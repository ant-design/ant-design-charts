import React from 'react';
import ReactDOM from 'react-dom';
import { Histogram } from '@ant-design/plots';

const DemoHistogram = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/athletes.json',
    },
    binField: 'weight',
    channel: 'count',
    colorField: 'sex',
    stack: {
      orderBy: 'series',
    },
    style: {
      inset: 0.5,
    },
  };

  return <Histogram {...config} />;
};

ReactDOM.render(<DemoHistogram />, document.getElementById('container'));
