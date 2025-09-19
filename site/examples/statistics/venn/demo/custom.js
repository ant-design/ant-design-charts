import { Venn } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const DemoVenn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/c4c17fe9-0a93-4255-bc1e-1ff84966d24a.json',
      transform: [
        {
          type: 'venn',
          sets: 'sets',
          size: 'size',
          as: ['key', 'path'],
        },
      ],
    },
    setsField: 'sets',
    sizeField: 'size',
    style: { fillOpacity: 0.85 },
    scale: {
      color: {
        range: ['#9DF5CA', '#61DDAA', '#42C090'],
      },
    },
    label: {
      position: 'inside',
      style: {
        lineHeight: 20,
      },
      text: (datum) => {
        return `${datum.size}`;
      },
    },
    tooltip: {
      title: false,
      items: [
        (d) => {
          return { name: d.key, value: d.size };
        },
      ],
    },
    interaction: {
      tooltip: {
        // render 回调方法返回一个innerHTML 或者 DOM
        render: (event, { title, items }) => {
          return (
            <div>
              {items.map((d) => (
                <p key={d.name} style={{ margin: 0 }}>
                  <span>{d.name}</span>
                  <span style={{ color: d.color }}> {d.value}</span>{' '}
                </p>
              ))}
            </div>
          );
        },
      },
    },
  };
  return <Venn {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoVenn />);
