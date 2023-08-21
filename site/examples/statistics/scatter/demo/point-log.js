import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json",
    },
    xField: 'GDP',
    yField: 'LifeExpectancy',
    sizeField: 'Population',
    colorField: 'continent',
    meta: {
      size: { type: "log", range: [4, 20] },
    },
    style: { fillOpacity: 0.3, lineWidth: 1 },
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
