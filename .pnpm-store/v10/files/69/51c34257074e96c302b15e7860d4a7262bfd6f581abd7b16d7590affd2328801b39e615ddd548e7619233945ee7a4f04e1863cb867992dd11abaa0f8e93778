import type { GroupStyleProps, RectStyleProps, TextStyleProps } from '../../shapes';
import type { ComponentOptions, PrefixStyleProps } from '../../core';
import type { SeriesAttr } from '../../util';
import type { MarkerStyleProps } from '../marker';
export type TagStyleProps = GroupStyleProps & PrefixStyleProps<Omit<TextStyleProps, 'x' | 'y' | 'text'>, 'label'> & PrefixStyleProps<Partial<RectStyleProps>, 'background'> & {
    x?: number;
    y?: number;
    text?: string;
    /** 水平对齐方式 */
    align?: 'start' | 'center' | 'end';
    /** 垂直对齐方式 */
    verticalAlign?: 'top' | 'middle' | 'bottom';
    /** 图标类型，也可以自定义; 默认不显示 */
    marker?: MarkerStyleProps | null;
    /** text 和 marker 的间距，默认为 4px (只有当 marker 存在时，才生效) */
    spacing?: number;
    /** background 圆角 */
    radius?: number;
    /** 内边距 */
    padding?: SeriesAttr;
};
export type TagOptions = ComponentOptions<TagStyleProps>;
