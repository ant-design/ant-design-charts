import {
  XFlowNodeCommands,
  XFlowGraphCommands,
  IconStore,
  WorkspacePanel,
  usePanelContext,
  FormItemWrapper,
  XFlowAppProvider,
  useXFlowApp,
  XFlowEdgeCommands,
  createKeybindingConfig,
  FlowchartFormPanel as FormPanel,
  FlowchartFormWrapper as FormWrapper,
  EditorPanels,
  FlowchartService,
} from '@antv/xflow';
// 临时方案
import Flowchart from './graph';

export { ToolbarPanel } from './components/toolbar';
const { NodeService, EdgeService, GroupService, CanvasService } = FlowchartService;
export {
  Flowchart,
  WorkspacePanel,
  XFlowNodeCommands,
  XFlowGraphCommands,
  usePanelContext,
  FormItemWrapper,
  IconStore,
  XFlowAppProvider,
  useXFlowApp,
  XFlowEdgeCommands,
  createKeybindingConfig,
  FormPanel,
  FormWrapper,
  EditorPanels,
  NodeService,
  EdgeService,
  GroupService,
  CanvasService,
};

export * from './interface';
