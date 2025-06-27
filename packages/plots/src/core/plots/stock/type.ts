import type { Options, AttrStyle } from '../../types/common';

export type StockOptions = Options & {
  /**
   * @title y 轴映射
   * @description   设置一个指定 [open, close, low, high]【开盘价/收盘价/最低价/最高价】字段的数组
   */
  yField: [string, string, string, string];
  /**
   * @title 线影样式
   */
  lineStyle?: AttrStyle;
};
