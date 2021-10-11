import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/89729b32-1592-44ae-ba96-1e296638f5f7.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'value',
    meta: {
      date: {
        formatter: (v) => (v.split(' ') ? v.split(' ')[1] : ''),
      },
      value: {
        min: 0,
        max: Math.pow(10, 7),
        tickCount: 10,
        formatter: (v) => `${v / Math.pow(10, 6)}M`,
      },
    },
    lineStyle: {
      lineCap: 'round',
    },
    interactions: [
      {
        type: 'brush',
      },
    ],
  };
  const yScale = line.chart.getScaleByField('value');
  const coordinate = line.chart.getCoordinate();

  const getDimYPosition = (value) => coordinate.convertDim(yScale.scale(value), 'y');

  line.update({
    ...line.options,
    annotations: [
      {
        type: 'line',
        start: {
          date: 'January 1991',
          value: 2549000,
        },
        end: ['August 1990', 3850000],
        text: {
          // 旅游萧条 标注
          content: 'The UK recession of 1991',
          rotate: 0,
          autoRotate: false,
          offsetY: getDimYPosition(3850000) - getDimYPosition(2549000) - 10,
          style: {
            textAlign: 'center',
            textBaseline: 'bottom',
          },
        },
        style: {
          stroke: '#000',
          lineDash: [2, 4],
        },
      },
    ],
  });

  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
