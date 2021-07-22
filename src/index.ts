import Area from './plots/area';
import Bar from './plots/bar';
import Bullet from './plots/bullet';
import Column from './plots/column';
import Funnel from './plots/funnel';
import Histogram from './plots/histogram';
import Line from './plots/line';
import Box from './plots/box';
import Liquid from './plots/liquid';
import Heatmap from './plots/heatmap';
import Pie from './plots/pie';
import Gauge from './plots/gauge';
import Progress from './plots/progress';
import Radar from './plots/radar';
import RingProgress from './plots/ringProgress';
import Rose from './plots/rose';
import Chord from './plots/chord';
import Scatter from './plots/scatter';
import TinyArea from './plots/tinyArea';
import TinyColumn from './plots/tinyColumn';
import DualAxes from './plots/dualAxes';
import TinyLine from './plots/tinyLine';
import Waterfall from './plots/waterfall';
import WordCloud from './plots/wordCloud';
import Sunburst from './plots/sunburst';
import Stock from './plots/stock';
import RadialBar from './plots/radialBar';
import Sankey from './plots/sankey';
import Treemap from './plots/treemap';
import Violin from './plots/violin';
import Facet from './plots/facet';
import MultiView from './plots/mix'; // 和 Mix 相同，底层更名
import Mix from './plots/mix';
import BidirectionalBar from './plots/bidirectionalBar';
import {
  DagreGraph,
  IndentedTree,
  DagreFundFlowGraph,
  OrganizationTreeGraph,
} from './obsolescent/graph'; // 会逐步下掉
import { IndentedTreeGraph, OrganizationalGraph, RadialGraph } from './obsolescent/graphs'; // 会逐步下掉
import {
  FlowAnalysisGraph,
  RadialTreeGraph,
  DecompositionTreeGraph,
  OrganizationGraph,
  FundFlowGraph,
} from './graphs'; // 最终版，后续不会出现不兼容变更
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
  FundFlowGraph,
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
  FundFlowGraph,
  G2,
  flow,
  measureTextWidth,
  adaptors,
};

export * from './interface';
