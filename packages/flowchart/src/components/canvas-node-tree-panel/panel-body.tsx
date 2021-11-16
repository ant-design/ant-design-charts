import React from 'react';
import { Empty, Popover, Collapse } from 'antd';
import { IProps, ITreeNode, IOnFolderExpand, INodeFactoryArgs } from './interface';
import { Addon, Graph } from '@antv/x6';
import {
  IModelService,
  IGraphConfig,
  NsGraph,
  getNodeReactComponent,
  useXFlowApp,
  IGraphCommandService,
} from '@antv/xflow';
import { NsTreePanelData } from './service';
import { XFlowNode } from './node';

const { Panel } = Collapse;

export const defaultNodeFactory = (args: INodeFactoryArgs) => {
  return new XFlowNode(args);
};

interface IConfigRenderOptions {
  graphConfig: IGraphConfig;
  modelService: IModelService;
  commandService: IGraphCommandService;
  nodeConfig: NsGraph.INodeConfig;

  onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const renderNode = (props: IConfigRenderOptions) => {
  const { nodeConfig, onMouseDown, graphConfig, modelService, commandService } = props;

  if (!graphConfig) {
    return <div />;
  }

  const renderKey = graphConfig.nodeTypeParser(nodeConfig);
  const reactComponent = graphConfig.nodeRender.get(renderKey);

  return (
    <div onMouseDown={onMouseDown}>
      {React.createElement(reactComponent as React.FC<any>, {
        commands: commandService,
        modelService: modelService,
        data: nodeConfig,
        isNodeTreePanel: true,
      })}
    </div>
  );
};

interface ITitleProps {
  prefixClz: string;
  item: any;
  graphConfig: any;
  modelService: IModelService;
  commandService: IGraphCommandService;
  popoverContent: React.ReactNode;
  onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const NodeTitle = (props: ITitleProps) => {
  const [isVisible, setVisible] = React.useState(false);
  const { prefixClz, graphConfig, commandService, modelService, popoverContent, onMouseDown, item } = props;
  return (
    <>
      {popoverContent && (
        <Popover
          placement="right"
          destroyTooltipOnHide
          content={popoverContent}
          visible={isVisible}
          style={{
            color: 'red',
          }}
          onVisibleChange={(val) => {
            setVisible(val);
          }}
        >
          <div
            className={`${prefixClz}-node-wrapper`}
            onMouseEnter={() => {
              setVisible(true);
            }}
          >
            {renderNode({
              graphConfig,
              commandService: commandService,
              onMouseDown,
              modelService,
              nodeConfig: item,
            })}
          </div>
        </Popover>
      )}
      {!popoverContent && (
        <div
          className={`${prefixClz}-node-wrapper`}
          onMouseEnter={() => {
            setVisible(true);
          }}
        >
          {renderNode({
            graphConfig,
            commandService: commandService,
            onMouseDown,
            modelService,
            nodeConfig: item,
          })}
        </div>
      )}
    </>
  );
};
export interface IBodyProps extends IProps {
  state: NsTreePanelData.IState;
  onFolderExpand: IOnFolderExpand;
}

export const NodePanelBody: React.FC<IBodyProps> = (props) => {
  const {
    x6NodeFactory,
    dndOptions,
    onNodeDrop,
    state,
    prefixClz,
    registerNode,
    defaultActiveKey = ['official', 'custom'],
  } = props;
  const { title = '混合节点' } = registerNode ?? {};
  const { graphProvider, modelService, commandService } = useXFlowApp();

  const [dnd, setDnd] = React.useState<Addon.Dnd>();
  /** 获取graph实例 */
  const [graph, setGraph] = React.useState<Graph>();
  graphProvider.getGraphInstance().then((x6Graph) => {
    setGraph(x6Graph);
  });

  let graphConfig = undefined;
  graphProvider.getGraphOptions().then((x6GraphConfig) => {
    graphConfig = x6GraphConfig;
  });

  React.useEffect(() => {
    if (!graph) {
      return;
    }
    const dndInstance = new Addon.Dnd({
      scaled: false,
      animation: false,
      ...dndOptions,
      target: graph,
      /** 这里考虑到需要新增群组的需求，不使用x6的getDropNod方法
       * 在validateNode时调用command添加
       */
      validateNode: async (droppingNode, options) => {
        const nodeConfig = {
          ...droppingNode.getData<NsGraph.INodeConfig>(),
          ...droppingNode.getPosition(),
        };
        if (onNodeDrop) {
          await onNodeDrop(nodeConfig, commandService, modelService);
        } else {
          console.error('onNodeDrop method is required in NodeTree Panel');
        }
        return false;
      },
    });
    setDnd(dndInstance);
  }, [commandService, dndOptions, graph, modelService, onNodeDrop]);

  const onMouseDown = React.useCallback(
    (nodeConfig: NsGraph.INodeConfig) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (!graph || !dnd || !graphConfig) {
        return;
      }
      const renderKey = graphConfig.nodeTypeParser(nodeConfig);
      const { width = 180, height = 40 } = nodeConfig;
      const reactComponent = graphConfig.nodeRender.get(renderKey);
      const wrappedComponent = getNodeReactComponent(reactComponent, commandService, modelService);
      const nodeData = {
        data: nodeConfig,
        width,
        height,
        // X6_NODE_PORTAL_NODE_VIEW
        view: graphConfig.graphId,
        component: wrappedComponent,
      };
      const x6Node = x6NodeFactory ? x6NodeFactory(nodeData) : defaultNodeFactory(nodeData);
      dnd.start(x6Node, e.nativeEvent as any);
    },
    [commandService, dnd, graph, graphConfig, modelService, x6NodeFactory],
  );

  const renderTree = React.useCallback(
    (treeList: ITreeNode[] = []) => {
      return treeList.map((item) => {
        const { popoverContent } = item;
        return (
          <NodeTitle
            item={item}
            key={item.id}
            onMouseDown={onMouseDown(item)}
            popoverContent={popoverContent}
            prefixClz={prefixClz}
            modelService={modelService}
            commandService={commandService}
            graphConfig={graphConfig}
          />
        );
      });
    },
    [commandService, graphConfig, modelService, onMouseDown, prefixClz],
  );
  const customNode = state.treeData.filter((item) => item.isCustom);
  const officialNode = state.treeData.filter((item) => !item.isCustom);

  const searchCustomNode = state.searchList.filter((item) => item.isCustom);
  const searchOfficialNode = state.searchList.filter((item) => !item.isCustom);
  const hasCustomNode = customNode.length > 0;

  return (
    <React.Fragment>
      <div className={`${prefixClz}-body`}>
        <Collapse defaultActiveKey={defaultActiveKey} style={{ border: 'none' }}>
          <Panel header="通用节点" key="official" style={{ border: 'none' }}>
            {!state.keyword && <div className={`${prefixClz}-official`}>{renderTree(officialNode)}</div>}
            {state.searchList.length > 0 && (
              <div className={`${prefixClz}-official`}>{renderTree(searchOfficialNode)}</div>
            )}
          </Panel>
          {hasCustomNode && (
            <Panel header={title} key="custom" style={{ border: 'none' }}>
              {!state.keyword && <div className={`${prefixClz}-custom`}>{renderTree(customNode)}</div>}
              {state.searchList.length > 0 && (
                <div className={`${prefixClz}-custom`}>{renderTree(searchCustomNode)}</div>
              )}
            </Panel>
          )}
        </Collapse>
        {state.keyword && state.searchList.length === 0 && <Empty style={{ marginTop: '48px' }} />}
      </div>
    </React.Fragment>
  );
};
