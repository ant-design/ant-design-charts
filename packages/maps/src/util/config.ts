import { IPlotOptions } from '@antv/l7plot';
import { deepClone } from '../util';

/**
 * 深克隆配置项
 * @param config 要深克隆的配置
 */
 export const deepCloneMapConfig = <T extends IPlotOptions>(config: T):T => {
  const {source, ...restConfig} = config
  const target = Object.assign({}, deepClone(restConfig), {source: {...source}})

  return target
}
