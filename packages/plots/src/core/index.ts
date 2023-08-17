export * as G2 from '@antv/g2';
export type { AreaOptions } from './plots/area';
export type { BarOptions } from './plots/bar';
export type { ColumnOptions } from './plots/column';
export type { DualAxesOptions } from './plots/dual-axes';
export type { LineOptions } from './plots/line';
export type { PieOptions } from './plots/pie';
export type { ScatterOptions } from './plots/scatter';
export * from './types';

import { Area } from './plots/area';
import { Bar } from './plots/bar';
import { Column } from './plots/column';
import { DualAxes } from './plots/dual-axes';
import { Line } from './plots/line';
import { Pie } from './plots/pie';
import { Scatter } from './plots/scatter';

export const Plots = { Line, Column, Pie, Area, Bar, DualAxes, Scatter };

