import React from 'react';
import ReactDOM from 'react-dom';
import { Histogram } from '@ant-design/plots';

const DemoHistogram = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/unemployment2.json',
    },
    style: {
      inset: 0.5,
    },
    binField: 'rate',
    channel: 'count',
    // 分箱数量
    binNumber: 10,
  };

  return <Histogram {...config} />;
};

ReactDOM.render(<DemoHistogram />, document.getElementById('container'));
