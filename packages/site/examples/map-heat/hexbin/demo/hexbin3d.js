import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HexbinMap } from '@ant-design/charts';

const DemoHexbinMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/a1a8158d-6fe3-424b-8e50-694ccf61c4d7.csv')
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
      pitch: 43,
      center: [120.13383079335335, 29.9],
      zoom: 8.2,
    },
    source: {
      data: data,
      parser: {
        type: 'csv',
        x: 'lng',
        y: 'lat',
      },
      aggregation: {
        field: 'v',
        radius: 2500,
        method: 'sum',
      },
    },
    shape: 'hexagonColumn',
    size: {
      field: 'sum',
      value: ({ sum }) => {
        return sum * 200;
      },
    },
    color: {
      field: 'sum',
      value: [
        '#094D4A',
        '#146968',
        '#1D7F7E',
        '#289899',
        '#34B6B7',
        '#4AC5AF',
        '#5FD3A6',
        '#7BE39E',
        '#A1EDB8',
        '#C3F9CC',
        '#DEFAC0',
        '#ECFFB1',
      ],
    },
    style: {
      coverage: 0.8,
      angle: 0,
      opacity: 1.0,
    },
  };

  return <HexbinMap {...config} />;
};

ReactDOM.render(<DemoHexbinMap />, document.getElementById('container'));
