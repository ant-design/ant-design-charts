export * as G2 from '@antv/g2';
export type { AreaOptions } from './plots/area';
export type { BarOptions } from './plots/bar';
export type { ColumnOptions } from './plots/column';
export type { DualAxesOptions } from './plots/dual-axes';
export type { LineOptions } from './plots/line';
export type { PieOptions } from './plots/pie';
export type { ScatterOptions } from './plots/scatter';
export type { RadarOptions } from './plots/radar';
export type { TinyLineOptions } from './plots/tiny-line';
export type { TinyAreaOptions } from './plots/tiny-area';
export type { TinyColumnOptions } from './plots/tiny-column';
export type { RoseOptions } from './plots/rose';
export type { HistogramOptions } from './plots/histogram';
export * from './types';

import { Area } from './plots/area';
import { Bar } from './plots/bar';
import { Column } from './plots/column';
import { DualAxes } from './plots/dual-axes';
import { Line } from './plots/line';
import { Pie } from './plots/pie';
import { Scatter } from './plots/scatter';
import { Radar } from './plots/radar';
import { TinyLine } from './plots/tiny-line';
import { TinyArea } from './plots/tiny-area';
import { TinyColumn } from './plots/tiny-column';
import { Rose } from './plots/rose';
import { Histogram } from './plots/histogram';

export const Plots = {
  Line,
  Column,
  Pie,
  Area,
  Bar,
  DualAxes,
  Scatter,
  Radar,
  Rose,
  TinyLine,
  TinyArea,
  TinyColumn,
  Histogram,
};
