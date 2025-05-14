import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoLine = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-connect-nulls.json',
      transform: [
        {
          type: 'map',
          callback: (d) => ({
            ...d,
            close: new Date(d.date).getUTCMonth() < 3 ? NaN : d.close,
          }),
        },
      ],
    },
    xField: (d) => new Date(d.date),
    yField: 'close',
    connectNulls: {
      connect: true,
      connectStroke: '#aaa',
    },
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLine />);
