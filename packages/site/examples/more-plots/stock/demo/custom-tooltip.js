import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Stock } from '@ant-design/charts';

const DemoStock = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    meta: {
      vol: {
        alias: '成交量',
      },
      open: {
        alias: '开盘价',
      },
      close: {
        alias: '收盘价',
      },
      high: {
        alias: '最高价',
      },
      low: {
        alias: '最低价',
      },
    },
    tooltip: {
      fields: ['open', 'close', 'high', 'low', 'vol'],
    },
  };

  return <Stock {...config} />;
};

ReactDOM.render(<DemoStock />, document.getElementById('container'));
