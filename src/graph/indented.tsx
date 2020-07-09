import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import { ITreeGraph } from '@antv/g6/lib/interface/graph';
import { RelationCharts } from './types';
import { ErrorBoundary } from '../base';
import './customItems';


const defaultStateStyles = {
  hover: {
    stroke: '#1890ff',
    lineWidth: 2
  }
}

const defaultNodeSize = [120, 40];

const defaultNodeStyle = {
  stroke: '#40a9ff',
}

const defaultNodeAnchorPoints = [[0, 0.5], [1, 0.5]];

const defaultEdgeStyle = {
  stroke: '#ccc',
  endArrow: {
    path: G6.Arrow.vee(10, 10),
    fill: '#ccc',
  }
}

const defaultLayout = {
  type: 'indented',
  direction: 'LR',
  dropCap: false,
  indent: 250,
  getHeight: () => {
    return 60;
  },
  getWidth: (d: any) => {
    return 100;
  }
}

const defaultLabelCfg = {
  style: {
    fill: '#000',
    fontSize: 12
  }
}

const IndentedTree: React.SFC<RelationCharts> = ({
  data,
  className,
  style,
  width = 500,
  height = 500,
  nodeType = 'card-node',
  edgeType = 'cubic-horizontal',
  behaviors = ['zoom-canvas', 'drag-canvas'],
  nodeSize = defaultNodeSize,
  nodeLabelCfg = defaultLabelCfg,
  nodeAnchorPoints = defaultNodeAnchorPoints,
  layout = defaultLayout,
  showMinimap = false,
  nodeStyle = defaultNodeStyle,
  edgeStyle = defaultEdgeStyle,
  nodeStateStyles = defaultStateStyles,
  edgeStateStyles = defaultStateStyles,
  handleEdgeClick,
  handleEdgeHover,
  handleEdgeUnHover,
  collapseExpand = true,
  otherGraphOptions = {}
}) => {
  let graph: ITreeGraph;
  const container = React.useRef(null);

  useEffect(() => {
    if (!graph) {
      graph = new G6.TreeGraph({
        container: container.current as any,
        width,
        height,
        modes: {
          default: behaviors,
        },
        defaultNode: {
          type: nodeType,
          size: nodeSize,
          style: nodeStyle,
          anchorPoints: nodeAnchorPoints,
          labelCfg: nodeLabelCfg
        },
        defaultEdge: {
          type: edgeType,
          style: edgeStyle,
        },
        nodeStateStyles,
        edgeStateStyles,
        layout,
        ...otherGraphOptions
      });
    }

    if (showMinimap) {
      const minimap = new G6.Minimap({
        size: [150, 100]
      })

      graph.addPlugin(minimap)
    }

    graph.data(data);
    graph.render();
    graph.fitView();

    // graph.on('edge:mouseenter', (evt: IG6GraphEvent) => {
    //   const item = evt.item as IEdge
    //   graph.setItemState(item, 'hover', true)
    //   if (handleEdgeHover) {
    //     handleEdgeHover(item, graph)
    //   }
    // })

    // graph.on('edge:mouseleave', (evt: IG6GraphEvent) => {
    //   const item = evt.item as IEdge
    //   graph.setItemState(item, 'hover', false)
    //   if (handleEdgeUnHover) {
    //     handleEdgeUnHover(item, graph)
    //   }
    // })

    // graph.on('edge:click', (evt: IG6GraphEvent) => {
    //   const item = evt.item as IEdge
    //   if (handleEdgeClick) {
    //     handleEdgeClick(item, graph)
    //   }
    // })

    if (collapseExpand) {
      graph.on('node:click', (e: any) => {
        if (e.target.get('name') === 'collapse-icon') {
          e.item.getModel().collapsed = !e.item.getModel().collapsed;
          graph.setItemState(e.item, 'collapsed', e.item.getModel().collapsed);
          graph.layout();
        }
      })
    }

    return () => graph.destroy()
  }, []);
  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
};

export default IndentedTree;
