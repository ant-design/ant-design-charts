import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Sunburst } from '@ant-design/plots';

const DemoSunburst = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    innerRadius: 0.3,
    hierarchyConfig: {
      field: 'sum',
    },
    // 取色来自于：http://zhongguose.com/
    color: ['#f26b1f', '#fc8c23', '#f97d1c'],
    interactions: [
      {
        type: 'element-active',
      },
    ],
    state: {
      active: {
        style: {
          stroke: '#fff',
          lineWidth: 2,
        },
      },
    },
  };

  return <Sunburst {...config} />;
};

ReactDOM.render(<DemoSunburst />, document.getElementById('container'));
