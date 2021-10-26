import React, { useRef, useEffect, useCallback } from 'react';
import {
  XFlow,
  XFlowCanvas,
  XFlowGraphCommands,
  NsGraphCmd,
  CanvasScaleToolbar,
  CanvasContextMenu,
  KeyBindings,
} from '@ali/xflow';
import { NodeTreePanel } from '../components/canvas-node-tree-panel';
import { treeDataService, searchService, onNodeDrop } from '../components/nodePanel';
import { FormPanel } from '../components/editorPanel';
import { ToolbarPanel } from '../components/toolbar';
import { useMenuConfig } from '../components/menu';
import Theme from '../theme';
import { setProps, setGrapgInstance } from '../util';
import { FlowchartProps, IGraph } from '../interface';
import AppContext from '../context';
import { appendUtils } from './appendUtils';
import { useGraphConfig, useGraphHook } from './service';
import { useKeybindingConfig } from './service/keyBinding';

import './index.less';

const Flowchart: React.FC<FlowchartProps> = (props) => {
  const {
    className,
    style,
    theme = 'light',
    detailPanelProps,
    toolbarPanelProps,
    nodePanelProps = {},
    scaleToolbarPanelProps = {},
    contextMenuPanelProps = {},
    canvasProps = {},
    data,
    onReady,
  } = props;
  setProps(props);
  const { position = { top: 40, left: 240, right: 240, bottom: 0 } } = canvasProps;
  const graphRef = useRef<IGraph>();
  const graphConfig = useGraphConfig(props);
  const menuConfig = useMenuConfig();
  const hookConfig = useGraphHook();
  const keybindingConfig = useKeybindingConfig();
  const { show = true } = scaleToolbarPanelProps;
  const { show: nodePanelShow = true } = nodePanelProps;
  const { show: showMenu = true } = contextMenuPanelProps;

  const loadData = useCallback(async (app) => {
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
  }, []);

  useEffect(() => {
    return () => {
      graphRef.current?.dispose();
    };
  }, []);

  return (
    <AppContext.Provider value={{ theme: Theme[theme] }}>
      <XFlow
        className={className}
        style={style}
        hookConfig={hookConfig}
        onLoad={async (app, registry) => {
          const X6Graph = await registry.graphInstanceDefer.promise;
          setGrapgInstance(X6Graph);
          graphRef.current = X6Graph;
          // @ts-ignore
          window.g = X6Graph;
          loadData(app);
          onReady?.(appendUtils(X6Graph));
        }}
      >
        <ToolbarPanel {...toolbarPanelProps} />
        {nodePanelShow && (
          <NodeTreePanel
            searchService={searchService}
            treeDataService={treeDataService}
            onNodeDrop={onNodeDrop}
            {...nodePanelProps}
          />
        )}

        <XFlowCanvas config={graphConfig} position={position}>
          {show && <CanvasScaleToolbar position={{ top: 12, right: 12 }} {...scaleToolbarPanelProps} />}
          {showMenu && <CanvasContextMenu config={menuConfig} />}
        </XFlowCanvas>
        <FormPanel {...detailPanelProps} />
        <KeyBindings config={keybindingConfig} />
      </XFlow>
    </AppContext.Provider>
  );
};

export default Flowchart;
