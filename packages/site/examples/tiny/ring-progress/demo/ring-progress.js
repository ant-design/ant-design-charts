import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/charts';

const DemoRingProgress = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  return <RingProgress {...config} />;
};

ReactDOM.render(<DemoRingProgress />, document.getElementById('container'));
