import React from 'react';
import { render } from './render';

const TOOLTIP_CONTAINER_MAPPING = new Map();

const createNode = (children: React.ReactElement, type?: string, uuid?: string) => {
  let mountPoint = document.createElement('div');
  if (type === 'tooltip') {
    mountPoint.setAttribute('data-uuid', uuid);
    if (TOOLTIP_CONTAINER_MAPPING.has(uuid)) {
      mountPoint = TOOLTIP_CONTAINER_MAPPING.get(uuid);
    } else {
      TOOLTIP_CONTAINER_MAPPING.set(uuid, mountPoint);
    }
    mountPoint.className = 'g2-tooltip';
  }
  render(children, mountPoint);
  return mountPoint;
};

export default createNode;
