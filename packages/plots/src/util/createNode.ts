import React from 'react';
// @ts-ignore
import { createRoot } from 'react-dom/client';

const createNode = (children: React.ReactNode, type?: string) => {
  const mountPoint = document.createElement('div');
  if (type === 'tooltip') {
    mountPoint.className = 'g2-tooltip';
  }
  const root = createRoot(mountPoint);
  root.render(children as React.ReactElement);
  return mountPoint;
};

export default createNode;
