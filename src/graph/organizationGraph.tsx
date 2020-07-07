import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import { IGraph, ITreeGraph } from '@antv/g6/lib/interface/graph';
import { INode, IEdge } from '@antv/g6/lib/interface/item';
import { EdgeConfig, TreeGraphData, StateStyles, ShapeStyle, NodeConfig, IG6GraphEvent } from '@antv/g6/lib/types';
import { ErrorBoundary } from '../base';

export interface OrganizationGraph {
  style?: React.CSSProperties;
  className?: string;
  data: TreeGraphData;
  width?: number;
  height?: number;
  nodeType?: string;
  edgeType?: string;
  nodeStyle?: ShapeStyle;
  edgeStyle?: ShapeStyle;
  nodeStateStyles?: StateStyles;
  edgeStateStyles?: StateStyles;
  nodeSize?: number | number[];
  labelCfg?: {
    style: {
      stroke?: string;
      fontSize?: number;
    }
  };
  layout?: any;
  enableEdit?: boolean;
  showMinimap?: boolean;
  handleNodeClick?: (item: INode, graph: IGraph) => void;
  handleEdgeClick?: (item: IEdge, graph: IGraph) => void;
  handleNodeHover?: (item: INode, graph: IGraph) => void;
  handleNodeUnHover?: (item: INode, graph: IGraph) => void;
  handleEdgeHover?: (item: IEdge, graph: IGraph) => void;
  handleEdgeUnHover?: (item: IEdge, graph: IGraph) => void;
  collapseExpand?: boolean;
}

G6.registerEdge('flow-line', {
  draw(cfg: EdgeConfig, group) {
    const startPoint = cfg.startPoint;
    const endPoint = cfg.endPoint;

    const { style = {} } = cfg
    const shape = group!.addShape('path', {
      attrs: {
        stroke: style.stroke,
        endArrow: style.endArrow,
        path: [
          ['M', startPoint!.x, startPoint!.y],
          ['L', startPoint!.x, (startPoint!.y + endPoint!.y) / 2],
          ['L', endPoint!.x, (startPoint!.y + endPoint!.y) / 2,],
          ['L', endPoint!.x, endPoint!.y],
        ],
      },
    });
    return shape;
  }
});

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

const OrganizationGraphComponent: React.FC<OrganizationGraph> = ({
  data,
  className,
  style,
  width = 500,
  height = 500,
  nodeType = 'rect',
  edgeType = 'flow-line',
  collapseExpand = false,
  nodeSize = [120, 40],
  labelCfg = defaultLabelCfg,
  layout = defaultLayout,
  enableEdit = false,
  showMinimap = false,
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
    G6.registerNode('icon-node', {
      options: {
        size: [60, 20],
        stroke: '#91d5ff',
        fill: '#91d5ff'
      },
      draw(cfg: NodeConfig, group) {
        const styles = this.getShapeStyle(cfg)
        const { labelCfg = {} } = cfg
        
        const keyShape = group!.addShape('rect', {
          attrs: {
            ...styles,
            x: 0,
            y: 0
          }
        })
    
        /**
         * leftIcon 格式如下：
         *  {
         *    style: ShapeStyle;
         *    img: ''
         *  }
         */
        if (cfg.leftIcon) {
          const { style, img } = cfg.leftIcon as any
          group!.addShape('rect', {
            attrs: {
              x: 1,
              y: 1,
              width: 38,
              height: styles.height - 2,
              fill: '#8c8c8c',
              ...style
            }
          })
  
          group!.addShape('image', {
            attrs: {
              x: 8,
              y: 8,
              width: 24,
              height: 24,
              img: img || 'https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png',
            },
            name: 'image-shape',
          });
        }

        if (enableEdit) {
          group!.addShape('marker', {
            attrs: {
              x: styles.width / 3,
              y: styles.height + 6,
              r: 6,
              stroke: '#73d13d',
              cursor: 'pointer',
              symbol: G6.Marker.expand
            },
            name: 'add-item'
          })
      
          group!.addShape('marker', {
            attrs: {
              x: styles.width * 2 / 3,
              y: styles.height + 6,
              r: 6,
              stroke: '#ff4d4f',
              cursor: 'pointer',
              symbol: G6.Marker.collapse
            },
            name: 'remove-item'
          })
        }
    
        if (cfg.label) {
          group!.addShape('text', {
            attrs: {
              ...labelCfg.style,
              text: cfg.label,
              x: styles.width / 2,
              y: styles.height / 1.5,
            }
          })
        }
    
        return keyShape
      }
    }, 'rect')

    if (!graph) {
      
      graph = new G6.TreeGraph({
        container: container.current as any,
        width,
        height,
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
          labelCfg
        },
        defaultEdge: {
          type: edgeType,
          style: edgeStyle,
        },
        nodeStateStyles,
        edgeStateStyles,
        layout
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

export default OrganizationGraphComponent;
