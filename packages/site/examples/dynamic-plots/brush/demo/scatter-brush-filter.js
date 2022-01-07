import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Scatter } from '@ant-design/plots';

const DemoScatter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'weight',
    yField: 'height',
    colorField: 'gender',
    size: 5,
    shape: 'circle',
    pointStyle: {
      fillOpacity: 1,
    },
    brush: {
      enabled: true,
      mask: {
        style: {
          fill: 'rgba(255,0,0,0.15)',
        },
      },
    },
  };

  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
