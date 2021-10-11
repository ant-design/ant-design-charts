import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/charts';

const DemoColumn = () => {
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
    xField: 'release',
    yField: 'count',
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

  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
