import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoInteraction = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/indices.json',
    },
    xField: (d) => new Date(d.Date),
    yField: 'Close',
    colorField: 'Symbol',
    legend: false,
    scale: { y: { type: 'log' } },
    axis: { y: { title: '↑ Change in price (%)', labelAutoRotate: false } },
    labels: [{ text: 'Symbol', selector: 'last', fontSize: 10 }],
    interaction: {
      chartIndex: {
        ruleStroke: '#aaa',
        labelDx: 5,
        labelTextAlign: 'center',
        labelStroke: '#fff',
        labelLineWidth: 5,
        labelFormatter: (d) => `${d.toLocaleDateString()}`,
      },
      tooltip: false,
    },
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoInteraction />);
