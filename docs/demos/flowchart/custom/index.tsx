import { Rename } from './rename';
import { Position } from './position';
import { EdgeLabel } from './label';

/** 自定义form控件 */
export const controlMapService = (controlMap) => {
  controlMap.set('custom-rename', Rename);
  controlMap.set('custom-position', Position);
  controlMap.set('custom-label', EdgeLabel);
  return controlMap;
};
