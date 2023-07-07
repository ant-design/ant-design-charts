import { render } from './render';
import { setStyles } from './set-styles';

const TOOLTIP_CONTAINER_MAPPING = new Map();

export const createNode = (
  children: React.ReactNode,
  attrs: object = {},
  type: string,
  styles?: React.CSSProperties | string,
  uuid?: string,
) => {
  if (typeof styles === 'string') {
    uuid = styles;
    styles = undefined;
  }
  let mountPoint = document.createElement('div');
  Object.keys(attrs).forEach((key) => {
    mountPoint[key] = attrs[key];
  });
  if (styles) {
    setStyles(mountPoint, styles as React.CSSProperties);
  }
  if (type === 'tooltip') {
    mountPoint.setAttribute('data-uuid', uuid);
    if (TOOLTIP_CONTAINER_MAPPING.has(uuid)) {
      mountPoint = TOOLTIP_CONTAINER_MAPPING.get(uuid);
    } else {
      TOOLTIP_CONTAINER_MAPPING.set(uuid, mountPoint);
    }
    mountPoint.className = 'g2-tooltip';
  }
  render(children as React.ReactElement, mountPoint);
  return mountPoint;
};
