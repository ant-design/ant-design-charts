import React from 'react';
import { render } from 'rc-utils';

const createNode = (children: React.ReactElement, extra?: object) => {
  let mountPoint = document.createElement('div');
  if (extra) {
    Object.keys(extra).forEach((key) => {
      mountPoint.setAttribute(key, extra[key]);
    });
  }
  render(children, mountPoint);
  return mountPoint;
};

export default createNode;
