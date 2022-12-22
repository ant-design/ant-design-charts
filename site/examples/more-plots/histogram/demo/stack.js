import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Histogram } from '@ant-design/plots';

const DemoHistogram = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    binField: 'depth',
    binWidth: 2,
    stackField: 'cut',
    coloField: 'color',
    tooltip: {
      showMarkers: false,
      position: 'top',
    },
    interactions: [
      {
        type: 'element-highlight',
      },
    ],
  };

  return <Histogram {...config} />;
};

ReactDOM.render(<DemoHistogram />, document.getElementById('container'));
