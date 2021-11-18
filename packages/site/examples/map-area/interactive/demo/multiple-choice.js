import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AreaMap } from '@ant-design/charts';

const DemoAreaMap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/1d27c363-af3a-469e-ab5b-7a7e1ce4f311.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
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
      field: 'unit_price',
      value: [
        '#1A4397',
        '#2555B7',
        '#3165D1',
        '#467BE8',
        '#6296FE',
        '#7EA6F9',
        '#98B7F7',
        '#BDD0F8',
        '#DDE6F7',
        '#F2F5FC',
      ].reverse(),
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: '#fff',
      lineWidth: 0.8,
      lineOpacity: 1,
    },
    state: {
      active: true,
      select: {
        stroke: 'yellow',
        lineWidth: 1.5,
        lineOpacity: 0.8,
      },
    },
    enabledMultiSelect: true,
    label: {
      visible: true,
      field: 'name',
      style: {
        fill: 'black',
        opacity: 0.5,
        fontSize: 12,
        spacing: 1,
        padding: [15, 15],
      },
    },
    tooltip: {
      items: ['name', 'code'],
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
