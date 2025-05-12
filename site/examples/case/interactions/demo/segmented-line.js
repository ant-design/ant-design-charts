import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoSegmentedLine = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: null,
      type: 'Lon',
    },
    {
      year: '1998',
      value: null,
      type: 'Lon',
    },
    {
      year: '1999',
      value: null,
      type: 'Lon',
    },
    {
      year: '1991',
      value: null,
      type: 'Bor',
    },
    {
      year: '1992',
      value: null,
      type: 'Bor',
    },
    {
      year: '1993',
      value: null,
      type: 'Bor',
    },
    {
      year: '1994',
      value: null,
      type: 'Bor',
    },
    {
      year: '1995',
      value: null,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    colorField: 'type',
    scale: {
      color: {
        range: ['#2688FF', 'red'],
      },
    },
    style: {
      lineWidth: 2,
      lineDash: (items) => {
        const { type } = items[0];
        return type === 'Bor' ? [2, 4] : [0, 0];
      },
    },
    interaction: {
      tooltip: {
        render: (e, { title, items }) => {
          const list = items.filter((item) => item.value);
          return (
            <div key={title}>
              <h4>{title}</h4>
              {list.map((item) => {
                const { name, value, color } = item;
                return (
                  <div>
                    <div style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: color,
                            marginRight: 6,
                          }}
                        ></span>
                        <span>{name}</span>
                      </div>
                      <b>{value}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    },
    legend: false,
  };
  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoSegmentedLine />);
