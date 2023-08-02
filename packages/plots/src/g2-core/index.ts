export * as G2 from '@antv/g2';

export * from './types';

import { Line } from './plots/line';
import { Column } from './plots/column';

export type { LineOptions } from './plots/line';
export type { ColumnOptions } from './plots/column';

export const Plots = { Line, Column };
