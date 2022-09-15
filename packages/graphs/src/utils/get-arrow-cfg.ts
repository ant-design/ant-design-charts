import G6 from '@antv/g6';
import { IArrowConfig, EdgeConfig } from '../interface';

// 默认箭头样式
export const getArrowCfg = (
  arrowCfg: IArrowConfig | undefined,
  edge?: EdgeConfig<
    | string
    | {
        text?: string;
        subText?: string;
      }
  >,
) => {
  if (!arrowCfg) {
    return;
  }
  if (typeof arrowCfg === 'object' && arrowCfg?.show === false) {
    return;
  }
  const cfg = typeof arrowCfg === 'function' ? arrowCfg(edge) : arrowCfg;
  const { type = 'vee', d = 0, size = 10 } = cfg;
  return {
    path: G6.Arrow[type](size, size, d),
    fill: '#ccc',
    d,
    ...cfg,
  };
};
