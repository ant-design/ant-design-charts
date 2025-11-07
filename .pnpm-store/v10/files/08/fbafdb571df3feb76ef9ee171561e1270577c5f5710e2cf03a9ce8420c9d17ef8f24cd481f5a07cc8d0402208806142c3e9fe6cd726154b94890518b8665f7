import { ElementEvent } from '@antv/g';
import { Group } from '../shapes/Group';
import type { DisplayObject } from '../shapes/DisplayObject';
import { hide } from './visibility';

class OffscreenGroup extends Group {
  constructor(...args: any[]) {
    super(...args);
    this.isMutationObserved = true;
    this.addEventListener(ElementEvent.INSERTED, () => {
      hide(this);
    });
  }
}

export function createOffscreenGroup(container: DisplayObject) {
  const group = container.appendChild(
    new OffscreenGroup({
      class: 'offscreen',
    })
  );
  hide(group);
  return group;
}

export function isInOffscreenGroup(group: Group) {
  let ancestor: any = group;
  while (ancestor) {
    if (ancestor.className === 'offscreen') {
      return true;
    }
    ancestor = ancestor.parent;
  }
  return false;
}
