import {Scatter} from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://gw.alipayobjects.com/os/bmw-prod/2b48887c-56fb-437e-a91c-6f48e80e5a91.csv",
      transform: [{
        type: 'filter',
        callback: (d) => d.Entity !== 'All natural disasters',
      }],
    },
    paddingLeft: 150,
    paddingTop: 50,
    xField: 'Year',
    yField: 'Entity',
    sizeField: 'Deaths',
    colorField: 'Entity',
    shapeField: 'point',
    scale: {
      size: {
        rangeMax: 35,
      },
    },
    legend: false,
    style: {
      stroke: 'black',
      opacity: 0.8,
      lineWidth: 1,
    }
  };
  return <Scatter {...config}/>;
};

ReactDOM.render(<DemoScatter /> , document.getElementById('container'));
