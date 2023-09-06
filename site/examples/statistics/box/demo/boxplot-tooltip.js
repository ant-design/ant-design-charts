import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@ant-design/plots';

const DemoBox = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/morley.json",
    },
    boxType: 'boxplot',
    xField: 'Expt',
    yField: 'Speed',
    tooltip: {
      boxTitle: { channel: 'y3' },
      boxItems: [
        { name: "最低值", channel: "y" },
        { name: "下四分位数", channel: "y1" },
        { name: "最低值", channel: "y2" },
        { name: "上四分位数", channel: "y3" },
        { name: "最高值", channel: "y4" },
      ],
      pointTitle: { channel: 'x' },
      pointItems: [{ channel: 'y', color: 'red', name: '异常点' }],
    },
    style: {
      pointFill: 'red',
      pointStroke: 'red',
    },
  };
  return <Box {...config} />;
};

ReactDOM.render(<DemoBox />, document.getElementById('container'));
