import { Pie } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const DemoPie = () => {
  const config = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    tooltip: ({ type, value }) => {
      // Extra fields
      return { type, value };
    },
    interaction: {
      tooltip: {
        render: (e, { items }) => {
          return (
            <React.Fragment>
              {items.map((item) => {
                const { type, value, color } = item;
                return (
                  <div key={type} style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
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
                      <span>{type}</span>
                    </div>
                    <b>{value}</b>
                  </div>
                );
              })}
            </React.Fragment>
          );
        },
      },
    },
  };
  return <Pie {...config} />;
};

createRoot(document.getElementById('container')).render(<DemoPie />);
