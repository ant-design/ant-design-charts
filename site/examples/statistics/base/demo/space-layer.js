import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '@ant-design/plots';

const Demobase = () => {
  const config = {
    type: "spaceLayer",
    data: {
      type: "fetch",
      value:
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/base-space-layer.json",
    },
    children: [
      {
        type: "interval",
        encode: { x: "letter", y: "frequency", color: "letter" },
        transform: [{ type: "sortX", reverse: true, by: "y" }],
        scale: { color: { palette: "cool", offset: (t) => t * 0.8 + 0.1 } },
      },
      {
        type: "interval",
        x: 300,
        y: 50,
        width: 300,
        height: 300,
        encode: { y: "frequency", color: "letter" },
        transform: [{ type: "stackY" }],
        scale: { color: { palette: "cool", offset: (t) => t * 0.8 + 0.1 } },
        coordinate: { type: "theta" },
        legend: false,
      },
    ],
  };
  return <Base {...config} />;
};

ReactDOM.render(<Demobase />, document.getElementById('container'));
