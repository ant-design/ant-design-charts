import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Stock } from '@ant-design/plots';

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
  };

  return <Stock {...config} />;
};

ReactDOM.render(<DemoStock />, document.getElementById('container'));
