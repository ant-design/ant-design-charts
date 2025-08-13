import { Bar } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoSelected = () => {
  const config = {
    data: [
      { type: '分类一', value: 87 },
      { type: '分类二', value: 65 },
      { type: '分类三', value: 48 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    xField: 'type',
    yField: 'value',
    colorField: 'type',
    state: {
      unselected: { opacity: 0.5 },
      selected: { lineWidth: 3, stroke: 'red' },
    },
    interaction: {
      elementSelect: true,
    },
    onReady: ({ chart, ...rest }) => {
      chart.on(
        'afterrender',
        () => {
          // const { document } = chart.getContext().canvas;
          // const elements = document.getElementsByClassName('element');
          // elements[0]?.emit('click');
          chart.emit('element:select', {
            data: { data: [{ type: '分类一', value: 87 }] },
          });
        },
        true,
      );
    },
  };
  return <Bar {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoSelected />);
