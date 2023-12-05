import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  { type: '抖音', sold: 275 },
  { type: '快手', sold: 115 },
  { type: '小米', sold: 120 },
  { type: '微信', sold: 350 },
  { type: 'Keep', sold: 150 },
];

const DemoColumn = () => {
  const logo = [
    ['抖音', 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8IXHQLvx9QkAAAAAAAAAAAAADmJ7AQ/original'],
    ['快手', 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*swueRrrKvbcAAAAAAAAAAAAADmJ7AQ/original'],
    ['小米', 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*79G3TIt3mBoAAAAAAAAAAAAADmJ7AQ/original'],
    ['微信', 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_ELBTJLp0dQAAAAAAAAAAAAADmJ7AQ/original'],
    ['Keep', 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JzbKRpFhR14AAAAAAAAAAAAADmJ7AQ/original'],
  ];
  const chartRef = React.useRef();
  const config = {
    data,
    xField: 'type',
    yField: 'sold',
    colorField: 'type',
    onReady: ({ chart }) => {
      chartRef.current = chart;
    },
    legend: {
      color: {
        itemMarker: (name, index) => () => {
          const chart = chartRef.current;
          const { canvas } = chart.getContext();
          const { document } = canvas;
          window.c = chartRef.current;
          const image = document.createElement('image', {
            style: {
              width: 20,
              height: 20,
              anchor: '0.5 0.5',
              src: logo[index][1],
            },
          });
          const tooltip = document.createElement('html', {
            style: {
              innerHTML: `<p style="color: red; width: 80; text-align: center;line-height: 30px">${name}</p>`,
              fill: 'white',
              stroke: '#ccc',
              width: 80,
              height: 30,
              pointerEvents: 'none',
              visibility: 'hidden',
            },
          });
          canvas.appendChild(tooltip);
          image.addEventListener('mousemove', (e) => {
            tooltip.setPosition(e.x, e.y);
            tooltip.style.visibility = 'visible';

            console.log('move', e.target);
          });
          image.addEventListener('mouseleave', (e) => {
            tooltip.setPosition(0, 0);
            tooltip.style.visibility = 'hidden';

            console.log('leave', e.target);
          });
          return image;
        },
        itemMarkerSize: 40,
        itemLabelText: (_, index) => logo[index][0],
        maxRows: 1,
      },
    },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
