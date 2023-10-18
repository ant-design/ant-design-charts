import { Treemap } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoTreemap = () => {
  const config = {
    width: 1100,
    height: 900,
    autoFit: false,
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/flare-treemap.json",
    },
    valueField: 'size',
    colorField: (d) => d.parent.data.name.split(".")[1],
    layout: {
      // 
      path: (d) => d.name.replace(/\./g, "/"),
      // treemapBinary、treemapDice、treemapSlice、treemapSliceDice、treemapSquarify、treemapResquarify
      tile: "treemapBinary",
      paddingInner: 1,
    },
    meta: {
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
      labelText: (d) =>
        d.data.name
          .split(".")
          .pop()
          .split(/(?=[A-Z][a-z])/g)[0],
      labelFill: "#000",
      labelPosition: "top-left",
      fillOpacity: 0.5,
    },
  };
  return <Treemap {...config} />;
};

ReactDOM.render(<DemoTreemap />, document.getElementById('container'));
