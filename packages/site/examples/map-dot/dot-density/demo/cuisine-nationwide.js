import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap } from '@ant-design/maps';

const DemoDotMap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/fZreT5RyVT/6wanquanguoyuecaidefenbu.geojson')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    map: {
      type: 'mapbox',
      style: 'dark',
      center: [105.425968, 35.882505],
      pitch: 0,
      zoom: 4,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    shape: 'dot',
    color: '#3C1FA8',
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
