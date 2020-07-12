import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import { ITreeGraph } from '@antv/g6/lib/interface/graph';
import { INode, IEdge } from '@antv/g6/lib/interface/item';
import { TreeGraphData, NodeConfig, IG6GraphEvent } from '@antv/g6/lib/types';
import { ErrorBoundary } from '../base';
import { customIconNode } from './customItems';
import { getGraphSize, processMinimap } from './util'
import { RelationGraph } from './types';

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
  handleEdgeUnHover
}) => {
  let graph: ITreeGraph;
  const container = React.useRef(null);

  useEffect(() => {

    const graphSize = getGraphSize(width, height, container);

    if (!graph) {
      if (nodeType === 'icon-node') {
        customIconNode({  enableEdit });
      }
      graph = new G6.TreeGraph({
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
    }

    processMinimap(minimapCfg, graph);

    graph.data(data);
    graph.render();
    graph.fitView();

    if (collapseExpand) {
      graph.addBehaviors({
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

    graph.on('node:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as INode
      graph.setItemState(item, 'hover', true)
      if (handleNodeHover) {
        handleNodeHover(item, graph)
      }
    })

    graph.on('node:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as INode
      graph.setItemState(item, 'hover', false)
      if (handleNodeUnHover) {
        handleNodeUnHover(item, graph)
      }
    })

    graph.on('node:click', (evt: IG6GraphEvent) => {
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
          })
          graph.updateChild(model, model.id)
        } else if (name === 'remove-item') {
          graph.removeChild(model.id)
        }
      } else {
        if (handleNodeClick) {
          handleNodeClick(item as INode, graph)
        }
      }
    })

    graph.on('edge:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      graph.setItemState(item, 'hover', true)
      if (handleEdgeHover) {
        handleEdgeHover(item, graph)
      }
    })

    graph.on('edge:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      graph.setItemState(item, 'hover', false)
      if (handleEdgeUnHover) {
        handleEdgeUnHover(item, graph)
      }
    })

    graph.on('edge:click', (evt: IG6GraphEvent) => {
      const item = evt.item as IEdge
      if (handleEdgeClick) {
        handleEdgeClick(item, graph)
      }
    })

    return () => graph.destroy()
  }, []);
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default OrganizationTreeGraphComponent;
