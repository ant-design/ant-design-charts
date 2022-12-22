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
      crosshairs: {
        // 自定义 crosshairs line 样式
        line: {
          style: {
            lineWidth: 0.5,
            stroke: 'rgba(0,0,0,0.25)',
          },
        },
        text: (type, defaultContent, items) => {
          let textContent;

          if (type === 'x') {
            const item = items[0];
            textContent = item ? item.title : defaultContent;
          } else {
            textContent = `${defaultContent.toFixed(2)}`;
          }

          return {
            position: type === 'y' ? 'start' : 'end',
            content: textContent,
            // 自定义 crosshairs text 样式
            style: {
              fill: '#dfdfdf',
            },
          };
        },
        // 自定义 crosshairs textBackground 样式
        textBackground: {
          padding: [4, 8],
          style: {
            fill: '#363636',
          },
        },
      },
    },
  };

  return <Stock {...config} />;
};

ReactDOM.render(<DemoStock />, document.getElementById('container'));
