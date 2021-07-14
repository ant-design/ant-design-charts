import Area from './area';
import Bar from './bar';
import Bullet from './bullet';
import Column from './column';
import Funnel from './funnel';
import Histogram from './histogram';
import Line from './line';
import Box from './box';
import Liquid from './liquid';
import Heatmap from './heatmap';
import Pie from './pie';
import Gauge from './gauge';
import Progress from './progress';
import Radar from './radar';
import RingProgress from './ringProgress';
import Rose from './rose';
import Chord from './chord';
import Scatter from './scatter';
import TinyArea from './tinyArea';
import TinyColumn from './tinyColumn';
import DualAxes from './dualAxes';
import TinyLine from './tinyLine';
import Waterfall from './waterfall';
import WordCloud from './wordCloud';
import Sunburst from './sunburst';
import Stock from './stock';
import RadialBar from './radialBar';
import Sankey from './sankey';
import Treemap from './treemap';
import Violin from './violin';
import Facet from './facet';
import MultiView from './mix'; // 和 Mix 相同，底层更名
import Mix from './mix';
import BidirectionalBar from './bidirectionalBar';
import { DagreGraph, IndentedTree, DagreFundFlowGraph, OrganizationTreeGraph } from './graph'; // 会逐步下掉
import { IndentedTreeGraph, OrganizationalGraph, RadialGraph } from './graphs'; // 过度版本
import {
  FlowAnalysisGraph,
  RadialTreeGraph,
  DecompositionTreeGraph,
  OrganizationGraph,
} from './graphsNew'; // 最终版，后续不会出现不兼容变更
import { G2, flow, measureTextWidth, adaptors } from '@antv/g2plot';

export {
  Area,
  Bar,
  Box,
  Bullet,
  Column,
  Funnel,
  Histogram,
  Line,
  Liquid,
  Heatmap,
  Pie,
  Progress,
  Radar,
  Facet,
  RingProgress,
  Rose,
  Chord,
  Scatter,
  TinyArea,
  TinyColumn,
  TinyLine,
  Waterfall,
  WordCloud,
  Sunburst,
  DualAxes,
  Stock,
  RadialBar,
  Gauge,
  Sankey,
  Treemap,
  Violin,
  MultiView,
  Mix,
  BidirectionalBar,
  OrganizationTreeGraph,
  DagreGraph,
  IndentedTree,
  DagreFundFlowGraph,
  IndentedTreeGraph,
  OrganizationalGraph,
  RadialGraph,
  FlowAnalysisGraph,
  RadialTreeGraph,
  DecompositionTreeGraph,
  OrganizationGraph,
  G2,
  // 直接导出 G2Plot 相关方法
  flow,
  measureTextWidth,
  adaptors,
};

export default {
  Area,
  Bar,
  Box,
  Bullet,
  Column,
  Funnel,
  Histogram,
  Line,
  Liquid,
  Heatmap,
  Pie,
  Progress,
  Radar,
  Facet,
  RingProgress,
  Rose,
  Chord,
  Scatter,
  TinyArea,
  TinyColumn,
  TinyLine,
  Waterfall,
  WordCloud,
  Sunburst,
  DualAxes,
  Stock,
  RadialBar,
  Gauge,
  Sankey,
  Treemap,
  Violin,
  MultiView,
  Mix,
  BidirectionalBar,
  OrganizationTreeGraph,
  DagreGraph,
  IndentedTree,
  DagreFundFlowGraph,
  IndentedTreeGraph,
  FlowAnalysisGraph,
  RadialTreeGraph,
  DecompositionTreeGraph,
  OrganizationGraph,
  OrganizationalGraph,
  RadialGraph,
  G2,
  flow,
  measureTextWidth,
  adaptors,
};
