import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GeographicHeatmap } from '@ant-design/maps';

const DemoGeographicHeatmap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/d3564b06-670f-46ea-8edb-842f7010a7c6.json')
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
      center: [127.5671666579043, 7.445038892195569],
      zoom: 2.632456779444394,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    size: {
      field: 'mag',
    },
    style: {
      intensity: 3,
      radius: 20,
      opacity: 1,
      colorsRamp: [
        {
          color: '#206C7C',
          position: 0,
        },
        {
          color: '#2EA9A1 ',
          position: 0.2,
        },
        {
          color: '#91EABC',
          position: 0.4,
        },
        {
          color: '#FFF598',
          position: 0.6,
        },
        {
          color: '#F7B74A',
          position: 0.8,
        },
        {
          color: '#FF4818',
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

  return <GeographicHeatmap {...config} />;
};

ReactDOM.render(<DemoGeographicHeatmap />, document.getElementById('container'));
