import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/charts';

const DemoPie = () => {
  const data = [
    {
      sex: '男',
      sold: 0.45,
    },
    {
      sex: '女',
      sold: 0.55,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'sold',
    colorField: 'sex',
    radius: 0.8,
    legend: false,
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        fill: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
    },
    pieStyle: ({ sex }) => {
      if (sex === '男') {
        return {
          fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png',
        };
      }

      return {
        fill: 'p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png',
      };
    },
    tooltip: false,
    interactions: [
      {
        type: 'element-single-selected',
      },
    ],
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));
