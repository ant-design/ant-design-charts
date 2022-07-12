import G6 from '@antv/g6';
import OrganizationGraph, { OrganizationGraphConfig } from './components/organization-graph';
import RadialTreeGraph, { RadialTreeGraphConfig } from './components/radial-tree-graph';
import FlowAnalysisGraph, { FlowAnalysisGraphConfig } from './components/flow-analysis-graph';
import DecompositionTreeGraph, { DecompositionTreeGraphConfig } from './components/decomposition-tree-graph';
import FundFlowGraph, { FundFlowGraphConfig } from './components/fund-flow-graph';

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
