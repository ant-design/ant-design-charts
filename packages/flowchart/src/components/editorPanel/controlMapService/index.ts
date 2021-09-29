import { NodeService } from './components/node';
import { EdgeService } from './components/edge';

/** 默认支持修改标签和重命名功能 */
export const defaultControlMapService = (controlMap) => {
  controlMap.set('node-service', NodeService);
  controlMap.set('edge-service', EdgeService);
  return controlMap;
};
