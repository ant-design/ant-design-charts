import React from 'react';
import { render } from '../react/render';

export const createNode = (children: React.ReactElement, options: object = {}) => {
  const mountPoint = document.createElement('div');
  Object.keys(options).forEach((key) => {
    mountPoint[key] = options[key];
  });
  render(children, mountPoint);
  return mountPoint;
};
