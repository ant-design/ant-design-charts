import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const config = {
    data: [
      { sex: '男', sold: 0.45 },
      { sex: '女', sold: 0.55 },
    ],
    angleField: 'sold',
    colorField: 'sex',
    legend: false,
    label: {
      text: ({ sex, sold }) => {
        return `${sex}: ${parseInt(sold * 100)}%`;
      },
      fill: '#fff',
      fontSize: 18,
    },
    style: {
      padding: 10,
      fill: ({ sex }) => {
        if (sex === '男') {
          return 'p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png';
        }
        return 'p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png';
      },
    },
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));
