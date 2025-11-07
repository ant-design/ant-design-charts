import type { ComponentOptions, PrefixStyleProps } from '../../core';
import { GroupStyleProps, RectStyleProps } from '../../shapes';
import type { PrefixObject } from '../../types';
import type { SeriesAttr } from '../../util/series';
import type { GenericAnimation } from '../../animation';
import type { SparklineStyleProps } from '../sparkline/types';
import type { HandleStyleProps as HandleBaseStyleProps } from './handle';

export type HandleStyleProps = PrefixStyleProps<HandleBaseStyleProps, 'handle'> & {
  /** 文本格式化 */
  formatter?: (value: number) => string;
  /** 手柄图标偏移量，靠近选区为负，远离选区为正 */
  handleIconOffset?: number;
};

export type SliderStyleProps = GroupStyleProps &
  PrefixObject<RectStyleProps, 'track'> &
  /**
   * 如果 selectionType 为 invert，则为两端反选的样式
   */
  PrefixObject<RectStyleProps, 'selection'> &
  HandleStyleProps &
  Partial<PrefixStyleProps<Omit<SparklineStyleProps, 'width' | 'height'>, 'sparkline'>> & {
    x?: number;
    y?: number;
    /** 动画配置 */
    animate?: GenericAnimation;

    /** 是否启用刷选功能 */
    brushable?: boolean;

    /** 朝向：水平/垂直 */
    orientation?: 'vertical' | 'horizontal';

    /** 内边距 */
    padding?: SeriesAttr;

    /** 是否可滚动 */
    scrollable?: boolean;

    /** 是否显示滑动手柄 */
    showHandle?: boolean;

    /** 是否显示标签值 */
    showLabel?: boolean;

    /**
     * 在调整 handle 或者刷选时才显示 label
     * 在 showLabel 为 false 时生效
     */
    showLabelOnInteraction?: boolean;

    /** 是否自动调整文本位置 */
    autoFitLabel?: boolean;

    /** 是否可滑动 */
    slidable?: boolean;

    /** 轨道长度 */
    trackLength?: number;

    /** 轨道宽度 */
    trackSize?: number;

    /** 选区类型：单值/区间 */
    type?: 'value' | 'range';

    /** 选区类型：中间选取/两端反选 */
    selectionType?: 'select' | 'invert';

    /** 选区值 0~1 */
    values?: number | [number, number];

    /** 值变化回调，type 为 value 时返回 number，为 range 时返回 [number, number] */
    onChange?: <T extends number | [number, number] = number | [number, number]>(values: T) => void;
  };

export type SliderOptions = ComponentOptions<SliderStyleProps>;
