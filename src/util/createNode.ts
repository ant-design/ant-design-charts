import React from 'react';
import ReactDOM from 'react-dom';

const createNode = (children: React.ReactNode) => {
  const mountPoint = document.createElement('div');
  mountPoint.className = 'g2-tooltip eva-charts-tootip';
  ReactDOM.render(children as React.ReactElement, mountPoint);
  return mountPoint;
};

export default createNode;
