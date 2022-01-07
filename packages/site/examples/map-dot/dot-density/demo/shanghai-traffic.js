import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap } from '@ant-design/maps';

const DemoDotMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/rmsportal/BElVQFEFvpAKzddxFZxJ.txt')
      .then((response) => response.text())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  if (!data.length) {
    return null;
  }
  const config = {
    map: {
      type: 'mapbox',
      style: 'dark',
      center: [121.417463, 31.215175],
      pitch: 0,
      zoom: 11,
    },
    source: {
      data: data,
      parser: {
        type: 'csv',
        y: 'lat',
        x: 'lng',
      },
    },
    shape: 'dot',
    color: '#080298',
    size: 0.5,
    style: {
      opacity: 1,
    },
    zoom: {
      position: 'bottomright',
    },
    scale: {
      position: 'bottomleft',
    },
    layerMenu: {
      position: 'topright',
    },
  };

  return <DotMap {...config} />;
};

ReactDOM.render(<DemoDotMap />, document.getElementById('container'));
