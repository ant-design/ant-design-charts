import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/charts';

const DemoBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/v6MvZBUBsQ/column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'count',
    yField: 'release',
    meta: {
      count: {
        alias: 'top2000 唱片总量',
        nice: true,
      },
      release: {
        tickInterval: 5,
        alias: '唱片发行年份',
      },
    },
    brush: {
      enabled: true,
      action: 'highlight',
    },
  };

  return <Bar {...config} />;
};

ReactDOM.render(<DemoBar />, document.getElementById('container'));
