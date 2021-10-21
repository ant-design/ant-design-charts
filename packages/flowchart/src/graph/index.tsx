import React, { useRef, useEffect } from 'react';
import {
  XFlow,
  XFlowCanvas,
  XFlowGraphCommands,
  NsGraphCmd,
  CanvasScaleToolbar,
  CanvasContextMenu,
  usePanelContext,
  XFlowNodeCommands,
} from '@ali/xflow';
import { NodeTreePanel } from '../components/canvas-node-tree-panel';
import { treeDataService, searchService, onNodeDrop } from '../components/nodePanel';
import { FormPanel } from '../components/editorPanel';
import { ToolbarPanel } from '../components/toolbar';
import { useMenuConfig } from '../components/menu';
import Theme from '../theme';
import { setProps } from '../util';
import { appendUtils, IGraph } from './appendUtils';
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
  const { show = true } = scaleToolbarPanelProps;
  const { show: nodePanelShow = true } = nodePanelProps;
  const { show: showMenu = true } = contextMenuPanelProps;
  const loadData = async (app) => {
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
          /* eslint-disable-next-line  */
          const X6Graph = await registry.graphInstanceDefer.promise;
          graphRef.current = X6Graph;
          onReady?.(appendUtils(X6Graph));
          loadData(app);
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
      </XFlow>
    </AppContext.Provider>
  );
};

export default Flowchart;
