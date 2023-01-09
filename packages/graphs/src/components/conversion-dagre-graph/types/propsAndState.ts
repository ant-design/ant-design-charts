import type { Props, GraphNode, GraphEdge, PlainObject } from '../../types';

export type Rankdir = 'TB' | 'LR';

export interface LayoutParams {
  rankdir: Rankdir;
  [key: string]: any;
}

export interface ComponentProps extends Props {
  layout?: LayoutParams;
}

export interface ComponentState {
  graphData: {
    nodes: GraphNode[];
    edges: GraphEdge[];
  };
}
