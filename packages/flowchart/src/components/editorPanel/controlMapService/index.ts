import { NodeService } from './components/node';
import { EdgeService } from './components/edge';
import { GroupService } from './components/group';
import { CanvasService } from './components/canvas';
import { CommandPool } from '../../toolbar/constants';

/** 默认支持修改标签和重命名功能 */
export const defaultControlMapService = (controlMap) => {
  controlMap.set('node-service', NodeService);
  controlMap.set('edge-service', EdgeService);
  // 组群需要特殊处理
  controlMap.set(CommandPool.GROUP_NODE_RENDER_ID, GroupService);
  controlMap.set('canvas-service', CanvasService);
  return controlMap;
};
