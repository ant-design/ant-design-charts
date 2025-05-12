import { Line } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom';

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    colorField: 'type',
    axis: {
      y: {
        labelFormatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    scale: { color: { range: ['#30BF78', '#F4664A', '#FAAD14'] } },
    style: {
      lineWidth: 2,
      lineDash: (data) => {
        if (data[0].type === 'register') return [4, 4];
      },
      opacity: (data) => {
        if (data[0].type !== 'register') return 0.5;
      },
    },
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoLine />);
