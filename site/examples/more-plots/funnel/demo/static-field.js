import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Funnel, FUNNEL_CONVERSATION_FIELD } from '@ant-design/plots';

const DemoFunnel = () => {
  const data = [
    {
      stage: '简历筛选',
      number: 253,
    },
    {
      stage: '初试人数',
      number: 151,
    },
    {
      stage: '复试人数',
      number: 113,
    },
    {
      stage: '录取人数',
      number: 87,
    },
    {
      stage: '入职人数',
      number: 59,
    },
  ];
  const config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    legend: false,
    label: {
      formatter: (datum) => {
        return `${(datum['$$percentage$$'] * 100).toFixed(2)}%`;
      },
    },
    conversionTag: {
      formatter: (datum) => {
        return `${((datum[FUNNEL_CONVERSATION_FIELD][1] / datum[FUNNEL_CONVERSATION_FIELD][0]) * 100).toFixed(2)}%`;
      },
    }, // 关闭 conversionTag 转化率 展示
    // conversionTag: false,
  };
  return <Funnel {...config} />;
};

ReactDOM.render(<DemoFunnel />, document.getElementById('container'));
