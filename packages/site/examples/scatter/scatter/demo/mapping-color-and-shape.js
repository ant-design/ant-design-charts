import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { uniq } from '@antv/util';
import { Scatter } from '@ant-design/charts';

const DemoScatter = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/rc7SYiIq8Z/scatter-color-shape.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'x',
    yField: 'y',
    colorField: 'city',
    shapeField: 'area',
    sizeField: 'value',
    size: [4, 8],
    color: ({ city }) => {
      const colors10 = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#6F5EF9',
        '#6DC8EC',
        '#945FB9',
        '#FF9845',
        '#1E9493',
        '#FF99C3',
      ];
      // custom colorMapping function
      const idx = data.map((d) => d.city).indexOf(city);
      return colors10[idx + 1];
    },
    shape: ({ area }) => {
      const shapes = ['circle', 'square', 'triangle', 'hexagon', 'diamond', 'bowtie'];
      const idx = uniq(data.map((d) => d.area)).indexOf(area);
      return shapes[idx] || 'circle';
    },
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
  };

  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
