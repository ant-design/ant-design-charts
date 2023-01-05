import { render } from './render';
import { setStyles } from './set-styles';

export const createNode = (children: React.ReactNode, attrs: object = {}, styles?: React.CSSProperties) => {
  const mountPoint = document.createElement('div');
  Object.keys(attrs).forEach((key) => {
    mountPoint[key] = attrs[key];
  });
  if (styles) {
    setStyles(mountPoint, styles);
  }
  render(children as React.ReactElement, mountPoint);
  return mountPoint;
};
