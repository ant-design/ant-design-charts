import React from 'react';
import { render } from '../react/render';

const mountMapping = new Map();

if (typeof document !== 'undefined') {
  mountMapping.set('tooltip', document.createElement('div'));
}

export const createNode = (children: React.ReactElement, isTooltip = false) => {
  let mount: HTMLElement = null;
  /**
   * @description tooltip 为了防止抖动，只需一个root即可
   */
  if (isTooltip) {
    mount = mountMapping.get('tooltip');
  } else {
    mount = document.createElement('div');
    if (children?.key) {
      const exist = mountMapping.get(children.key);
      if (exist) {
        mount = exist;
      } else {
        mountMapping.set(children.key, mount);
      }
    }
  }

  render(children, mount);
  return mount;
};
