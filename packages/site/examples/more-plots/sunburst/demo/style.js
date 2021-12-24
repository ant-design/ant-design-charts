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
      const ancestorIndex = last(datum['nodeAncestor'])?.nodeIndex || 0;
      const colorIndex = depth === 1 ? nodeIndex : ancestorIndex;
      let color = colors[colorIndex % colors.length];

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
