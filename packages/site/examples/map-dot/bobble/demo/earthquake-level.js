import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap } from '@ant-design/charts';

const DemoDotMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/m5r7MFHt8U/wenchuandizhenshuju.json')
      .then((response) => response.json())
      .then(({ list }) => setData(list))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    map: {
      type: 'mapbox',
      style: 'dark',
      center: [103.447303, 31.753574],
      zoom: 7,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'json',
        x: 'lng',
        y: 'lat',
      },
    },
    color: {
      field: 'mag',
      value: ['#82cf9c', '#10b3b0', '#2033ab'],
      scale: {
        type: 'quantize',
      },
    },
    size: {
      field: 'mag',
      value: ({ mag }) => (mag - 4.3) * 10,
    },
    style: {
      opacity: 0.8,
      strokeWidth: 0,
    },
    state: {
      active: {
        color: '#FFF684',
      },
    },
    autoFit: true,
    zoom: {
      position: 'topright',
    },
    scale: {
      position: 'bottomright',
    },
    tooltip: {
      items: ['title', 'mag', 'depth'],
    },
    legend: {
      position: 'bottomleft',
    },
  };

  return <DotMap {...config} />;
};

ReactDOM.render(<DemoDotMap />, document.getElementById('container'));
