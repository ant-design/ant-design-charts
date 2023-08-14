export * as G2 from '@antv/g2';
export type { AreaOptions } from './plots/area';
export type { BarOptions } from './plots/bar';
export type { ColumnOptions } from './plots/column';
export type { LineOptions } from './plots/line';
export type { PieOptions } from './plots/pie';
export * from './types';

import { Area } from './plots/area';
import { Bar } from './plots/bar';
import { Column } from './plots/column';
import { Line } from './plots/line';
import { Pie } from './plots/pie';

export const Plots = { Line, Column, Pie, Area, Bar };
