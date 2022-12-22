import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column, getCanvasPattern } from '@ant-design/plots';

import { deepMix } from '@antv/util';

const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const PATTERN_MAP = {
    Gas: {
      type: 'dot',
    },
    Wasserkraft: {
      type: 'line',
    },
    Biomasse: {
      type: 'square',
    },
    Wind: {
      type: 'line',
      cfg: {
        rotation: 90,
      },
    },
    Solar: {
      type: 'square',
      cfg: {
        size: 5,
        padding: 2,
        rotation: 45,
        isStagger: false,
      },
    },
  };

  const pattern = ({ type }, color) =>
    getCanvasPattern(
      deepMix({}, PATTERN_MAP[type], {
        cfg: {
          backgroundColor: color,
        },
      }),
    );

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    isStack: true,
    meta: {
      value: {
        min: 0,
        max: 1,
      },
    },
    pattern: ({ type }, color) =>
      pattern(
        {
          type,
        },
        color,
      ),
    legend: {
      marker: (text, index, item) => {
        const color = item.style.fill;
        return {
          style: {
            fill: pattern(
              {
                type: text,
              },
              color,
            ),
            r: 8,
          },
        };
      },
    },
    interactions: [
      {
        type: 'element-highlight-by-color',
      },
      {
        type: 'element-link',
      },
    ],
  };

  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
