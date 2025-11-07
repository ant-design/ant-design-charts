import type { GroupStyleProps } from '../../shapes';
import type { ComponentOptions } from '../../core';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type TooltipItem = {
    name?: string;
    value?: number | string;
    index?: number;
    color?: string;
    [key: string]: any;
};
export type TooltipStyleProps = GroupStyleProps & {
    x?: number;
    y?: number;
    data?: TooltipItem[];
    /** 标题 */
    title?: string;
    position?: TooltipPosition;
    offset?: [number, number];
    /** 指针是否可进入 */
    enterable?: boolean;
    /** 配合 enterable = true 使用，指定延迟显示的毫秒数，默认为 60ms */
    showDelay?: number;
    /** 画布的左上角坐标 */
    container: {
        x: number;
        y: number;
    };
    /** tooltip 在画布中的边界 */
    bounding: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null | false;
    template?: {
        /** tooltip div classname 前缀 */
        prefixCls?: string;
        container?: string;
        title?: string;
        item?: string;
    };
    /** 避免 content 重复渲染 */
    contentKey?: string;
    content?: string | HTMLElement;
    /**
     * 样式
     */
    style?: {
        [key: string]: {
            [key: string]: any;
        };
    };
};
export type TooltipOptions = ComponentOptions<TooltipStyleProps>;
