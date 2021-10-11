import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/charts';

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
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    seriesField: 'type',
    color: ({ type }) => {
      return type === 'register' ? '#F4664A' : type === 'download' ? '#30BF78' : '#FAAD14';
    },
    lineStyle: ({ type }) => {
      if (type === 'register') {
        return {
          lineDash: [4, 4],
          opacity: 1,
        };
      }

      return {
        opacity: 0.5,
      };
    },
  };

  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
