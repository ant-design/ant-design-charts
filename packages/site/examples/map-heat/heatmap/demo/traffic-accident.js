import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GeographicHeatmap } from '@ant-design/maps';

const DemoGeographicHeatmap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/OOSGL1vhp3/20200726024229.json')
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
      pitch: 45,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    shape: 'heatmap3D',
    size: {
      field: 'avg',
      value: ({ avg }) => avg / 100,
    },
    legend: {
      position: 'bottomleft',
    },
  };

  return <GeographicHeatmap {...config} />;
};

ReactDOM.render(<DemoGeographicHeatmap />, document.getElementById('container'));
