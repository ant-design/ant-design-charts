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
  RadialGraph,
  IndentedTreeGraphConfig,
  OrganizationalGraphConfig,
  RadialGraphConfig,
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
  G6,
};
export * from './interface';
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
};
