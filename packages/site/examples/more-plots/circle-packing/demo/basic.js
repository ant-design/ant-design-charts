import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CirclePacking } from '@ant-design/plots';

const DemoCirclePacking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/%24m0nDoQYqH/basic-packing.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    autoFit: true,
    data,
    label: false,
    legend: false,
    hierarchyConfig: {
      sort: (a, b) => b.depth - a.depth,
    },
  };

  return <CirclePacking {...config} />;
};

ReactDOM.render(<DemoCirclePacking />, document.getElementById('container'));
