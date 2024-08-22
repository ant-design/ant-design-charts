import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoDefaultTooltip = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
    },
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
    group: true,
    style: {
      inset: 5,
    },
    onReady: ({ chart }) => {
      try {
        chart.on('afterrender', () => {
          chart.emit('legend:filter', {
            data: { channel: 'color', values: ['London'] },
          });
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
  return <Column {...config} />;
};

ReactDOM.render(<DemoDefaultTooltip />, document.getElementById('container'));
