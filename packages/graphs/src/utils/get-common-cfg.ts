import { IGraph, IGroup, EdgeConfig, NodeConfig } from '../interface';

// 统一处理 config，支持回调
export const getCommonCfg = (
  cfg: unknown,
  item:
    | EdgeConfig<
        | string
        | {
            text?: string;
            subText?: string;
          }
      >
    | NodeConfig
    | undefined,
  graph?: IGraph | IGroup | undefined,
) => {
  if (typeof cfg === 'function') {
    return cfg(item, graph);
  }
  return cfg;
};
