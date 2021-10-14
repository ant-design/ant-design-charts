import React from 'react';
import {
  XFlow,
  XFlowCanvas,
  XFlowGraphCommands,
  NsGraphCmd,
  FrontendApplication,
  CanvasScaleToolbar,
  CanvasContextMenu,
} from '@ali/xflow';
import { NodeTreePanel } from '../components/canvas-node-tree-panel';
import { treeDataService, searchService, onNodeDrop } from '../components/nodePanel';
import { FormPanel } from '../components/editorPanel';
import { ToolbarPanel } from '../components/toolbar';
import { useMenuConfig } from '../components/menu';
import Theme from '../theme';
import { setProps } from '../util';
import { FlowchartProps } from '../interface';

import AppContext from '../context';
import { useGraphConfig, useGraphHook } from './service';

import './index.less';

const Flowchart: React.FC<FlowchartProps> = (props) => {
  const {
    className,
    style,
    theme = 'light',
    detailPanelProps,
    toolbarPanelProps,
    nodePanelProps,
    scaleToolbarPanelProps,
    contextMenuPanelProps,
    data,
  } = props;
  setProps(props);
  const graphConfig = useGraphConfig(props);
  const menuConfig = useMenuConfig();
  const hookConfig = useGraphHook();
  const { show = true } = scaleToolbarPanelProps ?? {};
  const { show: showMenu = true } = contextMenuPanelProps ?? {};

  const loadData = async (app: FrontendApplication) => {
    if (data) {
      const res = await app.executeCommand(XFlowGraphCommands.LOAD_DATA.id, {
        loadDataService: async () => {
          return data;
        },
      } as NsGraphCmd.GraphLoadData.IArgs);
      const { graphData } = res?.contextProvider()?.getResult();
      /** 3. 画布内容渲染 */
      await app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
        graphData,
      });
    }
  };

  return (
    <AppContext.Provider value={{ theme: Theme[theme] }}>
      <XFlow
        className={className}
        style={style}
        hookConfig={hookConfig}
        onAppReadyCallback={async (app, registry) => {
          /* eslint-disable-next-line  */
          console.log(app);
          loadData(app);
        }}
      >
        <ToolbarPanel {...toolbarPanelProps} />
        <NodeTreePanel
          searchService={searchService}
          treeDataService={treeDataService}
          onNodeDrop={onNodeDrop}
          {...nodePanelProps}
        />
        <XFlowCanvas config={graphConfig} position={{ top: 40, left: 240, right: 240, bottom: 0 }}>
          {show && <CanvasScaleToolbar position={{ top: 12, right: 12 }} {...scaleToolbarPanelProps} />}
          {showMenu && <CanvasContextMenu config={menuConfig} />}
        </XFlowCanvas>
        <FormPanel {...detailPanelProps} />
      </XFlow>
    </AppContext.Provider>
  );
};

export default Flowchart;
