import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/474e51c8-b47b-4bb6-b3ed-87813a960df2.csv",
    },
    xField: 'mpg',
    yField: 'hp',
    colorField: 'steelblue',
    meta: {
      x: { nice: true, domainMax: 38 },
      y: { nice: true },
    },
    label: { 
      text: 'name',
      style: {
        stroke: '#fff',
        textAnchor: 'start',
        textBaseline: 'middle',
        dx: 10,
        position: 'left',
        fontSize: 10,
        lineWidth: 2,
      },
    },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
