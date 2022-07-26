import React from 'react';
import { render } from './render';

const createNode = (children: React.ReactElement, type?: string) => {
  const mountPoint = document.createElement('div');
  if (type === 'tooltip') {
    mountPoint.className = 'g2-tooltip';
  }
  render(children, mountPoint);
  return mountPoint;
};

export default createNode;
