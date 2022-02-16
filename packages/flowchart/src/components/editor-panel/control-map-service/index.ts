import { NodeArrange } from './components/node-arrange';
import { EdgeService } from './components/edge';
import { GroupService } from './components/group';
import { CanvasService } from './components/canvas';
import { EditorPanels } from './components/fields';
import { NodeStyle } from './components/node-style';
import { NodeText } from './components/node-text';
import { IControlMapService, IControlMap } from '../../canvas-json-schema-form/interface';

/** 默认支持修改标签和重命名功能 */
export const defaultControlMapService: IControlMapService = (controlMap: IControlMap) => {
  controlMap.set('node-style', NodeStyle);
  controlMap.set('node-text', NodeText);
  controlMap.set('node-arrange', NodeArrange);
  controlMap.set('edge-service', EdgeService);
  controlMap.set('group-service', GroupService);
  controlMap.set('canvas-service', CanvasService);
  return controlMap;
};

export { EditorPanels, NodeStyle, NodeText, NodeArrange, EdgeService, GroupService, CanvasService };
