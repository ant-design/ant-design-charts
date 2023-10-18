import React from 'react';
import ReactDOM from 'react-dom';
import { Funnel } from '@ant-design/plots';

const DemoFunnel = () => {
  const data = [
    {
      stage: '简历筛选',
      number: 253,
      company: 'A公司',
    },
    {
      stage: '初试人数',
      number: 151,
      company: 'A公司',
    },
    {
      stage: '复试人数',
      number: 113,
      company: 'A公司',
    },
    {
      stage: '录取人数',
      number: 87,
      company: 'A公司',
    },
    {
      stage: '入职人数',
      number: 59,
      company: 'A公司',
    },
    {
      stage: '简历筛选',
      number: 303,
      company: 'B公司',
    },
    {
      stage: '初试人数',
      number: 251,
      company: 'B公司',
    },
    {
      stage: '复试人数',
      number: 153,
      company: 'B公司',
    },
    {
      stage: '录取人数',
      number: 117,
      company: 'B公司',
    },
    {
      stage: '入职人数',
      number: 79,
      company: 'B公司',
    },
  ];
  const config = {
    data,
    xField: 'stage',
    yField: 'number',
    seriesField: 'company',
    legend: false,
  };
  return <Funnel {...config} />;
};

ReactDOM.render(<DemoFunnel />, document.getElementById('container'));
