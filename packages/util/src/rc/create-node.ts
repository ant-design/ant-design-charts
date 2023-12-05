import React from 'react';
import { render } from '../react/render';

const mountMapping = new Map();
export const createNode = (children: React.ReactElement) => {
  if (!mountMapping.has(children)) {
    mountMapping.set(children, document.createElement('div'));
  }
  render(children, mountMapping.get(children));
  return mountMapping.get(children);
};
