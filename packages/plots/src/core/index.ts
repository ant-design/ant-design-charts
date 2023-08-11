export * as G2 from '@antv/g2';

export * from './types';

import { Line } from './plots/line';
import { Column } from './plots/column';
import { Pie } from './plots/pie';

export type { LineOptions } from './plots/line';
export type { ColumnOptions } from './plots/column';
export type { PieOptions } from './plots/pie';

export const Plots = { Line, Column, Pie };
