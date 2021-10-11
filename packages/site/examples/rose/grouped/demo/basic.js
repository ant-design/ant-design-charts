import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Rose } from '@ant-design/charts';

const DemoRose = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/XcLAPaQeeP/rose-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  // 分组玫瑰图
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    isGroup: true,
    // 当 isGroup 为 true 时，该值为必填
    seriesField: 'user',
    radius: 0.9,
    label: {
      offset: -15,
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return <Rose {...config} />;
};

ReactDOM.render(<DemoRose />, document.getElementById('container'));
