import type { GroupStyleProps, RectStyleProps } from '../../shapes';
import type { ComponentOptions } from '../../core';
import type { PrefixObject } from '../../types';
import type { SeriesAttr } from '../../util';
import type { SliderStyleProps } from '../slider';

/** 滚动条组件的属性配置 */
export type ScrollbarStyleProps = GroupStyleProps &
  PrefixObject<RectStyleProps, 'track'> &
  PrefixObject<RectStyleProps, 'thumb'> & {
    x?: number;
    y?: number;
    /** 滑条朝向 */
    orientation?: Required<SliderStyleProps>['orientation'];

    /** 轨道长度，默认取 viewportLength */
    trackLength?: number;

    /** 轨道宽度 */
    trackSize?: number;

    /** 滚动条的值 */
    value?: number;

    /** 滑块是否圆角 */
    isRound?: boolean;

    /** 视图总长度 */
    contentLength: number;

    /** 显示区域长度 */
    viewportLength: number;

    /** 滚动条内边距 */
    padding?: SeriesAttr;

    /** 是否可以拖动 */
    slidable?: boolean;

    /** 是否启用滚轮滚动 */
    scrollable?: boolean;
  };

export type ScrollbarOptions = ComponentOptions<ScrollbarStyleProps>;
