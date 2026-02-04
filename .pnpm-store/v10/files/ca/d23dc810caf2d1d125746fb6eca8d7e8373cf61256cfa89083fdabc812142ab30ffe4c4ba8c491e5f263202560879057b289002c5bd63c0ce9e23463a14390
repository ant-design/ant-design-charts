import type { ComponentOptions } from '../../core';
import type { BaseStyleProps, GroupStyleProps } from '../../shapes';
import type { PrefixObject } from '../../types';
import type { SeriesAttr } from '../../util';
import type { SliderStyleProps } from '../slider';
import type { LinearAxisStyleProps } from '../axis/types';
export type Functions = 'reset' | 'speed' | 'backward' | 'playPause' | 'forward' | 'selectionType' | 'chartType';
export type ControllerStyleProps = GroupStyleProps & PrefixObject<BaseStyleProps, 'background'> & {
    x?: number;
    y?: number;
    width: number;
    height: number;
    padding?: SeriesAttr;
    /** 对齐位置 */
    align?: 'left' | 'center' | 'right';
    /** 功能图标尺寸 */
    iconSize?: number;
    /** 功能图标之间的间距 */
    iconSpacing?: number;
    /** 播放速度 */
    speed?: number;
    /** 当前播放图标 */
    state?: 'play' | 'pause';
    /** 选区类型：范围/值 */
    selectionType?: 'range' | 'value';
    /** 图表类型：折线图/条形图 */
    chartType?: 'line' | 'column';
    /**
     * 启用功能，通过 [] 进行分组
     * @description reset 重置
     * @description speed 速度
     * @description backward 快退
     * @description play 播放
     * @description forward 快进
     * @description type 类型
     * @description chart 图表
     */
    functions?: Functions[][];
    onChange?: (type: Functions, value: Record<string, any>) => void;
};
export type ControllerOptions = ComponentOptions<ControllerStyleProps>;
export type Interval = 'second' | 'minute' | 'half-hour' | 'hour' | 'four-hour' | 'day' | 'half-day' | 'week' | 'month' | 'season' | 'year';
export type Datum = {
    /** 时间 */
    time: number | Date;
    /** 值，用于绘制 chart */
    value: number;
};
type UnvarnishedControllerProps = 'speed' | 'state' | 'selectionType' | 'chartType';
export type TimebarStyleProps = GroupStyleProps & PrefixObject<Omit<SliderStyleProps, 'type' | 'values' | 'trackLength' | 'trackSize' | 'orientation' | 'sparklineData' | 'values'>, 'chart'> & PrefixObject<Omit<LinearAxisStyleProps, 'type' | 'startPos' | 'endPos' | 'data'>, 'axis'> & Pick<ControllerStyleProps, UnvarnishedControllerProps> & PrefixObject<Omit<ControllerStyleProps, 'width' | 'onChange' | UnvarnishedControllerProps>, 'controller'> & {
    x?: number;
    y?: number;
    /**
     * 类型
     * @description time 时间轴
     * @description chart 图表
     */
    type: 'time' | 'chart';
    /**
     * 播放模式
     * @description acc 累加
     * @description slide 滑动窗口
     */
    playMode?: 'acc' | 'slide';
    /** 选区值 */
    values?: number | [number, number] | Date | [Date, Date] | [number | Date, typeof Infinity];
    data?: Datum[];
    /** 图表模式下，时间值自定义格式化 */
    labelFormatter?: (time: number | Date) => string;
    /** 图表模式下，需要指定时间间隔（TODO 后续会开放自动切换） */
    interval?: Interval;
    /** 轮播 */
    loop?: boolean;
    /** 值变化回调 */
    onChange?: (values: number | [number, number] | Date | [Date, Date]) => void;
    /** 重置回调 */
    onReset?: () => void;
    /** 速度变化回调 */
    onSpeedChange?: (speed: number) => void;
    /** 播放回调 */
    onPlay?: () => void;
    /** 暂停回调 */
    onPause?: () => void;
    /** 快退回调 */
    onBackward?: () => void;
    /** 快进回调 */
    onForward?: () => void;
    /** 选区类型变化回调 */
    onSelectionTypeChange?: (type: ControllerStyleProps['selectionType']) => void;
    /** 图表类型变化回调 */
    onChartTypeChange?: (type: ControllerStyleProps['chartType']) => void;
};
export type TimebarOptions = ComponentOptions<TimebarStyleProps>;
export {};
