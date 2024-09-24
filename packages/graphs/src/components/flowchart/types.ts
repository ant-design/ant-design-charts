import type { GraphOptions } from '../../types';

export interface FlowchartOptions extends GraphOptions {
  /**
   * The direction of the flowchart.
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
}
