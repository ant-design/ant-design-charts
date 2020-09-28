import React from 'react';
import ReactDOM from 'react-dom';

const createNode = (children: React.ReactNode) => {
  const mountPoint = document.createElement('div');
  mountPoint.className = 'g2-tooltip';
  ReactDOM.render(children as React.ReactElement, mountPoint);
  return mountPoint;
};

export default createNode;
