import { ReactNode } from '@antv/g6-extension-react';
import { IndentedEdge } from '../edges';
import {
  ArrangeEdgeZIndex,
  AssignColorByBranch,
  CollapseExpandReactNode,
  MapEdgeLineWidth,
  TranslateReactNodeOrigin,
} from '../transform';

export const BUILT_IN_EXTENSIONS = {
  node: {
    react: ReactNode,
  },
  edge: {
    indented: IndentedEdge,
  },
  transform: {
    'translate-react-node-origin': TranslateReactNodeOrigin,
    'collapse-expand-react-node': CollapseExpandReactNode,
    'assign-color-by-branch': AssignColorByBranch,
    'map-edge-line-width': MapEdgeLineWidth,
    'arrange-edge-z-index': ArrangeEdgeZIndex,
  },
};
