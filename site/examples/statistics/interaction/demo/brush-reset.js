import { G2, Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const { ChartEvent } = G2;

const Demo = () => {
  const chartRef = React.useRef(null);
  const brushHistory = [];
  const config = {
    interaction: {
      brushFilter: true,
    },
    shapeField: 'point',
    colorField: 'gender',
    yField: 'height',
    xField: 'weight',
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
    },
    onReady: ({ chart }) => {
      chartRef.current = chart;
      chart.on('brush:filter', (e) => {
        if (e.target) brushHistory.push(e.data.selection);
      });
      chart.on(ChartEvent.AFTER_RENDER, () => {
        const scale = chart.getScale();
        const { x1, y1 } = scale;
        const domainX = x1.options.domain;
        const domainY = y1.options.domain;
        brushHistory.push([domainX, domainY]);
      });
    },
  };

  return (
    <div>
      <button
        onClick={() => {
          if (brushHistory.length < 2) return;
          brushHistory.pop();
          // 主动触发刷选事件
          chartRef.current.emit('brush:filter', {
            data: {
              selection: brushHistory[brushHistory.length - 1],
            },
          });
        }}
      >
        rest
      </button>
      <Scatter {...config} />
    </div>
  );
};

createRoot(document.getElementById('container')).render(<Demo />);
