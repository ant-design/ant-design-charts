import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DotMap } from '@ant-design/charts';

const DemoDotMap = () => {
  const [, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/g5hIthhKlr/quanguoshixianweizhi.json')
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
      zoom: 5,
      center: [107.4976, 32.1697],
      pitch: 0,
    },
    source: {
      data: list,
      parser: {
        type: 'json',
        coordinates: 'lnglat',
      },
    },
    size: 4,
    color: {
      field: 'style',
      value: ({ style }) => {
        if (style == 0) {
          return '#14B4C9';
        } else if (style == 1) {
          return '#3771D9';
        } else {
          return '#B8EFE2';
        }
      },
    },
    style: {
      opacity: 0.8,
      strokeWidth: 0,
    },
    state: {
      active: {
        color: '#FFF684',
      },
    },
    label: {
      visible: false,
      field: 'name',
      style: {
        fill: '#fff',
        fontSize: 12,
        textAnchor: 'top',
        textOffset: [0, 20],
        padding: [10, 10],
      },
    },
    tooltip: {
      items: ['name'],
    },
    zoom: {
      position: 'bottomright',
    },
    layerMenu: {
      position: 'topright',
    },
    legend: {
      type: 'category',
      position: 'bottomleft',
      items: [
        {
          color: '#14B4C9',
          value: '地级市',
        },
        {
          color: '#3771D9',
          value: '县城市',
        },
        {
          color: '#B8EFE2',
          value: '区县',
        },
      ],
    },
  };

  return <DotMap {...config} />;
};

ReactDOM.render(<DemoDotMap />, document.getElementById('container'));
