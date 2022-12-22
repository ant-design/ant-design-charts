import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyColumn } from '@ant-design/plots';

const DemoTinyColumn = () => {
  const data = [274, 337, 81, 497, 666, 219, 269];
  const config = {
    height: 64,
    autoFit: false,
    data,
    tooltip: {
      customContent: function (x, data) {
        return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
      },
    },
  };
  return <TinyColumn {...config} />;
};

ReactDOM.render(<DemoTinyColumn />, document.getElementById('container'));
