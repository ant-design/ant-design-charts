import OrganizationGraph, { OrganizationGraphConfig } from './components/organizationGraph';
import RadialTreeGraph, { RadialTreeGraphConfig } from './components/radialTreeGraph';
import FlowAnalysisGraph, { FlowAnalysisGraphConfig } from './components/flowAnalysisGraph';
import DecompositionTreeGraph, { DecompositionTreeGraphConfig } from './components/decompositionTreeGraph';
import FundFlowGraph, { FundFlowGraphConfig } from './components/fundFlowGraph';

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
