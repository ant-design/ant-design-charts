import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Sunburst } from '@ant-design/charts';

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
    colorField: 'label',
    interactions: [
      {
        type: 'element-active',
      },
    ],
    hierarchyConfig: {
      field: 'sum',
    },
  };

  return <Sunburst {...config} />;
};

ReactDOM.render(<DemoSunburst />, document.getElementById('container'));
