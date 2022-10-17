import { render } from './render';

export const createNode = (children: React.ReactNode, className: string) => {
  const mountPoint = document.createElement('div');
  mountPoint.className = className;
  render(children as React.ReactElement, mountPoint);
  return mountPoint;
};
