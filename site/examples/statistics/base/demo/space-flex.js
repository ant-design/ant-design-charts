import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '@ant-design/plots';

const Demobase = () => {
  const config = {
    type: "spaceFlex",
    width: 900,
    ratio: [1, 2],
    direction: "col",
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/seattle-weather.json",
    },
    children: [
      {
        type: "interval",
        paddingBottom: 0,
        paddingRight: 300,
        encode: {
          x: (d) => new Date(d.date).getUTCDate(),
          y: "temp_max",
          color: "steelblue",
        },
        transform: [{ type: "groupX", y: "max" }],
        axis: { x: false },
      },
      {
        type: "spaceFlex",
        paddingBottom: 60,
        ratio: [2, 1],
        children: [
          {
            type: "cell",
            paddingBottom: 60,
            paddingRight: 0,
            encode: {
              x: (d) => new Date(d.date).getUTCDate(),
              y: (d) => new Date(d.date).getUTCMonth(),
              color: "temp_max",
            },
            transform: [{ type: "group", color: "max" }],
            scale: { color: { palette: "gnBu" } },
            style: { inset: 0.5 },
            axis: { x: { title: "Date" }, y: { title: "Month" } },
            legend: { color: false },
          },
          {
            type: "interval",
            encode: {
              x: (d) => new Date(d.date).getUTCMonth(),
              y: "temp_max",
              color: "steelblue",
            },
            transform: [{ type: "groupX", y: "max" }],
            coordinate: { transform: [{ type: "transpose" }] },
            axis: { x: false },
          },
        ],
      },
    ],
  };
  return <Base {...config} />;
};

ReactDOM.render(<Demobase />, document.getElementById('container'));
