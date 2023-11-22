

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
    label: {
      text: (d) => d.height === 0 ? d.data.name : '',
      position: 'inside',
      transform: [
        {
          type: 'overflowHide'
        },
      ]
    }
  };
  return <CirclePacking {...config} />;
};

ReactDOM.render(<DemoCirclePacking />, document.getElementById('container'));
