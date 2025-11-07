import type { ComponentOptions } from '../../core';
import type { TextStyleProps } from '../../shapes';
import type { TagStyleProps } from '../tag/types';
export type BreadcrumbItem = {
    /** id, 必选 */
    id: string;
    /** 展示的文案 */
    text: string;
    /** 图标 */
    marker?: TagStyleProps['marker'];
};
export type BreadcrumbStyleProps = {
    /** 起点 x 坐标位置 */
    readonly x: number;
    /** 起点 y 坐标位置 */
    readonly y: number;
    /** 容器宽度 */
    readonly width?: number;
    /** 容器高度 */
    readonly height?: number;
    /** 容器内边距。容器实际可用大小 = 容器宽高度 - 内边距 */
    readonly padding?: number | number[];
    /** 面包屑 items */
    readonly items: BreadcrumbItem[];
    /** 面包屑分隔符 */
    readonly separator?: {
        /** 分隔符内容, 默认: '/'. 暂不支持传入一个 group, 外部自行控制大小 */
        text?: string;
        /** 分隔符样式（不需要激活样式） */
        style?: Partial<TextStyleProps>;
        /** 分隔符两边间距 */
        spacing?: number;
    };
    /** 样式 */
    /** 字体样式 */
    readonly textStyle?: Partial<TextStyleProps>;
    /** 如果作为通用组件，给其它用户使用 */
    readonly onClick?: (id: string, item: BreadcrumbItem, items: BreadcrumbItem[]) => void;
};
export type BreadcrumbOptions = ComponentOptions<BreadcrumbStyleProps>;
