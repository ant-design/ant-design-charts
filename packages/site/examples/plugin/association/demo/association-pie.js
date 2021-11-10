import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Mix } from '@ant-design/charts';

const DemoMix = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/fKTgtjKdaN/association-pie.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    // 关闭 chart 上的 tooltip，子 view 开启 tooltip
    tooltip: false,
    legend: true,
    plots: [
      {
        type: 'pie',
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.45,
            y: 1,
          },
        },
        options: {
          data: data.pie1,
          angleField: 'bill',
          colorField: 'area',
          radius: 0.85,
          tooltip: {
            showMarkers: false,
          },
          label: {
            type: 'inner',
            offset: '-15%',
          },
          interactions: [
            {
              type: 'element-active',
            },
            {
              type: 'association-tooltip',
            },
            {
              type: 'association-highlight',
            },
          ],
        },
      },
      {
        type: 'pie',
        region: {
          start: {
            x: 0.55,
            y: 0,
          },
          end: {
            x: 1,
            y: 1,
          },
        },
        options: {
          data: data.pie2,
          radius: 0.85,
          angleField: 'value',
          colorField: 'area',
          label: {
            type: 'inner',
            offset: '-15%',
          },
          tooltip: {
            showMarkers: false,
          },
          interactions: [
            {
              type: 'association-tooltip',
            },
            {
              type: 'association-selected',
            },
          ],
        },
      },
    ],
  };

  return <Mix {...config} />;
};

ReactDOM.render(<DemoMix />, document.getElementById('container'));
