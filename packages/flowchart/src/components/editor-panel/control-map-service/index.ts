import { NodeService } from './components/node';
import { EdgeService } from './components/edge';
import { GroupService } from './components/group';
import { CanvasService } from './components/canvas';
import { EditorPanels } from './components/fields';

/** 默认支持修改标签和重命名功能 */
export const defaultControlMapService = (controlMap) => {
  controlMap.set('node-service', NodeService);
  controlMap.set('edge-service', EdgeService);
  controlMap.set('group-service', GroupService);
  controlMap.set('canvas-service', CanvasService);
  return controlMap;
};

export { EditorPanels, NodeService, EdgeService, GroupService, CanvasService };
