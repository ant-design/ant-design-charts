import type { ComponentOptions, PrefixStyleProps } from '../../core';
import type { GroupStyleProps, RectStyleProps, TextStyleProps } from '../../shapes';
import type { MixAttrs } from '../../types';
import type { MarkerStyleProps } from '../marker';

/**
 * @title Button 组件
 * @description Button 组件默认交互行为，hover 触发 active 状态，可以设置 disabled 状态，通过 onClick 事件可以设置点击回调处理。
 */
export type ButtonStyleProps = GroupStyleProps &
  MixAttrs<
    Partial<PrefixStyleProps<Omit<TextStyleProps, 'text'>, 'text'>> &
      Partial<PrefixStyleProps<RectStyleProps, 'button'>> &
      Partial<PrefixStyleProps<Omit<MarkerStyleProps, 'symbol'>, 'marker'>>
  > & {
    x?: number;
    y?: number;
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
    /**
     * @title 大小
     * @description 按钮大小尺寸
     */
    size?: 'small' | 'middle' | 'large';
    /**
     * @title 形状
     * @description 按钮形状
     */
    shape?: 'circle' | 'round';
    /**
     * @title 按钮状态
     * @description disabled 代表禁用按钮, active 代表
     */
    state?: 'disabled' | 'active' | 'default';
    /**
     * @title 超长省略
     * @description 按钮文本超长时，是否省略文本
     */
    ellipsis?: boolean;
    /**
     * @title 内间距
     * @description 文本与按钮边缘的间距
     */
    padding?: number;
    /**
     * @title 标签文本
     * @description 按钮文本
     */
    text?: string;
    markerSymbol?: MarkerStyleProps['symbol'];
    /**
     * @description marker 位置
     */
    markerAlign?: 'left' | 'right';
    /**
     * @description marker 与文本 间距
     */
    markerSpacing?: number;
    /**
     * @title 点击回调函数
     * @description 点击回调函数
     */
    onClick?: Function;
  };

export type ButtonOptions = ComponentOptions<ButtonStyleProps>;
