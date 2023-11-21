import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  { type: '1-3秒', value: 0.36 },
  { type: '4-10秒', value: 0.25 },
  { type: '11-30秒', value: 0.24 },
  { type: '31-60秒', value: 0.19 },
  { type: '1-3分', value: 0.12 },
  { type: '3-10分', value: 0.15 },
  { type: '10-30分', value: 0.16 },
  { type: '30+分', value: 0.1 },
];

const DemoColumn = () => {
  const chartRef = React.useRef(null);

  const medal = (datum, ranking) => {
    if (ranking > 2) return datum;
    const { chart } = chartRef.current;
    const { document } = chart.getContext().canvas;
    const group = document?.createElement('g', {});

    const size = ranking === 0 ? 20 : 15;
    const icon = document.createElement('image', {
      style: {
        src: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1NiMRKb2sfMAAAAAAAAAAAAADmJ7AQ/original',
        width: size,
        height: size,
        anchor: '0.5 0.5',
      },
    });
    const text = ['冠军🏆', '亚军🥈', '季军🥉'][ranking];
    const label = document.createElement('text', {
      style: {
        text,
        fill: 'gray',
        textAlign: 'center',
        transform: `translate(0, 25)`,
      },
    });

    group.appendChild(icon);
    group.appendChild(label);
    return group;
  };

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    colorField: 'type',
    axis: {
      x: {
        size: 40,
        labelFormatter: (datum, index) => medal(datum, index),
      },
    },
    onReady: (plot) => (chartRef.current = plot),
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
