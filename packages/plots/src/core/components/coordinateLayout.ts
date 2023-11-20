import type { Adaptor, Options } from '../types';

/**
 * layout = 'horizontal' | 'vertical'
 * @param params
 * @returns
 */
export function coordinateLayout<P extends Adaptor<Options & { layout: 'horizontal' | 'vertical' }>>(params: P) {
  const { layout = 'horizontal' } = params.options;
  params.options.coordinate.transform = layout !== 'horizontal' ? undefined : [{ type: 'transpose' }];
  return params;
}
