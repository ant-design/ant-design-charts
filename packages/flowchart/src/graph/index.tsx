import React, { useRef, useEffect, useCallback } from 'react';
import {
  XFlow,
  XFlowCanvas,
  XFlowGraphCommands,
  NsGraphCmd,
  CanvasContextMenu,
  KeyBindings,
  uuidv4,
  // CanvasMiniMap,
} from '@antv/xflow';
import { NodeTreePanel } from '../components/canvas-node-tree-panel';
import { CanvasScaleToolbar } from '../components/canvas-scale-toolbar';
import { treeDataService, searchService, onNodeDrop } from '../components/node-panel';
import { FormPanel } from '../components/editor-panel';
import { ToolbarPanel } from '../components/toolbar';
import { useMenuConfig } from '../components/menu';
import Theme from '../theme';
import { setProps, setInstance } from '../util';
import { useCmdConfig } from './service/command';
import { FlowchartProps, IFlowchartGraph as IGraph } from '../interface';
import AppContext from '../context';
import { appendUtils } from './appendUtils';
import { useGraphConfig, useGraphHook } from './service';
import { useKeybindingConfig } from './service/keyBinding';

import '@antv/xflow/dist/index.css';
export const CONTAINER_CLASS = 'flowchart-container-collpase';

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
    // miniMapProps = {},
    onDestroy,
    onConfigReady,
    isAutoCenter,
    data,
    onReady,
  } = props;
  const uuidv4Ref = useRef<string>(uuidv4());
  const container = useRef<HTMLDivElement>();
  setProps(props, uuidv4Ref.current, container);
  const { position = { top: 40, left: 240, right: 240, bottom: 0 } } = canvasProps;
  // const { position: miniMapPosition = { bottom: 12, right: 12 }, show: showMinimMap = true } = miniMapProps;
  const graphRef = useRef<IGraph>();
  const graphConfig = useGraphConfig(props);
  const menuConfig = useMenuConfig();
  const hookConfig = useGraphHook({
    flowchartId: uuidv4Ref.current,
  });
  const commandConfig = useCmdConfig({
    flowchartId: uuidv4Ref.current,
  }); // 需要 getProps
  const keybindingConfig = useKeybindingConfig();
  const { show = true } = scaleToolbarPanelProps;
  const { show: nodePanelShow = true } = nodePanelProps;
  const { show: showMenu = true } = contextMenuPanelProps;
  const loadData = useCallback(
    async (app) => {
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
    },
    [data],
  );

  useEffect(() => {
    return () => {
      graphRef.current?.dispose();
    };
  }, []);

  return (
    <AppContext.Provider value={{ theme: Theme[theme], flowchartId: uuidv4Ref.current }}>
      <div
        className="xflow-canvas-container"
        data-flowchartId={uuidv4Ref.current}
        ref={container}
        style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}
      >
        <XFlow
          className={className}
          style={style}
          commandConfig={commandConfig}
          hookConfig={hookConfig}
          onAppDestroy={onDestroy}
          isAutoCenter={isAutoCenter}
          onAppConfigReady={onConfigReady}
          onLoad={async (app) => {
            const X6Graph = await app.getGraphInstance();
            setInstance(X6Graph, app, uuidv4Ref.current);
            // @ts-ignore
            X6Graph.flowchartId = uuidv4Ref.current;
            graphRef.current = X6Graph;
            loadData(app);
            onReady?.(appendUtils(X6Graph));
          }}
        >
          <ToolbarPanel {...toolbarPanelProps} flowchartId={uuidv4Ref.current} />
          {nodePanelShow && (
            <NodeTreePanel
              flowchartId={uuidv4Ref.current}
              searchService={searchService}
              treeDataService={treeDataService}
              onNodeDrop={onNodeDrop}
              {...nodePanelProps}
            />
          )}
          <XFlowCanvas config={graphConfig} position={position}>
            {show && <CanvasScaleToolbar position={{ top: 12, right: 12 }} {...scaleToolbarPanelProps} />}
            {showMenu && <CanvasContextMenu config={menuConfig} />}
            {/* {showMinimMap && <CanvasMiniMap position={miniMapPosition} />} */}
          </XFlowCanvas>
          <FormPanel {...detailPanelProps} />
          <KeyBindings config={keybindingConfig} />
        </XFlow>
      </div>
    </AppContext.Provider>
  );
};

export default Flowchart;
