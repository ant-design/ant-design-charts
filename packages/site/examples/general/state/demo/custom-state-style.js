import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/charts';

const DemoPie = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
    },
    // 自定义状态样式
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65,
        },
      },
    },
    // 添加 element 选中和激活交互
    interactions: [
      {
        type: 'element-single-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

ReactDOM.render(<DemoPie />, document.getElementById('container'));
