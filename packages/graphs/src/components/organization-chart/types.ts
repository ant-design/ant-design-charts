import type { GraphOptions } from '../../types';

export interface OrganizationChartOptions extends GraphOptions {
  /**
   * The direction of the organization chart.
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';
}
