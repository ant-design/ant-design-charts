import { Radar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const axis = {
  zIndex: 1,
  style: {
    labelStroke: '#fff',
    labelStrokeWidth: 5,
    labelFontSize: 10,
    labelStrokeLineJoin: 'round',
    titleStroke: '#fff',
    titleFontSize: 10,
    titleStrokeWidth: 5,
    titleStrokeLineJoin: 'round',
    lineStroke: 'black',
    tickStroke: 'black',
    lineStrokeWidth: 1,
  },
};

const DemoRadar = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/cars3.json',
    },
    colorField: 'weight (lb)',
    coordinateType: 'radar',
    positionField: [
      "economy (mpg)",
      "cylinders",
      "displacement (cc)",
      "power (hp)",
      "weight (lb)",
      "0-60 mph (s)",
      "year",
    ],
    axis: {
      position: axis,
      position1: axis,
      position2: axis,
      position3: axis,
      position4: axis,
      position5: axis,
      position6: axis,
      position7: axis,
    },
    legend: {
      color: {
        position: "bottom",
        labelFormatter: "~s",
        length: 200,
        layout: { justifyContent: "center" },
      },
    },
    style: { strokeWidth: 1.5, strokeOpacity: 0.4 },
    interaction: { tooltip: { series: false } },
    meta: { color: { palette: "brBG", offset: (t) => 1 - t } },
  };
  return <Radar {...config} />;
};

ReactDOM.render(<DemoRadar />, document.getElementById('container'));
