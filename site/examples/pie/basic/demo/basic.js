import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

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
      text: d => `${d.value}%`,
      style: {
        fontWeight: 'bold',
      }
    },
    legend: {
      color: {
        position: "right"
      }
    },
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));
