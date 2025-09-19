import { Pie } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoPie = () => {
  const config = {
    data: [
      { item: '事例一', percent: 0.4 },
      { item: '事例二', percent: 0.21 },
      { item: '事例三', percent: 0.17 },
      { item: '事例四', percent: 0.13 },
      { item: '事例五', percent: 0.09 },
    ],
    angleField: 'percent',
    colorField: 'item',
    radius: 0.8,
    label: {
      position: 'outside',
      text: (data) => `${data.item}: ${data.percent * 100}%`,
    },
    tooltip: {
      items: [
        (data) => ({
          name: data.item,
          value: `${data.percent * 100}%`,
        }),
      ],
    },
    onReady: ({ chart }) => {
      chart.on('afterrender', () => {
        const { canvas } = chart.getContext();
        const { document } = canvas;
        // https://github.com/antvis/G2/blob/v5/src/interaction/legendFilter.ts
        const items = document.getElementsByClassName('items-item');
        const datum = items.map((item) => item.__data__);
        items.forEach((item, index) => {
          item.addEventListener('click', (ev) => {
            console.log(datum[index]);
          });
        });
        // 简单点击事件
        // document
        //   .getElementsByClassName('legend-category')[0]
        //   .addEventListener('click', (ev) => {
        //     console.log('click legend');
        //   });
      });
    },
  };
  return <Pie {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoPie />);
