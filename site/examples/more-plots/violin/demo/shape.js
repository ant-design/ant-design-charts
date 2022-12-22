import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Violin } from '@ant-design/plots';

const DemoViolin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/6b0a5f1d-5931-42ae-b3ba-3c3cb77d0861.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    height: 500,
    data: data,
    xField: 'x',
    yField: 'y',
    shape: 'hollow-smooth', // or 'hollow', 'smooth'
  };

  return <Violin {...config} />;
};

ReactDOM.render(<DemoViolin />, document.getElementById('container'));
