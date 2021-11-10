import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Mix } from '@ant-design/charts';

const DemoMix = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qE48lpzwRc/range-area-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const { area: data1, line: data2 } = data;
  const config = {
    appendPadding: 8,
    syncViewPadding: true,
    tooltip: {
      shared: true,
      showMarkers: false,
      showCrosshairs: true,
      offsetY: -50,
    },
    views: [
      {
        data: data1,
        axes: {},
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1],
          },
          temperature: {
            nice: true,
            sync: true,
            alias: '温度范围',
          },
        },
        // view1: prepare a area plot, mapping position to `time*temperature`
        geometries: [
          {
            type: 'area',
            xField: 'time',
            yField: 'temperature',
            mapping: {},
          },
        ],
      },
      {
        data: data2,
        axes: false,
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1],
          },
          temperature: {
            sync: 'temperature',
            alias: '温度',
          },
        },
        // view2: prepare a line plot and point plot, mapping position to `time*temperature` (share data)
        geometries: [
          {
            type: 'line',
            xField: 'time',
            yField: 'temperature',
            mapping: {},
          },
          {
            type: 'point',
            xField: 'time',
            yField: 'temperature',
            mapping: {
              shape: 'circle',
              style: {
                fillOpacity: 1,
              },
            },
          },
        ],
      },
    ],
  }; // Step 3: 渲染图表

  return <Mix {...config} />;
};

ReactDOM.render(<DemoMix />, document.getElementById('container'));
