import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/728a4bdc-9d0b-49e0-a92f-6320a6cddeed.csv',
    },
    xField: 'date',
    yField: 'unemployment',
    colorField: 'steelblue',
    seriesField: 'division',
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
