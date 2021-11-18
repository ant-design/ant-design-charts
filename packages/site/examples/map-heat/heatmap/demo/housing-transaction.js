import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HeatMap } from '@ant-design/charts';

const DemoHeatMap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/S2Pb%26549sG/20210723023614.json')
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
      zoom: 11.7,
      center: [120.19660949707033, 30.234747338474293],
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    size: {
      field: 'count',
      value: [0, 1],
    },
    style: {
      intensity: 2,
      radius: 15,
      opacity: 1,
      colorsRamp: [
        {
          color: 'rgba(33,102,172,0.0)',
          position: 0,
        },
        {
          color: 'rgb(103,169,207)',
          position: 0.2,
        },
        {
          color: 'rgb(209,229,240)',
          position: 0.4,
        },
        {
          color: 'rgb(253,219,199)',
          position: 0.6,
        },
        {
          color: 'rgb(239,138,98)',
          position: 0.8,
        },
        {
          color: 'rgb(178,24,43,1.0)',
          position: 1,
        },
      ],
    },
    zoom: {
      position: 'bottomright',
    },
    legend: {
      position: 'bottomleft',
    },
  };

  return <HeatMap {...config} />;
};

ReactDOM.render(<DemoHeatMap />, document.getElementById('container'));
