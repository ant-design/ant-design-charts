import G6 from '@antv/g6';
import OrganizationGraph from './components/organization-graph';
import type { OrganizationGraphConfig } from './components/organization-graph';
import RadialTreeGraph from './components/radial-tree-graph';
import type { RadialTreeGraphConfig } from './components/radial-tree-graph';
import FlowAnalysisGraph from './components/flow-analysis-graph';
import type { FlowAnalysisGraphConfig } from './components/flow-analysis-graph';
import DecompositionTreeGraph from './components/decomposition-tree-graph';
import type { DecompositionTreeGraphConfig } from './components/decomposition-tree-graph';
import FundFlowGraph from './components/fund-flow-graph';
import type { FundFlowGraphConfig } from './components/fund-flow-graph';
import RadialGraph from './components/radial-graph';
import type { RadialGraphConfig } from './components/radial-graph';
import MindMapGraph from './components/mind-map-graph';
import type { MindMapGraphConfig } from './components/mind-map-graph';
import FileTreeGraph from './components/file-tree-graph';
import type { FileTreeGraphConfig } from './components/file-tree-graph';
import ConversionDagreGraph from './components/conversion-dagre-graph';

/** @deprecated start */
import {
  OrganizationTreeGraph,
  DagreGraph,
  IndentedTree,
  DagreFundFlowGraph,
  RelationGraph,
} from './obsolescent/graph';
import {
  IndentedTreeGraph,
  OrganizationalGraph,
  // RadialGraph,
  IndentedTreeGraphConfig,
  OrganizationalGraphConfig,
  // RadialGraphConfig,
} from './obsolescent/graphs';
/** @deprecated end */

export {
  FlowAnalysisGraph,
  RadialTreeGraph,
  DecompositionTreeGraph,
  OrganizationGraph,
  FundFlowGraph,
  OrganizationTreeGraph,
  DagreGraph,
  IndentedTree,
  DagreFundFlowGraph,
  IndentedTreeGraph,
  OrganizationalGraph,
  RadialGraph,
  MindMapGraph,
  FileTreeGraph,
  ConversionDagreGraph,
  G6,
};
export * from './interface';
export * from './layout';
export type {
  OrganizationGraphConfig,
  RadialTreeGraphConfig,
  FlowAnalysisGraphConfig,
  DecompositionTreeGraphConfig,
  FundFlowGraphConfig,
  IndentedTreeGraphConfig,
  OrganizationalGraphConfig,
  RadialGraphConfig,
  RelationGraph,
  MindMapGraphConfig,
  FileTreeGraphConfig,
};
