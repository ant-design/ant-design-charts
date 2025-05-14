import { G2, Heatmap } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom';

// 自定义一个 Shape
G2.register('shape.point.rect', (style, context) => {
  const { document } = context;
  return (P, value, defaults) => {
    const { color: defaultColor } = defaults;
    const [p0, p1] = P;
    const w = p1[0] - p0[0];
    const h = p1[1] - p0[1];
    const { color = defaultColor } = value;
    // https://g.antv.antgroup.com/examples
    return document.createElement('rect', {
      style: {
        x: p0[0],
        y: p0[1],
        width: w + 20,
        height: h,
        fill: color,
        cursor: 'pointer',
        ...style,
      },
    });
  };
});

const DemoHeatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'name',
    yField: 'country',
    colorField: 'value',
    sizeField: 'value',
    shapeField: 'rect',
    label: {
      text: (d) => d.value,
      position: 'inside',
      style: {
        fill: '#fff',
        pointerEvents: 'none',
      },
    },
    scale: {
      size: { range: [12, 20] },
      color: { range: ['#dddddd', '#9ec8e0', '#5fa4cd', '#2e7ab6', '#114d90'] },
    },
  };

  return <Heatmap {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoHeatmap />);
