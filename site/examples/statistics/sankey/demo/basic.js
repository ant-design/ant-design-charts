import { Sankey } from '@ant-design/plots'
import React from 'react';
import ReactDOM from 'react-dom';

const DemoSankey = () => {
  const config = {
    layout: { nodeAlign: "center", nodePadding: 0.03 },
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/energy.json",
      transform: [
        {
          type: "custom",
          callback: (data) => ({
            links: data,
          }),
        },
      ],
    },
    scale: {
      color: {
        range: [
          "#4e79a7",
          "#f28e2c",
          "#e15759",
          "#76b7b2",
          "#59a14f",
          "#edc949",
          "#af7aa1",
          "#ff9da7",
          "#9c755f",
          "#bab0ab",
        ],
      },
    },
    style: {
      labelSpacing: 3,
      labelFontWeight: "bold",
      nodeStrokeWidth: 1.2,
      linkFillOpacity: 0.4,
    },
  };
  return <Sankey {...config} />;
};

ReactDOM.render(<DemoSankey />, document.getElementById('container'));
