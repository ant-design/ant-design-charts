import React from 'react';
import { render } from '../react/render';

const mountMapping = new Map();
export const createNode = (children: React.ReactElement) => {
  let mount = document.createElement('div');
  if (children?.key) {
    if (!mountMapping.get(children.key)) {
      mountMapping.set(children.key, mount);
    }
    mount = mountMapping.get(children.key);
  }
  render(children, mount);
  return mount;
};
