import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Sunburst } from '@ant-design/charts';

import { last } from '@antv/util';

const DemoSunburst = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const colors = [
    '#5B8FF9',
    '#61DDAA',
    '#65789B',
    '#F6BD16',
    '#7262fd',
    '#78D3F8',
    '#9661BC',
    '#F6903D',
    '#008685',
    '#F08BB4',
  ];

  function getPaletteByColor(color, count) {
    const origin = chromaJs(color);
    const range = [origin.brighten(0.5), origin, origin.darken(0.5)];
    return chromaJs // @ts-ignore
      .scale(range)
      .mode('lab')
      .cache(false)
      .colors(count);
  }

  const config = {
    data,
    innerRadius: 0.3,
    interactions: [
      {
        type: 'element-active',
      },
    ],
    hierarchyConfig: {
      field: 'sum',
    },
    sunburstStyle: (datum) => {
      const depth = datum.depth;
      const nodeIndex = datum.nodeIndex;
      const ancestorIndex = last(datum[Sunburst.NODE_ANCESTORS_FIELD])?.nodeIndex || 0;
      const colorIndex = depth === 1 ? nodeIndex : ancestorIndex;
      let color = colors[colorIndex % colors.length];

      if (depth > 1) {
        const newColors = getPaletteByColor(color, last(datum[Sunburst.NODE_ANCESTORS_FIELD])?.childNodeCount);
        color = newColors[nodeIndex % colors.length];
      }

      return {
        fill: color,
        stroke: '#fff',
        lineWidth: 0.5,
      };
    },
  };

  return <Sunburst {...config} />;
};

ReactDOM.render(<DemoSunburst />, document.getElementById('container'));
