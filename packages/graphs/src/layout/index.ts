export { radialSectorLayout } from './radial-sector';
export type { IRadialSectorLayout } from './radial-sector';

export type CompactBoxLayout = {
  /** 布局方向 */
  direction?: 'LR' | 'RL' | 'TB' | 'BT' | 'H' | 'V';
  /** 节点高度 */
  getHeight?: number | (() => number);
  /** 节点宽度 */
  getWidth?: number | (() => number);
  /** 每个节点的垂直间隙 */
  getVGap?: number | (() => number);
  /** 每个节点的水平间隙 */
  getHGap?: number | (() => number);
  /** 是否按照辐射状布局。若 radial 为 true，建议 direction 设置为 'LR' 或 'RL' */
  radial?: boolean;
  [key: string]: unknown;
};
export type DendrogramLayout = {
  /** 布局方向 */
  direction?: 'LR' | 'RL' | 'TB' | 'BT' | 'H' | 'V';
  /** 节点间距 */
  nodeSep?: number;
  /** 层与层之间的间距 */
  rankSep?: number;
  /** 是否按照辐射状布局。若 radial 为 true，建议 direction 设置为 'LR' 或 'RL' */
  radial?: boolean;
  [key: string]: unknown;
};
