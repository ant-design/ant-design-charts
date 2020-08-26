import React, { useEffect } from 'react';
import G6, { TreeGraph } from '@antv/g6/es';
import { INode, IEdge } from '@antv/g6/es/interface/item';
import { TreeGraphData, NodeConfig, IG6GraphEvent } from '@antv/g6/es/types';
import { ErrorBoundary } from '../base';
import { customIconNode } from './customItems';
import { getGraphSize, processMinimap } from './util'
import { RelationGraph } from './types';
import useGraph from '../hooks/useGraph';

const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2
  }
}

const defaultNodeStyle = {
  fill: '#91d5ff',
  stroke: '#40a9ff',
  radius: 5
}

const defaultEdgeStyle = {
  stroke: '#91d5ff',
  endArrow: {
    path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
    fill: '#91d5ff',
    d: -20
  }
}

const defaultLayout = {
  type: 'compactBox',
  direction: 'TB',
  getId: function getId(d: NodeConfig) {
    return d.id;
  },
  getHeight: function getHeight() {
    return 16;
  },
  getWidth: function getWidth() {
    return 16;
  },
  getVGap: function getVGap() {
    return 40;
  },
  getHGap: function getHGap() {
    return 70;
  },
}

const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12
  }
}
const OrganizationTreeGraphComponent: React.FC<RelationGraph> = ({
  data,
  className,
  style,
  width,
  height,
  nodeType = 'rect',
  edgeType = 'flow-line',
  collapseExpand = false,
  nodeSize = [120, 40],
  nodeLabelCfg = defaultLabelCfg,
  edgeLabelCfg = defaultLabelCfg,
  layout = defaultLayout,
  enableEdit = false,
  minimapCfg,
  nodeStyle = defaultNodeStyle,
  edgeStyle = defaultEdgeStyle,
  nodeStateStyles = defaultStateStyles,
  edgeStateStyles = defaultStateStyles,
  handleNodeClick,
  handleEdgeClick,
  handleNodeHover,
  handleNodeUnHover,
  handleEdgeHover,
  handleEdgeUnHover,
  handleCanvasClick,
  graphRef
}) => {
  const props = {
    data,
    className,
    style,
    width,
    height,
    nodeType,
    edgeType,
    collapseExpand,
    nodeSize,
    nodeLabelCfg,
    edgeLabelCfg,
    layout,
    enableEdit,
    minimapCfg,
    nodeStyle,
    edgeStyle,
    nodeStateStyles,
    edgeStateStyles,
    handleNodeClick,
    handleEdgeClick,
    handleNodeHover,
    handleNodeUnHover,
    handleEdgeHover,
    handleEdgeUnHover,
    handleCanvasClick,
    graphRef
  };

  // let graph: TreeGraph;

  if (!graphRef) graphRef = React.useRef();

  const container = React.useRef(null);

  useGraph(graphRef!.current, props, container);

  useEffect(() => {

    const graphSize = getGraphSize(width, height, container);

    if (!graphRef!.current || graphRef!.current.destroyed) {
      if (nodeType === 'icon-node') {
        customIconNode({  enableEdit });
      }
      graphRef!.current = new G6.TreeGraph({
        container: container.current as any,
        width: graphSize[0],
        height: graphSize[1],
        linkCenter: true,
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          type: nodeType,
          size: nodeSize,
          style: nodeStyle,
          labelCfg: nodeLabelCfg
        },
        defaultEdge: {
          type: edgeType,
          style: edgeStyle,
          labelCfg: edgeLabelCfg
        },
        nodeStateStyles,
        edgeStateStyles,
        layout
      });
      // if (graphRef) {
      //   graphRef!.current = graph;
      // }
    }

    processMinimap(minimapCfg, graphRef!.current);

    graphRef!.current.data(data);
    graphRef!.current.render();
    graphRef!.current.fitView();

    if (collapseExpand) {
      graphRef!.current.addBehaviors({
        type: 'collapse-expand',
        onChange: function onChange(item, collapsed) {
          if (!item) {
            return false
          }
          const data = item.get('model').data;
          data.collapsed = collapsed;
          return true;
        },
      }, 'default')
    }

    graphRef!.current.on('node:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as INode
      graphRef!.current!.setItemState(item, 'hover', true)
      if (handleNodeHover) {
        handleNodeHover(item, graphRef!.current!)
      }
    })

    graphRef!.current.on('node:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as INode
      graphRef!.current!.setItemState(item, 'hover', false)
      if (handleNodeUnHover) {
        handleNodeUnHover(item, graphRef!.current!)
      }
    })

    graphRef!.current.on('node:click', (evt: IG6GraphEvent) => {
      const { item, target } = evt
      const targetType = target.get('type')
      const name = target.get('name')

      // 增加元素
      if (targetType === 'marker') {
        const model = (item as INode).getModel() as TreeGraphData
        if (name === 'add-item') {
          if (!model.children) {
            model.children = []
          }
          const tmpId = Math.random().toString(36).slice(-8)
          model.children.push({
            id: tmpId,
            label: tmpId
          });
          (graphRef!.current! as TreeGraph).updateChild(model, model.id)
        } else if (name === 'remove-item') {
          (graphRef!.current! as TreeGraph).removeChild(model.id)
        }
      } else {
        if (handleNodeClick) {
          handleNodeClick(item as INode, graphRef!.current!)
        }
      }
    })

    graphRef!.current.on('edge:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      graphRef!.current!.setItemState(item, 'hover', true)
      if (handleEdgeHover) {
        handleEdgeHover(item, graphRef!.current!)
      }
    })

    graphRef!.current.on('edge:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      graphRef!.current!.setItemState(item, 'hover', false)
      if (handleEdgeUnHover) {
        handleEdgeUnHover(item, graphRef!.current!)
      }
    })

    graphRef!.current.on('edge:click', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      if (handleEdgeClick) {
        handleEdgeClick(item, graphRef!.current!)
      }
    })
    
    graphRef!.current.on('canvas:click', (evt: IG6GraphEvent) => {
      handleCanvasClick && handleCanvasClick(graphRef!.current!);
    })

    return () => graphRef!.current!.destroy()
  }, []);
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default OrganizationTreeGraphComponent;
