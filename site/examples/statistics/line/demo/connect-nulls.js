import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/551d80c6-a6be-4f3c-a82a-abd739e12977.csv',
      transform: [
        // Mock missing data.
        {
          type: 'map',
          callback: (d) => ({
            ...d,
            close: d.date.getUTCMonth() < 3 ? NaN : d.close,
          }),
        },
      ],
    },
    xField: 'date',
    yField: 'close',
    connectNulls: {
      connect: true,
      connectStroke: '#aaa',
    },
  };
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
