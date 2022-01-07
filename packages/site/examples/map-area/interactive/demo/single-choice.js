import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AreaMap } from '@ant-design/maps';

const DemoAreaMap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/d36ad90e-3902-4742-b8a2-d93f7e5dafa2.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const color = [
    'rgb(255,255,217)',
    'rgb(237,248,177)',
    'rgb(199,233,180)',
    'rgb(127,205,187)',
    'rgb(65,182,196)',
    'rgb(29,145,192)',
    'rgb(34,94,168)',
    'rgb(12,44,132)',
  ];
  const config = {
    map: {
      type: 'mapbox',
      style: 'blank',
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    autoFit: true,
    color: {
      field: 'density',
      value: color,
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: 'rgb(93,112,146)',
      lineType: 'dash',
      lineDash: [2, 2],
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    state: {
      active: true,
      select: true,
    },
    tooltip: {
      items: ['name', 'density'],
    },
    zoom: {
      position: 'bottomright',
    },
    legend: {
      position: 'bottomleft',
    },
  };

  return <AreaMap {...config} />;
};

ReactDOM.render(<DemoAreaMap />, document.getElementById('container'));
