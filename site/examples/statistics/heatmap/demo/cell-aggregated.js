import { Heatmap } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoHeatmap = () => {
  const config = {
    height: 300,
    autoFit: false,
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/seattle-weather.json',
    },
    xField: (d) => new Date(d.date).getUTCDate(),
    yField: (d) => new Date(d.date).getUTCMonth(),
    colorField: 'temp_max',
    legend: {},
    mark: 'cell',
    style: { inset: 0.5 },
    tooltip: {
      title: 'date',
      field: 'temp_max',
      valueFormatter: '~s',
      pointerEvents: 'none',
    },
  };

  return <Heatmap {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoHeatmap />);
