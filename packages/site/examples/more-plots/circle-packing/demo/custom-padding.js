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
    padding: 0,
    data,
    hierarchyConfig: {
      padding: 0.01,
    },
    color: 'rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)',
    // 自定义 label 样式
    label: false,
    legend: false,
  };

  return <CirclePacking {...config} />;
};

ReactDOM.render(<DemoCirclePacking />, document.getElementById('container'));
