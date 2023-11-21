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
    xField: 'date',
    yField: ['open', 'close', 'high', 'low'],
    data: data.map((i) => ({ ...i, date: new Date(i.trade_date) })),
  };

  return <Stock {...config} />;
};

ReactDOM.render(<DemoStock />, document.getElementById('container'));
