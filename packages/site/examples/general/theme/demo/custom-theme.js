import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column, G2 } from '@ant-design/plots';

import { deepMix } from '@antv/util';

const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const theme = G2.getTheme('dark');
  document.getElementById('container').style.background = theme.background;
  const config = {
    data,
    xField: '城市',
    yField: '销售额',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    appendPadding: 10,
    theme: deepMix({}, theme, {
      components: {
        scrollbar: {
          // 默认样式
          default: {
            style: {
              trackColor: 'rgba(255,255,255,0.05)',
              thumbColor: 'rgba(255,255,255,0.25)',
            },
          },
          // hover 时，可以设置滑块样式
          hover: {
            style: {
              thumbColor: 'rgba(255,255,255,0.6)',
            },
          },
        },
      },
    }),
    scrollbar: {
      type: 'horizontal',
    },
  };

  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
