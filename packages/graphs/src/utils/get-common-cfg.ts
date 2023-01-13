import { IGraph, IGroup, EdgeConfig, NodeConfig, TreeGraph } from '../interface';

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
  graph?: IGraph | IGroup | TreeGraph | undefined,
) => {
  if (typeof cfg === 'function') {
    return cfg(item, graph);
  }
  return cfg;
};
