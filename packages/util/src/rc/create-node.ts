import React from 'react';
import { render } from '../react/render';

const mountMapping = new Map();
mountMapping.set('tooltip', document.createElement('div'));

export const createNode = (children: React.ReactElement, isTooltip = false) => {
  let mount = document.createElement('div');
  /**
   * @description tooltip 为了防止抖动，只需一个root即可
   */
  if (isTooltip) {
    mount = mountMapping.get('tooltip');
  } else {
    if (children?.key) {
      if (!mountMapping.get(children.key)) {
        mountMapping.set(children.key, mount);
      }
      mount = mountMapping.get(children.key);
    }
  }

  render(children, mount);
  return mount;
};
