import { BasePlugin } from './base-plugin';
import type { RuntimeContext } from '../runtime/types';
import type { ElementDatum, ElementType, Padding } from '../types';
import type { BasePluginOptions } from './base-plugin';
/**
 * <zh/> Timebar 时间条的配置项。
 * <en/> The options of the Timebar.
 */
export interface TimebarOptions extends BasePluginOptions {
    /**
     * <zh/> 给工具栏的 DOM 追加的类名，便于自定义样式
     *
     * <en/> The class name appended to the menu DOM for custom styles
     * @defaultValue 'g6-timebar'
     */
    className?: string;
    /**
     * <zh/> X 位置
     *
     * <en/> X position
     * @remarks
     * <zh/> 设置后 `position` 会失效
     *
     * <en/> `position` will be invalidated after setting `x`
     */
    x?: number;
    /**
     * <zh/> Y 位置
     *
     * <en/> Y position
     * @remarks
     * <zh/> 设置后 `position` 会失效
     *
     * <en/> `position` will be invalidated after setting `y`
     */
    y?: number;
    /**
     * <zh/> 时间条宽度
     *
     * <en/> Timebar width
     * @defaultValue 450
     */
    width?: number;
    /**
     * <zh/> 时间条高度
     *
     * <en/> Timebar height
     * @defaultValue 60
     */
    height?: number;
    /**
     * <zh/> Timebar 的位置
     *
     * <en/> Timebar location
     * @defaultValue 'bottom'
     */
    position?: 'bottom' | 'top';
    /**
     * <zh/> 边距
     *
     * <en/> Padding
     */
    padding?: Padding;
    /**
     * <zh/> 获取元素时间
     *
     * <en/> Get element time
     */
    getTime?: (datum: ElementDatum) => number;
    /**
     * <zh/> 时间数据
     *
     * <en/> Time data
     * @remarks
     * <zh/> `timebarType` 为 `'chart'` 时，需要额外传入 `value` 字段作为图表数据
     *
     * <en/> When `timebarType` is `'chart'`, you need to pass in the `value` field as chart data
     */
    data: number[] | {
        time: number;
        value: number;
    }[];
    /**
     * <zh/> Timebar 展示类型
     * - `'time'`: 显示为时间轴
     * - `'chart'`: 显示为趋势图
     *
     * <en/> Timebar Displays the type
     * - `'time'`: Display as a timeline
     * - `'chart'`: Display as a trend chart
     * @defaultValue 'time'
     */
    timebarType?: 'time' | 'chart';
    /**
     * <zh/> 筛选类型
     *
     * <en/> Filter element types
     */
    elementTypes?: ElementType[];
    /**
     * <zh/> 筛选模式
     *  - `'modify'`: 通过修改图数据进行筛选
     *  - `'visibility'`: 通过修改元素可见性进行筛选
     *
     * <en/> Filter mode
     *  - `'modify'`: Filter by modifying the graph data.
     *  - `'visibility'`: Filter by modifying element visibility
     * @defaultValue 'modify'
     */
    mode?: 'modify' | 'visibility';
    /**
     * <zh/> 当前时间值
     *
     * <en/> Current time value
     */
    values?: number | [number, number] | Date | [Date, Date];
    /**
     * <zh/> 图表模式下自定义时间格式化
     *
     * <en/> Custom time formatting in chart mode
     */
    labelFormatter?: (time: number | Date) => string;
    /**
     * <zh/> 是否循环播放
     *
     * <en/> Whether to loop
     * @defaultValue false
     */
    loop?: boolean;
    /**
     * <zh/> 时间区间变化时执行的回调
     *
     * <en/> Callback executed when the time interval changes
     */
    onChange?: (values: number | [number, number]) => void;
    /**
     * <zh/> 重置时执行的回调
     *
     * <en/> Callback executed when reset
     */
    onReset?: () => void;
    /**
     * <zh/> 播放速度变化时执行的回调
     *
     * <en/> Callback executed when the playback speed changes
     */
    onSpeedChange?: (speed: number) => void;
    /**
     * <zh/> 开始播放时执行的回调
     *
     * <en/> Callback executed when playback starts
     */
    onPlay?: () => void;
    /**
     * <zh/> 暂停时执行的回调
     *
     * <en/> Callback executed when paused
     */
    onPause?: () => void;
    /**
     * <zh/> 后退时执行的回调
     *
     * <en/> Callback executed when backward
     */
    onBackward?: () => void;
    /**
     * <zh/> 前进时执行的回调
     *
     * <en/> Callback executed when forward
     */
    onForward?: () => void;
}
/**
 * <zh/> 时间组件
 *
 * <en/> Timebar
 */
export declare class Timebar extends BasePlugin<TimebarOptions> {
    static defaultOptions: Partial<TimebarOptions>;
    private timebar?;
    private canvas?;
    private container?;
    private originalData?;
    private get padding();
    constructor(context: RuntimeContext, options: TimebarOptions);
    /**
     * <zh/> 播放
     *
     * <en/> Play
     */
    play(): void;
    /**
     * <zh/> 暂停
     *
     * <en/> Pause
     */
    pause(): void;
    /**
     * <zh/> 前进
     *
     * <en/> Forward
     */
    forward(): void;
    /**
     * <zh/> 后退
     *
     * <en/> Backward
     */
    backward(): void;
    /**
     * <zh/> 重置
     *
     * <en/> Reset
     */
    reset(): void;
    /**
     * <zh/> 更新时间条配置项
     *
     * <en/> Update timebar configuration options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<TimebarOptions>): void;
    /**
     * <zh/> 备份数据
     *
     * <en/> Backup data
     */
    private backup;
    private upsertTimebar;
    private upsertCanvas;
    private filterElements;
    private hiddenElements;
    /**
     * <zh/> 销毁时间条
     *
     * <en/> Destroy the timebar
     * @internal
     */
    destroy(): void;
}
