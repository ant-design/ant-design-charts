import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { L7PlotMap } from '@ant-design/maps';

const DemoL7PlotMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/7455fead-1dc0-458d-b91a-fb4cf99e701e.txt')
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
      center: [60, 40.7128],
      zoom: 2,
    },
    layers: [
      {
        type: 'arcLayer',
        source: {
          data: data,
          parser: {
            type: 'csv',
            x: 'lng1',
            y: 'lat1',
            x1: 'lng2',
            y1: 'lat2',
          },
        },
        shape: 'arc',
        size: 0.5,
        color: '#6495ED',
        style: {
          opacity: 0.8,
        },
        animate: {
          duration: 4,
          interval: 0.2,
          trailLength: 0.6,
        },
      },
    ],
    zoom: {
      position: 'bottomright',
    },
    scale: {
      position: 'bottomright',
    },
  };

  return <L7PlotMap {...config} />;
};

ReactDOM.render(<DemoL7PlotMap />, document.getElementById('container'));
