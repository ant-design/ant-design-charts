import React from 'react';
import ReactDOM from 'react-dom';

const createNode = (children: React.ReactNode, type?: string) => {
  const mountPoint = document.createElement('div');
  if (type === 'tooltip') {
    mountPoint.className = 'g2-tooltip';
  }
  ReactDOM.render(children as React.ReactElement, mountPoint);
  if (type === 'htmlString') {
    return mountPoint.innerHTML;
  }
  return mountPoint;
};

export default createNode;
