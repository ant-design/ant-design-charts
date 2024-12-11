import type { NodeData } from '@antv/g6';
import { get } from 'lodash';

export function formatLabel(datum: NodeData, labelField?: string | ((datum: NodeData) => string)): string {
  const label = labelField
    ? typeof labelField === 'function'
      ? labelField(datum)
      : get(datum, `data.${labelField}`, datum.id)
    : datum.id;
  return String(label);
}
