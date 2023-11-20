import type { BaseOptions, Options } from '../../types/common';

export type StockOptions = Options &
  BaseOptions & {
    /**
     * @title x 轴字段 日期
     */
    readonly xField: string;
    /**
     * @title y 轴映射
     * @description   range  【开盘价/收盘价/最高价/最低价】，设置一个指定 [open, close, high, low]【开盘价/收盘价/最高价/最低价】字段的数组
     */
    readonly yField: [string, string, string, string];
    /**
     * @title 上涨色
     */
    readonly risingFill?: string;
    /**
     * @title 下跌色
     */
    readonly fallingFill?: string;
  };
