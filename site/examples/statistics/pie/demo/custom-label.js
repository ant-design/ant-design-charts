import React from 'react';
import ReactDOM from 'react-dom';
import {Pie} from '@ant-design/plots';

const data = [
  {type: '分类一', value: 27},
  {type: '分类二', value: 25},
  {type: '分类三', value: 18},
  {type: '分类四', value: 15},
  {type: '分类五', value: 10},
  {type: '其他', value: 5},
];
const DemoPie = () => {
  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'type',
      position: "outside",
      render: (text, datum) => {
        return `
        <div style="left:-50%;top:-20px;position:relative;font-size:14px;">
          <span>${datum.type}</span>
          :
          <span>${datum.value}</span>
        </div>
      `;
      },
    },
    legend: false,
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie/>, document.getElementById('container'));
