import type { BaseOptions, Options } from '../../types/common';
import type { Datum } from '../../../interface';

type StyleAttr = Record<string, any>;

export type FunnelOptions = Options &
  BaseOptions & {
    /**
     * @title x轴字段
     */
    xField: string;
    /**
     * @title y轴字段
     */
    yField: string;
    /**
     * @title 对比字段
     * @description 漏斗图将根据此字段转置为对比漏斗图
     */
    compareField?: string;
    /**
     * @title 分组字段
     * @description 漏斗图将根据此字段转置为分面漏斗图
     */
    seriesField?: string;
    /**
     * @title 是否转置
     * @default false
     */
    isTransposed?: boolean;
    /**
     * @title 是否是动态高度
     * @default false
     */
    readonly dynamicHeight?: boolean;
    /**
     * @title 漏斗分面标题
     * @description 是否关闭漏斗的标题展示，适用于存在多组漏斗的情形，如：分组漏斗图、对比漏斗图。
     */
    showFacetTitle?: boolean;
    /**
     * @title 漏斗图样式
     */
    funnelStyle?: StyleAttr;
    /** 可以设置为金字塔 pyramid */
    shape?: 'pyramid';
    label?: {
      text?: string | ((datum?: Datum, data?: Datum[]) => string);
    };
    /**
     * @title 转化率信息
     */
    conversionTag?:
      | false
      | {
          style?: StyleAttr;
          text?: string | ((datum?: Datum, data?: Datum[]) => string);
        };
  };
