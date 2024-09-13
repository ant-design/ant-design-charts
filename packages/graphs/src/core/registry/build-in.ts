import { ReactNode } from '@antv/g6-extension-react';
import { CollapseExpandReactNode, InferReactStyle } from '../transform';

export const BUILT_IN_EXTENSIONS = {
  node: {
    react: ReactNode,
  },
  transform: {
    'infer-react-style': InferReactStyle,
    'collapse-expand-react-node': CollapseExpandReactNode,
  },
};
