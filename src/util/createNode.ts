import React from 'react';
import ReactDOM from 'react-dom';

export const createNode = (children: React.ReactElement) => {
  const mountPoint = document.createElement('div');
  ReactDOM.render(children, mountPoint);
  return mountPoint;
};
