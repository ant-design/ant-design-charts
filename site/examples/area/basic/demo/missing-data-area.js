import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/aapl.json',
    },
    xField: (d) => new Date(d.date),
    yField: (d) => (new Date(d.date).getUTCMonth() <= 3 ? NaN : d.close),
    connectNulls: {
      connect: true,
      connectFill: 'grey',
      connectFillOpacity: 0.15,
    },
  };
  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
