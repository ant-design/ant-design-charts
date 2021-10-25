import { NodeService } from './components/node';
import { EdgeService } from './components/edge';
import { CanvasService } from './components/canvas';

/** 默认支持修改标签和重命名功能 */
export const defaultControlMapService = (controlMap) => {
  controlMap.set('node-service', NodeService);
  controlMap.set('edge-service', EdgeService);
  controlMap.set('canvas-service', CanvasService);
  return controlMap;
};
