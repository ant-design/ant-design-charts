import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '@ant-design/plots';

const Demobase = () => {
  const config = {
    type: "spaceLayer",
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv",
      format: "csv",
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
