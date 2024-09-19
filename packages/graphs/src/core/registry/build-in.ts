import { ReactNode } from '@antv/g6-extension-react';
import { AssignColorByBranch, CollapseExpandReactNode, MapEdgeLineWidth, TranslateReactNodeOrigin } from '../transform';

export const BUILT_IN_EXTENSIONS = {
  node: {
    react: ReactNode,
  },
  transform: {
    'translate-react-node-origin': TranslateReactNodeOrigin,
    'collapse-expand-react-node': CollapseExpandReactNode,
    'assign-color-by-branch': AssignColorByBranch,
    'map-edge-line-width': MapEdgeLineWidth,
  },
};
