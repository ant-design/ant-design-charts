import { createContext, ReactNode } from 'react';
import type { AreaConfig } from './components/area';
import type { BarConfig } from './components/bar';
import type { BidirectionalBarConfig } from './components/bidirectional-bar';
import type { BoxConfig } from './components/box';
import type { BulletConfig } from './components/bullet';
import type { CirclePackingConfig } from './components/circlePacking';
import type { ColumnConfig } from './components/column';
import type { DualAxesConfig } from './components/dual-axes';
import type { FunnelConfig } from './components/funnel';
import type { GaugeConfig } from './components/gauge';
import type { HeatmapConfig } from './components/heatmap';
import type { HistogramConfig } from './components/histogram';
import type { LineConfig } from './components/line';
import type { LiquidConfig } from './components/liquid';
import type { MixConfig } from './components/mix';
import type { PieConfig } from './components/pie';
import type { RadarConfig } from './components/radar';
import type { RadialBarConfig } from './components/radial-bar';
import type { RoseConfig } from './components/rose';
import type { SankeyConfig } from './components/sankey';
import type { ScatterConfig } from './components/scatter';
import type { StockConfig } from './components/stock';
import type { SunburstConfig } from './components/sunburst';
import type {
  TinyAreaConfig,
  TinyColumnConfig,
  TinyLineConfig,
  TinyProgressConfig,
  TinyRingConfig,
} from './components/tiny';
import type { TreemapConfig } from './components/treemap';
import type { VennConfig } from './components/venn';
import type { ViolinConfig } from './components/violin';
import type { WaterfallConfig } from './components/waterfall';
import type { WordCloudConfig } from './components/wordCloud';
import type { CommonConfig } from './interface';

export interface ConfigValue {
  common?: CommonConfig;
  area?: AreaConfig;
  bar?: BarConfig;
  bidirectionalBar?: BidirectionalBarConfig;
  box?: BoxConfig;
  bullet?: BulletConfig;
  circlePacking?: CirclePackingConfig;
  column?: ColumnConfig;
  dualAxes?: DualAxesConfig;
  funnel?: FunnelConfig;
  gauge?: GaugeConfig;
  heatmap?: HeatmapConfig;
  histogram?: HistogramConfig;
  line?: LineConfig;
  liquid?: LiquidConfig;
  mix?: MixConfig;
  pie?: PieConfig;
  radar?: RadarConfig;
  radialBar?: RadialBarConfig;
  rose?: RoseConfig;
  sankey?: SankeyConfig;
  scatter?: ScatterConfig;
  stock?: StockConfig;
  sunburst?: SunburstConfig;
  tinyArea?: TinyAreaConfig;
  tinyColumn?: TinyColumnConfig;
  tinyLine?: TinyLineConfig;
  tinyProgress?: TinyProgressConfig;
  tinyRing?: TinyRingConfig;
  treemap?: TreemapConfig;
  venn?: VennConfig;
  violin?: ViolinConfig;
  waterfall?: WaterfallConfig;
  wordCloud?: WordCloudConfig;
}

export interface ConfigProviderProps extends ConfigValue {
  children?: ReactNode;
}

export const ConfigContext = createContext<ConfigValue>({});
