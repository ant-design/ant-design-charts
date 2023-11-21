

import { CirclePacking } from '@ant-design/plots';
import { interpolateHcl } from 'd3-interpolate';
import React from 'react';
import ReactDOM from 'react-dom';
const DemoCirclePacking = () => {

  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/flare.json",
    },
    valueField: "value",
    colorField: "depth",
    scale: {
      color: {
        domain: [0, 5],
        range: ["hsl(152,80%,80%)", "hsl(228,30%,40%)"],
        interpolate: interpolateHcl
      },
    },
    // label 超出隐藏
    label: {
      text: (d) => {
        return (d.height === 0 ? `${d.data.name}` : "")
      },
      position: 'inside',
      transform: [
        {
          type: 'overflowHide',
        },
      ],
    },
    // label 超出省略
    // style: {
    //   labelText: (d) => (d.r >= 10 && d.height === 0 ? `${d.data.name}` : "")
    // }
  };
  return <CirclePacking {...config} />;
};

ReactDOM.render(<DemoCirclePacking />, document.getElementById('container'));
