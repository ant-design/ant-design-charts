import { Scatter } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/b6f2ff26-b232-447d-a613-0df5e30104a0.csv",
    },
    width: 800,
    height: 1200,
    autoFit: false,
    coordinate: { transform: [{ type: "transpose" }] },
    interaction: { tooltip: { shared: true } },
    xField: 'state',
    yField: 'population',
    colorField: 'age',
    shapeField: "point",
    meta: { color: { palette: "spectral" } },
    tooltip: { title: "state", items: ["population"] },
    annotations: [
      {
        type: "link",
        xField: "state",
        yField: "population",
        transform: [{ type: "groupX", y: "min", y1: "max" }],
        meta: { y: { labelFormatter: ".0%" } },
        style: { stroke: "#000" },
        tooltip: false,
      },
    ],
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
