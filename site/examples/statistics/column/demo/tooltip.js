import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoColumn = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json',
    },
    xField: 'year',
    yField: 'value',
    colorField: 'type',
    stack: true,
    interaction: {
      tooltip: {
        render: (e, { title, items }) => {
          return (
            <div key={title}>
              <h4>{title}</h4>
              {items.map((item) => {
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
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoColumn />, document.getElementById('container'));
