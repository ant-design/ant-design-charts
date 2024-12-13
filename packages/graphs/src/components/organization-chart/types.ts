import type { NodeData } from '@antv/g6';
import type { GraphOptions } from '../../types';

export interface OrganizationChartOptions extends GraphOptions {
  /**
   * The direction of the organization chart.
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * Selects a field from the data to use as the label for the node.
   * If a string is provided, it will select the field as `data[labelField]`.
   * If a function is provided, it will call the function with the data and use the returned value.
   * @default (data) => data.id
   */
  labelField?: string | ((data: NodeData) => string);
}
