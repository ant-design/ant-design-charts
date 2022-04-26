import React, { useRef, useEffect, useCallback } from 'react';
import {
  XFlow,
  FlowchartCanvas,
  CanvasContextMenu,
  KeyBindings,
  uuidv4,
  FlowchartNodePanel,
  FlowchartFormPanel,
  CanvasScaleToolbar,
  FlowchartExtension,
  // CanvasMiniMap,
} from '@antv/xflow';
import { ToolbarPanel } from '../components/toolbar';
import { useMenuConfig } from '../components/menu';
import { setProps, setInstance, excLoadData } from '../util';
import { useCmdConfig, useKeybindingConfig } from './service';
import { FlowchartProps, IFlowchartGraph as IGraph } from '../interface';
import AppContext from '../context';
import { appendUtils } from './appendUtils';
import { DEFAULT_SCALE_TOOLBAR_PROPS } from './constants';

const Flowchart: React.FC<FlowchartProps> = (props) => {
  const {
    className,
    style,
    detailPanelProps,
    toolbarPanelProps,
    nodePanelProps = {},
    scaleToolbarPanelProps,
    contextMenuPanelProps = {},
    canvasProps = {},
    keyBindingProps,
    // miniMapProps = {},
    onAddNode,
    onAddEdge,
    onConfigChange,
    onDestroy,
    onConfigReady,
    isAutoCenter,
    data,
    mode,
    onReady,
  } = props as any;
  const uuidv4Ref = useRef<string>(uuidv4());
  const container = useRef<HTMLDivElement>();
  setProps(props, uuidv4Ref.current, container);
  const { position = { top: 40, left: 240, right: 240, bottom: 0 } } = canvasProps;
  // const { position: miniMapPosition = { bottom: 12, right: 12 }, show: showMinimMap = true } = miniMapProps;
  const graphRef = useRef<IGraph>();
  const menuConfig = useMenuConfig();
  const commandConfig = useCmdConfig({
    flowchartId: uuidv4Ref.current,
  }); // 需要 getProps
  const keybindingConfig = keyBindingProps || useKeybindingConfig();
  const { show = true } = scaleToolbarPanelProps;
  const { show: nodePanelShow = true } = nodePanelProps;
  const { show: showMenu = true } = contextMenuPanelProps;
  const loadData = useCallback(
    async (app) => {
      if (data) {
        excLoadData(app, data);
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
    <AppContext.Provider value={{ flowchartId: uuidv4Ref.current }}>
      <div
        className="xflow-canvas-container"
        data-flowchart-id={uuidv4Ref.current}
        ref={container}
        style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}
      >
        <XFlow
          className={className}
          style={style}
          commandConfig={commandConfig}
          onAppDestroy={onDestroy}
          isAutoCenter={isAutoCenter}
          onAppConfigReady={onConfigReady}
          onLoad={async (app) => {
            const X6Graph = (await app.getGraphInstance()) as any;
            setInstance(X6Graph, app, uuidv4Ref.current);
            X6Graph.flowchartId = uuidv4Ref.current;
            graphRef.current = X6Graph;
            loadData(app);
            onReady?.(appendUtils(X6Graph, app), app);
          }}
        >
          <FlowchartExtension />
          <ToolbarPanel {...toolbarPanelProps} flowchartId={uuidv4Ref.current} />
          {nodePanelShow && <FlowchartNodePanel {...nodePanelProps} />}
          <FlowchartCanvas
            config={{ ...canvasProps, onAddNode, onAddEdge, onConfigChange }}
            mode={mode}
            position={position}
          >
            {show && (
              <CanvasScaleToolbar
                layout="horizontal"
                position={{ top: 12, right: 12 }}
                style={{
                  width: 150,
                  left: 'auto',
                  background: 'transparent',
                }}
                {...Object.assign({}, DEFAULT_SCALE_TOOLBAR_PROPS, scaleToolbarPanelProps)}
              />
            )}
            {showMenu && <CanvasContextMenu config={menuConfig} />}
            {/* {showMinimMap && <CanvasMiniMap position={miniMapPosition} />} */}
          </FlowchartCanvas>
          <FlowchartFormPanel {...detailPanelProps} />
          {keyBindingProps !== false && <KeyBindings config={keybindingConfig} />}
        </XFlow>
      </div>
    </AppContext.Provider>
  );
};

export default Flowchart;
