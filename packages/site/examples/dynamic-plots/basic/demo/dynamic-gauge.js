import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/charts';

const DemoGauge = () => {
  const color = ['#F4664A', '#FAAD14', '#30BF78'];

  const getColor = (percent) => {
    return percent < 0.4 ? color[0] : percent < 0.6 ? color[1] : color[2];
  };

  const config = {
    percent: 0.2,
    range: {
      color: getColor(0.2),
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
      },
      style: {
        fontSize: 60,
      },
    },
    animation: false,
  };
  let data = 0.2;
  const interval = setInterval(() => {
    if (data >= 0.85) {
      clearInterval(interval);
    } else {
      data += 0.001;
      gauge.changeData(data);
      gauge.update({
        range: {
          color: getColor(data),
        },
      });
    }
  }, 100);
  return <Gauge {...config} />;
};

ReactDOM.render(<DemoGauge />, document.getElementById('container'));
