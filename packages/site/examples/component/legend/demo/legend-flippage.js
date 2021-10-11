import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/charts';

const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/P14mCvkybz/large-datra.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'product_box',
    yField: 'value',
    seriesField: 'province',
    isGroup: 'true',
    legend: {
      flipPage: true,
      // 两行分页
      maxRow: 2,
      pageNavigator: {
        marker: {
          style: {
            fill: 'rgba(0,0,0,0.65)',
          },
        },
      },
    },
  };

  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
