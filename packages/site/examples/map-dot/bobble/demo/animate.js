import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap } from '@ant-design/charts';

const DemoDotMap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/xZqmXatMnc/quanguojiaotongshijianxiangyingzhishu.json')
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
      center: [102.447303, 37.753574],
      zoom: 2,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    color: '#4cfd47',
    size: 20,
    animate: true,
    state: {
      active: true,
    },
    autoFit: true,
    label: {
      field: 'cityName',
      style: {
        fill: '#fff',
        fontSize: 12,
        textAnchor: 'top',
        textOffset: [0, 20],
      },
    },
    zoom: {
      position: 'bottomright',
    },
    layerMenu: {
      position: 'topright',
    },
    tooltip: {
      items: [
        {
          field: 'cityName',
          alias: '名称',
        },
      ],
    },
  };

  return <DotMap {...config} />;
};

ReactDOM.render(<DemoDotMap />, document.getElementById('container'));
