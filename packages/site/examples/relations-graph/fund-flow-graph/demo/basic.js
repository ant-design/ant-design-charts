import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FundFlowGraph } from '@ant-design/charts';

const DemoFundFlowGraph = () => {
  const data = {
    nodes: [
      {
        id: '1',
        value: {
          text: 'Company1',
          // 建议使用 bae64 数据
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/28B4PgocL4/bbd3e7ef-6b5e-4034-893d-1b5073ad9aa4.png',
        },
      },
      {
        id: '2',
        value: { text: 'Company2' },
      },
      {
        id: '3',
        value: { text: 'Company3' },
      },
      {
        id: '4',
        value: { text: 'Company4' },
      },
      {
        id: '5',
        value: { text: 'Company5' },
      },
      {
        id: '6',
        value: { text: 'Company6' },
      },
      {
        id: '7',
        value: { text: 'Company7' },
      },
      {
        id: '8',
        value: { text: 'Company8' },
      },
      {
        id: '9',
        value: { text: 'Company9' },
      },
    ],
    edges: [
      {
        source: '1',
        target: '2',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '3',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '2',
        target: '5',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '5',
        target: '6',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '3',
        target: '4',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '4',
        target: '7',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '8',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
      {
        source: '1',
        target: '9',
        value: { text: '100,000 Yuan', subText: '2019-08-03' },
      },
    ],
  };
  const config = {
    data,
  };

  return <FundFlowGraph {...config} />;
};

ReactDOM.render(<DemoFundFlowGraph />, document.getElementById('container'));
