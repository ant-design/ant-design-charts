import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap } from '@ant-design/maps';

const DemoDotMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8Ps2h%24qgmk/traffic_110000.csv')
      .then((response) => response.text())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  if (!data.length) {
    return null;
  }
  const colors = ['#c57f34', '#cbfddf', '#edea70', '#8cc9f1', '#2c7bb6'];
  const config = {
    map: {
      type: 'mapbox',
      style: 'dark',
      center: [116.417463, 40.015175],
      pitch: 0,
      zoom: 9,
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
    color: {
      field: 'type',
      value: ({ type }) => {
        switch (parseInt(type)) {
          case 3:
            return colors[0];

          case 4:
            return colors[1];

          case 41:
            return colors[2];

          case 5:
            return colors[3];

          default:
            return colors[4];
        }
      },
    },
    size: 0.5,
    style: {
      opacity: 1,
    },
    autoFit: true,
    zoom: {
      position: 'bottomright',
    },
  };

  return <DotMap {...config} />;
};

ReactDOM.render(<DemoDotMap />, document.getElementById('container'));
