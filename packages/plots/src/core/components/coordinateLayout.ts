import type { Adaptor } from '../types';

/**
 * layout = 'horizontal' | 'vertical'
 * @param params 
 * @returns 
 */
export function coordinateLayout<P extends Adaptor>(params: P) {
  const { layout = 'horizontal' } = params.options;
  params.options.coordinate.transform = layout !== 'horizontal' ? undefined : [{ type: 'transpose' }];
  return params;
}
