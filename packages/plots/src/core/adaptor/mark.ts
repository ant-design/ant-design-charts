import { flow } from '../utils';
import { shapeStack } from './shape-stack';
import type { Adaptor } from '../types';

/**
 * 根据图表类型新增一些高阶 Mark
 */
export function mark<P extends Adaptor>(params: P) {
  return flow(shapeStack)(params);
}
