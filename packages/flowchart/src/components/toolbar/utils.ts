import { IconStore } from '@antv/xflow';
import {
  UngroupOutlined,
  SaveOutlined,
  GroupOutlined,
  GatewayOutlined,
  UndoOutlined,
  RedoOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignBottomOutlined,
  CopyOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';

/** 注册icon 类型 */
export const registerIcon = () => {
  IconStore.set('SaveOutlined', SaveOutlined);
  IconStore.set('UndoOutlined', UndoOutlined);
  IconStore.set('RedoOutlined', RedoOutlined);
  IconStore.set('VerticalAlignTopOutlined', VerticalAlignTopOutlined);
  IconStore.set('VerticalAlignBottomOutlined', VerticalAlignBottomOutlined);
  IconStore.set('GatewayOutlined', GatewayOutlined);
  IconStore.set('GroupOutlined', GroupOutlined);
  IconStore.set('UngroupOutlined', UngroupOutlined);
  IconStore.set('CopyOutlined', CopyOutlined);
  IconStore.set('SnippetsOutlined', SnippetsOutlined);
};
