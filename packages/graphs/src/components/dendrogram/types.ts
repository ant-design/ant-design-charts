import type { GraphOptions } from '../../types';

export interface DendrogramOptions extends GraphOptions {
  /**
   * The direction of the dendrogram.
   * - `'vertical'`: vertical direction (top to bottom).
   * - `'horizontal'`: horizontal direction (left to right).
   * - `'radial'`: radial direction (clockwise).
   * @default 'horizontal'
   */
  direction?: 'vertical' | 'horizontal' | 'radial';
  /**
   * Whether to compact the layout.
   * @default false
   */
  compact?: boolean;
}
