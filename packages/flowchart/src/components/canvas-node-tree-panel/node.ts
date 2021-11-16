import { ReactShape } from '@antv/x6-react-shape';
import { Node } from '@antv/x6';
import { X6_NODE_PORTAL_NODE_VIEW } from '@antv/xflow-core/es/constants';
import { NsGraph } from '@antv/xflow-core/es/interface';

export const XFLOW_NODE_SHAPE = 'XFLOW_NODE_SHAPE';

export const NODE_DEFAULT_WIDTH = 160;

export const NODE_DEFAULT_HEIGHT = 32;

let XFlowNode: Node.Definition;

const { AnchorGroup } = NsGraph;

if (Node.registry.exist(XFLOW_NODE_SHAPE)) {
  XFlowNode = Node.registry.get(XFLOW_NODE_SHAPE) as Node.Definition;
} else {
  XFlowNode = ReactShape.define({
    width: NODE_DEFAULT_WIDTH,
    height: NODE_DEFAULT_HEIGHT,
    shape: XFLOW_NODE_SHAPE,
    // X6_NODE_PORTAL_NODE_VIEW
    view: X6_NODE_PORTAL_NODE_VIEW,
    ports: {
      groups: {
        top: {
          zIndex: 2,
          position: {
            name: AnchorGroup.TOP,
          },
        },
        bottom: {
          zIndex: 2,
          position: {
            name: AnchorGroup.BOTTOM,
          },
        },
        right: {
          zIndex: 2,
          position: {
            name: AnchorGroup.RIGHT,
          },
        },
        left: {
          zIndex: 2,
          position: {
            name: AnchorGroup.LEFT,
          },
        },
      },
    },
    attrs: {
      body: {
        magnet: false,
        fill: 'none',
        stroke: 'none',
        refWidth: '100%',
        refHeight: '100%',
        zIndex: 1,
      },
    },
    portMarkup: [
      {
        tagName: 'g',
        selector: 'xflow-port-group',
        className: 'xflow-port-group',
        attrs: {
          width: 8,
          height: 8,
          x: -4,
          y: -4,
          zIndex: 10,
          // magnet决定是否可交互
          magnet: 'true',
        },
        children: [
          {
            tagName: 'circle',
            selector: 'xflow-port',
            className: 'xflow-port',
            attrs: {
              r: 4,
              fill: '#fff',
              stroke: '#808080',
              zIndex: 12,
            },
          },
          {
            tagName: 'polygon',
            selector: 'xflow-port-arrow',
            className: 'xflow-port-arrow',
            attrs: {
              points: '0,0 8,0 4,4 ',
              fill: '#808080',
              stroke: '#808080',
              zIndex: 13,
              transform: 'translate(-4,0)',
            },
          },
        ],
      },
    ],
  });
}

export { XFlowNode, AnchorGroup };
