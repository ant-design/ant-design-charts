import { get } from './index';

import type { PrimitiveEncodeSpec, FunctionEncodeSpec } from '../types';

export function fieldAdapter(field: PrimitiveEncodeSpec): FunctionEncodeSpec {
  switch (typeof field) {
    case 'function':
      return field;
    case 'string':
      return (d) => get(d, [field]);
    default:
      return () => field;
  }
}