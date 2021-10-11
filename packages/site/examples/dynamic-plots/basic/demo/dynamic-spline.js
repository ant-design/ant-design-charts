import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  function getData() {
    // generate an array of random data
    const data = [];
    const time = new Date().getTime();

    for (let i = -19; i <= 0; i += 1) {
      data.push({
        x: time + i * 1000,
        y: Math.random() + 0.2,
      });
    }

    return data;
  }

  const config = {
    data: getData(),
    padding: 'auto',
    xField: 'x',
    yField: 'y',
    xAxis: {
      type: 'time',
      mask: 'HH:MM:ss',
    },
    smooth: true,
    point: {},
  };
  setInterval(() => {
    const x = new Date().getTime(),
      // current time
      y = Math.random() + 0.2;
    const newData = line.options.data.slice(1).concat({
      x,
      y,
    });
    line.changeData(newData);
  }, 1000);
  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
