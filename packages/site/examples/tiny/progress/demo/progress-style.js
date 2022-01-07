import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Progress } from '@ant-design/plots';

const DemoProgress = () => {
  const config = {
    height: 100,
    width: 300,
    autoFit: false,
    percent: 0.536,
    barWidthRatio: 0.3,
    color: ['#F4664A', '#E8EDF3'],
  };
  return <Progress {...config} />;
};

ReactDOM.render(<DemoProgress />, document.getElementById('container'));
