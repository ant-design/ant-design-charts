import { ReactNode } from '@antv/g6-extension-react';
import { CollapseExpandReactNode, TranslateReactNodeOrigin } from '../transform';

export const BUILT_IN_EXTENSIONS = {
  node: {
    react: ReactNode,
  },
  transform: {
    'translate-react-node-origin': TranslateReactNodeOrigin,
    'collapse-expand-react-node': CollapseExpandReactNode,
  },
};
