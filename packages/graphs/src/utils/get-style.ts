import { CardNodeCfg, ModelConfig, IGroup } from '../interface';

// 统一处理 config，支持回调
export const getStyle = (
  source: unknown,
  cfg: CardNodeCfg | ModelConfig,
  item?: IGroup | undefined,
  current?: string | number,
) => {
  if (typeof source === 'function') {
    return source(cfg, item, current) || {};
  }
  return source || {};
};
