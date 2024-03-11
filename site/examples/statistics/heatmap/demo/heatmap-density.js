import React from 'react';
import ReactDOM from 'react-dom';
import { Heatmap } from '@ant-design/plots';

const DemoHeatmap = () => {
  const config = {
    mark: 'heatmap',
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/heatmap.json",
    },
    xField: 'g',
    yField: 'l',
    colorField: 'tmp',
    sizeField: 26,
    style: {
      opacity: 0,
    },
  };

  return <Heatmap {...config} />;
};

ReactDOM.render(<DemoHeatmap />, document.getElementById('container'));
